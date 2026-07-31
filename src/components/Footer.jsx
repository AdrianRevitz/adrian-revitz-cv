import { profile } from '../data/cv.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span>
        © {year} {profile.name}
      </span>
      <span>Built with React + Vite</span>
    </footer>
  )
}
