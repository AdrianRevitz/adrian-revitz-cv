import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: t('navHome') },
    { to: '/experience', label: t('navExperience') },
    { to: '/education', label: t('navEducation') },
    { to: '/photography', label: t('navPhotography') },
    { to: '/music', label: t('navMusic') },
    { to: '/contact', label: t('navContact') },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-brand">
        <span className="prompt">~/</span>adrian-revitz
      </div>
      <div className="nav-right">
        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  )
}
