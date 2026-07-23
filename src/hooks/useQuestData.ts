import { useState, useEffect, useRef, useMemo } from 'react'
import { loadQuests } from '#/lib/questLoader'
import { getRoleById, type Role } from '#/data/quests'
import { isSupabaseConfigured } from '#/lib/supabase'
import type { QuestDay, QuestRole, QuestTask } from '#/lib/supabase'

/**
 * Converts the new server-side quest data into the legacy Role format
 * that existing components already consume.
 */
function toLegacyRole(qr: QuestRole): Role {
  return {
    id: qr.id,
    name: qr.name,
    emoji: qr.emoji,
    color: qr.color,
    days: qr.days.map((d: QuestDay) => ({
      day: d.day,
      title: d.title,
      tasks: d.tasks.map((t: QuestTask) => ({
        title: t.title,
        item: '',
        amount: t.amount,
        icon: '',
      })),
      reward: {
        title: d.rewards[0]?.title ?? '',
        amount: d.rewards[0]?.amount ?? 0,
        icon: '',
      },
    })),
  }
}

export interface UseQuestDataResult {
  /** True while the server function is fetching. */
  isLoading: boolean
  /** Error message, or null. */
  error: string | null
  /** The loaded quest tree (server-side data). */
  questTree: QuestRole[] | null
  /** Look up a role by ID. When server data is loaded, returns the converted role.
   *  Falls back to the static quests.ts import when Supabase is not configured. */
  getRoleById: (roleId: string) => Role | undefined
  /** Retry fetching quest data. */
  retry: () => void
}

const ALL_ROLE_IDS = ['agricultor', 'alquimista', 'arquitecto', 'cocinero',
  'explorador', 'ganadero', 'general', 'herrero', 'ingeniero', 'lenador',
  'mecanico', 'minero', 'pescador', 'tabernero']

/**
 * Hook that loads quest definitions.
 *
 * When Supabase is configured, it fetches the full quest tree via
 * the server function on mount. Otherwise it falls back to the
 * static quests.ts import immediately.
 */
export function useQuestData(): UseQuestDataResult {
  const [questTree, setQuestTree] = useState<QuestRole[] | null>(null)
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured)
  const [error, setError] = useState<string | null>(null)
  const mountedRef = useRef(true)
  const retryKey = useRef(0)

  const retry = () => {
    retryKey.current++
    setError(null)
    setIsLoading(true)
  }

  useEffect(() => {
    mountedRef.current = true

    if (!isSupabaseConfigured) {
      setIsLoading(false)
      return () => { mountedRef.current = false }
    }

    let cancelled = false

    loadQuests({ data: ALL_ROLE_IDS }).then((result: unknown) => {
      if (cancelled || !mountedRef.current) return
      setQuestTree(result as QuestRole[])
      setError(null)
    }).catch((err: unknown) => {
      if (cancelled || !mountedRef.current) return
      setError(err instanceof Error ? err.message : 'Failed to load quests')
    }).finally(() => {
      if (!cancelled && mountedRef.current) setIsLoading(false)
    })

    return () => {
      mountedRef.current = false
      cancelled = true
    }
  }, [retryKey.current])

  const getRoleByIdMemo = useMemo(() => {
    const serverMap = new Map<string, QuestRole>()
    if (questTree) {
      for (const qr of questTree) serverMap.set(qr.id, qr)
    }

    return (roleId: string): Role | undefined => {
      if (serverMap.has(roleId)) {
        return toLegacyRole(serverMap.get(roleId)!)
      }
      // Fallback to static file
      return getRoleById(roleId)
    }
  }, [questTree])

  return {
    isLoading,
    error,
    questTree,
    getRoleById: getRoleByIdMemo,
    retry,
  }
}
