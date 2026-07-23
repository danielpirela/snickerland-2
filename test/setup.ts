/// <reference types="vitest" />
import '@testing-library/react'
import { vi, beforeEach } from 'vitest'

// Mock supabase-js with a chainable stub
function createChainable() {
  const methods: Record<string, ReturnType<typeof vi.fn>> = {}

  const chain = vi.fn(() => {
    // When called directly (e.g. in a then() chain)
  }) as unknown as Record<string, unknown>

  const methodNames = [
    'select', 'from', 'insert', 'upsert', 'update', 'delete',
    'eq', 'in', 'order', 'range', 'single', 'maybeSingle', 'limit',
  ]

  for (const name of methodNames) {
    methods[name] = vi.fn(() => chain)
    chain[name] = methods[name]
  }

  // Make the chain thenable for async resolution
  chain.then = vi.fn((resolve: (value: unknown) => void) =>
    Promise.resolve(resolve({ data: null, error: null }))
  )

  return chain
}

vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    from: vi.fn(() => createChainable()),
    auth: { signIn: vi.fn(), signOut: vi.fn() },
  })),
}))

// Mock localStorage as a Map for test isolation
const storage = new Map<string, string>()
Object.defineProperty(globalThis, 'localStorage', {
  value: {
    getItem: vi.fn((key: string) => storage.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => { storage.set(key, value) }),
    removeItem: vi.fn((key: string) => { storage.delete(key) }),
    clear: vi.fn(() => { storage.clear() }),
    get length() { return storage.size },
    key: vi.fn((index: number) => [...storage.keys()][index] ?? null),
  },
  writable: true,
  configurable: true,
})

// Reset storage before each test
beforeEach(() => {
  storage.clear()
  vi.clearAllMocks()
})
