import { Fragment } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getNeofetchFields } from '../data/neofetch.js'

export default function NeofetchCard() {
  const { cv, lang } = useLanguage()
  const fields = getNeofetchFields(cv, lang)
  const nameParts = cv.profile.shortName.split(' ')
  const initials = (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
  const host = cv.profile.shortName.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className="neofetch">
      <div className="neofetch-avatar">{initials}</div>
      <div className="neofetch-body">
        <p className="neofetch-header">
          <span className="neofetch-user">guest</span>@<span className="neofetch-host">{host}</span>
        </p>
        <dl className="keyline">
          {fields.map((f) => (
            <Fragment key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </div>
  )
}
