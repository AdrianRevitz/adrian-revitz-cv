import { Link } from 'react-router-dom'
import Terminal from '../components/Terminal.jsx'
import NeofetchCard from '../components/NeofetchCard.jsx'
import { Timeline, TimelineItem, TimelineMore } from '../components/Timeline.jsx'
import { InstagramIcon, FacebookIcon, LinkedInIcon } from '../components/SocialIcons.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const HOME_HIDDEN_COMPANIES = ['Coop Denmark', 'Føtex']
const HOME_HIDDEN_SCHOOLS = ['Nørre Gymnasium']

function isCurrent(entry) {
  const check = (period) => period.includes('Present') || period.includes('Nu')
  return entry.group ? entry.roles.some((role) => check(role.period)) : check(entry.period)
}

export default function Home() {
  const { cv, t } = useLanguage()
  const { profile, skills, experience, education } = cv

  return (
    <>
      <section className="hero">
        <h1 className="hero-name">{profile.shortName}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-about">{profile.about}</p>

        <dl className="keyline">
          <dt>{t('labelLocation')}</dt>
          <dd>{profile.location}</dd>
          <dt>{t('labelEmail')}</dt>
          <dd>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </dd>
          <dt>{t('labelPhone')}</dt>
          <dd>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
          </dd>
        </dl>

        <div className="hero-actions">
          <Link className="btn btn-primary" to="/contact">
            {t('btnGetInTouch')}
          </Link>
          <a className="btn btn-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="btn btn-icon" href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a className="btn btn-icon" href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>
      </section>

      {/* The terminal closes the hero composition rather than opening a new
          section, so it gets spacing but no rule or heading of its own. */}
      <section style={{ marginTop: '3rem' }}>
        <Terminal />
      </section>

      <section className="section">
        <h2 className="section-heading">{t('headingExperience')}</h2>
        <Timeline>
          {experience
            .filter((entry) => !HOME_HIDDEN_COMPANIES.includes(entry.company))
            .map((entry, i) => (
              <TimelineItem badge={entry.badge} current={isCurrent(entry)} delay={Math.min(i * 60, 300)} key={entry.company}>
                <h3 className="timeline-title" style={{ marginBottom: entry.group ? '0.5rem' : 0 }}>
                  {entry.logo && <img src={entry.logo} alt="" className="company-logo" />}
                  {entry.company}
                </h3>
                {entry.group ? (
                  entry.roles.map((role) => (
                    <div className="timeline-program" key={role.role}>
                      <div className="timeline-heading">
                        <p className="timeline-subtitle" style={{ margin: 0 }}>
                          <span className="timeline-role">{role.role}</span>
                          <span className="timeline-sep" />
                          {role.employment}
                        </p>
                        <span className="timeline-period">
                          {role.period} <span className="timeline-duration">({role.duration})</span>
                        </span>
                      </div>
                      {role.description && <p className="timeline-note">{role.description}</p>}
                    </div>
                  ))
                ) : (
                  <>
                    <div className="timeline-heading">
                      <p className="timeline-subtitle" style={{ margin: 0 }}>
                        <span className="timeline-role">{entry.role}</span>
                        <span className="timeline-sep" />
                        {entry.employment}
                      </p>
                      <span className="timeline-period">
                        {entry.period} <span className="timeline-duration">({entry.duration})</span>
                      </span>
                    </div>
                    {entry.description && <p className="timeline-note">{entry.description}</p>}
                  </>
                )}
              </TimelineItem>
            ))}
          <TimelineMore to="/experience" delay={300}>
            {t('btnReadFullExperience')}
          </TimelineMore>
        </Timeline>
      </section>

      <section className="section">
        <h2 className="section-heading">{t('headingEducation')}</h2>
        <Timeline>
          {education
            .filter((entry) => !HOME_HIDDEN_SCHOOLS.includes(entry.school))
            .map((entry, i) => {
              const current = entry.group
                ? entry.programs.some((program) => program.status === 'current')
                : entry.status === 'current'
              return (
                <TimelineItem badge={entry.badge} current={current} delay={Math.min(i * 60, 300)} key={entry.school}>
                  <h3 className="timeline-title" style={{ marginBottom: entry.group ? '0.5rem' : 0 }}>
                    {entry.logo && <img src={entry.logo} alt="" className="company-logo" />}
                    {entry.school}
                  </h3>
                  {entry.group ? (
                    entry.programs.map((program) => (
                      <div className="timeline-program" key={program.degree}>
                        <div className="timeline-heading">
                          <p className="timeline-degree" style={{ margin: 0 }}>
                            {program.degree}
                          </p>
                          <span className="timeline-period">{program.period}</span>
                        </div>
                        {program.description && <p className="timeline-note">{program.description}</p>}
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="timeline-heading">
                        <p className="timeline-degree" style={{ margin: 0 }}>
                          {entry.degree}
                        </p>
                        <span className="timeline-period">{entry.period}</span>
                      </div>
                      {entry.description && <p className="timeline-note">{entry.description}</p>}
                    </>
                  )}
                </TimelineItem>
              )
            })}
          <TimelineMore to="/education" delay={300}>
            {t('btnReadFullEducation')}
          </TimelineMore>
        </Timeline>
      </section>

      <section className="section">
        <h2 className="section-heading">{t('headingSystemInfo')}</h2>
        <NeofetchCard />
      </section>

      <section className="section">
        <h2 className="section-heading">
          {t('headingSkills')}
          <span className="section-heading-note">{skills.length}</span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
