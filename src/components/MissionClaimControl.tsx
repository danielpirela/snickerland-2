import { CheckCircle2, Clock, Coins, RefreshCw, XCircle } from 'lucide-react'
import { isMissionClaimRevoked } from '#/lib/missionClaims'
import type { MissionClaimRow } from '#/lib/supabase'

interface MissionClaimControlProps {
  allTasksCompleted: boolean
  claim: MissionClaimRow | null
  claimsLoading: boolean
  claimPending: boolean
  onClaim: () => void
}

export default function MissionClaimControl({
  allTasksCompleted,
  claim,
  claimsLoading,
  claimPending,
  onClaim,
}: MissionClaimControlProps) {
  if (claim?.status === 'paid') {
    return (
      <span
        className="inline-flex items-center gap-1.5 border-2 px-3 py-2 text-sm font-bold"
        style={{
          borderColor: 'var(--grass)',
          background: 'rgba(91,135,49,0.2)',
          color: 'var(--grass-light)',
        }}
      >
        <CheckCircle2 className="h-4 w-4" />
        Pagada
      </span>
    )
  }

  if (claim?.status === 'pending') {
    return (
      <span
        className="inline-flex items-center gap-1.5 border-2 px-3 py-2 text-sm font-bold"
        style={{
          borderColor: 'var(--gold)',
          background: 'rgba(255,170,0,0.14)',
          color: 'var(--gold-bright)',
        }}
      >
        <Clock className="h-4 w-4" />
        Pendiente de pago
      </span>
    )
  }

  if (claim?.status === 'processing') {
    return (
      <span
        className="inline-flex items-center gap-1.5 border-2 px-3 py-2 text-sm font-bold"
        style={{
          borderColor: 'var(--gold)',
          background: 'rgba(255,170,0,0.2)',
          color: 'var(--gold-bright)',
        }}
      >
        <RefreshCw className="h-4 w-4 animate-spin" />
        Procesando en el servidor
      </span>
    )
  }

  if (claim?.status === 'rejected') {
    const revoked = isMissionClaimRevoked(claim)

    return (
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 border-2 px-3 py-2 text-sm font-bold"
          style={{
            borderColor: 'var(--redstone)',
            background: 'rgba(170,51,51,0.16)',
            color: 'var(--redstone-light)',
          }}
        >
          <XCircle className="h-4 w-4" />
          {revoked ? 'Revocada' : 'Rechazada'}
        </span>

        {revoked && allTasksCompleted && (
          <button
            type="button"
            className="mc-btn inline-flex items-center gap-2 px-3 py-2 disabled:cursor-wait disabled:opacity-60"
            onClick={onClaim}
            disabled={claimPending}
            aria-busy={claimPending}
          >
            <Coins className="h-4 w-4" />
            {claimPending ? 'Guardando...' : 'Reclamar recompensa'}
          </button>
        )}
      </div>
    )
  }

  if (claimsLoading) {
    return (
      <span className="border-2 px-3 py-2 text-sm" style={{ borderColor: 'var(--line)', color: 'var(--text-muted)' }}>
        Consultando reclamo...
      </span>
    )
  }

  if (!allTasksCompleted) return null

  return (
    <button
      type="button"
      className="mc-btn inline-flex items-center gap-2 px-3 py-2 disabled:cursor-wait disabled:opacity-60"
      onClick={onClaim}
      disabled={claimPending}
      aria-busy={claimPending}
    >
      <Coins className="h-4 w-4" />
      {claimPending ? 'Guardando...' : 'Reclamar recompensa'}
    </button>
  )
}
