export function formatPhotoDate(iso, lang) {
  const date = new Date(iso)
  return new Intl.DateTimeFormat(lang === 'da' ? 'da-DK' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export function formatShutter(seconds) {
  if (seconds >= 1) return `${seconds}s`
  return `1/${Math.round(1 / seconds)}s`
}

export function formatAperture(aperture) {
  return `f/${aperture}`
}
