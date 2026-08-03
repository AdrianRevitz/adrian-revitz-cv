import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function RoleBlock({ role, t }) {
  const isCurrent = role.period.includes('Present') || role.period.includes('Nu')
  return (
    <div className={`role-block ${isCurrent ? 'role-block-current' : ''}`}>
      <div className="role-header">
        <h3 className="role-title">{role.role}</h3>
        <span className="role-period">
          {role.period} <span className="role-duration">({role.duration})</span>
        </span>
      </div>
      <p className="role-company">{role.employment}</p>
      {role.location && <p className="role-location">{role.location}</p>}
      {role.description && <p className="role-description">{role.description}</p>}
      {role.bullets?.length > 0 && (
        <ul className="role-bullets">
          {role.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {role.skills?.length > 0 && (
        <p className="role-skills">
          <span className="label">{t('skillsLabel')}</span> {role.skills.join(', ')}
        </p>
      )}
    </div>
  )
}

export default function Experience() {
  const { cv, t } = useLanguage()
  const { experience } = cv

  return (
    <section>
      <p className="hero-eyebrow">{t('eyebrowCareerLog')}</p>
      <h1 className="hero-name">{t('headingExperience')}</h1>

      <div className="section">
        {experience.map((entry, i) => (
          <Reveal className="card" delay={Math.min(i * 60, 300)} key={entry.company}>
            <h2 className="company-title" style={{ marginBottom: '0.25rem' }}>
              {entry.logo && <img src={entry.logo} alt="" className="company-logo" />}
              {entry.company}
            </h2>
            {entry.groupNote && <p className="card-group-note">{entry.groupNote}</p>}
            {entry.group
              ? entry.roles.map((role) => <RoleBlock role={role} t={t} key={role.role} />)
              : <RoleBlock role={entry} t={t} />}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
