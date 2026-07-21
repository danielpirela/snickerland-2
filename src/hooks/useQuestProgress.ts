import { useAuth } from '#/contexts/AuthContext'
import { roles } from '#/data/quests'
import {
  MISSION_PROGRESS_PAGE_SIZE,
  MISSION_PROGRESS_UPDATED_EVENT,
  isSupabaseConfigured,
  supabase,
  type MissionProgressTask,
} from '#/lib/supabase'
import { useState, useEffect, useCallback, useRef } from 'react'

export const PROGRESS_STORAGE_PREFIX = 'snickerland-progress:'

export interface QuestProgress {
  /** "roleId:dayNumber" → array of completed task indices */
  [key: string]: number[]
}

export interface UserProgressSummary {
  completedDays: number
  totalDays: number
  completedTasks: number
  totalTasks: number
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isTaskIndex(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0
}

function sanitizeProgress(value: unknown): QuestProgress {
  if (!isRecord(value)) return {}

  const sanitized: QuestProgress = {}
  for (const [key, taskIndexes] of Object.entries(value)) {
    if (!Array.isArray(taskIndexes)) continue

    const validIndexes = [...new Set(taskIndexes.filter(isTaskIndex))]
    if (validIndexes.length > 0) {
      sanitized[key] = validIndexes
    }
  }

  return sanitized
}

export function getProgressStorageKey(username: string): string {
  return `${PROGRESS_STORAGE_PREFIX}${username}`
}

/** Reads one user's progress without touching localStorage during SSR. */
export function readUserProgress(username: string): QuestProgress {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(getProgressStorageKey(username))
    return raw ? sanitizeProgress(JSON.parse(raw) as unknown) : {}
  } catch {
    return {}
  }
}

function saveProgress(username: string, progress: QuestProgress): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(
      getProgressStorageKey(username),
      JSON.stringify(progress),
    )
  } catch {
    // localStorage can be unavailable or full; in-memory state still works.
  }
}

function buildKey(roleId: string, day: number): string {
  return `${roleId}:${day}`
}

function buildTaskKey(roleId: string, day: number, taskIndex: number): string {
  return `${roleId}:${day}:${taskIndex}`
}

function isRemoteTaskIndex(value: unknown): value is number {
  return isTaskIndex(value) && value <= 4
}

function isMissionProgressTask(value: unknown): value is MissionProgressTask {
  if (!isRecord(value)) return false

  return (
    typeof value.username === 'string' &&
    value.username.trim().length > 0 &&
    typeof value.role_id === 'string' &&
    value.role_id.trim().length > 0 &&
    typeof value.day === 'number' &&
    Number.isInteger(value.day) &&
    value.day >= 1 &&
    value.day <= 30 &&
    isRemoteTaskIndex(value.task_index)
  )
}

function notifyProgressUpdated(): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(MISSION_PROGRESS_UPDATED_EVENT))
}

function parseProgressDayKey(key: string): { roleId: string; day: number } | null {
  const separatorIndex = key.lastIndexOf(':')
  if (separatorIndex <= 0) return null

  const roleId = key.slice(0, separatorIndex)
  const day = Number(key.slice(separatorIndex + 1))
  if (!roleId || !Number.isInteger(day) || day < 1 || day > 30) return null

  return { roleId, day }
}

function getProgressRows(username: string, progress: QuestProgress): MissionProgressTask[] {
  const rows: MissionProgressTask[] = []
  const seen = new Set<string>()

  for (const [dayKey, taskIndexes] of Object.entries(progress)) {
    const parsedKey = parseProgressDayKey(dayKey)
    if (!parsedKey) continue

    for (const taskIndex of taskIndexes) {
      if (!isRemoteTaskIndex(taskIndex)) continue

      const taskKey = buildTaskKey(parsedKey.roleId, parsedKey.day, taskIndex)
      if (seen.has(taskKey)) continue
      seen.add(taskKey)
      rows.push({
        username,
        role_id: parsedKey.roleId,
        day: parsedKey.day,
        task_index: taskIndex,
      })
    }
  }

  return rows
}

function mergeRemoteProgress(
  localProgress: QuestProgress,
  remoteRows: readonly MissionProgressTask[],
  localMutations: ReadonlyMap<string, LocalMutation>,
): QuestProgress {
  const merged: QuestProgress = sanitizeProgress(localProgress)

  for (const row of remoteRows) {
    if (!isMissionProgressTask(row)) continue

    const taskKey = buildTaskKey(row.role_id, row.day, row.task_index)
    if (localMutations.get(taskKey) === 'unchecked') continue

    const dayKey = buildKey(row.role_id, row.day)
    const tasks = new Set(merged[dayKey] ?? [])
    tasks.add(row.task_index)
    merged[dayKey] = [...tasks].sort((a, b) => a - b)
  }

  return merged
}

type LocalMutation = 'checked' | 'unchecked'
type LocalMutationMap = Map<string, LocalMutation>

function getLocalMutationMap(
  mutations: Map<string, LocalMutationMap>,
  username: string,
): LocalMutationMap {
  const existing = mutations.get(username)
  if (existing) return existing

  const created: LocalMutationMap = new Map()
  mutations.set(username, created)
  return created
}

