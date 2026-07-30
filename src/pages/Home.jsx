import { Link } from 'react-router-dom'
import { profile, skills, experience, education } from '../data/cv.js'
import Reveal from '../components/Reveal.jsx'
import { Timeline, TimelineItem } from '../components/Timeline.jsx'

function summarize(entry) {
  const role = entry.group ? entry.roles[0] : entry
  return {
    badge: entry.badge,
    title: entry.company,
    subtitle: entry.group ? `${role.role}${entry.roles.length > 1 ? ` · +${entry.roles.length - 1} more role` : ''}` : role.employment,
    period: role.period,
    current: role.period.includes('Present'),
    description: role.description,
  }
}

export default function Home() {
  return (
    <>
      <section>
        <p className="hero-eyebrow">whoami</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-about">{profile.about}</p>

        <div className="hero-meta">
          <span>📍 {profile.location}</span>
          <span>✉ {profile.email}</span>
          <span>☎ {profile.phone}</span>
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">Experience</h2>
        <Timeline>
          {experience.map((entry, i) => {
            const item = summarize(entry)
            return (
              <TimelineItem badge={item.badge} current={item.current} delay={Math.min(i * 60, 300)} key={entry.company}>
                <div className="timeline-heading">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-subtitle">{item.subtitle}</p>
                {item.description && <p className="timeline-note">{item.description}</p>}
              </TimelineItem>
            )
          })}
        </Timeline>
        <div className="section-footer">
          <Link className="btn" to="/experience">
            Read full experience ↗
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">Education</h2>
        <Timeline>
          {education.map((entry, i) => (
            <TimelineItem badge={entry.badge} current={entry.status === 'current'} delay={Math.min(i * 60, 300)} key={`${entry.school}-${entry.period}`}>
              <div className="timeline-heading">
                <h3 className="timeline-title">{entry.school}</h3>
                <span className="timeline-period">{entry.period}</span>
              </div>
              <p className="timeline-subtitle">{entry.degree}</p>
              {entry.description && <p className="timeline-note">{entry.description}</p>}
            </TimelineItem>
          ))}
        </Timeline>
      </section>

      <Reveal as="section" className="section">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <span className="skill-pill reveal" style={{ transitionDelay: `${i * 25}ms` }} key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </>
  )
}
