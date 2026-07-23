import type { MissionClaimRow } from '#/lib/supabase'
import type { DayQuest } from '#/data/quests'
import { getWeekDay } from '#/data/quests'
import { Coins, ChevronDown, Trophy, CheckCircle2, Check } from 'lucide-react'
import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import MissionClaimControl from '#/components/MissionClaimControl'

export interface QuestCardProps {
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
  claimDay: (
    roleId: string,
    day: number,
    allTasksCompleted: boolean,
  ) => Promise<MissionClaimRow | null>
  claimPending: boolean
}

export function QuestCard({
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
}: QuestCardProps) {
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
                void claimDay(roleId, day.day, allDone)
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
                    className="mc-checkbox"
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
