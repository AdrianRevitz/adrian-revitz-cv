import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import PageHeader from '../components/PageHeader.jsx'
import PhotoLightbox from '../components/PhotoLightbox.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { photos } from '../data/photos.js'
import { formatPhotoDate, formatShutter, formatAperture } from '../utils/photoFormat.js'

function tripDateRange(lang) {
  const dates = photos.map((p) => new Date(p.date))
  const min = new Date(Math.min(...dates))
  const max = new Date(Math.max(...dates))
  const monthFmt = new Intl.DateTimeFormat(lang === 'da' ? 'da-DK' : 'en-GB', { month: 'short' })
  const year = max.getFullYear()
  return `${monthFmt.format(min)}–${monthFmt.format(max)} ${year}`
}

export default function Photography() {
  const { t, lang } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(null)

  const navigate = (delta) => {
    setActiveIndex((i) => (i + delta + photos.length) % photos.length)
  }

  return (
    <section>
      <PageHeader path={t('navPhotography')} title={t('headingPhotography')} />

      <div className="trip-banner section">
        <p className="trip-kicker">{t('tripKicker')}</p>
        <h2 className="trip-title">{t('tripTitle')}</h2>
        <p className="trip-copy">{t('tripCopy')}</p>
        <div className="trip-stats">
          <span>
            {photos.length} {t('tripPhotosLabel')}
          </span>
          <span>{photos[0].camera}</span>
          <span>{tripDateRange(lang)}</span>
        </div>
      </div>

      {/* The photographs are the content on this page, so the grid escapes the
          text column. */}
      <div className="gallery-bleed section">
        <div className="photo-masonry">
          {photos.map((photo, i) => (
            <Reveal
              as="button"
              type="button"
              className="photo-tile"
              delay={Math.min(i * 40, 320)}
              onClick={() => setActiveIndex(i)}
              key={photo.id}
            >
              <img
                src={photo.thumb}
                loading="lazy"
                width={photo.width}
                height={photo.height}
                alt={t('photoAlt')(i + 1, photos.length, formatPhotoDate(photo.date, lang))}
              />
              <span className="photo-caption">
                <span>{formatPhotoDate(photo.date, lang)}</span>
                <span className="photo-caption-settings">
                  {formatAperture(photo.aperture)} {formatShutter(photo.shutter)} ISO {photo.iso}
                </span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <PhotoLightbox
          photos={photos}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNav={navigate}
          t={t}
          lang={lang}
        />
      )}
    </section>
  )
}
