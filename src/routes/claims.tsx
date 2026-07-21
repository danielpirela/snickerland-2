import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, Clock, Coins, Database, RefreshCw, ShieldAlert, XCircle } from 'lucide-react'
import { useAuth } from '#/contexts/AuthContext'
import { useMissionClaims } from '#/hooks/useMissionClaims'
import { getRoleById } from '#/data/quests'
import { isSupabaseConfigured } from '#/lib/supabase'
import type { MissionClaimRow, MissionClaimStatus } from '#/lib/supabase'
import MissionClaimsNotice from '#/components/MissionClaimsNotice'

export const Route = createFileRoute('/claims')({
  component: ClaimsPage,
  head: () => ({
    meta: [{ title: 'Reclamos de misiones — Snickerland 2' }],
  }),
})

const statusLabels: Record<MissionClaimStatus, string> = {
  pending: 'Pendiente de pago',
  paid: 'Pagada',
  rejected: 'Rechazada',
}

function formatClaimDate(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return date.toLocaleString('es-AR', {
    dateStyle: 'short',
    timeStyle: 'short',
  })
}

function getRoleLabel(roleId: string): string {
  const role = getRoleById(roleId)
  return role ? `${role.emoji} ${role.name} (${role.id})` : roleId
}

function ClaimStatusBadge({ status }: { status: MissionClaimStatus }) {
  const styles = {
    pending: {
      borderColor: 'var(--gold)',
      background: 'rgba(255,170,0,0.14)',
      color: 'var(--gold-bright)',
      icon: <Clock className="h-4 w-4" />,
    },
    paid: {
      borderColor: 'var(--grass)',
      background: 'rgba(91,135,49,0.2)',
      color: 'var(--grass-light)',
      icon: <CheckCircle2 className="h-4 w-4" />,
    },
    rejected: {
      borderColor: 'var(--redstone)',
      background: 'rgba(170,51,51,0.16)',
      color: 'var(--redstone-light)',
      icon: <XCircle className="h-4 w-4" />,
    },
  }[status]

  return (
    <span
      className="inline-flex items-center gap-1.5 border-2 px-2 py-1 text-sm font-bold"
      style={{
        borderColor: styles.borderColor,
        background: styles.background,
        color: styles.color,
      }}
    >
      {styles.icon}
      {statusLabels[status]}
    </span>
  )
}

function PaymentAction({
  claim,
  canMarkPaid,
  isPending,
  onMarkPaid,
}: {
  claim: MissionClaimRow
  canMarkPaid: boolean
  isPending: boolean
  onMarkPaid: (claim: MissionClaimRow) => void
}) {
  if (claim.status !== 'pending') return <span style={{ color: 'var(--text-muted)' }}>—</span>

  return (
    <button
      type="button"
      className="mc-btn inline-flex items-center gap-2 px-3 py-2 disabled:cursor-wait disabled:opacity-60"
      onClick={() => onMarkPaid(claim)}
      disabled={isPending || !canMarkPaid}
      aria-busy={isPending}
      title={canMarkPaid ? undefined : 'Iniciá sesión para marcar el reclamo'}
    >
      <CheckCircle2 className="h-4 w-4" />
      {isPending ? 'Guardando...' : 'Marcar como pagada'}
    </button>
  )
}

function PaidDetails({ claim }: { claim: MissionClaimRow }) {
  if (!claim.paid_at) return null

  return (
    <span className="mt-1 block text-xs" style={{ color: 'var(--text-muted)' }}>
      {formatClaimDate(claim.paid_at)}
      {claim.paid_by ? ` · por ${claim.paid_by}` : ''}
    </span>
  )
}

