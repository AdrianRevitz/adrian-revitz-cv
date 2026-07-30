import { education } from '../data/cv.js'
import Reveal from '../components/Reveal.jsx'

export default function Education() {
  return (
    <section>
      <p className="hero-eyebrow">background</p>
      <h1 className="hero-name">Education</h1>

      <div className="section">
        {education.map((entry, i) => (
          <Reveal className="card" delay={Math.min(i * 60, 300)} key={`${entry.school}-${entry.period}`}>
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
