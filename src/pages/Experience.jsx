import { experience } from '../data/cv.js'

function RoleBlock({ role }) {
  return (
    <div className="role-block">
      <div className="role-header">
        <h3 className="role-title">{role.role}</h3>
        <span className="role-period">
          {role.period} · {role.duration}
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
        {experience.map((entry) => (
          <div className="card" key={entry.company}>
            <h2 className="role-title" style={{ marginBottom: '0.25rem' }}>
              {entry.company}
            </h2>
            {entry.groupNote && <p className="card-group-note">{entry.groupNote}</p>}
            {entry.group
              ? entry.roles.map((role) => <RoleBlock role={role} key={role.role} />)
              : <RoleBlock role={entry} />}
          </div>
        ))}
      </div>
    </section>
  )
}
