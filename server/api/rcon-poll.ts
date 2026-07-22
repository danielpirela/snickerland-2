import { Rcon } from 'rcon-client'

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || ''
const RCON_HOST = process.env.RCON_HOST || ''
const RCON_PORT = parseInt(process.env.RCON_PORT || '25575', 10)
const RCON_PASSWORD = process.env.RCON_PASSWORD || ''
const BRIDGE_TOKEN = process.env.CLAIM_BRIDGE_TOKEN || ''
const BRIDGE_URL = `${SUPABASE_URL}/functions/v1/claim-bridge`

interface PendingClaim {
  id: string
  username: string
  reward_amount: number
}

async function pollClaims() {
  const res = await fetch(BRIDGE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-bridge-token': BRIDGE_TOKEN },
    body: JSON.stringify({ action: 'poll', server_id: 'snickerland-prod', limit: 5 }),
  })
  if (!res.ok) return []
  const data: any = await res.json()
  return (data.claims || []) as PendingClaim[]
}

async function completeClaim(id: string) {
  await fetch(BRIDGE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-bridge-token': BRIDGE_TOKEN },
    body: JSON.stringify({ action: 'complete', id, server_id: 'snickerland-prod' }),
  })
}

async function releaseClaim(id: string, message: string) {
  await fetch(BRIDGE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-bridge-token': BRIDGE_TOKEN },
    body: JSON.stringify({ action: 'release', id, server_id: 'snickerland-prod', message }),
  })
}

export default defineEventHandler(async () => {
  if (!RCON_HOST || !RCON_PASSWORD) {
    return { ok: false, error: 'RCON not configured' }
  }

  const claims = await pollClaims()
  if (claims.length === 0) {
    return { ok: true, processed: 0 }
  }

  const results: any[] = []
  for (const claim of claims) {
    if (!/^[A-Za-z0-9_]{1,16}$/.test(claim.username) || claim.reward_amount <= 0) {
      await releaseClaim(claim.id, 'Invalid')
      results.push({ id: claim.id, status: 'released' })
      continue
    }

    try {
      const rcon = await Rcon.connect({
        host: RCON_HOST,
        port: RCON_PORT,
        password: RCON_PASSWORD,
        timeout: 10000,
      })
      const cmd = `eco add ${claim.username} ${claim.reward_amount}`
      await rcon.send(cmd)
      await rcon.end()
      await completeClaim(claim.id)
      results.push({ id: claim.id, status: 'paid' })
    } catch (err: any) {
      await releaseClaim(claim.id, err.message?.slice(0, 200) || 'RCON error')
      results.push({ id: claim.id, status: 'released' })
    }
  }

  return { ok: true, processed: results.length, results }
})
