import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuth } from '#/contexts/AuthContext'
import { useState, useEffect, useCallback } from 'react'
import { supabase, isSupabaseConfigured, type MissionClaimStatus } from '#/lib/supabase'
import { useMissionClaims } from '#/hooks/useMissionClaims'
import { getRoleById } from '#/data/quests'
import {
  RefreshCw, ShieldAlert, Plus, Trash2, Save, X,
  Coins, CheckCircle2, Clock, XCircle,
} from 'lucide-react'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
  head: () => ({
    meta: [{ title: 'Admin Panel — Snickerland 2' }],
  }),
  server: {
    handlers: {
      GET: ({ request }) => {
        const expectedKey = process.env.ADMIN_KEY?.trim()
        if (!expectedKey) {
          return new Response('ADMIN_KEY not configured on server', { status: 500 })
        }

        // Check query param first, then Authorization header, then cookie
        const url = new URL(request.url)
        const queryKey = url.searchParams.get('key')
        const authHeader = request.headers.get('authorization')
        const cookieHeader = request.headers.get('cookie') ?? ''
        const cookieKey = cookieHeader
          .split(';')
          .map((c) => c.trim())
          .find((c) => c.startsWith('snickerland-admin-key='))
          ?.split('=')[1]

        const providedKey = queryKey ?? (authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null) ?? cookieKey

        if (providedKey !== expectedKey) {
          return new Response('Unauthorized', { status: 401 })
        }
      },
    },
  },
  beforeLoad: () => {
    // Client-side username gate — defense-in-depth
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('snickerland-username')
      if (stored?.trim() !== 'DanielP1932') {
        throw redirect({ to: '/' })
      }
    }
  },
})

type Tab = 'quests' | 'claims'

const statusLabels: Record<MissionClaimStatus, string> = {
  pending: 'Pendiente',
  processing: 'Procesando',
  paid: 'Pagada',
  rejected: 'Rechazada',
}

function AdminPage() {
  const { username } = useAuth()
  const [activeTab, setActiveTab] = useState<Tab>('quests')

  if (username !== 'DanielP1932') {
    return (
      <main className="page-wrap px-4 pb-12 pt-6">
        <div className="island-shell p-10 text-center" style={{ borderRadius: 0 }}>
          <ShieldAlert className="mx-auto mb-3 h-10 w-10" style={{ color: 'var(--redstone)' }} />
          <h2 className="m-0 text-xl font-bold" style={{ color: 'var(--text)' }}>
            Acceso denegado
          </h2>
          <p className="mt-2" style={{ color: 'var(--text-muted)' }}>
            Solo DanielP1932 puede acceder al panel de administración.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="page-wrap px-4 pb-12 pt-6">
      <h1
        className="mb-6"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.75rem',
          color: 'var(--gold-bright)',
        }}
      >
        Panel de Administración
      </h1>

      {/* Tabs */}
      <div className="mb-6 flex gap-2">
        {(['quests', 'claims'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="border-2 px-4 py-2 transition-all duration-150"
            style={{
              borderColor: activeTab === tab ? 'var(--gold)' : 'var(--stone-dark)',
              background: activeTab === tab ? 'rgba(255,170,0,0.15)' : 'var(--surface-strong)',
              color: activeTab === tab ? 'var(--gold-bright)' : 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '1.2rem',
              fontWeight: activeTab === tab ? 700 : 400,
              imageRendering: 'pixelated',
              textTransform: 'uppercase',
            }}
          >
            {tab === 'quests' ? 'Misiones' : 'Reclamos'}
          </button>
        ))}
      </div>

      {activeTab === 'quests' ? <QuestsTab /> : <ClaimsTab />}
    </main>
  )
}

/* ─── Quests Tab ──────────────────────────────────────────── */

