import { useEffect, useRef } from 'react'
import { formatPhotoDate, formatShutter, formatAperture } from '../utils/photoFormat.js'
import { getPhotoAlt } from '../data/photoAlts.js'

const FOCUSABLE = 'button, [href], [tabindex]:not([tabindex="-1"])'

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  )
}

export default function PhotoLightbox({ photos, index, onClose, onNav, t, lang }) {
  const photo = photos[index]
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  // Move focus into the dialog on open and hand it back to whatever opened it
  // (the gallery tile) on close.
  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus()
    return () => {
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNav(-1)
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'Tab' && dialogRef.current) {
        // Keep keyboard focus inside the dialog.
        const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
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
    <div
      ref={dialogRef}
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={t('tripTitle')}
      onClick={onClose}
    >
      <button ref={closeRef} type="button" className="lightbox-close" aria-label={t('photoClose')} onClick={onClose}>
        <CloseIcon />
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
        <ChevronIcon direction="left" />
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.full}
          alt={getPhotoAlt(photo, t('photoAlt')(index + 1, photos.length, formatPhotoDate(photo.date, lang)), lang)}
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
        <p className="lightbox-counter" aria-live="polite">
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
        <ChevronIcon direction="right" />
      </button>
    </div>
  )
}
