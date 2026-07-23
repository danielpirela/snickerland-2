import { CheckCircle2, Clock, Coins, RefreshCw, XCircle, Timer } from 'lucide-react'
import { useEffect, useState } from 'react'
import { isMissionClaimRevoked } from '#/lib/missionClaims'
import type { MissionClaimRow } from '#/lib/supabase'

/** Cron runs at :00 and :30 of every hour. Returns minutes until next batch. */
function getMinutesUntilNextCron(): number {
  const now = new Date()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const nextBatchMinute = minutes < 30 ? 30 : 60
  const minutesUntil = nextBatchMinute - minutes - (seconds > 0 ? 1 : 0)
  return Math.max(0, minutesUntil)
}

// Singleton interval — all instances share one timer
let _countdownSubs = 0
let _countdownInterval: ReturnType<typeof setInterval> | null = null
const _countdownListeners = new Set<() => void>()

function useCountdown(): number {
  const [remaining, setRemaining] = useState(getMinutesUntilNextCron)

  useEffect(() => {
    const tick = () => setRemaining(getMinutesUntilNextCron())
    _countdownListeners.add(tick)
    _countdownSubs++

    if (_countdownInterval === null) {
      _countdownInterval = setInterval(() => {
        for (const fn of _countdownListeners) fn()
      }, 30_000)
    }

    return () => {
      _countdownListeners.delete(tick)
      _countdownSubs--
      if (_countdownSubs <= 0 && _countdownInterval !== null) {
        clearInterval(_countdownInterval)
        _countdownInterval = null
        _countdownSubs = 0
      }
    }
  }, [])

  return remaining
}

interface MissionClaimControlProps {
  allTasksCompleted: boolean
  claim: MissionClaimRow | null
  claimsLoading: boolean
  claimPending: boolean
  onClaim: () => void
}

export default function MissionClaimControl({
  allTasksCompleted,
  claim,
  claimsLoading,
  claimPending,
  onClaim,
}: MissionClaimControlProps) {
  const countdown = useCountdown()
  if (claim?.status === 'paid') {
    return (
      <span
        className="inline-flex items-center gap-1.5 border-2 px-3 py-2 text-sm font-bold"
        style={{
          borderColor: 'var(--grass)',
          background: 'rgba(91,135,49,0.2)',
          color: 'var(--grass-light)',
        }}
      >
        <CheckCircle2 className="h-4 w-4" />
        Pagada
      </span>
    )
  }

  if (claim?.status === 'pending') {
    return (
      <div className="flex flex-col gap-1">
        <span
          className="inline-flex items-center gap-1.5 border-2 px-3 py-2 text-sm font-bold"
          style={{
            borderColor: 'var(--gold)',
            background: 'rgba(255,170,0,0.14)',
            color: 'var(--gold-bright)',
          }}
        >
          <Clock className="h-4 w-4" />
          Pendiente de pago
        </span>
        {countdown > 0 ? (
          <span
            className="inline-flex items-center gap-1 text-xs"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
          >
            <Timer className="h-3 w-3" />
            Pago en ~{countdown} min
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1 text-xs"
            style={{ color: 'var(--grass-light)', fontFamily: 'var(--font-sans)' }}
          >
            <RefreshCw className="h-3 w-3 animate-spin" />
            Llegando...
          </span>
        )}
      </div>
    )
  }

  if (claim?.status === 'processing') {
    return (
      <span
        className="inline-flex items-center gap-1.5 border-2 px-3 py-2 text-sm font-bold"
        style={{
          borderColor: 'var(--gold)',
          background: 'rgba(255,170,0,0.2)',
          color: 'var(--gold-bright)',
        }}
      >
        <RefreshCw className="h-4 w-4 animate-spin" />
        Procesando en el servidor
      </span>
    )
  }

  if (claim?.status === 'rejected') {
    const revoked = isMissionClaimRevoked(claim)

    return (
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 border-2 px-3 py-2 text-sm font-bold"
          style={{
            borderColor: 'var(--redstone)',
            background: 'rgba(170,51,51,0.16)',
            color: 'var(--redstone-light)',
          }}
        >
          <XCircle className="h-4 w-4" />
          {revoked ? 'Revocada' : 'Rechazada'}
        </span>

        {revoked && allTasksCompleted && (
          <button
            type="button"
            className="mc-btn inline-flex items-center gap-2 px-3 py-2 disabled:cursor-wait disabled:opacity-60"
            onClick={onClaim}
            disabled={claimPending}
            aria-busy={claimPending}
          >
            <Coins className="h-4 w-4" />
            {claimPending ? 'Guardando...' : 'Reclamar recompensa'}
          </button>
        )}
      </div>
    )
  }

  if (claimsLoading) {
    return (
      <span className="border-2 px-3 py-2 text-sm" style={{ borderColor: 'var(--line)', color: 'var(--text-muted)' }}>
        Consultando reclamo...
      </span>
    )
  }

  if (!allTasksCompleted) return null

  return (
    <button
      type="button"
      className="mc-btn inline-flex items-center gap-2 px-3 py-2 disabled:cursor-wait disabled:opacity-60"
      onClick={onClaim}
      disabled={claimPending}
      aria-busy={claimPending}
    >
      <Coins className="h-4 w-4" />
      {claimPending ? 'Guardando...' : 'Reclamar recompensa'}
    </button>
  )
}
