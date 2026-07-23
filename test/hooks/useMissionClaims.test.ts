import { describe, it, expect } from 'vitest'

// We test the sortMissionClaims and getMissionClaimsErrorMessage pure functions
// which don't require React rendering

describe('mission claims helpers', () => {
  describe('sortMissionClaims', () => {
    it('sorts by status priority (pending first, rejected last)', async () => {
      const { sortMissionClaims } = await import('#/lib/missionClaims')
      const claims = [
        { status: 'rejected', created_at: '2026-01-01', id: '3' },
        { status: 'pending', created_at: '2026-01-02', id: '1' },
        { status: 'paid', created_at: '2026-01-03', id: '2' },
      ] as any
      const sorted = sortMissionClaims(claims)
      expect(sorted[0].status).toBe('pending')
      expect(sorted[1].status).toBe('paid')
      expect(sorted[2].status).toBe('rejected')
    })

    it('within same status, sorts by created_at descending', async () => {
      const { sortMissionClaims } = await import('#/lib/missionClaims')
      const claims = [
        { status: 'pending', created_at: '2026-01-01T00:00:00Z', id: 'a' },
        { status: 'pending', created_at: '2026-01-03T00:00:00Z', id: 'b' },
        { status: 'pending', created_at: '2026-01-02T00:00:00Z', id: 'c' },
      ] as any
      const sorted = sortMissionClaims(claims)
      expect(sorted[0].id).toBe('b') // newest first
      expect(sorted[1].id).toBe('c')
      expect(sorted[2].id).toBe('a')
    })

    it('returns empty array for empty input', async () => {
      const { sortMissionClaims } = await import('#/lib/missionClaims')
      expect(sortMissionClaims([])).toEqual([])
    })
  })

  describe('getMissionClaimsErrorMessage', () => {
    it('returns the error message for MissionClaimsError', async () => {
      const { getMissionClaimsErrorMessage, MissionClaimsError } = await import('#/lib/missionClaims')
      const err = new MissionClaimsError('test error')
      expect(getMissionClaimsErrorMessage(err)).toBe('test error')
    })

    it('wraps generic errors', async () => {
      const { getMissionClaimsErrorMessage } = await import('#/lib/missionClaims')
      expect(getMissionClaimsErrorMessage(new Error('boom'))).toContain('boom')
    })

    it('handles non-error values', async () => {
      const { getMissionClaimsErrorMessage } = await import('#/lib/missionClaims')
      expect(getMissionClaimsErrorMessage('string error')).toContain('reclamo')
    })
  })

  describe('getMissionClaimKey', () => {
    it('formats key correctly', async () => {
      const { getMissionClaimKey } = await import('#/lib/missionClaims')
      expect(getMissionClaimKey('minero', 5)).toBe('minero:5')
      expect(getMissionClaimKey('general', 30)).toBe('general:30')
    })
  })

  describe('isMissionClaimRevoked', () => {
    it('returns true for rejected with revoke reason', async () => {
      const { isMissionClaimRevoked } = await import('#/lib/missionClaims')
      expect(isMissionClaimRevoked({
        status: 'rejected',
        last_error: 'Reclamo revocado: se desmarcó una tarea del día.',
      })).toBe(true)
    })

    it('returns false for rejected with other reason', async () => {
      const { isMissionClaimRevoked } = await import('#/lib/missionClaims')
      expect(isMissionClaimRevoked({
        status: 'rejected',
        last_error: 'other error',
      })).toBe(false)
    })

    it('returns false for non-rejected status', async () => {
      const { isMissionClaimRevoked } = await import('#/lib/missionClaims')
      expect(isMissionClaimRevoked({
        status: 'paid',
        last_error: null,
      })).toBe(false)
    })
  })
})
