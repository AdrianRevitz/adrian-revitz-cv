import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { cv, t } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span>
        © {year} {cv.profile.name}
      </span>
      <span>{t('footerBuiltWith')}</span>
    </footer>
  )
}
