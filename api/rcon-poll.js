import { Rcon } from 'rcon-client'

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || ''
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const RCON_HOST = process.env.RCON_HOST || ''
const RCON_PORT = parseInt(process.env.RCON_PORT || '25575', 10)
const RCON_PASSWORD = process.env.RCON_PASSWORD || ''
const BRIDGE_TOKEN = process.env.CLAIM_BRIDGE_TOKEN || ''
const BRIDGE_URL = `${SUPABASE_URL}/functions/v1/claim-bridge`

async function pollClaims() {
  const res = await fetch(BRIDGE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-bridge-token': BRIDGE_TOKEN },
    body: JSON.stringify({ action: 'poll', server_id: 'snickerland-prod', limit: 5 }),
  })
  if (!res.ok) return []
  const data = await res.json()
  return data.claims || []
}

async function completeClaim(id) {
  await fetch(BRIDGE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-bridge-token': BRIDGE_TOKEN },
    body: JSON.stringify({ action: 'complete', id, server_id: 'snickerland-prod' }),
  })
}

async function releaseClaim(id, message) {
  await fetch(BRIDGE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-bridge-token': BRIDGE_TOKEN },
    body: JSON.stringify({ action: 'release', id, server_id: 'snickerland-prod', message }),
  })
}

export default async function handler(req, res) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET || 'snickerland-cron'}`) {
    return res.status(401).json({ error: 'unauthorized' })
  }

  if (!RCON_HOST || !RCON_PASSWORD) {
    console.error('RCON not configured')
    return res.status(500).json({ ok: false, error: 'RCON not configured' })
  }

  const claims = await pollClaims()
  if (claims.length === 0) {
    return res.json({ ok: true, processed: 0 })
  }

  const results = []
  for (const claim of claims) {
    if (!/^[A-Za-z0-9_]{1,16}$/.test(claim.username) || claim.reward_amount <= 0) {
      await releaseClaim(claim.id, 'Invalid claim data')
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
      const command = `eco add ${claim.username} ${claim.reward_amount}`
      console.log(`RCON: ${command}`)
      await rcon.send(command)
      await rcon.end()
      await completeClaim(claim.id)
      results.push({ id: claim.id, status: 'paid' })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'RCON failed'
      console.error(`RCON error:`, message)
      await releaseClaim(claim.id, message.slice(0, 200))
      results.push({ id: claim.id, status: 'released', error: message })
    }
  }

  return res.json({ ok: true, processed: results.length, results })
}
