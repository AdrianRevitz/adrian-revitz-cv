import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Projects() {
  const { cv, t } = useLanguage()

  return (
    <section>
      <p className="hero-eyebrow">{t('eyebrowProjects')}</p>
      <h1 className="hero-name">{t('headingProjects')}</h1>
      <p className="hero-about">{t('projectsIntro')}</p>

      <div className="section">
        {cv.projects.map((project, i) => (
          <Reveal as="article" className="card" delay={Math.min(i * 60, 300)} key={project.name}>
            <p className="project-kicker">{project.context}</p>
            <div className="project-header">
              <h2 className="company-title">{project.name}</h2>
              {project.link && (
                <a className="project-link" href={project.link.href} target="_blank" rel="noreferrer">
                  {project.link.label} ↗
                </a>
              )}
            </div>
            <p className="role-description">{project.description}</p>
            {project.bullets?.length > 0 && (
              <ul className="role-bullets">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            <ul className="project-tech" aria-label={t('projectTechLabel')}>
              {project.tech.map((tech) => (
                <li className="tech-tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
