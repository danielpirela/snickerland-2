import type { QuestTask } from '#/data/quests'
import { Check } from 'lucide-react'

export interface TaskRowProps {
  task: QuestTask
  index: number
  color: string
  done: boolean
  onToggle: () => void
}

export function TaskRow({ task, index, color, done, onToggle }: TaskRowProps) {
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
