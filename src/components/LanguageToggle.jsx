import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()
  const next = lang === 'en' ? 'da' : 'en'

  return (
    <button
      type="button"
      className="lang-toggle"
      aria-label={t('langToggleLabel')}
      title={t('langToggleLabel')}
      onClick={toggleLang}
    >
      {lang.toUpperCase()}
    </button>
  )
}
