import { getRoleById } from '#/data/quests'
import {
  isSupabaseConfigured,
  supabase,
  type MissionClaimRow,
  type MissionClaimStatus,
} from '#/lib/supabase'

export const SUPABASE_CLAIMS_REQUIRED_MESSAGE =
  'Los reclamos requieren Supabase configurado. Configurá VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY para guardar y consultar reclamos.'

export class MissionClaimsError extends Error {
  constructor(
    message: string,
    public readonly code: 'not-configured' | 'invalid' | 'query' = 'query',
  ) {
    super(message)
    this.name = 'MissionClaimsError'
  }
}

function getClient(): NonNullable<typeof supabase> {
  if (!isSupabaseConfigured || !supabase) {
    throw new MissionClaimsError(
      SUPABASE_CLAIMS_REQUIRED_MESSAGE,
      'not-configured',
    )
  }

  return supabase
}

function normalizeUsername(username: string): string {
  const normalized = username.trim()
  if (!normalized) {
    throw new MissionClaimsError(
      'Iniciá sesión con tu username de Minecraft para gestionar reclamos.',
      'invalid',
    )
  }

  return normalized
}

function getQuestReward(roleId: string, day: number): {
  roleId: string
  day: number
  amount: number
  title: string
} {
  const role = getRoleById(roleId)
  const dayQuest = role?.days.find((questDay) => questDay.day === day)
  if (!role || !dayQuest) {
    throw new MissionClaimsError(
      'No se encontró la misión seleccionada. Actualizá la página e intentá de nuevo.',
      'invalid',
    )
  }

  return {
    roleId: role.id,
    day: dayQuest.day,
    amount: dayQuest.reward.amount,
    title: dayQuest.reward.title,
  }
}

export function getMissionClaimKey(roleId: string, day: number): string {
  return `${roleId}:${day}`
}

export async function getMissionClaims(username?: string): Promise<MissionClaimRow[]> {
  const client = getClient()
  const query = client.from('mission_claims').select('*')
  const filteredQuery = username === undefined
    ? query
    : query.eq('username', normalizeUsername(username))
  const { data, error } = await filteredQuery.order('created_at', { ascending: false })

  if (error) throw error
  return sortMissionClaims(data ?? [])
}

async function getMissionClaim(
  username: string,
  roleId: string,
  day: number,
): Promise<MissionClaimRow | null> {
  const client = getClient()
  const { data, error } = await client
    .from('mission_claims')
    .select('*')
    .eq('username', username)
    .eq('role_id', roleId)
    .eq('day', day)
    .maybeSingle()

  if (error) throw error
  return data
}

/** Inserts a pending claim using reward data from the canonical quest definitions. */
export async function createMissionClaim(
  username: string,
  roleId: string,
  day: number,
): Promise<MissionClaimRow> {
  const client = getClient()
  const normalizedUsername = normalizeUsername(username)
  const reward = getQuestReward(roleId, day)
  const { data, error } = await client
    .from('mission_claims')
    .insert({
      username: normalizedUsername,
      role_id: reward.roleId,
      day: reward.day,
      reward_amount: reward.amount,
      reward_title: reward.title,
    })
    .select('*')
    .single()

  if (!error && data) return data

  if (error?.code === '23505') {
    const existing = await getMissionClaim(
      normalizedUsername,
      reward.roleId,
      reward.day,
    )
    if (existing) return existing
  }

  if (error) throw error
  throw new MissionClaimsError(
    'Supabase no devolvió el reclamo creado. Actualizá la página e intentá de nuevo.',
  )
}

/** Marks only a pending claim as paid; callers cannot supply an arbitrary status. */
export async function markMissionClaimPaid(
  id: string,
  paidBy: string,
): Promise<MissionClaimRow> {
  const client = getClient()
  const normalizedPaidBy = normalizeUsername(paidBy)
  const { data, error } = await client
    .from('mission_claims')
    .update({
      status: 'paid',
      paid_at: new Date().toISOString(),
      paid_by: normalizedPaidBy,
    })
    .eq('id', id)
    .eq('status', 'pending')
    .select('*')
    .maybeSingle()

  if (error) throw error
  if (data) return data

  const existing = await client
    .from('mission_claims')
    .select('*')
    .eq('id', id)
    .maybeSingle()
  if (existing.error) throw existing.error
  if (existing.data) return existing.data

  throw new MissionClaimsError(
    'No se encontró el reclamo. Actualizá la página e intentá de nuevo.',
  )
}

const claimStatusOrder: Record<MissionClaimStatus, number> = {
  pending: 0,
  paid: 1,
  rejected: 2,
}

export function sortMissionClaims(
  claims: readonly MissionClaimRow[],
): MissionClaimRow[] {
  return [...claims].sort((a, b) => {
    const statusOrder = claimStatusOrder[a.status] - claimStatusOrder[b.status]
    if (statusOrder !== 0) return statusOrder

    const createdAtOrder = Date.parse(b.created_at) - Date.parse(a.created_at)
    if (Number.isFinite(createdAtOrder) && createdAtOrder !== 0) {
      return createdAtOrder
    }

    return b.id.localeCompare(a.id)
  })
}

export function getMissionClaimsErrorMessage(error: unknown): string {
  if (error instanceof MissionClaimsError) return error.message

  if (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    return `No se pudo procesar el reclamo: ${error.message}`
  }

  return 'No se pudo procesar el reclamo. Intentá de nuevo.'
}