function queueRemoteMutation(
  queue: Map<string, Promise<void>>,
  queueKey: string,
  mutation: () => Promise<void>,
): void {
  const previous = queue.get(queueKey) ?? Promise.resolve()
  const next = previous
    .catch(() => undefined)
    .then(async () => {
      try {
        await mutation()
        notifyProgressUpdated()
      } catch {
        // Remote failures never replace the local optimistic state.
      }
    })

  queue.set(queueKey, next)
  void next.finally(() => {
    if (queue.get(queueKey) === next) {
      queue.delete(queueKey)
    }
  })
}

async function fetchUserProgress(
  client: NonNullable<typeof supabase>,
  username: string,
): Promise<MissionProgressTask[]> {
  const rows: MissionProgressTask[] = []

  for (let offset = 0; ; offset += MISSION_PROGRESS_PAGE_SIZE) {
    const { data, error } = await client
      .from('mission_progress')
      .select('username, role_id, day, task_index')
      .eq('username', username)
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

function getCompletedTaskCount(taskIndexes: number[] | undefined, total: number): number {
  return new Set(
    (taskIndexes ?? []).filter(
      (index) => Number.isInteger(index) && index >= 0 && index < total,
    ),
  ).size
}

export function getQuestTotals(): Pick<UserProgressSummary, 'totalDays' | 'totalTasks'> {
  let totalDays = 0
  let totalTasks = 0

  for (const role of roles) {
    totalDays += role.days.length
    totalTasks += role.days.reduce((total, day) => total + day.tasks.length, 0)
  }

  return { totalDays, totalTasks }
}

/** Summarizes checked tasks using the quest data as the source of truth. */
export function summarizeProgress(progress: QuestProgress): UserProgressSummary {
  const summary: UserProgressSummary = {
    completedDays: 0,
    totalDays: 0,
    completedTasks: 0,
    totalTasks: 0,
  }

  for (const role of roles) {
    for (const day of role.days) {
      const completedTasks = getCompletedTaskCount(
        progress[buildKey(role.id, day.day)],
        day.tasks.length,
      )

      summary.totalDays++
      summary.totalTasks += day.tasks.length
      summary.completedTasks += completedTasks
      if (completedTasks === day.tasks.length) {
        summary.completedDays++
      }
    }
  }

  return summary
}

export function getUserProgressSummary(username: string): UserProgressSummary {
  return summarizeProgress(readUserProgress(username))
}

export function useQuestProgress() {
  const { username } = useAuth()

  const [progress, setProgress] = useState<QuestProgress>(() =>
    username ? readUserProgress(username) : {},
  )
  const progressRef = useRef(progress)
  const localMutationsRef = useRef(new Map<string, LocalMutationMap>())
  const remoteQueueRef = useRef(new Map<string, Promise<void>>())
  const mountedRef = useRef(false)
  const syncStateRef = useRef<{
    username: string | null
    generation: number
    promise: Promise<void> | null
    completed: boolean
  }>({
    username: null,
    generation: 0,
    promise: null,
    completed: false,
  })

  useEffect(() => {
    mountedRef.current = true
    const localProgress = username ? readUserProgress(username) : {}
    progressRef.current = localProgress
    setProgress(localProgress)

    const syncState = syncStateRef.current
    if (syncState.username !== username) {
      syncState.username = username
      syncState.generation++
      syncState.promise = null
      syncState.completed = false
    }

    const generation = syncState.generation
    const client = supabase

    if (
      !username ||
      !isSupabaseConfigured ||
      !client ||
      syncState.promise ||
      syncState.completed
    ) {
      return () => {
        mountedRef.current = false
      }
    }

    const localMutations = getLocalMutationMap(
      localMutationsRef.current,
      username,
    )
    const isActive = (): boolean =>
      mountedRef.current &&
      syncStateRef.current.username === username &&
      syncStateRef.current.generation === generation

    const syncPromise = (async () => {
      try {
        const remoteRows = await fetchUserProgress(client, username)
        if (!isActive()) return

        const merged = mergeRemoteProgress(
          readUserProgress(username),
          remoteRows,
          localMutations,
        )
        if (!isActive()) return

        progressRef.current = merged
        saveProgress(username, merged)
        setProgress(merged)

        const remoteTaskKeys = new Set(
          remoteRows
            .filter(isMissionProgressTask)
            .map((row) => buildTaskKey(row.role_id, row.day, row.task_index)),
        )

        for (const row of getProgressRows(username, merged)) {
          const taskKey = buildTaskKey(row.role_id, row.day, row.task_index)
          if (
            !remoteTaskKeys.has(taskKey) &&
            localMutations.get(taskKey) !== 'unchecked'
          ) {
            queueRemoteMutation(
              remoteQueueRef.current,
              `${username}\u0000${taskKey}`,
              async () => {
                const { error } = await client
                  .from('mission_progress')
                  .upsert(row, {
                    onConflict: 'username,role_id,day,task_index',
                  })
                if (error) throw error
              },
            )
          }
        }

        for (const [taskKey, mutation] of localMutations) {
          if (mutation !== 'unchecked') continue
          const separatorIndex = taskKey.lastIndexOf(':')
          const daySeparatorIndex = taskKey.lastIndexOf(':', separatorIndex - 1)
          if (daySeparatorIndex <= 0 || separatorIndex <= daySeparatorIndex) {
            continue
          }

          const roleId = taskKey.slice(0, daySeparatorIndex)
          const day = Number(taskKey.slice(daySeparatorIndex + 1, separatorIndex))
          const taskIndex = Number(taskKey.slice(separatorIndex + 1))
          if (
            !roleId ||
            !Number.isInteger(day) ||
            !Number.isInteger(taskIndex)
          ) {
            continue
          }

          queueRemoteMutation(
            remoteQueueRef.current,
            `${username}\u0000${taskKey}`,
            async () => {
              const { error } = await client
                .from('mission_progress')
                .delete()
                .eq('username', username)
                .eq('role_id', roleId)
                .eq('day', day)
                .eq('task_index', taskIndex)
              if (error) throw error
            },
          )
        }
      } catch {
        // Keep the local optimistic progress when Supabase is unavailable.
      }
    })()

    syncState.promise = syncPromise
    void syncPromise.finally(() => {
      if (
        syncStateRef.current.username === username &&
        syncStateRef.current.generation === generation &&
        syncStateRef.current.promise === syncPromise
      ) {
        syncStateRef.current.promise = null
        syncStateRef.current.completed = true
      }
    })

    return () => {
      mountedRef.current = false
    }
  }, [username])

  const persist = useCallback(
    (p: QuestProgress) => {
      if (!username) return
      progressRef.current = p
      saveProgress(username, p)
      setProgress(p)
      notifyProgressUpdated()
    },
    [username],
  )

  /** Returns whether a specific task index is marked complete. */
  const isTaskCompleted = useCallback(
    (roleId: string, day: number, taskIndex: number): boolean => {
      return (progress[buildKey(roleId, day)] ?? []).includes(taskIndex)
    },
    [progress],
  )

  /** Toggles a single task. Writes immediately to localStorage. */
  const toggleTask = useCallback(
    (roleId: string, day: number, taskIndex: number) => {
      if (
        !username ||
        !roleId ||
        !Number.isInteger(day) ||
        day < 1 ||
        day > 30 ||
        !isRemoteTaskIndex(taskIndex)
      ) {
        return
      }

      const next: QuestProgress = { ...progressRef.current }
      const key = buildKey(roleId, day)
      const tasks = [...(next[key] ?? [])]
      const idx = tasks.indexOf(taskIndex)
      const nextMutation: LocalMutation = idx >= 0 ? 'unchecked' : 'checked'

      if (idx >= 0) {
        tasks.splice(idx, 1)
      } else {
        tasks.push(taskIndex)
      }

      if (tasks.length === 0) {
        delete next[key]
      } else {
        next[key] = tasks
      }

      getLocalMutationMap(localMutationsRef.current, username).set(
        buildTaskKey(roleId, day, taskIndex),
        nextMutation,
      )
      persist(next)

      const client = supabase
      if (isSupabaseConfigured && client) {
        const taskKey = buildTaskKey(roleId, day, taskIndex)
        queueRemoteMutation(
          remoteQueueRef.current,
          `${username}\u0000${taskKey}`,
          async () => {
            if (nextMutation === 'checked') {
              const { error } = await client
                .from('mission_progress')
                .upsert(
                  {
                    username,
                    role_id: roleId,
                    day,
                    task_index: taskIndex,
                  },
                  { onConflict: 'username,role_id,day,task_index' },
                )
              if (error) throw error
              return
            }

            const { error } = await client
              .from('mission_progress')
              .delete()
              .eq('username', username)
              .eq('role_id', roleId)
              .eq('day', day)
              .eq('task_index', taskIndex)
            if (error) throw error
          },
        )
      }
    },
    [username, persist],
  )

  /** True when every task of a day is checked (defaults to 5 tasks). */
  const areAllTasksCompleted = useCallback(
    (roleId: string, day: number, total: number = 5): boolean => {
      return getCompletedTaskCount(progress[buildKey(roleId, day)], total) >= total
    },
    [progress],
  )

  /** Number of fully-completed days for a role. */
  const getCompletedDays = useCallback(
    (roleId: string): number => {
      const prefix = `${roleId}:`
      let count = 0
      for (const key of Object.keys(progress)) {
        if (key.startsWith(prefix) && getCompletedTaskCount(progress[key], 5) >= 5) {
          count++
        }
      }
      return count
    },
    [progress],
  )

  /** Returns the array of completed task indices for a given day. */
  const getDayProgress = useCallback(
    (roleId: string, day: number): number[] => {
      return progress[buildKey(roleId, day)] ?? []
    },
    [progress],
  )

  return {
    progress,
    isTaskCompleted,
    toggleTask,
    areAllTasksCompleted,
    getCompletedDays,
    getDayProgress,
  }
}
