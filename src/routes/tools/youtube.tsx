import { createFileRoute } from '@tanstack/react-router'
import { useState, useCallback } from 'react'
import { Link2, Copy, Check, Loader2, AlertTriangle } from 'lucide-react'
import { getYtDirectUrl } from '#/lib/yt-direct'

interface YtResult {
  url: string
  title: string
  quality: string
  duration: string
  thumbnail: string | null
}

export const Route = createFileRoute('/tools/youtube')({
  component: YoutubeConverter,
})

function formatDuration(seconds: string): string {
  const s = parseInt(seconds, 10)
  if (isNaN(s)) return '--:--'
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${sec.toString().padStart(2, '0')}`
}

function YoutubeConverter() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<YtResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const trimmed = input.trim()
      if (!trimmed) return

      setError(null)
      setResult(null)
      setCopied(false)
      setLoading(true)

      try {
        const data = await getYtDirectUrl({ data: trimmed })
        setResult(data)
      } catch (err: any) {
        setError(err.message ?? 'Error al conectar con el servidor')
      } finally {
        setLoading(false)
      }
    },
    [input],
  )

  const copyUrl = useCallback(async () => {
    if (!result) return
    try {
      await navigator.clipboard.writeText(result.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = result.url
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [result])

  return (
    <main className="page-wrap px-4 pb-12 pt-6">
      {/* Title */}
      <div className="island-shell rise-in mb-6 rounded-none p-5">
        <h1
          className="m-0 mb-1"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.7rem',
            color: 'var(--gold-bright)',
          }}
        >
          YouTube URL Converter
        </h1>
        <p className="m-0 text-lg" style={{ color: 'var(--text-muted)' }}>
          Pegá una URL de YouTube y obtené la URL directa del video para usar en Waterframes. La extracción puede tardar unos segundos.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="island-shell mb-6 rounded-none p-5">
        <label
          className="mb-2 block"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.5rem',
            color: 'var(--text-muted)',
          }}
        >
          URL de YouTube
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="mc-input flex-1"
            disabled={loading}
            autoFocus
          />
          <button
            type="submit"
            className="mc-btn shrink-0"
            disabled={loading || !input.trim()}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Extrayendo...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Link2 className="h-4 w-4" />
                Extraer URL
              </span>
            )}
          </button>
        </div>
      </form>

      {/* Loading state */}
      {loading && (
        <div
          className="island-shell mb-6 flex items-center gap-4 rounded-none p-5"
          style={{ borderColor: 'var(--gold)' }}
        >
          <Loader2
            className="h-6 w-6 shrink-0 animate-spin"
            style={{ color: 'var(--gold-bright)' }}
          />
          <div>
            <p
              className="m-0 font-bold"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.5rem',
                color: 'var(--gold-bright)',
              }}
            >
              Extrayendo URL...
            </p>
            <p className="m-0 mt-1 text-lg" style={{ color: 'var(--text-muted)' }}>
              YouTube tarda unos segundos en responder. No cierres la página.
            </p>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          className="island-shell mb-6 flex items-start gap-3 rounded-none p-4"
          style={{ borderColor: 'var(--redstone)' }}
        >
          <AlertTriangle
            className="mt-0.5 h-5 w-5 shrink-0"
            style={{ color: 'var(--redstone-light)' }}
          />
          <div>
            <p
              className="m-0 font-bold"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.5rem',
                color: 'var(--redstone-light)',
              }}
            >
              Error
            </p>
            <p className="m-0 mt-1 text-lg" style={{ color: 'var(--text)' }}>
              {error}
            </p>
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="island-shell rise-in rounded-none">
          {/* Video info header */}
          <div className="flex flex-col gap-3 p-5 sm:flex-row">
            {result.thumbnail && (
              <img
                src={result.thumbnail}
                alt={result.title}
                className="h-20 w-36 shrink-0 object-cover"
                style={{
                  border: '3px solid var(--stone-dark)',
                  imageRendering: 'auto',
                }}
              />
            )}
            <div className="min-w-0 flex-1">
              <h2
                className="m-0 mb-1 line-clamp-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.5rem',
                  color: 'var(--text)',
                }}
              >
                {result.title}
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span
                  className="inline-flex items-center gap-1 border-2 px-2 py-0.5 text-sm"
                  style={{
                    borderColor: 'var(--gold)',
                    background: 'rgba(255,170,0,0.12)',
                    color: 'var(--gold-bright)',
                    imageRendering: 'pixelated',
                  }}
                >
                  {result.quality}
                </span>
                <span
                  className="inline-flex items-center gap-1 border-2 px-2 py-0.5 text-sm"
                  style={{
                    borderColor: 'var(--line)',
                    background: 'var(--surface-strong)',
                    color: 'var(--text-muted)',
                    imageRendering: 'pixelated',
                  }}
                >
                  {formatDuration(result.duration)}
                </span>
              </div>
            </div>
          </div>

          {/* URL output */}
          <div
            className="border-t-3 p-5"
            style={{ borderColor: 'var(--line)' }}
          >
            <label
              className="mb-2 block"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.5rem',
                color: 'var(--text-muted)',
              }}
            >
              URL Directa
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div
                className="flex-1 break-all border-3 p-3 text-base"
                style={{
                  borderColor: 'var(--grass)',
                  background: 'rgba(91,135,49,0.1)',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.1rem',
                  imageRendering: 'pixelated',
                }}
              >
                {result.url}
              </div>
              <button
                type="button"
                onClick={copyUrl}
                className="mc-btn shrink-0"
              >
                <span className="flex items-center gap-2">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copiar URL
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty state hint */}
      {!result && !error && !loading && (
        <div className="island-shell rounded-none p-8 text-center">
          <Link2
            className="mx-auto mb-3 h-8 w-8"
            style={{ color: 'var(--text-muted)' }}
          />
          <p className="m-0 text-lg" style={{ color: 'var(--text-muted)' }}>
            Pegá una URL de YouTube arriba y dale a <strong>Extraer URL</strong>.
          </p>
          <p className="m-0 mt-1 text-sm" style={{ color: 'var(--stone-light)' }}>
            Soporta youtube.com/watch, youtu.be, y shorts.
          </p>
        </div>
      )}
    </main>
  )
}
