// Derives display periods, durations, group totals and age from the machine
// fields in the CV data (`start`/`end` as 'YYYY-MM', `end: null` = current,
// `profile.born`), so none of them go stale between edits.
//
// `now` defaults to the build date (injected by vite.config.js) rather than
// the visitor's clock, so the prerendered HTML and the hydrating client always
// produce identical text. Durations therefore refresh on each deploy.

/* global __BUILD_DATE__ */
export const BUILD_DATE = typeof __BUILD_DATE__ !== 'undefined' ? new Date(__BUILD_DATE__) : new Date()

const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  da: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
}

const PRESENT = { en: 'Present', da: 'Nu' }
const TOTAL = { en: 'total', da: 'i alt' }

function toIndex(ym, now) {
  if (!ym) return now.getFullYear() * 12 + now.getMonth()
  const [year, month] = ym.split('-').map(Number)
  return year * 12 + (month - 1)
}

function formatMonth(ym, lang) {
  const [year, month] = ym.split('-').map(Number)
  return `${MONTHS[lang][month - 1]} ${year}`
}

export function formatPeriod(start, end, lang) {
  return `${formatMonth(start, lang)} - ${end ? formatMonth(end, lang) : PRESENT[lang]}`
}

// Inclusive of both the start and end month, the way LinkedIn counts:
// Feb 2024 - Jul 2024 is 6 months.
export function formatDuration(start, end, lang, now = BUILD_DATE) {
  const months = toIndex(end, now) - toIndex(start, now) + 1
  const years = Math.floor(months / 12)
  const rest = months % 12
  const parts = []
  if (lang === 'da') {
    if (years) parts.push(`${years} år`)
    if (rest) parts.push(`${rest} ${rest === 1 ? 'md.' : 'mdr.'}`)
  } else {
    if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
    if (rest) parts.push(`${rest} ${rest === 1 ? 'mo.' : 'mos.'}`)
  }
  return parts.join(' ')
}

function withRoleDates(role, lang, now) {
  return {
    ...role,
    period: formatPeriod(role.start, role.end, lang),
    duration: formatDuration(role.start, role.end, lang, now),
  }
}

function withEntryDates(entry, lang, now) {
  if (!entry.group) return withRoleDates(entry, lang, now)
  const roles = entry.roles.map((role) => withRoleDates(role, lang, now))
  const start = entry.roles.map((role) => role.start).sort()[0]
  const ends = entry.roles.map((role) => role.end)
  const end = ends.includes(null) ? null : ends.sort().at(-1)
  const total = `${formatDuration(start, end, lang, now)} ${TOTAL[lang]}`
  return { ...entry, roles, groupNote: entry.groupNote ? `${entry.groupNote} · ${total}` : total }
}

function ageFrom(born, now) {
  return Math.floor((toIndex(null, now) - toIndex(born, now)) / 12)
}

export function withComputedDates(cv, lang, now = BUILD_DATE) {
  return {
    ...cv,
    profile: { ...cv.profile, age: ageFrom(cv.profile.born, now) },
    experience: cv.experience.map((entry) => withEntryDates(entry, lang, now)),
  }
}
