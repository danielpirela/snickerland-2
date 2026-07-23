import { useState } from 'react'
import type { DayQuest } from '#/data/quests'
import { getWeekDay } from '#/data/quests'
import type { MissionClaimRow } from '#/lib/supabase'
import { Coins, ChevronDown, Trophy, Calendar, CheckCircle2 } from 'lucide-react'
import MissionClaimControl from '#/components/MissionClaimControl'
import { TaskRow } from '#/components/TaskRow'

export interface DayCardProps {
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
}

export function DayCard({
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
}: DayCardProps) {
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
