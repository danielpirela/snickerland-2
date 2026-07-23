import { AlertTriangle, RefreshCw } from 'lucide-react'

export interface ErrorBannerProps {
  /** Human-readable error message. */
  message: string
  /** Optional retry callback. When provided, a "Reintentar" button is shown. */
  onRetry?: () => void
  /** Optional dismiss callback. */
  onDismiss?: () => void
}

/**
 * Inline error banner for query failures.
 * Shows a pixel-art styled error message with optional retry button.
 */
export function ErrorBanner({ message, onRetry, onDismiss }: ErrorBannerProps) {
  if (!message) return null

  return (
    <div
      className="mb-4 flex items-start gap-3 border-3 p-4"
      style={{ borderColor: 'var(--redstone)', background: 'rgba(170,51,51,0.1)' }}
    >
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--redstone-light)' }} />
      <p className="m-0 flex-1 text-base leading-6" style={{ color: 'var(--text)' }}>
        {message}
      </p>
      <div className="flex shrink-0 gap-2">
        {onRetry && (
          <button
            onClick={onRetry}
            className="mc-btn-logout inline-flex items-center gap-1"
            style={{ fontSize: '0.45rem', padding: '0.3rem 0.6rem' }}
          >
            <RefreshCw className="h-3 w-3" />
            Reintentar
          </button>
        )}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="border-2 px-2 py-1 text-xs"
            style={{
              borderColor: 'var(--stone-dark)',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Cerrar
          </button>
        )}
      </div>
    </div>
  )
}
