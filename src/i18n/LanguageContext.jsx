import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as cvEn from '../data/cv.en.js'
import * as cvDa from '../data/cv.da.js'
import { createTranslator } from './strings.js'
import { withComputedDates } from '../utils/cvDates.js'

const cvByLang = { en: withComputedDates(cvEn, 'en'), da: withComputedDates(cvDa, 'da') }

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem('lang')
    return stored === 'da' ? 'da' : 'en'
  } catch (e) {
    return 'en'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang)
    } catch (e) {
      // ignore (e.g. storage disabled)
    }
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const value = useMemo(() => {
    const cv = cvByLang[lang]
    return {
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === 'en' ? 'da' : 'en')),
      cv,
      t: createTranslator(lang),
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
