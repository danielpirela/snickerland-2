import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getRoleById, getWeekDay, getWeekNumber } from '#/data/quests'
import type { DayQuest, QuestTask } from '#/data/quests'
import { useQuestProgress } from '#/hooks/useQuestProgress'
import { useMissionClaims } from '#/hooks/useMissionClaims'
import MissionClaimControl from '#/components/MissionClaimControl'
import MissionClaimsNotice from '#/components/MissionClaimsNotice'
import type { MissionClaimRow } from '#/lib/supabase'
import { useState, useMemo } from 'react'
import { ArrowLeft, Coins, ChevronDown, Trophy, Calendar, CheckCircle2, Check } from 'lucide-react'

export const Route = createFileRoute('/role/$roleId')({ component: RoleDetail })

/* ─── Week Tabs ─────────────────────────────────────────── */

function WeekTabs({
  weeks,
  activeWeek,
  onSelect,
  roleDays,
  roleId,
  areAllTasksCompleted,
}: {
  weeks: number[]
  activeWeek: number
  onSelect: (w: number) => void
  roleDays: DayQuest[]
  roleId: string
  areAllTasksCompleted: (roleId: string, day: number, total: number) => boolean
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {weeks.map((w) => {
        const weekDays = roleDays.filter((d) => getWeekNumber(d.day) === w)
        const completedInWeek = weekDays.filter((d) =>
          areAllTasksCompleted(roleId, d.day, d.tasks.length),
        ).length
        return (
          <button
            key={w}
            onClick={() => onSelect(w)}
            className="border-2 px-4 py-2 transition-all duration-150"
            style={{
              borderColor: activeWeek === w ? 'var(--gold)' : 'var(--stone-dark)',
              background:
                activeWeek === w
                  ? 'rgba(255,170,0,0.15)'
                  : 'var(--surface-strong)',
              color: activeWeek === w ? 'var(--gold-bright)' : 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              fontWeight: activeWeek === w ? 700 : 400,
              imageRendering: 'pixelated',
            }}
          >
            Semana {w}
            <span className="week-tab-badge">
              {completedInWeek}/{weekDays.length}
            </span>
          </button>
        )
      })}
      <button
        onClick={() => onSelect(0)}
        className="border-2 px-4 py-2 transition-all duration-150"
        style={{
          borderColor: activeWeek === 0 ? 'var(--gold)' : 'var(--stone-dark)',
          background:
            activeWeek === 0
              ? 'rgba(255,170,0,0.15)'
              : 'var(--surface-strong)',
          color: activeWeek === 0 ? 'var(--gold-bright)' : 'var(--text-muted)',
          fontFamily: 'var(--font-sans)',
          fontSize: '1.1rem',
          fontWeight: activeWeek === 0 ? 700 : 400,
          imageRendering: 'pixelated',
        }}
      >
        Todos
      </button>
    </div>
  )
}

/* ─── Task Row ──────────────────────────────────────────── */

