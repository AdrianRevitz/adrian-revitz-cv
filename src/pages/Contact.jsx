import { profile } from '../data/cv.js'

export default function Contact() {
  return (
    <section>
      <p className="hero-eyebrow">reach out</p>
      <h1 className="hero-name">Contact</h1>
      <p className="hero-about">
        Feel free to reach out via email or phone, or connect on LinkedIn.
      </p>

      <div className="contact-grid section">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <p className="label">Email</p>
          <p className="value">{profile.email}</p>
        </a>
        <a className="contact-card" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
          <p className="label">Phone</p>
          <p className="value">{profile.phone}</p>
        </a>
        <div className="contact-card">
          <p className="label">Location</p>
          <p className="value">{profile.location}</p>
        </div>
        <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
          <p className="label">LinkedIn</p>
          <p className="value">View profile ↗</p>
        </a>
      </div>
    </section>
  )
}
