import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Contact() {
  const { cv, t } = useLanguage()
  const { profile } = cv

  return (
    <section>
      <p className="hero-eyebrow">{t('eyebrowReachOut')}</p>
      <h1 className="hero-name">{t('headingContact')}</h1>
      <p className="hero-about">{t('contactIntro')}</p>

      <div className="contact-grid section">
        <Reveal as="a" className="contact-card" delay={0} href={`mailto:${profile.email}`}>
          <p className="label">{t('labelEmail')}</p>
          <p className="value">{profile.email}</p>
        </Reveal>
        <Reveal as="a" className="contact-card" delay={60} href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
          <p className="label">{t('labelPhone')}</p>
          <p className="value">{profile.phone}</p>
        </Reveal>
        <Reveal className="contact-card" delay={120}>
          <p className="label">{t('labelLocation')}</p>
          <p className="value">{profile.location}</p>
        </Reveal>
        <Reveal as="a" className="contact-card" delay={180} href={profile.linkedin} target="_blank" rel="noreferrer">
          <p className="label">{t('labelLinkedIn')}</p>
          <p className="value">{t('viewProfile')}</p>
        </Reveal>
      </div>
    </section>
  )
}
