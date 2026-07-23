import { createServerFn } from '@tanstack/react-start'
import { supabase, isSupabaseConfigured, type QuestTree } from '#/lib/supabase'

/**
 * Server-side quest loader.
 *
 * Joins roles → days → tasks → rewards filtered by the given role IDs.
 * Returns a typed quest tree. Falls back to empty array when Supabase is
 * not configured.
 */
export const loadQuests = createServerFn({ method: 'GET' })
  .validator((input: unknown) => {
    if (!Array.isArray(input)) throw new Error('Expected array of role IDs')
    return input as string[]
  })
  .handler(async ({ data: roleIds }): Promise<QuestTree> => {
    if (!isSupabaseConfigured || !supabase) return []

    const { data, error } = await supabase
      .from('roles')
      .select('id, name, emoji, color, days(id, role_id, day, title, tasks(id, day_id, task_index, title, amount), rewards(id, role_id, day_id, amount, title))')
      .in('id', roleIds)
      .order('day', { referencedTable: 'days', ascending: true })
      .order('task_index', { referencedTable: 'days.tasks', ascending: true })

    if (error) throw error

    return (data ?? []) as unknown as QuestTree
  })
