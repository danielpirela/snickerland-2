import { Calendar } from 'lucide-react'
import { getWeekDay } from '#/data/quests'

export interface DayFilterProps {
  totalDays: number
  selectedDay: number
  onSelect: (day: number) => void
}

export function DayFilter({ totalDays, selectedDay, onSelect }: DayFilterProps) {
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
