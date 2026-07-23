import { useState, useMemo } from 'react'
import { useAuth } from '#/contexts/AuthContext'
import { useQuestProgress } from '#/hooks/useQuestProgress'
import { useMissionClaims } from '#/hooks/useMissionClaims'
import { getUserRoles } from '#/data/users'
import { getRoleById, type DayQuest } from '#/data/quests'
import MissionClaimsNotice from '#/components/MissionClaimsNotice'
import { LogOut, Trophy, Calendar } from 'lucide-react'
import { RolePill } from '#/components/RolePill'
import { QuestCard } from '#/components/QuestCard'

export function Dashboard() {
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
