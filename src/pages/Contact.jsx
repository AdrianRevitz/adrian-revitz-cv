import PageHeader from '../components/PageHeader.jsx'
import { InstagramIcon, FacebookIcon, LinkedInIcon } from '../components/SocialIcons.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Contact() {
  const { cv, t } = useLanguage()
  const { profile } = cv

  const elsewhere = [
    { label: 'LinkedIn', href: profile.linkedin, handle: t('viewProfile'), Icon: LinkedInIcon },
    { label: 'Instagram', href: profile.instagram, handle: profile.instagramHandle, Icon: InstagramIcon },
    { label: 'Facebook', href: profile.facebook, handle: profile.facebookHandle, Icon: FacebookIcon },
  ]

  return (
    <section>
      <PageHeader path={t('navContact')} title={t('headingContact')} intro={t('contactIntro')} />

      {/* Email and phone are what people came here for, so they lead. */}
      <div className="contact-primary section">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <p className="label">{t('labelEmail')}</p>
          <p className="value">{profile.email}</p>
        </a>
        <a className="contact-card" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
          <p className="label">{t('labelPhone')}</p>
          <p className="value">{profile.phone}</p>
        </a>
        <div className="contact-card">
          <p className="label">{t('labelLocation')}</p>
          <p className="value">{profile.location}</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">{t('labelElsewhere')}</h2>
        <div className="contact-elsewhere">
          {elsewhere.map(({ label, href, handle, Icon }) => (
            <a className="contact-link" href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon />
              {handle}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
