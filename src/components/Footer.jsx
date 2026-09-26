import { useLanguage } from '../i18n/LanguageContext.jsx'
import { BUILD_DATE } from '../utils/cvDates.js'

export default function Footer() {
  const { cv, t } = useLanguage()
  const year = BUILD_DATE.getFullYear()
  return (
    <footer className="footer">
      <span>
        © {year} {cv.profile.name}
      </span>
      <span>{t('footerBuiltWith')}</span>
    </footer>
  )
}
