import { useEffect } from 'react'
import { formatPhotoDate, formatShutter, formatAperture } from '../utils/photoFormat.js'

export default function PhotoLightbox({ photos, index, onClose, onNav, t, lang }) {
  const photo = photos[index]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNav(-1)
      if (e.key === 'ArrowRight') onNav(1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onNav])

  const fields = [
    { label: t('photoLabelDate'), value: formatPhotoDate(photo.date, lang) },
    { label: t('photoLabelCamera'), value: photo.camera },
    { label: t('photoLabelLens'), value: photo.lens },
    { label: t('photoLabelAperture'), value: formatAperture(photo.aperture) },
    { label: t('photoLabelShutter'), value: formatShutter(photo.shutter) },
    { label: 'ISO', value: photo.iso },
    { label: t('photoLabelFocalLength'), value: `${photo.focalLength}mm` },
  ]

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label={t('photoClose')} onClick={onClose}>
        ✕
      </button>
      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        aria-label={t('photoPrev')}
        onClick={(e) => {
          e.stopPropagation()
          onNav(-1)
        }}
      >
        ‹
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.full}
          alt={t('photoAlt')(index + 1, photos.length, formatPhotoDate(photo.date, lang))}
          className="lightbox-image"
        />
        <div className="lightbox-meta">
          {fields.map((f) => (
            <div className="lightbox-meta-item" key={f.label}>
              <span className="lightbox-meta-label">{f.label}</span>
              <span className="lightbox-meta-value">{f.value}</span>
            </div>
          ))}
        </div>
        <p className="lightbox-counter">
          {index + 1} / {photos.length}
        </p>
      </div>
      <button
        type="button"
        className="lightbox-nav lightbox-next"
        aria-label={t('photoNext')}
        onClick={(e) => {
          e.stopPropagation()
          onNav(1)
        }}
      >
        ›
      </button>
    </div>
  )
}
