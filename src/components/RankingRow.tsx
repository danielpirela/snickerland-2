import { RankMarker } from '#/components/RankMarker'
import type { UserProgressSummary } from '#/hooks/useQuestProgress'

export interface RankingEntry extends UserProgressSummary {
  username: string
}

export interface RankingRowProps {
  entry: RankingEntry
  rank: number
  currentUsername: string | null
}

export function RankingRow({ entry, rank, currentUsername }: RankingRowProps) {
  const isCurrent = Boolean(
    currentUsername && entry.username.toLowerCase() === currentUsername.toLowerCase(),
  )
  const dayPercent = entry.totalDays > 0
    ? Math.round((entry.completedDays / entry.totalDays) * 100)
    : 0
  const borderColor = isCurrent
    ? 'var(--gold-bright)'
    : rank === 1
      ? 'var(--gold)'
      : rank === 2
        ? '#A8A8A8'
        : rank === 3
          ? '#A86432'
          : 'var(--card-border)'

  return (
    <article
      className="island-shell rise-in overflow-hidden transition-all duration-150 hover:-translate-y-0.5"
      style={{
        borderColor,
        animationDelay: `${Math.min(rank - 1, 8) * 60}ms`,
        background: rank <= 3
          ? 'linear-gradient(90deg, rgba(255,170,0,0.08), var(--surface))'
          : undefined,
        boxShadow: isCurrent
          ? '0 0 0 2px rgba(255,215,0,0.2), 4px 4px 0 0 rgba(0,0,0,0.3)'
          : undefined,
      }}
    >
      <div className="flex flex-wrap items-center gap-3 p-3 sm:gap-4 sm:p-4">
        <RankMarker rank={rank} />

        <div className="min-w-[9rem] flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="m-0 truncate text-lg font-bold" style={{ color: 'var(--text)' }}>
              {entry.username}
            </h3>
            {isCurrent && (
              <span
                className="border-2 px-1.5 py-0.5"
                style={{ borderColor: 'var(--gold)', background: 'rgba(255,170,0,0.15)', color: 'var(--gold-bright)', fontFamily: 'var(--font-display)', fontSize: '0.4rem' }}
              >
                TÚ
              </span>
            )}
          </div>
          <p className="m-0 mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
            {rank <= 3 ? 'Aventurero destacado' : 'Aventurero del servidor'}
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:min-w-[13rem]">
          <div className="border-2 px-3 py-2 text-center" style={{ borderColor, background: 'var(--surface)' }}>
            <p className="m-0" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', color: 'var(--gold-bright)' }}>
              {entry.completedDays}/{entry.totalDays}
            </p>
            <p className="m-0 mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>días</p>
          </div>
          <div className="border-2 px-3 py-2 text-center" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
            <p className="m-0" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', color: 'var(--grass-light)' }}>
              {entry.completedTasks}/{entry.totalTasks}
            </p>
            <p className="m-0 mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>tareas</p>
          </div>
        </div>
      </div>

      <div className="border-t-2 px-3 pb-3 pt-2 sm:px-4 sm:pb-4" style={{ borderColor: 'var(--line)' }}>
        <div className="mb-1 flex items-center justify-between gap-3 text-sm">
          <span style={{ color: 'var(--text-muted)' }}>Progreso de días completados</span>
          <span style={{ color: 'var(--gold-bright)', fontWeight: 700 }}>{dayPercent}%</span>
        </div>
        <div
          className="mc-xp-bar h-5"
          role="progressbar"
          aria-label={`Días completados por ${entry.username}`}
          aria-valuemin={0}
          aria-valuemax={entry.totalDays}
          aria-valuenow={entry.completedDays}
        >
          <div className="mc-xp-bar-fill" style={{ width: `${dayPercent}%` }} />
          <span className="mc-xp-bar-text">
            {entry.completedDays} de {entry.totalDays} días
          </span>
        </div>
      </div>
    </article>
  )
}