function TaskRow({
  task,
  index,
  color,
  done,
  onToggle,
}: {
  task: QuestTask
  index: number
  color: string
  done: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="flex items-center gap-2 border-2 px-3 py-1.5 transition-colors hover:bg-[var(--surface-strong)]"
      style={{
        borderColor: done ? `${color}44` : 'var(--line)',
        imageRendering: 'pixelated',
        background: done ? `${color}10` : undefined,
      }}
    >
      {/* Pixel checkbox */}
      <button
        className="mc-checkbox"
        data-checked={done ? '' : undefined}
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        style={{ '--mc-color': color } as React.CSSProperties}
        aria-label={done ? `Desmarcar: ${task.title}` : `Completar: ${task.title}`}
        type="button"
      >
        {done && <Check className="h-3.5 w-3.5" />}
      </button>

      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center text-xs font-bold"
        style={{
          background: done ? color : 'var(--surface-strong)',
          color: done ? '#fff' : color,
          imageRendering: 'pixelated',
          transition: 'background 150ms ease, color 150ms ease',
        }}
      >
        {done ? <Check className="h-3 w-3" /> : index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <p
          className="m-0 truncate text-sm"
          style={{
            color: done ? color : 'var(--text)',
            textDecoration: done ? 'line-through' : 'none',
            textDecorationColor: color,
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
}

/* ─── Day Card ──────────────────────────────────────────── */

function DayCard({
  day,
  color,
  roleId,
  isTaskCompleted,
  toggleTask,
  areAllTasksCompleted,
  claim,
  claimsLoading,
  claimDay,
  claimPending,
}: {
  day: DayQuest
  color: string
  roleId: string
  isTaskCompleted: (roleId: string, day: number, taskIndex: number) => boolean
  toggleTask: (roleId: string, day: number, taskIndex: number) => void
  areAllTasksCompleted: (roleId: string, day: number, total: number) => boolean
  claim: MissionClaimRow | null
  claimsLoading: boolean
   claimDay: (
     roleId: string,
     day: number,
     allTasksCompleted: boolean,
   ) => Promise<MissionClaimRow | null>
  claimPending: boolean
}) {
  const [open, setOpen] = useState(false)
  const weekDay = getWeekDay(day.day)
  const allDone = areAllTasksCompleted(roleId, day.day, day.tasks.length)
  const completedCount = day.tasks.filter((_, i) => isTaskCompleted(roleId, day.day, i)).length

  return (
    <div
      className={`island-shell overflow-hidden transition-all duration-200 ${allDone ? 'quest-card-success' : ''}`}
      style={{ borderRadius: 0, borderColor: !allDone && open ? `${color}66` : undefined }}
    >
      {/* COMPLETADO badge */}
      {allDone && <div className="completed-badge">¡COMPLETADO!</div>}

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--surface-strong)]"
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center text-lg font-extrabold text-white shadow-sm ${allDone ? 'day-badge-success' : ''}`}
          style={{
            background: allDone ? undefined : color,
            imageRendering: 'pixelated',
          }}
        >
          {day.day}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="m-0 text-base font-bold" style={{ color: 'var(--text)' }}>
            {day.title}
          </h3>
          <div
            className="flex items-center gap-2 text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            <Calendar className="h-3 w-3" />
            <span>{weekDay}</span>
            <span>·</span>
            <span>{completedCount}/{day.tasks.length} tareas</span>
          </div>
        </div>

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
                void claimDay(roleId, day.day, allDone)
              }}
            />
          </div>
        </div>
      )}

      {/* Expandable */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t-2 px-4 py-3" style={{ borderColor: 'var(--line)' }}>
          <div className="space-y-1.5">
            {day.tasks.map((task, i) => (
              <TaskRow
                key={i}
                task={task}
                index={i}
                color={color}
                done={isTaskCompleted(roleId, day.day, i)}
                onToggle={() => toggleTask(roleId, day.day, i)}
              />
            ))}
          </div>

          <div
            className="mt-3 flex items-center justify-between border-2 px-4 py-2"
            style={{
              borderColor: allDone ? 'var(--grass)' : color,
              background: allDone ? 'rgba(91,135,49,0.18)' : `${color}15`,
              imageRendering: 'pixelated',
              transition: 'border-color 200ms ease, background 200ms ease',
            }}
          >
            <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color: allDone ? 'var(--grass-light)' : color }}>
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

/* ─── Day Filter Dropdown ───────────────────────────────── */

function DayFilter({
  totalDays,
  selectedDay,
  onSelect,
}: {
  totalDays: number
  selectedDay: number
  onSelect: (day: number) => void
}) {
  return (
    <div className="flex items-center gap-2">
      <Calendar className="h-4 w-4" style={{ color: 'var(--text-muted)' }} />
      <select
        value={selectedDay}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="mc-input w-auto py-1 text-sm"
        style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
      >
        <option value={0}>Todos los días</option>
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((d) => (
          <option key={d} value={d}>
            Día {d} — {getWeekDay(d)}
          </option>
        ))}
      </select>
    </div>
  )
}

/* ─── Main Component ────────────────────────────────────── */

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
    let days = role.days

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
