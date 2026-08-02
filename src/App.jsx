import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Education from './pages/Education.jsx'
import Photography from './pages/Photography.jsx'
import Music from './pages/Music.jsx'
import Contact from './pages/Contact.jsx'
import { useLanguage } from './i18n/LanguageContext.jsx'
import { useSeo } from './hooks/useSeo.js'
import { useScrollToTop } from './hooks/useScrollToTop.js'

export default function App() {
  const { lang } = useLanguage()
  useSeo(lang)
  useScrollToTop()

  return (
    <div className="app-shell">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
