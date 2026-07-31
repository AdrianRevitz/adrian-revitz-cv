import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()
  const next = lang === 'en' ? 'da' : 'en'

  return (
    <button
      type="button"
      className="lang-toggle"
      aria-label={`Switch to ${next === 'da' ? 'Danish' : 'English'}`}
      title={next === 'da' ? 'Skift til dansk' : 'Switch to English'}
      onClick={toggleLang}
    >
      {lang.toUpperCase()}
    </button>
  )
}
