/**
 * Seed script: reads src/data/quests.ts Role array and upserts into
 * public.roles, public.days, public.tasks, and public.rewards.
 *
 * Usage:
 *   node scripts/seed-quests.mjs [--validate]
 *
 *   --validate  Dry-run mode: prints row counts without inserting.
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY and SUPABASE_URL in the environment
 * (or a .env.local file next to the workspace root).
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// ---------- env loading (simple manual loader for .env.local) ----------

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

function loadEnv() {
  const envPath = resolve(root, '.env.local')
  if (existsSync(envPath)) {
    const lines = readFileSync(envPath, 'utf-8').split('\n')
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '')
      if (!process.env[key]) process.env[key] = value
    }
  }
}

loadEnv()

const SUPABASE_URL = process.env.SUPABASE_URL?.trim()
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.'
  )
  console.error(
    'Set them in .env.local or export them before running this script.'
  )
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})

const validateOnly = process.argv.includes('--validate')

// ---------- dynamic import of quests.ts ----------

/**
 * Reads the quests.ts file and extracts the roles array via regex-based parsing.
 * This avoids needing ts-node or esbuild to load the TypeScript module.
 */
async function loadRoles() {
  const questsPath = resolve(root, 'src', 'data', 'quests.ts')
  const source = readFileSync(questsPath, 'utf-8')

  // Extract the JSON-like array after `export const roles: Role[] = `
  const match = source.match(/export const roles: Role\[\]\s*=\s*(\[[\s\S]*\]);?/)
  if (!match) {
    throw new Error('Could not find `export const roles` in quests.ts')
  }

  // Use eval in a controlled way — the file is auto-generated and trusted
  const roles = eval(`(${match[1]})`)
  return /** @type {import('../src/data/quests').Role[]} */ (roles)
}

// ---------- main ----------

async function main() {
  console.log(validateOnly ? '🔍 DRY-RUN mode (--validate)' : '🌱 Seeding quest tables...')

  const roles = await loadRoles()
  console.log(`Loaded ${roles.length} roles from quests.ts`)

  let totalRoles = 0
  let totalDays = 0
  let totalTasks = 0
  let totalRewards = 0

  for (const role of roles) {
    totalRoles++

    if (!validateOnly) {
      const { error: roleError } = await supabase
        .from('roles')
        .upsert({
          id: role.id,
          name: role.name,
          emoji: role.emoji,
          color: role.color,
        }, { onConflict: 'id' })

      if (roleError) {
        console.error(`❌ Failed to upsert role "${role.id}":`, roleError.message)
        process.exit(1)
      }
    }

    for (const dayQuest of role.days) {
      totalDays++

      let dayId = null
      if (!validateOnly) {
        const { data: dayRow, error: dayError } = await supabase
          .from('days')
          .upsert({
            role_id: role.id,
            day: dayQuest.day,
            title: dayQuest.title,
          }, { onConflict: 'role_id,day' })
          .select('id')
          .single()

        if (dayError) {
          console.error(
            `❌ Failed to upsert day ${role.id}/day${dayQuest.day}:`,
            dayError.message
          )
          process.exit(1)
        }
        dayId = dayRow.id
      }

      for (let i = 0; i < dayQuest.tasks.length; i++) {
        totalTasks++
        if (!validateOnly && dayId) {
          const task = dayQuest.tasks[i]
          const { error: taskError } = await supabase
            .from('tasks')
            .upsert({
              day_id: dayId,
              task_index: i,
              title: task.title,
              amount: task.amount,
            }, { onConflict: 'day_id,task_index' })

          if (taskError) {
            console.error(
              `❌ Failed to upsert task ${role.id}/day${dayQuest.day}/task${i}:`,
              taskError.message
            )
            process.exit(1)
          }
        }
      }

      // Reward
      totalRewards++
      if (!validateOnly && dayId) {
        const { error: rewardError } = await supabase
          .from('rewards')
          .upsert({
            role_id: role.id,
            day_id: dayId,
            amount: dayQuest.reward.amount,
            title: dayQuest.reward.title,
          }, { onConflict: 'day_id' })

        if (rewardError) {
          console.error(
            `❌ Failed to upsert reward ${role.id}/day${dayQuest.day}:`,
            rewardError.message
          )
          process.exit(1)
        }
      }
    }
  }

  console.log('\n--- Seed Summary ---')
  console.log(`Roles:   ${totalRoles}`)
  console.log(`Days:    ${totalDays}`)
  console.log(`Tasks:   ${totalTasks}`)
  console.log(`Rewards: ${totalRewards}`)
  console.log(`Total rows: ${totalRoles + totalDays + totalTasks + totalRewards}`)

  if (validateOnly) {
    // Verify row counts
    const { count: roleCount, error: rcErr } = await supabase
      .from('roles').select('*', { count: 'exact', head: true })
    const { count: dayCount, error: dcErr } = await supabase
      .from('days').select('*', { count: 'exact', head: true })
    const { count: taskCount, error: tcErr } = await supabase
      .from('tasks').select('*', { count: 'exact', head: true })
    const { count: rewardCount, error: rwcErr } = await supabase
      .from('rewards').select('*', { count: 'exact', head: true })

    if (rcErr) console.error('Failed to count roles:', rcErr.message)
    if (dcErr) console.error('Failed to count days:', dcErr.message)
    if (tcErr) console.error('Failed to count tasks:', tcErr.message)
    if (rwcErr) console.error('Failed to count rewards:', rwcErr.message)

    console.log('\n--- Current DB Counts ---')
    console.log(`Roles:   ${roleCount ?? '?'}`)
    console.log(`Days:    ${dayCount ?? '?'}`)
    console.log(`Tasks:   ${taskCount ?? '?'}`)
    console.log(`Rewards: ${rewardCount ?? '?'}`)

    const valid = roleCount === totalRoles
      && dayCount === totalDays
      && taskCount === totalTasks
      && rewardCount === totalRewards

    if (valid) {
      console.log('\n✅ Row counts match source data.')
    } else {
      console.log('\n⚠️  Row counts differ from source data.')
    }
  } else {
    console.log('\n✅ Seed complete.')
  }
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
