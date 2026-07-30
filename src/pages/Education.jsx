import { education } from '../data/cv.js'

export default function Education() {
  return (
    <section>
      <p className="hero-eyebrow">background</p>
      <h1 className="hero-name">Education</h1>

      <div className="section">
        {education.map((entry) => (
          <div className="card" key={`${entry.school}-${entry.period}`}>
            <div className="role-header">
              <h3 className="role-title">{entry.school}</h3>
              <span className="role-period">{entry.period}</span>
            </div>
            <p className="role-company">{entry.degree}</p>
            {entry.description && <p className="role-description">{entry.description}</p>}
            {entry.skills?.length > 0 && (
              <p className="role-skills">
                <span className="label">skills:</span> {entry.skills.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
