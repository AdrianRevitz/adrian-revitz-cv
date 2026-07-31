import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const placeholderCount = 9

export default function Photography() {
  const { t } = useLanguage()

  return (
    <section>
      <p className="hero-eyebrow">{t('eyebrowGallery')}</p>
      <h1 className="hero-name">{t('headingPhotography')}</h1>
      <p className="hero-about">{t('photographyIntro')}</p>

      <div className="placeholder-note">
        <span className="label">{t('noteLabel')}</span> {t('photographyNote')}
      </div>

      <Reveal as="div" className="placeholder-grid section">
        {Array.from({ length: placeholderCount }, (_, i) => (
          <div className="placeholder-tile" key={i}>
            {i + 1}
          </div>
        ))}
      </Reveal>
    </section>
  )
}
