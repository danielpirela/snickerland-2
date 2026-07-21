import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section
        className="island-shell p-6 sm:p-8"
        style={{ borderRadius: 0 }}
      >
        <p className="island-kicker mb-2">Acerca de</p>
        <h1
          className="mb-3"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            color: 'var(--text)',
          }}
        >
          Snickerland 2
        </h1>
        <p
          className="m-0 max-w-3xl leading-7"
          style={{
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-sans)',
            fontSize: '1.2rem',
          }}
        >
          Sistema de misiones para el servidor de Minecraft Snickerland 2.
          13 roles, 30 días de misiones, 5 tareas por día. Completá las
          misiones de tu rol para ganar monedas y avanzar en el juego.
        </p>
      </section>
    </main>
  )
}
