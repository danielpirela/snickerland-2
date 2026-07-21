import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { useAuth } from '#/contexts/AuthContext'
import { useQuestProgress } from '#/hooks/useQuestProgress'
import { useMissionClaims } from '#/hooks/useMissionClaims'
import { getUserRoles } from '#/data/users'
import { getRoleById, getWeekDay, type DayQuest } from '#/data/quests'
import MissionClaimControl from '#/components/MissionClaimControl'
import MissionClaimsNotice from '#/components/MissionClaimsNotice'
import type { MissionClaimRow } from '#/lib/supabase'
import { Coins, LogOut, ChevronDown, Trophy, Calendar, CheckCircle2, Check } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

/* ─── Login Screen ─────────────────────────────────────── */

function LoginScreen() {
  const { login } = useAuth()
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(name)
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="login-card w-full max-w-md p-8 sm:p-10">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="/logo.png"
            alt="Snickerland 2"
            className="h-24 w-24"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Title */}
        <h1
          className="display-title mb-2 text-center leading-relaxed"
          style={{ fontSize: '0.8rem', color: 'var(--gold-bright)' }}
        >
          Snickerland 2
        </h1>
        <p
          className="mb-6 text-center"
          style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}
        >
          Sistema de Misiones
        </p>

        <form onSubmit={handleSubmit}>
          <label
            className="mb-2 block"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', color: 'var(--text-muted)' }}
          >
            Nombre de usuario
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresá tu username..."
            className="mc-input mb-5"
            autoFocus
          />

          <button type="submit" className="mc-btn w-full" disabled={!name.trim()}>
            Entrar
          </button>
        </form>
      </div>
    </main>
  )
}

/* ─── Dashboard ─────────────────────────────────────────── */

function Dashboard() {
  const { username, logout } = useAuth()
  const { isTaskCompleted, toggleTask, areAllTasksCompleted } = useQuestProgress()
  const {
    claimDay,
    error: claimsError,
    getClaim,
    isLoading: claimsLoading,
    pendingAction,
  } = useMissionClaims()

  const userRoles = useMemo(() => {
    if (!username) return []
    return getUserRoles(username)
  }, [username])

  // Filter state
  const [activeRole, setActiveRole] = useState<string>('Todos')
  const [dayFrom, setDayFrom] = useState('')
  const [dayTo, setDayTo] = useState('')

  // Build flat list of (roleId, dayQuest, roleColor, roleEmoji, roleName) for selected roles
  const quests = useMemo(() => {
    const selectedRoleIds =
      activeRole === 'Todos'
        ? userRoles
        : [activeRole]

    const from = dayFrom ? parseInt(dayFrom, 10) : 0
    const to = dayTo ? parseInt(dayTo, 10) : 999

    const results: {
      roleId: string
      roleName: string
      roleEmoji: string
      roleColor: string
      day: DayQuest
    }[] = []

    for (const roleId of selectedRoleIds) {
      const role = getRoleById(roleId)
      if (!role) continue
      for (const day of role.days) {
        if (day.day >= from && day.day <= to) {
          results.push({
            roleId: role.id,
            roleName: role.name,
            roleEmoji: role.emoji,
            roleColor: role.color,
            day,
          })
        }
      }
    }

    return results
  }, [activeRole, dayFrom, dayTo, userRoles])

  // Stats: total completed tasks / total tasks
  const { completedTasks, totalTasks } = useMemo(() => {
    let completed = 0
    let total = 0
    for (const q of quests) {
      total += q.day.tasks.length
      for (let i = 0; i < q.day.tasks.length; i++) {
        if (isTaskCompleted(q.roleId, q.day.day, i)) {
          completed++
        }
      }
    }
    return { completedTasks: completed, totalTasks: total }
  }, [quests, isTaskCompleted])

  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <main className="page-wrap px-4 pb-12 pt-6">
      {/* Greeting + logout */}
      <div className="island-shell rise-in mb-6 flex flex-wrap items-center justify-between gap-4 rounded-none p-4 sm:p-5">
        <div>
          <p
            className="m-0"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', color: 'var(--gold)' }}
          >
            Bienvenido, {username}
          </p>
          <p className="m-0 mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
            {userRoles.length} roles asignados
          </p>
        </div>
        <button onClick={logout} className="mc-btn-logout flex items-center gap-1.5">
          <LogOut className="h-3 w-3" />
          Salir
        </button>
      </div>

      {claimsError && <MissionClaimsNotice message={claimsError} />}

      {/* XP Progress bar */}
      {quests.length > 0 && (
        <div className="island-shell mb-6 rounded-none p-4">
          <div className="mc-stats-row mb-3">
            <Trophy className="h-4 w-4" style={{ color: 'var(--gold)' }} />
            <span className="mc-stats-label">Progreso total</span>
            <span className="mc-stats-count">
              {completedTasks} / {totalTasks}
            </span>
            <span className="mc-stats-label">tareas completadas</span>
          </div>
          <div className="mc-xp-bar">
            <div
              className="mc-xp-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
            <span className="mc-xp-bar-text">
              {progressPercent}%
            </span>
          </div>
        </div>
      )}

      {/* Role filter tabs */}
      <div className="mb-4 flex flex-wrap gap-2">
        <RolePill
          label="Todos"
          active={activeRole === 'Todos'}
          onClick={() => setActiveRole('Todos')}
        />
        {userRoles.map((roleId) => {
          const role = getRoleById(roleId)
          if (!role) return null
          return (
            <RolePill
              key={roleId}
              label={`${role.emoji} ${role.name}`}
              active={activeRole === roleId}
              color={role.color}
              onClick={() => setActiveRole(roleId)}
            />
          )
        })}
      </div>

      {/* Day filter */}
      <div className="island-shell mb-6 flex flex-wrap items-end gap-3 rounded-none p-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', color: 'var(--text-muted)' }}>
            Día
          </span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={30}
            placeholder="Desde"
            value={dayFrom}
            onChange={(e) => setDayFrom(e.target.value)}
            className="mc-input w-24 py-1.5 text-center"
          />
          <span style={{ color: 'var(--text-muted)' }}>—</span>
          <input
            type="number"
            min={1}
            max={30}
            placeholder="Hasta"
            value={dayTo}
            onChange={(e) => setDayTo(e.target.value)}
            className="mc-input w-24 py-1.5 text-center"
          />
        </div>
        {(dayFrom || dayTo) && (
          <button
            onClick={() => { setDayFrom(''); setDayTo('') }}
            className="text-sm underline"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Quest cards */}
      {quests.length === 0 ? (
        <div className="island-shell rounded-none p-10 text-center">
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            No hay misiones para estos filtros.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {quests.map((q) => (
            <QuestCard
              key={`${q.roleId}-${q.day.day}`}
              roleId={q.roleId}
              roleName={q.roleName}
              roleEmoji={q.roleEmoji}
              roleColor={q.roleColor}
              day={q.day}
              isTaskCompleted={isTaskCompleted}
              toggleTask={toggleTask}
              areAllTasksCompleted={areAllTasksCompleted}
              claim={getClaim(q.roleId, q.day.day)}
              claimsLoading={claimsLoading}
              claimDay={claimDay}
              claimPending={pendingAction === `claim:${q.roleId}:${q.day.day}`}
            />
          ))}
        </div>
      )}
    </main>
  )
}

