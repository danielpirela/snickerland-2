import { createFileRoute } from '@tanstack/react-router'
import {
  Award,
  CheckSquare,
  Database,
  Pickaxe,
  RefreshCw,
  Trophy,
  Users,
} from 'lucide-react'
import { useAuth } from '#/contexts/AuthContext'
import { getKnownUsernames } from '#/data/users'
import {
  MISSION_PROGRESS_PAGE_SIZE,
  MISSION_PROGRESS_UPDATED_EVENT,
  isSupabaseConfigured,
  supabase,
  type MissionProgressTask,
} from '#/lib/supabase'
import {
  getProgressStorageKey,
  getQuestTotals,
  getUserProgressSummary,
  PROGRESS_STORAGE_PREFIX,
  summarizeProgress,
  type QuestProgress,
} from '#/hooks/useQuestProgress'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ScoreStat } from '#/components/ScoreStat'
import { RankingRow } from '#/components/RankingRow'
import type { RankingEntry } from '#/components/RankingRow'

export const Route = createFileRoute('/scoreboard')({
  component: Scoreboard,
  head: () => ({
    meta: [{ title: 'Ranking de aventureros — Snickerland 2' }],
  }),
})

interface RankingTotals {
  completedDays: number
  completedTasks: number
}

const questTotals = getQuestTotals()

function buildRoster(
  currentUsername: string | null,
  remoteUsernames: readonly string[] = [],
): string[] {
  const usernames = new Map<string, string>()
  const addUsername = (value: string | null, prefer = false): void => {
    const trimmed = value?.trim() ?? ''
    if (!trimmed) return

    const normalized = trimmed.toLowerCase()
    if (prefer || !usernames.has(normalized)) {
      usernames.set(normalized, trimmed)
    }
  }

  for (const username of getKnownUsernames()) addUsername(username)
  for (const username of remoteUsernames) addUsername(username)
  addUsername(currentUsername, true)

  return [...usernames.values()]
}

function loadRanking(currentUsername: string | null): RankingEntry[] {
  return buildRoster(currentUsername)
    .map((username) => ({
      username,
      ...getUserProgressSummary(username),
    }))
    .sort((a, b) => {
      if (a.completedDays !== b.completedDays) {
        return b.completedDays - a.completedDays
      }
      if (a.completedTasks !== b.completedTasks) {
        return b.completedTasks - a.completedTasks
      }
      return (
        a.username.toLowerCase().localeCompare(b.username.toLowerCase()) ||
        a.username.localeCompare(b.username)
      )
    })
}

function isMissionProgressTask(value: unknown): value is MissionProgressTask {
  if (typeof value !== 'object' || value === null) return false
  if (!('username' in value) || !('role_id' in value)) return false
  if (!('day' in value) || !('task_index' in value)) return false

  const row = value as Record<string, unknown>
  return (
    typeof row.username === 'string' &&
    row.username.trim().length > 0 &&
    typeof row.role_id === 'string' &&
    row.role_id.trim().length > 0 &&
    typeof row.day === 'number' &&
    Number.isInteger(row.day) &&
    row.day >= 1 &&
    row.day <= 30 &&
    typeof row.task_index === 'number' &&
    Number.isInteger(row.task_index) &&
    row.task_index >= 0 &&
    row.task_index <= 4
  )
}

function buildGlobalRanking(
  rows: readonly MissionProgressTask[],
  currentUsername: string | null,
): RankingEntry[] {
  const progressByUsername = new Map<string, QuestProgress>()
  const remoteUsernames: string[] = []

  for (const row of rows) {
    if (!isMissionProgressTask(row)) continue

    remoteUsernames.push(row.username)
    const normalizedUsername = row.username.trim().toLowerCase()
    const progress = progressByUsername.get(normalizedUsername) ?? {}
    const dayKey = `${row.role_id}:${row.day}`
    const tasks = new Set(progress[dayKey] ?? [])
    tasks.add(row.task_index)
    progress[dayKey] = [...tasks]
    progressByUsername.set(normalizedUsername, progress)
  }

  return buildRoster(currentUsername, remoteUsernames)
    .map((username) => ({
      username,
      ...summarizeProgress(progressByUsername.get(username.toLowerCase()) ?? {}),
    }))
    .sort((a, b) => {
      if (a.completedDays !== b.completedDays) {
        return b.completedDays - a.completedDays
      }
      if (a.completedTasks !== b.completedTasks) {
        return b.completedTasks - a.completedTasks
      }
      return (
        a.username.toLowerCase().localeCompare(b.username.toLowerCase()) ||
        a.username.localeCompare(b.username)
      )
    })
}

