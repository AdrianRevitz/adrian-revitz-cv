import { experience } from '../data/cv.js'
import Reveal from '../components/Reveal.jsx'

function RoleBlock({ role }) {
  return (
    <div className="role-block">
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
          <span className="label">skills:</span> {role.skills.join(', ')}
        </p>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section>
      <p className="hero-eyebrow">career log</p>
      <h1 className="hero-name">Experience</h1>

      <div className="section">
        {experience.map((entry, i) => (
          <Reveal className="card" delay={Math.min(i * 60, 300)} key={entry.company}>
            <h2 className="role-title" style={{ marginBottom: '0.25rem' }}>
              {entry.company}
            </h2>
            {entry.groupNote && <p className="card-group-note">{entry.groupNote}</p>}
            {entry.group
              ? entry.roles.map((role) => <RoleBlock role={role} key={role.role} />)
              : <RoleBlock role={entry} />}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
