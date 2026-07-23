/**
 * One-time progress migration: reads localStorage progress and upserts into
 * the mission_progress table on first post-deploy login.
 *
 * - Runs once per user (tracked via localStorage flag `snickerland-migration-v2`).
 * - Uses ON CONFLICT DO NOTHING for idempotency.
 * - On failure: localStorage remains authoritative; retry on next login.
 */

import { supabase, isSupabaseConfigured } from '#/lib/supabase'
import { readUserProgress } from '#/hooks/useQuestProgress'

const MIGRATION_FLAG_KEY = 'snickerland-migration-v2'

/**
 * Returns true if the one-time progress migration has already been
 * completed for the current browser.
 */
export function isMigrationCompleted(): boolean {
  if (typeof window === 'undefined') return true
  return window.localStorage.getItem(MIGRATION_FLAG_KEY) === 'true'
}

/**
 * Reads localStorage progress for the given username and batch-upserts
 * all completed tasks into mission_progress.
 *
 * Returns the number of rows upserted, or -1 on failure.
 * Idempotent — safe to call multiple times (subsequent calls are no-ops
 * if the flag is already set).
 */
export async function migrateProgress(username: string): Promise<number> {
  if (typeof window === 'undefined') return 0
  if (isMigrationCompleted()) return 0
  if (!isSupabaseConfigured || !supabase) return -1

  const progress = readUserProgress(username)
  const rows: { username: string; role_id: string; day: number; task_index: number }[] = []

  for (const [key, taskIndexes] of Object.entries(progress)) {
    const separatorIndex = key.lastIndexOf(':')
    if (separatorIndex <= 0) continue

    const roleId = key.slice(0, separatorIndex)
    const day = Number(key.slice(separatorIndex + 1))
    if (!roleId || !Number.isInteger(day) || day < 1 || day > 30) continue

    for (const taskIndex of taskIndexes) {
      if (
        typeof taskIndex !== 'number' ||
        !Number.isInteger(taskIndex) ||
        taskIndex < 0 ||
        taskIndex > 4
      ) {
        continue
      }

      rows.push({
        username,
        role_id: roleId,
        day,
        task_index: taskIndex,
      })
    }
  }

  if (rows.length === 0) {
    // Nothing to migrate — mark complete anyway
    window.localStorage.setItem(MIGRATION_FLAG_KEY, 'true')
    return 0
  }

  try {
    const { error } = await supabase
      .from('mission_progress')
      .upsert(rows, {
        onConflict: 'username,role_id,day,task_index',
        ignoreDuplicates: true,
      })

    if (error) throw error

    window.localStorage.setItem(MIGRATION_FLAG_KEY, 'true')
    return rows.length
  } catch {
    // Migration failed — retry on next login
    return -1
  }
}
