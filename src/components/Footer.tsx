export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="mt-20 border-t-3 px-4 pb-14 pt-10"
      style={{
        borderColor: 'var(--line)',
        color: 'var(--text-muted)',
      }}
    >
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem' }}>
          &copy; {year} Snickerland 2. Todos los derechos reservados.
        </p>
        <p className="island-kicker m-0">Sistema de Misiones · 13 roles · 30 días</p>
      </div>
    </footer>
  )
}
