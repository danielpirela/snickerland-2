import { Crown, Medal } from 'lucide-react'

export interface RankMarkerProps {
  rank: number
}

export function RankMarker({ rank }: RankMarkerProps) {
  if (rank === 1) {
    return (
      <div
        className="flex h-14 w-14 shrink-0 flex-col items-center justify-center border-3"
        style={{ borderColor: 'var(--gold-bright)', background: 'rgba(255,215,0,0.18)', color: 'var(--gold-bright)' }}
        title="Primer puesto"
      >
        <Crown className="h-5 w-5" />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.45rem' }}>#1</span>
      </div>
    )
  }

  if (rank === 2 || rank === 3) {
    const color = rank === 2 ? '#D8D8D8' : '#CD7F32'
    return (
      <div
        className="flex h-14 w-14 shrink-0 flex-col items-center justify-center border-3"
        style={{ borderColor: color, background: `${color}22`, color }}
        title={`${rank === 2 ? 'Segundo' : 'Tercer'} puesto`}
      >
        <Medal className="h-5 w-5" />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.45rem' }}>#{rank}</span>
      </div>
    )
  }

  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center border-3"
      style={{ borderColor: 'var(--stone-dark)', background: 'var(--surface-strong)', color: 'var(--text-muted)' }}
      title={`Puesto ${rank}`}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem' }}>{rank}</span>
    </div>
  )
}
