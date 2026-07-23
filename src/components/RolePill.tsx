export interface RolePillProps {
  label: string
  active: boolean
  color?: string
  onClick: () => void
}

export function RolePill({ label, active, color, onClick }: RolePillProps) {
  return (
    <button
      onClick={onClick}
      className="border-2 px-3 py-1.5 transition-all duration-150"
      style={{
        borderColor: active ? (color ?? 'var(--gold)') : 'var(--stone-dark)',
        background: active
          ? `${color ?? 'var(--gold)'}22`
          : 'var(--surface-strong)',
        color: active ? (color ?? 'var(--gold-bright)') : 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: '1.15rem',
        fontWeight: active ? 700 : 400,
        imageRendering: 'pixelated',
        boxShadow: active ? `2px 2px 0 0 ${color ?? 'var(--gold)'}44` : 'none',
      }}
    >
      {label}
    </button>
  )
}
