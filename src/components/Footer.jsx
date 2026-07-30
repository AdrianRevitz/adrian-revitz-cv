import { profile } from '../data/cv.js'

export default function Footer() {
  return (
    <footer className="footer">
      <span>{profile.name}</span>
      <span>Built with React + Vite</span>
    </footer>
  )
}
