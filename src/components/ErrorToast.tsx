import { useState, useEffect, useCallback } from 'react'
import { AlertTriangle, X, RefreshCw } from 'lucide-react'

export interface ErrorToastProps {
  /** Error message to display. When null/empty, the toast is hidden. */
  message: string | null
  /** Optional retry callback. */
  onRetry?: () => void
  /** Auto-dismiss after this many ms. 0 = no auto-dismiss. */
  autoDismissMs?: number
}

/**
 * Toast notification for mutation errors.
 *
 * Appears at the bottom of the screen with a retry button and auto-dismiss
 * timer. Designed to be used alongside mutation error states in hooks.
 */
export function ErrorToast({ message, onRetry, autoDismissMs = 8000 }: ErrorToastProps) {
  const [visible, setVisible] = useState(false)
  const [currentMessage, setCurrentMessage] = useState<string | null>(null)

  // When a new message arrives, make it visible
  useEffect(() => {
    if (message) {
      setCurrentMessage(message)
      setVisible(true)
    }
  }, [message])

  // Auto-dismiss
  useEffect(() => {
    if (!visible || autoDismissMs === 0) return
    const timer = setTimeout(() => setVisible(false), autoDismissMs)
    return () => clearTimeout(timer)
  }, [visible, autoDismissMs, currentMessage])

  const dismiss = useCallback(() => {
    setVisible(false)
  }, [])

  if (!visible || !currentMessage) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-50 max-w-sm border-3 p-4 shadow-lg transition-all duration-300"
      style={{
        borderColor: 'var(--redstone)',
        background: 'var(--bg-base)',
        boxShadow: '4px 4px 0 0 rgba(0,0,0,0.4)',
        imageRendering: 'pixelated',
      }}
    >
      <div className="mb-2 flex items-start gap-2">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--redstone-light)' }} />
        <p className="m-0 flex-1 text-sm" style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}>
          {currentMessage}
        </p>
        <button
          onClick={dismiss}
          className="shrink-0"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Cerrar"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mc-btn-logout inline-flex items-center gap-1 text-xs"
          style={{ fontSize: '0.45rem', padding: '0.3rem 0.6rem' }}
        >
          <RefreshCw className="h-3 w-3" />
          Reintentar
        </button>
      )}
    </div>
  )
}
