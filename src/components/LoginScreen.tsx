import { useState } from 'react'
import { useAuth } from '#/contexts/AuthContext'

export interface LoginScreenProps {
  /** Called when the user submits the login form. */
  onLogin?: (name: string) => void
}

export function LoginScreen({ onLogin }: LoginScreenProps = {}) {
  const { login } = useAuth()
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    if (onLogin) {
      onLogin(trimmed)
    } else {
      login(trimmed)
    }
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="login-card w-full max-w-md p-8 sm:p-10">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="/logo.png"
            alt="Snickerland 2"
            className="h-24 w-24"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Title */}
        <h1
          className="display-title mb-2 text-center leading-relaxed"
          style={{ fontSize: '0.8rem', color: 'var(--gold-bright)' }}
        >
          Snickerland 2
        </h1>
        <p
          className="mb-6 text-center"
          style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}
        >
          Sistema de Misiones
        </p>

        <form onSubmit={handleSubmit}>
          <label
            className="mb-2 block"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', color: 'var(--text-muted)' }}
          >
            Nombre de usuario
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresá tu username..."
            className="mc-input mb-5"
            autoFocus
          />

          <button type="submit" className="mc-btn w-full" disabled={!name.trim()}>
            Entrar
          </button>
        </form>
      </div>
    </main>
  )
}
