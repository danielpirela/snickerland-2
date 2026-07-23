import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '#/contexts/AuthContext'
import { LoginScreen } from '#/components/LoginScreen'
import { Dashboard } from '#/components/Dashboard'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const { username } = useAuth()

  if (!username) {
    return <LoginScreen />
  }

  return <Dashboard />
}
