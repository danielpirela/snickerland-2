import { describe, it, expect, vi } from 'vitest'

// Mock supabase before importing
vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    from: vi.fn(() => mockChain),
    auth: { signIn: vi.fn(), signOut: vi.fn() },
  })),
}))

const mockChain: Record<string, ReturnType<typeof vi.fn>> = {}
const chainMethods = ['select', 'from', 'insert', 'upsert', 'update', 'delete', 'eq', 'in', 'order', 'range', 'single', 'maybeSingle', 'limit']

for (const name of chainMethods) {
  mockChain[name] = vi.fn(() => mockChain)
}
mockChain.then = vi.fn(() => Promise.resolve({ data: [], error: null }))

// Mock auth context
vi.mock('#/contexts/AuthContext', () => ({
  useAuth: vi.fn(() => ({
    username: 'TestUser',
    login: vi.fn(),
    logout: vi.fn(),
  })),
  AuthProvider: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock the supabase module with anon key
vi.mock('#/lib/supabase', async () => {
  const actual = await vi.importActual('#/lib/supabase')
  return {
    ...actual,
    supabase: null,
    isSupabaseConfigured: false,
  }
})

describe('useQuestProgress (localStorage-only)', () => {
  it('exports the expected functions', async () => {
    const { useQuestProgress } = await import('#/hooks/useQuestProgress')
    expect(typeof useQuestProgress).toBe('function')
  })

  it('readUserProgress returns empty for unknown user', async () => {
    const { readUserProgress } = await import('#/hooks/useQuestProgress')
    const progress = readUserProgress('UnknownUser')
    expect(progress).toEqual({})
  })

  it('getProgressStorageKey returns consistent keys', async () => {
    const { getProgressStorageKey } = await import('#/hooks/useQuestProgress')
    expect(getProgressStorageKey('Steve')).toBe('snickerland-progress:Steve')
    expect(getProgressStorageKey('aLEX')).toBe('snickerland-progress:aLEX')
  })

  it('getQuestTotals returns positive values', async () => {
    const { getQuestTotals } = await import('#/hooks/useQuestProgress')
    const totals = getQuestTotals()
    expect(totals.totalDays).toBeGreaterThan(0)
    expect(totals.totalTasks).toBeGreaterThan(totals.totalDays)
  })

  it('summarizeProgress handles empty progress', async () => {
    const { summarizeProgress } = await import('#/hooks/useQuestProgress')
    const summary = summarizeProgress({})
    expect(summary.completedDays).toBe(0)
    expect(summary.completedTasks).toBe(0)
  })
})
