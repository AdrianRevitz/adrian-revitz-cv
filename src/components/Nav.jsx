import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <path d="M5 5l14 14M19 5L5 19" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Close on outside click / Escape while open.
  useEffect(() => {
    if (!menuOpen) return undefined
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const links = [
    { to: '/', label: t('navHome') },
    { to: '/experience', label: t('navExperience') },
    { to: '/education', label: t('navEducation') },
    { to: '/photography', label: t('navPhotography') },
    { to: '/music', label: t('navMusic') },
    { to: '/contact', label: t('navContact') },
  ]

  return (
    <nav ref={navRef} className={`nav ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'nav-menu-open' : ''}`}>
      <div className="nav-brand">
        <span className="prompt">~/</span>adrian-revitz
      </div>
      <div className="nav-right">
        <div className="nav-links" id="nav-links">
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
        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={menuOpen ? t('navMenuClose') : t('navMenuOpen')}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>
    </nav>
  )
}
