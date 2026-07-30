import { profile } from '../data/cv.js'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  return (
    <section>
      <p className="hero-eyebrow">reach out</p>
      <h1 className="hero-name">Contact</h1>
      <p className="hero-about">
        Feel free to reach out via email or phone, or connect on LinkedIn.
      </p>

      <div className="contact-grid section">
        <Reveal as="a" className="contact-card" delay={0} href={`mailto:${profile.email}`}>
          <p className="label">Email</p>
          <p className="value">{profile.email}</p>
        </Reveal>
        <Reveal as="a" className="contact-card" delay={60} href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
          <p className="label">Phone</p>
          <p className="value">{profile.phone}</p>
        </Reveal>
        <Reveal className="contact-card" delay={120}>
          <p className="label">Location</p>
          <p className="value">{profile.location}</p>
        </Reveal>
        <Reveal as="a" className="contact-card" delay={180} href={profile.linkedin} target="_blank" rel="noreferrer">
          <p className="label">LinkedIn</p>
          <p className="value">View profile ↗</p>
        </Reveal>
      </div>
    </section>
  )
}