/* ─── Role Pill ─────────────────────────────────────────── */

function RolePill({
  label,
  active,
  color,
  onClick,
}: {
  label: string
  active: boolean
  color?: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="border-2 px-3 py-1.5 transition-all duration-150"
      style={{
        borderColor: active ? (color ?? 'var(--gold)') : 'var(--stone-dark)',
        background: active
          ? `${color ?? 'var(--gold)'}22`
          : 'var(--surface-strong)',
        color: active ? (color ?? 'var(--gold-bright)') : 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: '1.15rem',
        fontWeight: active ? 700 : 400,
        imageRendering: 'pixelated',
        boxShadow: active ? `2px 2px 0 0 ${color ?? 'var(--gold)'}44` : 'none',
      }}
    >
      {label}
    </button>
  )
}

/* ─── Quest Card (collapsible + interactive) ────────────── */

function QuestCard({
  roleId,
  roleName,
  roleEmoji,
  roleColor,
  day,
  isTaskCompleted,
  toggleTask,
  areAllTasksCompleted,
  claim,
  claimsLoading,
  claimDay,
  claimPending,
}: {
  roleId: string
  roleName: string
  roleEmoji: string
  roleColor: string
  day: DayQuest
  isTaskCompleted: (roleId: string, day: number, taskIndex: number) => boolean
  toggleTask: (roleId: string, day: number, taskIndex: number) => void
  areAllTasksCompleted: (roleId: string, day: number, total: number) => boolean
  claim: MissionClaimRow | null
  claimsLoading: boolean
  claimDay: (roleId: string, day: number) => Promise<MissionClaimRow | null>
  claimPending: boolean
}) {
  const [open, setOpen] = useState(false)
  const weekDay = getWeekDay(day.day)
  const allDone = areAllTasksCompleted(roleId, day.day, day.tasks.length)
  const completedCount = day.tasks.filter((_, i) => isTaskCompleted(roleId, day.day, i)).length

  return (
    <div
      className={`island-shell overflow-hidden transition-all duration-200 ${allDone ? 'quest-card-success' : ''}`}
      style={{
        borderRadius: 0,
        borderColor: !allDone && open ? `${roleColor}66` : undefined,
      }}
    >
      {/* COMPLETADO badge */}
      {allDone && <div className="completed-badge">¡COMPLETADO!</div>}

      {/* Header — clickable */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--surface-strong)]"
      >
        {/* Role badge */}
        <span
          className="flex shrink-0 items-center gap-1 border-2 px-2 py-1"
          style={{
            borderColor: roleColor,
            background: `${roleColor}20`,
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            imageRendering: 'pixelated',
          }}
        >
          <span>{roleEmoji}</span>
          <span style={{ color: roleColor, fontWeight: 700 }}>{roleName}</span>
        </span>

        {/* Day info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center text-sm font-extrabold text-white ${allDone ? 'day-badge-success' : ''}`}
              style={{
                background: allDone ? undefined : roleColor,
                imageRendering: 'pixelated',
              }}
            >
              {day.day}
            </span>
            <div>
              <p className="m-0 text-sm font-bold" style={{ color: 'var(--text)' }}>
                {day.title}
              </p>
              <p className="m-0 text-xs" style={{ color: 'var(--text-muted)' }}>
                {weekDay} · {completedCount}/{day.tasks.length} tareas
              </p>
            </div>
          </div>
        </div>

        {/* Reward */}
        <div
          className="flex shrink-0 items-center gap-1 border-2 px-2 py-1 text-sm font-bold"
          style={{
            borderColor: 'var(--gold)',
            background: 'rgba(255,170,0,0.1)',
            color: 'var(--gold-bright)',
            imageRendering: 'pixelated',
          }}
        >
          <Coins className="h-3.5 w-3.5" />
          <span>{day.reward.amount.toLocaleString()}</span>
        </div>

        {allDone ? (
          <CheckCircle2
            className="h-4 w-4 shrink-0"
            style={{ color: 'var(--grass-light)' }}
          />
        ) : (
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
            style={{ color: 'var(--text-muted)' }}
          />
        )}

        {/* Link to role detail */}
        <Link
          to="/role/$roleId"
          params={{ roleId }}
          className="ml-1 shrink-0 text-xs underline"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
          onClick={(e) => e.stopPropagation()}
        >
          Ver todo
        </Link>
      </button>

      {(allDone || claim) && (
        <div className="border-t-2 px-4 py-3" style={{ borderColor: 'var(--line)' }}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>
              Estado del reclamo
            </span>
            <MissionClaimControl
              allTasksCompleted={allDone}
              claim={claim}
              claimsLoading={claimsLoading}
              claimPending={claimPending}
              onClaim={() => {
                void claimDay(roleId, day.day)
              }}
            />
          </div>
        </div>
      )}

      {/* Expandable tasks */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t-2 px-4 py-3" style={{ borderColor: 'var(--line)' }}>
          <div className="space-y-1.5">
            {day.tasks.map((task, i) => {
              const done = isTaskCompleted(roleId, day.day, i)
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 border-2 px-3 py-1.5 transition-colors hover:bg-[var(--surface-strong)]"
                  style={{
                    borderColor: done ? `${roleColor}44` : 'var(--line)',
                    imageRendering: 'pixelated',
                    background: done ? `${roleColor}10` : undefined,
                  }}
                >
                  {/* Pixel checkbox */}
                  <button
                    className={`mc-checkbox ${done ? '' : ''}`}
                    data-checked={done ? '' : undefined}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleTask(roleId, day.day, i)
                    }}
                    style={{ '--mc-color': roleColor } as React.CSSProperties}
                    aria-label={done ? `Desmarcar: ${task.title}` : `Completar: ${task.title}`}
                    type="button"
                  >
                    {done && <Check className="h-3.5 w-3.5" />}
                  </button>

                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-xs font-bold"
                    style={{
                      background: done ? roleColor : 'var(--surface-strong)',
                      color: done ? '#fff' : roleColor,
                      imageRendering: 'pixelated',
                      transition: 'background 150ms ease, color 150ms ease',
                    }}
                  >
                    {done ? <Check className="h-3 w-3" /> : i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className="m-0 truncate text-sm"
                      style={{
                        color: done ? roleColor : 'var(--text)',
                        textDecoration: done ? 'line-through' : 'none',
                        textDecorationColor: roleColor,
                        textDecorationThickness: 2,
                        transition: 'color 150ms ease',
                      }}
                    >
                      {task.title}
                    </p>
                    <p className="m-0 text-xs" style={{ color: 'var(--text-muted)' }}>
                      {task.amount > 1 ? `x${task.amount}` : ''}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Reward footer */}
          <div
            className="mt-3 flex items-center justify-between border-2 px-4 py-2"
            style={{
              borderColor: allDone ? 'var(--grass)' : roleColor,
              background: allDone ? 'rgba(91,135,49,0.18)' : `${roleColor}15`,
              imageRendering: 'pixelated',
              transition: 'border-color 200ms ease, background 200ms ease',
            }}
          >
            <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color: allDone ? 'var(--grass-light)' : roleColor }}>
              <Trophy className="h-4 w-4" />
              <span>{allDone ? '¡Recompensa ganada!' : 'Recompensa del día'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color: 'var(--gold-bright)' }}>
              <Coins className="h-4 w-4" />
              <span>{day.reward.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Component ────────────────────────────────────── */

function Home() {
  const { username } = useAuth()

  if (!username) {
    return <LoginScreen />
  }

  return <Dashboard />
}
