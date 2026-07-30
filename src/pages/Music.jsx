import Reveal from '../components/Reveal.jsx'

const placeholderTracks = Array.from({ length: 5 }, (_, i) => ({
  title: 'Untitled track',
  meta: '--:--',
  bars: [8, 14, 10, 18, 12, 16, 9],
}))

export default function Music() {
  return (
    <section>
      <p className="hero-eyebrow">now playing</p>
      <h1 className="hero-name">Music</h1>
      <p className="hero-about">Tracks and playlists — this section is being curated.</p>

      <div className="placeholder-note">
        <span className="label">note:</span> tracks coming soon.
      </div>

      <div className="track-list section">
        {placeholderTracks.map((track, i) => (
          <Reveal as="div" className="track-row" delay={i * 60} key={i}>
            <span className="track-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="track-bars">
              {track.bars.map((h, j) => (
                <span key={j} style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="track-info">
              <p className="track-title">{track.title}</p>
              <p className="track-meta">{track.meta}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
