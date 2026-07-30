import { education } from '../data/cv.js'
import Reveal from '../components/Reveal.jsx'

function ProgramBlock({ program }) {
  return (
    <div className="role-block">
      <div className="role-header">
        <h3 className="role-title">{program.degree}</h3>
        <span className="role-period">{program.period}</span>
      </div>
      {program.description && <p className="role-description">{program.description}</p>}
      {program.skills?.length > 0 && (
        <p className="role-skills">
          <span className="label">skills:</span> {program.skills.join(', ')}
        </p>
      )}
    </div>
  )
}

export default function Education() {
  return (
    <section>
      <p className="hero-eyebrow">background</p>
      <h1 className="hero-name">Education</h1>

      <div className="section">
        {education.map((entry, i) => (
          <Reveal className="card" delay={Math.min(i * 60, 300)} key={entry.school}>
            <h2 className="role-title" style={{ marginBottom: entry.group ? '0.25rem' : 0 }}>
              {entry.school}
            </h2>
            {entry.group ? (
              entry.programs.map((program) => <ProgramBlock program={program} key={program.degree} />)
            ) : (
              <>
                <div className="role-header" style={{ marginTop: '0.25rem' }}>
                  <h3 className="role-title" style={{ margin: 0 }}>
                    {entry.degree}
                  </h3>
                  <span className="role-period">{entry.period}</span>
                </div>
                {entry.description && <p className="role-description">{entry.description}</p>}
                {entry.skills?.length > 0 && (
                  <p className="role-skills">
                    <span className="label">skills:</span> {entry.skills.join(', ')}
                  </p>
                )}
              </>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
