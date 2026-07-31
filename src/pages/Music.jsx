import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const placeholderTracks = Array.from({ length: 5 }, () => ({
  bars: [8, 14, 10, 18, 12, 16, 9],
}))

const demoTrack = {
  title: 'Coding at 2AM',
  artist: 'Lo-Fi Study Beats',
  elapsed: '1:12',
  total: '3:24',
  progress: 35,
}

function NowPlayingCard({ t }) {
  return (
    <div className="now-playing-card">
      <div className="now-playing-art">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </div>
      <div className="now-playing-info">
        <p className="now-playing-label">{t('nowPlaying')}</p>
        <p className="now-playing-track">{demoTrack.title}</p>
        <p className="now-playing-artist">{demoTrack.artist}</p>
        <div className="now-playing-progress">
          <div className="now-playing-progress-bar" style={{ width: `${demoTrack.progress}%` }} />
        </div>
        <div className="now-playing-times">
          <span>{demoTrack.elapsed}</span>
          <span>{demoTrack.total}</span>
        </div>
      </div>
    </div>
  )
}

export default function Music() {
  const { t } = useLanguage()

  return (
    <section>
      <p className="hero-eyebrow">{t('eyebrowNowPlaying')}</p>
      <h1 className="hero-name">{t('headingMusic')}</h1>
      <p className="hero-about">{t('musicIntro')}</p>

      <Reveal className="section">
        <NowPlayingCard t={t} />
        <p className="placeholder-note" style={{ marginTop: '1rem', marginBottom: 0 }}>
          <span className="label">{t('noteLabel')}</span> {t('spotifyDemoNote')}
        </p>
      </Reveal>

      <div className="placeholder-note section">
        <span className="label">{t('noteLabel')}</span> {t('musicNote')}
      </div>

      <div className="track-list">
        {placeholderTracks.map((track, i) => (
          <Reveal as="div" className="track-row" delay={i * 60} key={i}>
            <span className="track-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="track-bars">
              {track.bars.map((h, j) => (
                <span key={j} style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="track-info">
              <p className="track-title">{t('untitledTrack')}</p>
              <p className="track-meta">--:--</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
