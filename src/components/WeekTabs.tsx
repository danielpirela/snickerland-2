import type { DayQuest } from '#/data/quests'
import { getWeekNumber } from '#/data/quests'

export interface WeekTabsProps {
  weeks: number[]
  activeWeek: number
  onSelect: (w: number) => void
  roleDays: DayQuest[]
  roleId: string
  areAllTasksCompleted: (roleId: string, day: number, total: number) => boolean
}

export function WeekTabs({
  weeks,
  activeWeek,
  onSelect,
  roleDays,
  roleId,
  areAllTasksCompleted,
}: WeekTabsProps) {
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
