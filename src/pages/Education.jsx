import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function ProgramBlock({ program, t }) {
  const isCurrent = program.status === 'current'
  return (
    <div className={`role-block ${isCurrent ? 'role-block-current' : ''}`}>
      <div className="role-header">
        <h3 className="role-title">{program.degree}</h3>
        <span className="role-period">{program.period}</span>
      </div>
      {program.description && <p className="role-description">{program.description}</p>}
      {program.skills?.length > 0 && (
        <p className="role-skills">
          <span className="label">{t('skillsLabel')}</span> {program.skills.join(', ')}
        </p>
      )}
    </div>
  )
}

export default function Education() {
  const { cv, t } = useLanguage()
  const { education } = cv

  return (
    <section>
      <p className="hero-eyebrow">{t('eyebrowBackground')}</p>
      <h1 className="hero-name">{t('headingEducation')}</h1>

      <div className="section">
        {education.map((entry, i) => {
          const isCurrent = entry.group
            ? entry.programs.some((program) => program.status === 'current')
            : entry.status === 'current'
          return (
            <Reveal className={`card ${isCurrent ? 'card-current' : ''}`} delay={Math.min(i * 60, 300)} key={entry.school}>
              <h2 className="school-title" style={{ marginBottom: '0.15rem' }}>
                {entry.logo && <img src={entry.logo} alt="" className="company-logo" />}
                {entry.school}
              </h2>
              {entry.location && <p className="role-location" style={{ marginBottom: entry.group ? '0.75rem' : '0.25rem' }}>{entry.location}</p>}
              {entry.group ? (
                entry.programs.map((program) => <ProgramBlock program={program} t={t} key={program.degree} />)
              ) : (
                <>
                  <div className="role-header">
                    <h3 className="role-title" style={{ margin: 0 }}>
                      {entry.degree}
                    </h3>
                    <span className="role-period">{entry.period}</span>
                  </div>
                  {entry.description && <p className="role-description">{entry.description}</p>}
                  {entry.skills?.length > 0 && (
                    <p className="role-skills">
                      <span className="label">{t('skillsLabel')}</span> {entry.skills.join(', ')}
                    </p>
                  )}
                </>
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
