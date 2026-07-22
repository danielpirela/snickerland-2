import { Link } from '@tanstack/react-router'
import { useAuth } from '#/contexts/AuthContext'
import { LogOut } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const { username, logout } = useAuth()

  return (
    <header
      className="sticky top-0 z-50 border-b-3 px-4 backdrop-blur-md"
      style={{
        borderColor: 'var(--line)',
        background: 'var(--header-bg)',
      }}
    >
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-2 sm:py-3">
        {/* Logo + brand */}
        <h2 className="m-0 flex-shrink-0">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border-2 px-3 py-1.5 no-underline shadow-sm transition-colors hover:border-[var(--gold)]"
            style={{
              borderColor: 'var(--stone-dark)',
              background: 'var(--surface-strong)',
              color: 'var(--text)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.45rem',
              imageRendering: 'pixelated',
            }}
          >
            <img
              src="/logo.png"
              alt=""
              className="h-6 w-6"
              style={{ imageRendering: 'pixelated' }}
            />
            Snickerland 2
          </Link>
        </h2>

        {/* Nav links */}
        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Misiones
          </Link>
          <Link
            to="/scoreboard"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Ranking
          </Link>
          <Link
            to="/claims"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Reclamos
          </Link>
          <Link
            to="/tools/youtube"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            YT → URL
          </Link>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          {username && (
            <div className="flex items-center gap-2">
              <span
                className="hidden border-2 px-2 py-1 sm:inline-flex"
                style={{
                  borderColor: 'var(--grass)',
                  background: 'rgba(91,135,49,0.15)',
                  color: 'var(--grass-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.15rem',
                  imageRendering: 'pixelated',
                }}
              >
                {username}
              </span>
              <button
                onClick={logout}
                className="mc-btn-logout flex items-center gap-1"
                title="Cerrar sesión"
              >
                <LogOut className="h-3 w-3" />
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
