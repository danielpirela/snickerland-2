import { useTranslation } from 'react-i18next'
import { persistLanguage } from '#/i18n/index'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es'

  const toggle = () => {
    const next = currentLang === 'es' ? 'en' : 'es'
    void i18n.changeLanguage(next)
    persistLanguage(next)
  }

  return (
    <button
      onClick={toggle}
      className="border-2 px-2 py-1 text-sm transition-colors hover:bg-[var(--surface-strong)]"
      style={{
        borderColor: 'var(--stone-dark)',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: '1rem',
        imageRendering: 'pixelated',
      }}
      title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {currentLang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