function QuestsTab() {
  const [roles, setRoles] = useState<Array<{ id: string; name: string; emoji: string; color: string }>>([])
  const [loading, setLoading] = useState(true)
  const [editingRole, setEditingRole] = useState<{ id: string; name: string; emoji: string; color: string } | null>(null)
  const [newRole, setNewRole] = useState({ id: '', name: '', emoji: '', color: '#FFAA00' })

  const loadRoles = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) return
    setLoading(true)
    const { data } = await supabase.from('roles').select('id, name, emoji, color').order('name')
    setRoles(data ?? [])
    setLoading(false)
  }, [])

  useEffect(() => { void loadRoles() }, [loadRoles])

  const saveRole = async () => {
    if (!supabase || !newRole.id.trim() || !newRole.name.trim()) return
    const { error } = await supabase.from('roles').upsert({
      id: newRole.id.trim(),
      name: newRole.name.trim(),
      emoji: newRole.emoji,
      color: newRole.color,
    }, { onConflict: 'id' })
    if (!error) {
      setNewRole({ id: '', name: '', emoji: '', color: '#FFAA00' })
      await loadRoles()
    }
  }

  const updateRole = async () => {
    if (!supabase || !editingRole) return
    const { error } = await supabase.from('roles').update({
      name: editingRole.name,
      emoji: editingRole.emoji,
      color: editingRole.color,
    }).eq('id', editingRole.id)
    if (!error) {
      setEditingRole(null)
      await loadRoles()
    }
  }

  const deleteRole = async (id: string) => {
    if (!supabase || !confirm('¿Eliminar este rol y todos sus días, tareas y recompensas?')) return
    await supabase.from('roles').delete().eq('id', id)
    await loadRoles()
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="m-0" style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', color: 'var(--text)' }}>
          Roles ({roles.length})
        </h2>
        <button onClick={loadRoles} className="mc-btn-logout inline-flex items-center gap-1" disabled={loading}>
          <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
          Refrescar
        </button>
      </div>

      {/* Add Role Form */}
      <div className="island-shell mb-4 p-4" style={{ borderRadius: 0 }}>
        <h3 className="mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '0.45rem', color: 'var(--text-muted)' }}>
          Agregar Rol
        </h3>
        <div className="flex flex-wrap gap-2">
          <input
            placeholder="ID (ej: minero)"
            value={newRole.id}
            onChange={(e) => setNewRole({ ...newRole, id: e.target.value })}
            className="mc-input w-32 py-1"
          />
          <input
            placeholder="Nombre"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            className="mc-input w-32 py-1"
          />
          <input
            placeholder="Emoji"
            value={newRole.emoji}
            onChange={(e) => setNewRole({ ...newRole, emoji: e.target.value })}
            className="mc-input w-20 py-1"
          />
          <input
            type="color"
            value={newRole.color}
            onChange={(e) => setNewRole({ ...newRole, color: e.target.value })}
            className="h-9 w-12"
          />
          <button onClick={saveRole} className="mc-btn inline-flex items-center gap-1" disabled={!newRole.id.trim()}>
            <Plus className="h-3 w-3" /> Agregar
          </button>
        </div>
      </div>

      {/* Roles List */}
      <div className="space-y-2">
        {roles.map((role) => (
          <div key={role.id} className="island-shell flex items-center gap-3 p-3" style={{ borderRadius: 0 }}>
            {editingRole?.id === role.id ? (
              <>
                <input
                  value={editingRole.name}
                  onChange={(e) => setEditingRole({ ...editingRole, name: e.target.value })}
                  className="mc-input w-32 py-1"
                />
                <input
                  value={editingRole.emoji}
                  onChange={(e) => setEditingRole({ ...editingRole, emoji: e.target.value })}
                  className="mc-input w-16 py-1"
                />
                <input
                  type="color"
                  value={editingRole.color}
                  onChange={(e) => setEditingRole({ ...editingRole, color: e.target.value })}
                  className="h-9 w-12"
                />
                <button onClick={updateRole} className="mc-btn inline-flex items-center gap-1">
                  <Save className="h-3 w-3" /> Guardar
                </button>
                <button onClick={() => setEditingRole(null)} className="mc-btn-logout inline-flex items-center gap-1">
                  <X className="h-3 w-3" /> Cancelar
                </button>
              </>
            ) : (
              <>
                <span style={{ fontSize: '1.5rem' }}>{role.emoji}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', color: role.color, fontWeight: 700 }}>
                  {role.name}
                </span>
                <code className="text-xs" style={{ color: 'var(--text-muted)' }}>({role.id})</code>
                <div className="ml-auto flex gap-1">
                  <button
                    onClick={() => setEditingRole({ ...role })}
                    className="border-2 px-2 py-0.5 text-xs"
                    style={{ borderColor: 'var(--gold)', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteRole(role.id)}
                    className="border-2 px-2 py-0.5 text-xs"
                    style={{ borderColor: 'var(--redstone)', color: 'var(--redstone-light)', fontFamily: 'var(--font-sans)' }}
                  >
                    <Trash2 className="inline h-3 w-3" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Claims Tab ──────────────────────────────────────────── */

function ClaimsTab() {
  const {
    claims,
    isLoading,
    error,
    markPaid,
    pendingAction,
    refresh,
  } = useMissionClaims({ allUsers: true })

  const [statusFilter, setStatusFilter] = useState<MissionClaimStatus | 'all'>('pending')

  const filteredClaims = statusFilter === 'all'
    ? claims
    : claims.filter((c) => c.status === statusFilter)

  function getRoleLabel(roleId: string): string {
    const role = getRoleById(roleId)
    return role ? `${role.emoji} ${role.name}` : roleId
  }

  function formatDate(value: string): string {
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value
    return date.toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' })
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="m-0" style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', color: 'var(--text)' }}>
          Reclamos ({claims.length})
        </h2>
        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as MissionClaimStatus | 'all')}
            className="mc-input w-auto py-1 text-sm"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
          >
            <option value="all">Todos</option>
            <option value="pending">Pendientes</option>
            <option value="processing">Procesando</option>
            <option value="paid">Pagadas</option>
            <option value="rejected">Rechazadas</option>
          </select>
          <button onClick={refresh} className="mc-btn-logout inline-flex items-center gap-1" disabled={isLoading}>
            <RefreshCw className={`h-3 w-3 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 border-3 p-3" style={{ borderColor: 'var(--redstone)', background: 'rgba(170,51,51,0.1)' }}>
          <p className="m-0 text-sm" style={{ color: 'var(--redstone-light)' }}>{error}</p>
        </div>
      )}

      <div className="space-y-2">
        {filteredClaims.length === 0 ? (
          <div className="island-shell p-6 text-center" style={{ borderRadius: 0 }}>
            <p style={{ color: 'var(--text-muted)' }}>No hay reclamos para mostrar.</p>
          </div>
        ) : (
          filteredClaims.map((claim) => (
            <div key={claim.id} className="island-shell p-3" style={{ borderRadius: 0 }}>
              <div className="flex flex-wrap items-center gap-2">
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', color: 'var(--text)', fontWeight: 700 }}>
                  {claim.username}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {getRoleLabel(claim.role_id)} · Día {claim.day}
                </span>
                <div className="flex items-center gap-1" style={{ color: 'var(--gold-bright)' }}>
                  <Coins className="h-3 w-3" />
                  <span className="text-sm font-bold">{claim.reward_amount.toLocaleString()}</span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{claim.reward_title}</span>
                </div>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <ClaimStatusBadge status={claim.status} />
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {formatDate(claim.created_at)}
                </span>
                {claim.status === 'pending' && (
                  <button
                    onClick={() => { void markPaid(claim.id) }}
                    disabled={pendingAction === `paid:${claim.id}`}
                    className="ml-auto border-2 px-2 py-0.5 text-xs"
                    style={{
                      borderColor: 'var(--grass)',
                      color: 'var(--grass-light)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {pendingAction === `paid:${claim.id}` ? '...' : 'Marcar pagada'}
                  </button>
                )}
                {claim.paid_at && (
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Pagada por {claim.paid_by} el {formatDate(claim.paid_at)}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

function ClaimStatusBadge({ status }: { status: MissionClaimStatus }) {
  const styles: Record<MissionClaimStatus, { border: string; bg: string; color: string; icon: React.ReactNode }> = {
    pending: { border: 'var(--gold)', bg: 'rgba(255,170,0,0.14)', color: 'var(--gold-bright)', icon: <Clock className="h-3 w-3" /> },
    processing: { border: '#60A5FA', bg: 'rgba(96,165,250,0.14)', color: '#93C5FD', icon: <RefreshCw className="h-3 w-3 animate-spin" /> },
    paid: { border: 'var(--grass)', bg: 'rgba(91,135,49,0.14)', color: 'var(--grass-light)', icon: <CheckCircle2 className="h-3 w-3" /> },
    rejected: { border: 'var(--redstone)', bg: 'rgba(170,51,51,0.14)', color: 'var(--redstone-light)', icon: <XCircle className="h-3 w-3" /> },
  }

  const s = styles[status]
  return (
    <span
      className="inline-flex items-center gap-1 border-2 px-1.5 py-0.5"
      style={{ borderColor: s.border, background: s.bg, color: s.color, fontFamily: 'var(--font-display)', fontSize: '0.35rem' }}
    >
      {s.icon}
      {statusLabels[status]}
    </span>
  )
}