async function fetchGlobalProgress(): Promise<MissionProgressTask[]> {
  const client = supabase
  if (!client) throw new Error('Supabase is not configured')

  const rows: MissionProgressTask[] = []
  for (let offset = 0; ; offset += MISSION_PROGRESS_PAGE_SIZE) {
    const { data, error } = await client
      .from('mission_progress')
      .select('username, role_id, day, task_index')
      .order('username', { ascending: true })
      .order('role_id', { ascending: true })
      .order('day', { ascending: true })
      .order('task_index', { ascending: true })
      .range(offset, offset + MISSION_PROGRESS_PAGE_SIZE - 1)

    if (error) throw error
    rows.push(...(data ?? []))
    if (!data || data.length < MISSION_PROGRESS_PAGE_SIZE) break
  }

  return rows
}

function getRankingTotals(ranking: RankingEntry[]): RankingTotals {
  return ranking.reduce(
    (totals, entry) => ({
      completedDays: totals.completedDays + entry.completedDays,
      completedTasks: totals.completedTasks + entry.completedTasks,
    }),
    { completedDays: 0, completedTasks: 0 },
  )
}

function RankingRows({ ranking, currentUsername }: { ranking: RankingEntry[] | null; currentUsername: string | null }) {
  if (!ranking) {
    return (
      <div className="space-y-3" aria-label="Cargando ranking">
        {[1, 2, 3].map((item) => (
          <div key={item} className="island-shell h-32 animate-pulse" style={{ opacity: 0.55 }} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {ranking.map((entry, index) => (
        <RankingRow
          key={entry.username}
          entry={entry}
          rank={index + 1}
          currentUsername={currentUsername}
        />
      ))}
    </div>
  )
}

function Scoreboard() {
  const { username } = useAuth()
  const [ranking, setRanking] = useState<RankingEntry[] | null>(null)
  const [source, setSource] = useState<'loading' | 'global' | 'local' | 'local-error'>('loading')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const requestIdRef = useRef(0)
  const inFlightRef = useRef<{
    username: string | null
    promise: Promise<void>
  } | null>(null)

  const refreshRanking = useCallback((): Promise<void> => {
    const inFlight = inFlightRef.current
    if (inFlight?.username === username) return inFlight.promise

    const requestId = ++requestIdRef.current
    setRanking(null)
    setSource('loading')
    setIsRefreshing(true)

    const promise = (async () => {
      if (!isSupabaseConfigured || !supabase) {
        if (requestId === requestIdRef.current) {
          setRanking(loadRanking(username))
          setSource('local')
          setIsRefreshing(false)
        }
        return
      }

      try {
        const rows = await fetchGlobalProgress()
        if (requestId !== requestIdRef.current) return
        setRanking(buildGlobalRanking(rows, username))
        setSource('global')
      } catch {
        if (requestId !== requestIdRef.current) return
        setRanking(loadRanking(username))
        setSource('local-error')
      } finally {
        if (requestId === requestIdRef.current) {
          setIsRefreshing(false)
        }
      }
    })()

    inFlightRef.current = { username, promise }
    void promise.finally(() => {
      if (inFlightRef.current?.promise === promise) {
        inFlightRef.current = null
      }
    })
    return promise
  }, [username])

  useEffect(() => {
    void refreshRanking()

    const onStorage = (event: StorageEvent) => {
      if (
        event.key === null ||
        event.key.startsWith(PROGRESS_STORAGE_PREFIX) ||
        event.key === getProgressStorageKey(username ?? '')
      ) {
        void refreshRanking()
      }
    }
    const onProgressUpdated = () => {
      void refreshRanking()
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener(MISSION_PROGRESS_UPDATED_EVENT, onProgressUpdated)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(MISSION_PROGRESS_UPDATED_EVENT, onProgressUpdated)
    }
  }, [refreshRanking, username])

  const totals = useMemo(
    () => (ranking ? getRankingTotals(ranking) : null),
    [ranking],
  )
  const currentUsername = ranking ? username : null
  const hasProgress = Boolean(totals?.completedTasks)
  const statusMessage = source === 'global'
    ? 'Ranking global. Los datos se comparten entre navegadores y dispositivos.'
    : source === 'local-error'
      ? 'Marcador local. No se pudo consultar Supabase; se mantiene el progreso de este navegador.'
      : source === 'local'
        ? 'Marcador local. Configurá Supabase para compartir el progreso entre dispositivos.'
        : 'Cargando el ranking...'

  return (
    <main className="page-wrap px-4 pb-12 pt-6 sm:pt-8">
      <section
        className="island-shell rise-in relative mb-5 overflow-hidden p-5 sm:p-8"
        style={{ borderRadius: 0 }}
      >
        <div
          className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 opacity-20"
          style={{ background: 'radial-gradient(circle, var(--gold), transparent 68%)' }}
        />
        <div className="relative flex flex-wrap items-center gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center border-3"
            style={{ borderColor: 'var(--gold)', background: 'rgba(255,170,0,0.16)', color: 'var(--gold-bright)' }}
          >
            <Trophy className="h-9 w-9" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="island-kicker mb-2">Salón de la fama</p>
            <h1
              className="m-0 leading-relaxed"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)', color: 'var(--text)' }}
            >
              Ranking de aventureros
            </h1>
            <p className="m-0 mt-2 max-w-2xl text-lg" style={{ color: 'var(--text-muted)' }}>
              Los días completos mandan. Las tareas completadas desempatan la batalla por la cima.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-5 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
        <ScoreStat icon={<Users className="h-4 w-4" />} value={ranking ? ranking.length : '—'} label="Aventureros" />
        <ScoreStat icon={<Trophy className="h-4 w-4" />} value={totals?.completedDays ?? '—'} label="Días logrados" />
        <ScoreStat icon={<CheckSquare className="h-4 w-4" />} value={totals?.completedTasks ?? '—'} label="Tareas marcadas" />
        <ScoreStat icon={<Award className="h-4 w-4" />} value={ranking ? questTotals.totalDays : '—'} label="Días por jugador" />
      </div>

      <div
        className="mb-5 flex items-start gap-3 border-3 p-4"
        style={{ borderColor: 'rgba(255,170,0,0.55)', background: 'rgba(255,170,0,0.1)' }}
      >
        <Database className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--gold-bright)' }} />
        <p className="m-0 text-base leading-6" style={{ color: 'var(--text)' }}>
          <strong>{statusMessage.split('.')[0]}.</strong>{statusMessage.slice(statusMessage.indexOf('.') + 1)}
          <span className="mt-2 block text-sm" style={{ color: 'var(--text-muted)' }}>
            La identidad usa solo el nombre escrito: cualquiera puede suplantar a otro jugador. El ranking es compartido, pero todavía no es anti-trampas; eso requiere Supabase Auth o verificación del servidor de Minecraft.
          </span>
        </p>
      </div>

      {ranking && !username && (
        <div
          className="mb-5 flex items-start gap-3 border-3 p-4"
          style={{ borderColor: 'var(--grass)', background: 'rgba(91,135,49,0.12)' }}
        >
          <Pickaxe className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--grass-light)' }} />
          <p className="m-0 text-base leading-6" style={{ color: 'var(--text)' }}>
            Estás viendo el ranking como invitado. Iniciá sesión para que tus tareas se guarden y aparezcas con tu propio progreso.
          </p>
        </div>
      )}

      {ranking && !hasProgress && (
        <div
          className="mb-5 border-3 p-5 text-center"
          style={{ borderColor: 'var(--grass)', background: 'rgba(91,135,49,0.12)' }}
        >
          <Pickaxe className="mx-auto mb-2 h-7 w-7" style={{ color: 'var(--grass-light)' }} />
          <h2 className="m-0 text-lg font-bold" style={{ color: 'var(--text)' }}>
            Todavía no hay días conquistados
          </h2>
          <p className="m-0 mt-1 text-base" style={{ color: 'var(--text-muted)' }}>
            Marcá las cinco tareas de un día para convertirlo en un día completado y subir en el ranking.
          </p>
        </div>
      )}

      <section aria-labelledby="ranking-list-title">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="island-kicker mb-1">Clasificación</p>
            <h2 id="ranking-list-title" className="m-0 text-xl font-bold" style={{ color: 'var(--text)' }}>
              Aventureros de Snickerland
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="m-0 text-sm" style={{ color: 'var(--text-muted)' }}>
              Orden: días · tareas · nombre
            </p>
            <button
              type="button"
              onClick={() => void refreshRanking()}
              disabled={isRefreshing}
              className="mc-btn-logout inline-flex items-center gap-1.5 disabled:cursor-wait disabled:opacity-60"
              title="Actualizar ranking"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
          </div>
        </div>
        <RankingRows ranking={ranking} currentUsername={currentUsername} />
      </section>
    </main>
  )
}
