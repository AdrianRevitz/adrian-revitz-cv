import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getNeofetchFields } from '../data/neofetch.js'

export default function NeofetchCard() {
  const { cv, lang } = useLanguage()
  const fields = getNeofetchFields(cv, lang)
  const initials = cv.profile.shortName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const host = cv.profile.shortName.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className="neofetch-card">
      <div className="neofetch-avatar">{initials}</div>
      <div className="neofetch-body">
        <p className="neofetch-header">
          <span className="neofetch-user">guest</span>@<span className="neofetch-host">{host}</span>
        </p>
        <div className="neofetch-rule" />
        <dl className="neofetch-fields">
          {fields.map((f) => (
            <div className="neofetch-row" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
