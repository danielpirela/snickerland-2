import { describe, it, expect, beforeEach, vi } from 'vitest'
import { isMigrationCompleted, migrateProgress } from '#/lib/migration'

describe('migration', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  describe('isMigrationCompleted', () => {
    it('returns false by default', () => {
      expect(isMigrationCompleted()).toBe(false)
    })

    it('returns true after flag is set', () => {
      localStorage.setItem('snickerland-migration-v2', 'true')
      expect(isMigrationCompleted()).toBe(true)
    })

    it('returns false for corrupted flag', () => {
      localStorage.setItem('snickerland-migration-v2', 'not-true')
      expect(isMigrationCompleted()).toBe(false)
    })
  })

  describe('migrateProgress', () => {
    it('skips when migration already completed', async () => {
      localStorage.setItem('snickerland-migration-v2', 'true')
      const result = await migrateProgress('TestUser')
      expect(result).toBe(0)
    })

    it('skips when no progress to migrate', async () => {
      const result = await migrateProgress('EmptyUser')
      expect(result).toBe(0)
    })

    it('marks migration complete after empty progress', async () => {
      await migrateProgress('EmptyUser')
      expect(isMigrationCompleted()).toBe(true)
    })

    it('handles idempotent re-run', async () => {
      localStorage.setItem('snickerland-migration-v2', 'true')
      const first = await migrateProgress('User1')
      const second = await migrateProgress('User1')
      expect(first).toBe(0)
      expect(second).toBe(0)
    })
  })
})
