import PageHeader from '../components/PageHeader.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SPOTIFY_ARTIST_ID } from '../data/music.js'

export default function Music() {
  const { t } = useLanguage()

  return (
    <section>
      <PageHeader path={t('navMusic')} title={t('headingMusic')} intro={t('musicIntro')} />

      <div className="spotify-embed section">
        <iframe
          title="Spotify artist profile"
          src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator`}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  )
}
