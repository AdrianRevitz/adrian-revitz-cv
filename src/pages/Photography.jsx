import Reveal from '../components/Reveal.jsx'

const placeholderCount = 9

export default function Photography() {
  return (
    <section>
      <p className="hero-eyebrow">gallery</p>
      <h1 className="hero-name">Photography</h1>
      <p className="hero-about">A selection of shots — this gallery is being curated.</p>

      <div className="placeholder-note">
        <span className="label">note:</span> photos coming soon.
      </div>

      <Reveal as="div" className="placeholder-grid section">
        {Array.from({ length: placeholderCount }, (_, i) => (
          <div className="placeholder-tile" key={i}>
            {i + 1}
          </div>
        ))}
      </Reveal>
    </section>
  )
}
