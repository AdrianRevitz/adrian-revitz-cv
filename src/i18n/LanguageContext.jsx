import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as cvEn from '../data/cv.en.js'
import * as cvDa from '../data/cv.da.js'
import { createTranslator } from './strings.js'
import { withComputedDates } from '../utils/cvDates.js'
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect.js'

const cvByLang = { en: withComputedDates(cvEn, 'en'), da: withComputedDates(cvDa, 'da') }

const LanguageContext = createContext(null)

function getStoredLang() {
  try {
    return window.localStorage.getItem('lang') === 'da' ? 'da' : 'en'
  } catch (e) {
    return 'en'
  }
}

export function LanguageProvider({ children }) {
  // Always start in English, matching the prerendered HTML, so hydration
  // never mismatches; a stored Danish preference is applied before paint.
  const [lang, setLang] = useState('en')
  const [ready, setReady] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setLang(getStoredLang())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      window.localStorage.setItem('lang', lang)
    } catch (e) {
      // ignore (e.g. storage disabled)
    }
    document.documentElement.setAttribute('lang', lang)
  }, [lang, ready])

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
