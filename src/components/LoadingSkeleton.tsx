import { useState, useEffect, useRef } from 'react'

export interface LoadingSkeletonProps {
  /** Number of skeleton rows to render. */
  lines?: number
  /** Height of each row in pixels. */
  height?: number
  /** Delay before showing the skeleton (prevents flash on fast loads). */
  delayMs?: number
  /** Custom class for the wrapper. */
  className?: string
}

/**
 * A layout-preserving loading skeleton.
 *
 * Only renders after `delayMs` to prevent flash on quickly-resolved fetches.
 * When delayMs is 0, renders immediately.
 */
export function LoadingSkeleton({
  lines = 5,
  height = 32,
  delayMs = 300,
  className = '',
}: LoadingSkeletonProps) {
  const [visible, setVisible] = useState(delayMs === 0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (delayMs === 0) {
      setVisible(true)
      return
    }

    timerRef.current = setTimeout(() => setVisible(true), delayMs)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [delayMs])

  if (!visible) return null

  return (
    <div className={`space-y-2 ${className}`} aria-label="Cargando..." role="status">
      {Array.from({ length: lines }, (_, i) => (
        <div
          key={i}
          className="animate-pulse"
          style={{
            height: `${height}px`,
            background: 'var(--surface-strong)',
            border: '2px solid var(--line)',
            opacity: 0.55 + (1 - i / (lines + 1)) * 0.3,
          }}
        />
      ))}
      <span className="sr-only">Cargando...</span>
    </div>
  )
}
