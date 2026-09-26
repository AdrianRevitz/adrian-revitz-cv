import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect.js'

function getAppliedTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  )
}

export default function ThemeToggle() {
  // Start from the prerendered default ('light') so hydration matches, then
  // pick up the theme the inline script in index.html already applied.
  const [theme, setTheme] = useState('light')
  const { t } = useLanguage()

  useIsomorphicLayoutEffect(() => {
    setTheme(getAppliedTheme())
  }, [])

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch (e) {
      // ignore (e.g. storage disabled)
    }
  }

  const label = theme === 'light' ? t('themeToDark') : t('themeToLight')

  return (
    <button type="button" className="theme-toggle" aria-label={label} title={label} onClick={toggle}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
