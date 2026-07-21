import { createClient, type SupabaseClient } from 'jsr:@supabase/supabase-js@2'

const USERNAME_PATTERN = /^[A-Za-z0-9_]{1,16}$/
const SERVER_ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/
const ROLE_ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const MAX_ERROR_LENGTH = 240
const DEFAULT_BATCH_SIZE = 5
const MAX_BATCH_SIZE = 10
const LEASE_TIMEOUT_SECONDS = 900

type BridgeAction = 'poll' | 'complete' | 'release'

type BridgeClaim = {
  id: string
  username: string
  reward_amount: number
  role_id: string
  day: number
}

type JsonObject = Record<string, unknown>

const supabaseUrl = Deno.env.get('SUPABASE_URL')?.trim() ?? ''
const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')?.trim() ?? ''
const bridgeToken = Deno.env.get('CLAIM_BRIDGE_TOKEN')?.trim() ?? ''

const supabase: SupabaseClient | null = supabaseUrl && serviceRoleKey
  ? createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function jsonResponse(body: JsonObject, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'cache-control': 'no-store',
      'content-type': 'application/json; charset=utf-8',
    },
  })
}

function errorResponse(status: number, message: string): Response {
  return jsonResponse({ ok: false, error: message }, status)
}

function tokensEqual(received: string, expected: string): boolean {
  const receivedBytes = new TextEncoder().encode(received)
  const expectedBytes = new TextEncoder().encode(expected)
  let difference = receivedBytes.length ^ expectedBytes.length
  const length = Math.max(receivedBytes.length, expectedBytes.length)

  for (let index = 0; index < length; index += 1) {
    difference |= (receivedBytes[index] ?? 0) ^ (expectedBytes[index] ?? 0)
  }

  return difference === 0
}

function parseAction(value: unknown): BridgeAction | null {
  return value === 'poll' || value === 'complete' || value === 'release' ? value : null
}

function parseServerId(value: unknown): string | null {
  return typeof value === 'string' && SERVER_ID_PATTERN.test(value) ? value : null
}

function parseUuid(value: unknown): string | null {
  return typeof value === 'string' && UUID_PATTERN.test(value) ? value : null
}

function parseInteger(value: unknown, minimum: number, maximum: number): number | null {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= minimum && value <= maximum
    ? value
    : null
}

function parseSafeMessage(value: unknown, fallback: string): string | null {
  if (value === undefined) return fallback
  if (typeof value !== 'string' || value.length > MAX_ERROR_LENGTH) return null

  const sanitized = value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim()
  return sanitized || fallback
}

function parseClaim(value: unknown): BridgeClaim | null {
  if (!isJsonObject(value)) return null

  const id = parseUuid(value.id)
  const username = typeof value.username === 'string' && USERNAME_PATTERN.test(value.username)
    ? value.username
    : null
  const rewardAmount = parseInteger(value.reward_amount, 0, 2147483647)
  const roleId = typeof value.role_id === 'string' && ROLE_ID_PATTERN.test(value.role_id)
    ? value.role_id
    : null
  const day = parseInteger(value.day, 1, 30)

  if (!id || !username || rewardAmount === null || !roleId || day === null) return null

  return {
    id,
    username,
    reward_amount: rewardAmount,
    role_id: roleId,
    day,
  }
}

function getClient(): SupabaseClient {
  if (!supabase) throw new Error('Supabase service client is not configured')
  return supabase
}

async function releaseLease(
  client: SupabaseClient,
  id: string,
  serverId: string,
  message: string,
): Promise<boolean> {
  const { data, error } = await client
    .from('mission_claims')
    .update({
      status: 'pending',
      processing_server: null,
      processing_at: null,
      last_error: message,
    })
    .eq('id', id)
    .eq('status', 'processing')
    .eq('processing_server', serverId)
    .select('id')
    .maybeSingle()

  if (error) throw error
  return Boolean(data)
}

async function handlePoll(client: SupabaseClient, body: JsonObject): Promise<Response> {
  const serverId = parseServerId(body.server_id)
  const limit = body.limit === undefined
    ? DEFAULT_BATCH_SIZE
    : parseInteger(body.limit, 1, MAX_BATCH_SIZE)

  if (!serverId || limit === null) {
    return errorResponse(400, 'Invalid poll payload')
  }

  const { data, error } = await client.rpc('claim_bridge_poll', {
    p_server_id: serverId,
    p_limit: limit,
    p_stale_after_seconds: LEASE_TIMEOUT_SECONDS,
  })

  if (error) throw error
  if (!Array.isArray(data)) throw new Error('Bridge poll returned an invalid result')

  const claims: BridgeClaim[] = []
  const invalidClaimIds: string[] = []

  for (const value of data) {
    const claim = parseClaim(value)
    if (claim) {
      claims.push(claim)
      continue
    }

    if (isJsonObject(value)) {
      const id = parseUuid(value.id)
      if (id) invalidClaimIds.push(id)
    }
  }

  await Promise.all(
    invalidClaimIds.map((id) =>
      releaseLease(client, id, serverId, 'Invalid claim data rejected by the bridge'),
    ),
  )

  return jsonResponse({ ok: true, action: 'poll', claims })
}

async function handleComplete(client: SupabaseClient, body: JsonObject): Promise<Response> {
  const id = parseUuid(body.id)
  const serverId = parseServerId(body.server_id)

  if (!id || !serverId) return errorResponse(400, 'Invalid complete payload')

  const { data, error } = await client
    .from('mission_claims')
    .update({
      status: 'paid',
      paid_at: new Date().toISOString(),
      paid_by: `bridge:${serverId}`,
      processing_server: null,
      processing_at: null,
      last_error: null,
    })
    .eq('id', id)
    .eq('status', 'processing')
    .eq('processing_server', serverId)
    .select('id, status, paid_at, paid_by')
    .maybeSingle()

  if (error) throw error
  if (!data) return errorResponse(409, 'Claim is not leased by this server')

  return jsonResponse({ ok: true, action: 'complete', claim: data })
}

async function handleRelease(client: SupabaseClient, body: JsonObject): Promise<Response> {
  const id = parseUuid(body.id)
  const serverId = parseServerId(body.server_id)
  const message = parseSafeMessage(
    body.message ?? body.error,
    'Claim released by the bridge',
  )

  if (!id || !serverId || message === null) return errorResponse(400, 'Invalid release payload')

  const released = await releaseLease(client, id, serverId, message)
  if (!released) return errorResponse(409, 'Claim is not leased by this server')

  return jsonResponse({ ok: true, action: 'release', id })
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'Only POST is supported' }), {
      status: 405,
      headers: {
        allow: 'POST',
        'cache-control': 'no-store',
        'content-type': 'application/json; charset=utf-8',
      },
    })
  }

  if (!bridgeToken || !supabase) return errorResponse(500, 'Claim bridge is not configured')

  const receivedToken = request.headers.get('x-bridge-token')
  if (!receivedToken || !tokensEqual(receivedToken, bridgeToken)) {
    return errorResponse(401, 'Invalid bridge token')
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return errorResponse(400, 'Request body must be valid JSON')
  }

  if (!isJsonObject(body)) return errorResponse(400, 'Request body must be an object')

  const action = parseAction(body.action)
  if (!action) return errorResponse(400, 'Invalid bridge action')

  try {
    const client = getClient()
    if (action === 'poll') return await handlePoll(client, body)
    if (action === 'complete') return await handleComplete(client, body)
    return await handleRelease(client, body)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown bridge error'
    console.error('claim-bridge request failed:', message)
    return errorResponse(500, 'Claim bridge request failed')
  }
})
