import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getRoleById, getWeekNumber } from '#/data/quests'
import type { DayQuest } from '#/data/quests'
import { useQuestProgress } from '#/hooks/useQuestProgress'
import { useMissionClaims } from '#/hooks/useMissionClaims'
import MissionClaimsNotice from '#/components/MissionClaimsNotice'
import { useState, useMemo } from 'react'
import { ArrowLeft } from 'lucide-react'
import { WeekTabs } from '#/components/WeekTabs'
import { DayCard } from '#/components/DayCard'
import { DayFilter } from '#/components/DayFilter'

export const Route = createFileRoute('/role/$roleId')({ component: RoleDetail })

function RoleDetail() {
  const { roleId } = Route.useParams()
  const role = getRoleById(roleId)
  const { isTaskCompleted, toggleTask, areAllTasksCompleted } = useQuestProgress()
  const {
    claimDay,
    error: claimsError,
    getClaim,
    isLoading: claimsLoading,
    pendingAction,
  } = useMissionClaims()

  if (!role) {
    throw notFound()
  }

  const maxWeek = getWeekNumber(role.days.length)
  const weeks = Array.from({ length: maxWeek }, (_, i) => i + 1)

  const [activeWeek, setActiveWeek] = useState(0)
  const [selectedDay, setSelectedDay] = useState(0)

  const filteredDays = useMemo(() => {
    let days: DayQuest[] = role.days

    if (selectedDay > 0) {
      days = days.filter((d) => d.day === selectedDay)
    } else if (activeWeek > 0) {
      days = days.filter((d) => getWeekNumber(d.day) === activeWeek)
    }

    return days
  }, [activeWeek, selectedDay, role.days])

  const totalReward = role.days.reduce((s, d) => s + d.reward.amount, 0)
  const totalTasks = role.days.reduce((s, d) => s + d.tasks.length, 0)

  // Stats: completed tasks
  const { completedTasks, completedDays } = useMemo(() => {
    let tasks = 0
    let days = 0
    for (const d of role.days) {
      if (areAllTasksCompleted(roleId, d.day, d.tasks.length)) days++
      for (let i = 0; i < d.tasks.length; i++) {
        if (isTaskCompleted(roleId, d.day, i)) tasks++
      }
    }
    return { completedTasks: tasks, completedDays: days }
  }, [role.days, roleId, isTaskCompleted, areAllTasksCompleted])

  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <main className="page-wrap px-4 pb-12 pt-6">
      {/* Back link */}
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-1.5 no-underline transition-colors"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.15rem',
          color: 'var(--text-muted)',
        }}
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </Link>

      {/* Role Header */}
      <section
        className="island-shell rise-in relative mb-8 overflow-hidden p-6 sm:p-8"
        style={{ borderRadius: 0 }}
      >
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-15"
          style={{ background: `radial-gradient(circle, ${role.color}, transparent 70%)` }}
        />

        <div className="flex flex-wrap items-center gap-4">
          <span
            className="flex h-14 w-14 items-center justify-center text-3xl shadow-sm"
            style={{
              background: `${role.color}25`,
              imageRendering: 'pixelated',
            }}
          >
            {role.emoji}
          </span>

          <div className="flex-1">
            <p className="island-kicker mb-1">Rol</p>
            <h1
              className="m-0"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                color: 'var(--text)',
              }}
            >
              {role.name}
            </h1>
          </div>

          <div className="flex gap-5">
            <div className="text-center">
              <p
                className="m-0"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  color: 'var(--text)',
                }}
              >
                {completedDays}/{role.days.length}
              </p>
              <p className="m-0 text-xs" style={{ color: 'var(--text-muted)' }}>
                Días
              </p>
            </div>
            <div className="text-center">
              <p
                className="m-0"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  color: 'var(--text)',
                }}
              >
                {completedTasks}/{totalTasks}
              </p>
              <p className="m-0 text-xs" style={{ color: 'var(--text-muted)' }}>
                Tareas
              </p>
            </div>
            <div className="text-center">
              <p
                className="m-0"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  color: role.color,
                }}
              >
                {totalReward.toLocaleString()}
              </p>
              <p className="m-0 text-xs" style={{ color: 'var(--text-muted)' }}>
                Monedas
              </p>
            </div>
          </div>
        </div>

        {/* XP Bar inside header */}
        <div className="mt-4">
          <div className="mc-xp-bar">
            <div
              className="mc-xp-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
            <span className="mc-xp-bar-text">
              {progressPercent}% — {completedTasks} / {totalTasks} tareas
            </span>
          </div>
        </div>
      </section>

      {claimsError && <MissionClaimsNotice message={claimsError} />}

      {/* Filters row */}
      <div className="island-shell mb-4 flex flex-wrap items-center gap-4 p-4" style={{ borderRadius: 0 }}>
        <DayFilter
          totalDays={role.days.length}
          selectedDay={selectedDay}
          onSelect={(d) => {
            setSelectedDay(d)
            if (d > 0) setActiveWeek(0)
          }}
        />
        <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontSize: '0.5rem' }}>
          o
        </div>
        <WeekTabs
          weeks={weeks}
          activeWeek={activeWeek}
          onSelect={(w) => {
            setActiveWeek(w)
            setSelectedDay(0)
          }}
          roleDays={role.days}
          roleId={roleId}
          areAllTasksCompleted={areAllTasksCompleted}
        />
      </div>

      {/* Day Cards */}
      <div className="space-y-3">
        {filteredDays.length === 0 ? (
          <div className="island-shell p-10 text-center" style={{ borderRadius: 0 }}>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              No hay misiones para este filtro.
            </p>
          </div>
        ) : (
          filteredDays.map((day) => (
            <DayCard
              key={day.day}
              day={day}
              color={role.color}
              roleId={roleId}
              isTaskCompleted={isTaskCompleted}
              toggleTask={toggleTask}
              areAllTasksCompleted={areAllTasksCompleted}
              claim={getClaim(roleId, day.day)}
              claimsLoading={claimsLoading}
              claimDay={claimDay}
              claimPending={pendingAction === `claim:${roleId}:${day.day}`}
            />
          ))
        )}
      </div>
    </main>
  )
}
