import { describe, it, expect } from 'vitest'
import {
  getQuestTotals,
  summarizeProgress,
  getUserProgressSummary,
  type QuestProgress,
} from '#/hooks/useQuestProgress'

describe('ranking logic', () => {
  describe('getQuestTotals', () => {
    it('returns positive totalDays and totalTasks', () => {
      const totals = getQuestTotals()
      expect(totals.totalDays).toBeGreaterThan(0)
      expect(totals.totalTasks).toBeGreaterThan(0)
      expect(totals.totalTasks).toBeGreaterThan(totals.totalDays)
    })
  })

  describe('summarizeProgress', () => {
    it('returns zeros for empty progress', () => {
      const summary = summarizeProgress({})
      expect(summary.completedDays).toBe(0)
      expect(summary.completedTasks).toBe(0)
      expect(summary.totalDays).toBeGreaterThan(0)
      expect(summary.totalTasks).toBeGreaterThan(0)
    })

    it('counts completed tasks correctly', () => {
      const progress: QuestProgress = {
        'general:1': [0, 1, 2, 3, 4], // all 5 tasks = completed day
        'general:2': [0, 1], // 2 of 5 tasks = not completed day
      }
      const summary = summarizeProgress(progress)
      expect(summary.completedTasks).toBe(7)
      expect(summary.completedDays).toBe(1)
    })

    it('deduplicates task indices', () => {
      const progress: QuestProgress = {
        'general:1': [0, 0, 1, 1, 2], // only 3 unique tasks
      }
      const summary = summarizeProgress(progress)
      expect(summary.completedTasks).toBe(3)
      expect(summary.completedDays).toBe(0) // 3 of 5 ≠ complete
    })

    it('handles invalid day keys gracefully', () => {
      const progress: QuestProgress = {
        'nonexistent:999': [0, 1, 2, 3, 4],
      }
      const summary = summarizeProgress(progress)
      // nonexistent role should not contribute
      expect(summary.completedTasks).toBe(0)
    })
  })

  describe('getUserProgressSummary (no auth)', () => {
    it('returns zeros for unknown user', () => {
      const summary = getUserProgressSummary('UnknownUser12345')
      expect(summary.completedDays).toBe(0)
      expect(summary.completedTasks).toBe(0)
    })
  })
})
