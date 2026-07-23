import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginScreen } from '#/components/LoginScreen'

// Mock useAuth so we don't need the full context
vi.mock('#/contexts/AuthContext', () => ({
  useAuth: vi.fn(() => ({
    username: null,
    login: vi.fn(),
    logout: vi.fn(),
  })),
  AuthProvider: ({ children }: { children: React.ReactNode }) => children,
}))

describe('LoginScreen', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('renders the login form', () => {
    render(<LoginScreen />)
    expect(screen.getByPlaceholderText('Ingresá tu username...')).toBeTruthy()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeTruthy()
    expect(screen.getByAltText('Snickerland 2')).toBeTruthy()
  })

  it('disables submit button when input is empty', () => {
    render(<LoginScreen />)
    const button = screen.getByRole('button', { name: /entrar/i })
    expect((button as HTMLButtonElement).disabled).toBe(true)
  })

  it('enables submit button when input has text', async () => {
    const user = userEvent.setup()
    render(<LoginScreen />)
    const input = screen.getByPlaceholderText('Ingresá tu username...')
    await user.type(input, 'TestUser')
    const button = screen.getByRole('button', { name: /entrar/i })
    expect((button as HTMLButtonElement).disabled).toBe(false)
  })

  it('calls onLogin prop when submitted', async () => {
    const onLogin = vi.fn()
    const user = userEvent.setup()
    render(<LoginScreen onLogin={onLogin} />)
    await user.type(screen.getByPlaceholderText('Ingresá tu username...'), 'Steve')
    await user.click(screen.getByRole('button', { name: /entrar/i }))
    expect(onLogin).toHaveBeenCalledWith('Steve')
  })
})
