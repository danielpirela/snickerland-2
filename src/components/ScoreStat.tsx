import type { ReactNode } from 'react'

export interface ScoreStatProps {
  icon: ReactNode
  value: string | number
  label: string
}

export function ScoreStat({ icon, value, label }: ScoreStatProps) {
  return (
    <div className="border-2 p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <div className="mb-1 flex items-center gap-2" style={{ color: 'var(--gold)' }}>
        {icon}
        <span className="text-xs uppercase" style={{ color: 'var(--text-muted)' }}>
          {label}
        </span>
      </div>
      <p className="m-0" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--text)' }}>
        {value}
      </p>
    </div>
  )
}
