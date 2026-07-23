import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import esCommon from './es/common.json'
import enCommon from './en/common.json'

const STORAGE_KEY = 'snickerland-lang'

function getStoredLang(): string {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'es'
}

void i18next.use(initReactI18next).init({
  lng: getStoredLang(),
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
  returnNull: false,
  returnEmptyString: false,
  resources: {
    es: { common: esCommon },
    en: { common: enCommon },
  },
})

export function persistLanguage(lang: string): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, lang)
}

export default i18next
