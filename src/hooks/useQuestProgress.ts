import { useAuth } from '#/contexts/AuthContext'
import { useState, useEffect, useCallback } from 'react'

const STORAGE_PREFIX = 'snickerland-progress:'

export interface QuestProgress {
  /** "roleId:dayNumber" → array of completed task indices */
  [key: string]: number[]
}

function readProgress(username: string): QuestProgress {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${username}`)
    return raw ? (JSON.parse(raw) as QuestProgress) : {}
  } catch {
    return {}
  }
}

function saveProgress(username: string, progress: QuestProgress): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(
    `${STORAGE_PREFIX}${username}`,
    JSON.stringify(progress),
  )
}

function buildKey(roleId: string, day: number): string {
  return `${roleId}:${day}`
}

export function useQuestProgress() {
  const { username } = useAuth()

  const [progress, setProgress] = useState<QuestProgress>(() =>
    username ? readProgress(username) : {},
  )

  // Re-sync when username changes (login / logout / tab switch)
  useEffect(() => {
    setProgress(username ? readProgress(username) : {})
  }, [username])

  const persist = useCallback(
    (p: QuestProgress) => {
      if (!username) return
      saveProgress(username, p)
      setProgress(p)
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
      if (!username) return
      const next: QuestProgress = { ...progress }
      const key = buildKey(roleId, day)
      const tasks = [...(next[key] ?? [])]
      const idx = tasks.indexOf(taskIndex)

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

      persist(next)
    },
    [username, progress, persist],
  )

  /** True when every task of a day is checked (defaults to 5 tasks). */
  const areAllTasksCompleted = useCallback(
    (roleId: string, day: number, total: number = 5): boolean => {
      return (progress[buildKey(roleId, day)] ?? []).length >= total
    },
    [progress],
  )

  /** Number of fully-completed days for a role. */
  const getCompletedDays = useCallback(
    (roleId: string): number => {
      const prefix = `${roleId}:`
      let count = 0
      for (const key of Object.keys(progress)) {
        if (key.startsWith(prefix) && (progress[key] ?? []).length >= 5) {
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
