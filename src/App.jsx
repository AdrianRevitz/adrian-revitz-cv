import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Education from './pages/Education.jsx'
import Photography from './pages/Photography.jsx'
import Music from './pages/Music.jsx'
import Contact from './pages/Contact.jsx'
import { useLanguage } from './i18n/LanguageContext.jsx'
import { useSeo } from './hooks/useSeo.js'
import { useScrollToTop } from './hooks/useScrollToTop.js'

export default function App() {
  const { lang, t } = useLanguage()
  useSeo(lang)
  useScrollToTop()

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        {t('skipToContent')}
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