function ClaimsTable({
  canMarkPaid,
  claims,
  pendingAction,
  onMarkPaid,
}: {
  canMarkPaid: boolean
  claims: MissionClaimRow[]
  pendingAction: string | null
  onMarkPaid: (claim: MissionClaimRow) => void
}) {
  return (
    <div className="hidden overflow-x-auto border-3 md:block" style={{ borderColor: 'var(--line)', background: 'var(--surface-strong)' }}>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr style={{ background: 'var(--surface-strong)' }}>
            <th className="border-b-2 px-4 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>Username</th>
            <th className="border-b-2 px-4 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>Rol</th>
            <th className="border-b-2 px-4 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>Día</th>
            <th className="border-b-2 px-4 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>Recompensa</th>
            <th className="border-b-2 px-4 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>Creado</th>
            <th className="border-b-2 px-4 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>Estado</th>
            <th className="border-b-2 px-4 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id} className="transition-colors hover:bg-[rgba(255,170,0,0.08)]">
              <td className="border-b-2 px-4 py-3 font-bold" style={{ borderColor: 'var(--line)' }}>
                {claim.username}
              </td>
              <td className="border-b-2 px-4 py-3" style={{ borderColor: 'var(--line)' }}>
                {getRoleLabel(claim.role_id)}
              </td>
              <td className="border-b-2 px-4 py-3" style={{ borderColor: 'var(--line)' }}>
                Día {claim.day}
              </td>
              <td className="border-b-2 px-4 py-3" style={{ borderColor: 'var(--line)' }}>
                <span className="inline-flex items-center gap-1 font-bold" style={{ color: 'var(--gold-bright)' }}>
                  <Coins className="h-4 w-4" />
                  {claim.reward_amount.toLocaleString()}
                </span>
                <span className="mt-1 block text-sm" style={{ color: 'var(--text-muted)' }}>
                  {claim.reward_title}
                </span>
              </td>
              <td className="border-b-2 px-4 py-3 text-sm" style={{ borderColor: 'var(--line)' }}>
                {formatClaimDate(claim.created_at)}
              </td>
              <td className="border-b-2 px-4 py-3" style={{ borderColor: 'var(--line)' }}>
                <ClaimStatusBadge status={claim.status} />
                <PaidDetails claim={claim} />
              </td>
              <td className="border-b-2 px-4 py-3" style={{ borderColor: 'var(--line)' }}>
                <PaymentAction
                  claim={claim}
                  canMarkPaid={canMarkPaid}
                  isPending={pendingAction === `paid:${claim.id}`}
                  onMarkPaid={onMarkPaid}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ClaimCards({
  canMarkPaid,
  claims,
  pendingAction,
  onMarkPaid,
}: {
  canMarkPaid: boolean
  claims: MissionClaimRow[]
  pendingAction: string | null
  onMarkPaid: (claim: MissionClaimRow) => void
}) {
  return (
    <div className="space-y-3 md:hidden">
      {claims.map((claim) => (
        <article key={claim.id} className="island-shell p-4" style={{ borderRadius: 0 }}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="m-0 font-bold" style={{ color: 'var(--text)' }}>{claim.username}</p>
              <p className="m-0 mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                {getRoleLabel(claim.role_id)} · Día {claim.day}
              </p>
            </div>
            <ClaimStatusBadge status={claim.status} />
          </div>

          <div className="mt-3 grid gap-2 border-t-2 pt-3 sm:grid-cols-2" style={{ borderColor: 'var(--line)' }}>
            <div>
              <p className="m-0 text-xs" style={{ color: 'var(--text-muted)' }}>Recompensa</p>
              <p className="m-0 font-bold" style={{ color: 'var(--gold-bright)' }}>
                {claim.reward_amount.toLocaleString()} · {claim.reward_title}
              </p>
            </div>
            <div>
              <p className="m-0 text-xs" style={{ color: 'var(--text-muted)' }}>Creado</p>
              <p className="m-0" style={{ color: 'var(--text)' }}>{formatClaimDate(claim.created_at)}</p>
              <PaidDetails claim={claim} />
            </div>
          </div>

          {claim.status === 'pending' && (
            <div className="mt-3">
              <PaymentAction
                claim={claim}
                canMarkPaid={canMarkPaid}
                isPending={pendingAction === `paid:${claim.id}`}
                onMarkPaid={onMarkPaid}
              />
            </div>
          )}
        </article>
      ))}
    </div>
  )
}

function ClaimsPage() {
  const { username } = useAuth()
  const {
    claims,
    error,
    isLoading,
    markPaid,
    pendingAction,
    refresh,
  } = useMissionClaims({ allUsers: true })

  const handleMarkPaid = (claim: MissionClaimRow): void => {
    if (!window.confirm(`¿Marcar como pagada la recompensa de ${claim.username}, día ${claim.day}?`)) {
      return
    }

    void markPaid(claim.id)
  }

  return (
    <main className="page-wrap px-4 pb-12 pt-6 sm:pt-8">
      <section className="island-shell rise-in relative mb-5 overflow-hidden p-5 sm:p-8" style={{ borderRadius: 0 }}>
        <div
          className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 opacity-20"
          style={{ background: 'radial-gradient(circle, var(--gold), transparent 68%)' }}
        />
        <div className="relative flex flex-wrap items-center gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center border-3"
            style={{ borderColor: 'var(--gold)', background: 'rgba(255,170,0,0.16)', color: 'var(--gold-bright)' }}
          >
            <Coins className="h-9 w-9" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="island-kicker mb-2">Administración manual</p>
            <h1 className="m-0 leading-relaxed" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)', color: 'var(--text)' }}>
              Reclamos de misiones
            </h1>
            <p className="m-0 mt-2 max-w-2xl text-lg" style={{ color: 'var(--text-muted)' }}>
              Revisá los reclamos de todos los aventureros y marcá manualmente las recompensas entregadas.
            </p>
          </div>
        </div>
      </section>

      <div
        className="mb-5 flex items-start gap-3 border-3 p-4"
        style={{ borderColor: 'rgba(255,170,0,0.55)', background: 'rgba(255,170,0,0.1)' }}
      >
        <Database className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--gold-bright)' }} />
        <p className="m-0 text-base leading-6" style={{ color: 'var(--text)' }}>
          <strong>Proceso manual.</strong> Después de marcar un reclamo como pagado, ejecutá el comando de dinero correspondiente en la consola de Modrinth.
          <span className="mt-2 block text-sm" style={{ color: 'var(--text-muted)' }}>
            Esta web no ejecuta comandos de Minecraft ni usa SFTP.
          </span>
        </p>
      </div>

      <div
        className="mb-5 flex items-start gap-3 border-3 p-4"
        style={{ borderColor: 'rgba(170,51,51,0.55)', background: 'rgba(170,51,51,0.14)' }}
      >
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--redstone-light)' }} />
        <p className="m-0 text-base leading-6" style={{ color: 'var(--text)' }}>
          <strong>Administración temporal:</strong> la autorización todavía no es segura porque no hay autenticación real; cualquiera puede suplantar el username escrito.
        </p>
      </div>

      {!isSupabaseConfigured ? (
        <div className="border-3 p-6" style={{ borderColor: 'var(--gold)', background: 'rgba(255,170,0,0.1)' }}>
          <Database className="mb-3 h-7 w-7" style={{ color: 'var(--gold-bright)' }} />
          <h2 className="m-0 text-xl font-bold" style={{ color: 'var(--text)' }}>
            Supabase no está configurado
          </h2>
          <p className="m-0 mt-2 text-base" style={{ color: 'var(--text-muted)' }}>
            Los reclamos requieren Supabase configurado. Verificá VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY antes de intentar guardar o consultar reclamos.
          </p>
        </div>
      ) : (
        <section aria-labelledby="claims-list-title">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="island-kicker mb-1">Bandeja de reclamos</p>
              <h2 id="claims-list-title" className="m-0 text-xl font-bold" style={{ color: 'var(--text)' }}>
                Reclamos registrados
              </h2>
            </div>
            <button
              type="button"
              onClick={() => void refresh()}
              disabled={isLoading}
              className="mc-btn-logout inline-flex items-center gap-1.5 disabled:cursor-wait disabled:opacity-60"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
          </div>

          {error && <MissionClaimsNotice message={error} />}

          {!username && !error && (
            <MissionClaimsNotice message="Iniciá sesión con el username que realizará la gestión para habilitar Marcar como pagada y registrar paid_by." />
          )}

          {isLoading ? (
            <div className="space-y-3" aria-label="Cargando reclamos">
              {[1, 2, 3].map((item) => (
                <div key={item} className="island-shell h-28 animate-pulse" style={{ opacity: 0.55 }} />
              ))}
            </div>
          ) : claims.length === 0 ? (
            <div className="border-3 p-6 text-center" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
              <Coins className="mx-auto mb-2 h-7 w-7" style={{ color: 'var(--gold)' }} />
              <h2 className="m-0 text-xl font-bold" style={{ color: 'var(--text)' }}>
                Todavía no hay reclamos
              </h2>
              <p className="m-0 mt-1 text-base" style={{ color: 'var(--text-muted)' }}>
                Completá las cinco tareas de un día para reclamar su recompensa.
              </p>
            </div>
          ) : (
            <>
              <ClaimsTable
                canMarkPaid={Boolean(username)}
                claims={claims}
                pendingAction={pendingAction}
                onMarkPaid={handleMarkPaid}
              />
              <ClaimCards
                canMarkPaid={Boolean(username)}
                claims={claims}
                pendingAction={pendingAction}
                onMarkPaid={handleMarkPaid}
              />
            </>
          )}
        </section>
      )}
    </main>
  )
}
