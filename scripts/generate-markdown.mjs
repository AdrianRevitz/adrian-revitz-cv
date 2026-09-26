// Generates a plain-markdown counterpart of each route for AI agents that
// request `Accept: text/markdown` instead of HTML (see
// netlify/edge-functions/markdown-negotiation.js). English content only,
// matching the prerendered HTML (see scripts/prerender.mjs).
import fs from 'node:fs/promises'
import path from 'node:path'
import * as cvEn from '../src/data/cv.en.js'
import { withComputedDates } from '../src/utils/cvDates.js'
import { SITE_URL } from '../src/data/seo.js'
import { SPOTIFY_ARTIST_ID } from '../src/data/music.js'

const { profile, skills, experience, education, projects } = withComputedDates(cvEn, 'en')

function roleToMarkdown(role, heading = '###') {
  const lines = [`${heading} ${role.role} - ${role.employment}`, `${role.period} (${role.duration})`]
  if (role.location) lines.push(role.location)
  if (role.description) lines.push('', role.description)
  if (role.bullets?.length) lines.push('', ...role.bullets.map((b) => `- ${b}`))
  if (role.skills?.length) lines.push('', `Skills: ${role.skills.join(', ')}`)
  return lines.join('\n')
}

function experienceEntryToMarkdown(entry, level = 2) {
  const heading = '#'.repeat(level)
  const lines = [`${heading} ${entry.company}`]
  if (entry.groupNote) lines.push(entry.groupNote)
  if (entry.summary) lines.push('', entry.summary)
  lines.push('')
  if (entry.group) {
    lines.push(entry.roles.map((role) => roleToMarkdown(role, '#'.repeat(level + 1))).join('\n\n'))
  } else {
    lines.push(roleToMarkdown(entry, heading).replace(new RegExp(`^${heading} `), ''))
  }
  return lines.join('\n')
}

function projectToMarkdown(project, heading = '##') {
  const lines = [`${heading} ${project.name}`, project.context, '', project.description]
  if (project.bullets?.length) lines.push('', ...project.bullets.map((b) => `- ${b}`))
  lines.push('', `Tech: ${project.tech.join(', ')}`)
  if (project.link) lines.push(`${project.link.label}: ${project.link.href}`)
  return lines.join('\n')
}

function programToMarkdown(program, heading = '###') {
  const lines = [`${heading} ${program.degree}`, program.period]
  if (program.description) lines.push('', program.description)
  if (program.skills?.length) lines.push('', `Skills: ${program.skills.join(', ')}`)
  return lines.join('\n')
}

function educationEntryToMarkdown(entry, level = 2) {
  const heading = '#'.repeat(level)
  const lines = [`${heading} ${entry.school}`]
  if (entry.location) lines.push(entry.location)
  lines.push('')
  if (entry.group) {
    lines.push(entry.programs.map((program) => programToMarkdown(program, '#'.repeat(level + 1))).join('\n\n'))
  } else {
    lines.push(programToMarkdown(entry, heading).replace(new RegExp(`^${heading} `), ''))
  }
  return lines.join('\n')
}

const pages = {
  '/index.md': [
    `# ${profile.name}`,
    profile.title,
    '',
    profile.about.replace(/\s+/g, ' ').trim(),
    '',
    `- Location: ${profile.location}`,
    `- Email: ${profile.email}`,
    `- Phone: ${profile.phone}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- Instagram: ${profile.instagram}`,
    `- Facebook: ${profile.facebook}`,
    '',
    '## Skills',
    '',
    skills.map((s) => `- ${s}`).join('\n'),
    '',
    '## Experience',
    '',
    experience.map((entry) => experienceEntryToMarkdown(entry, 3)).join('\n\n'),
    '',
    '## Projects',
    '',
    projects.map((project) => projectToMarkdown(project, '###')).join('\n\n'),
    '',
    '## Education',
    '',
    education.map((entry) => educationEntryToMarkdown(entry, 3)).join('\n\n'),
    '',
    `Full details: ${SITE_URL}/experience, ${SITE_URL}/projects and ${SITE_URL}/education`,
  ].join('\n'),

  '/experience.md': [
    `# Experience - ${profile.name}`,
    '',
    experience.map((entry) => experienceEntryToMarkdown(entry)).join('\n\n'),
  ].join('\n'),

  '/projects.md': [
    `# Projects - ${profile.name}`,
    '',
    projects.map((project) => projectToMarkdown(project)).join('\n\n'),
  ].join('\n'),

  '/education.md': [
    `# Education - ${profile.name}`,
    '',
    education.map((entry) => educationEntryToMarkdown(entry)).join('\n\n'),
  ].join('\n'),

  '/photography.md': [
    `# Photography - ${profile.name}`,
    '',
    'exchange semester · Aug 2025 - Jan 2026',
    '',
    '## Hong Kong & East Asia',
    '',
    'Photos taken during an exchange semester at City University of Hong Kong, while traveling around East Asia. Each photo includes full EXIF metadata (camera, lens, date, ISO, aperture).',
    '',
    `View the gallery: ${SITE_URL}/photography`,
  ].join('\n'),

  '/music.md': [
    `# Music - ${profile.name}`,
    '',
    'Music by REVITZ, available on Spotify.',
    '',
    `Spotify artist: https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`,
  ].join('\n'),

  '/contact.md': [
    `# Contact - ${profile.name}`,
    '',
    `- Email: ${profile.email}`,
    `- Phone: ${profile.phone}`,
    `- Location: ${profile.location}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- Instagram: ${profile.instagram} (${profile.instagramHandle})`,
    `- Facebook: ${profile.facebook} (${profile.facebookHandle})`,
  ].join('\n'),
}

for (const [file, content] of Object.entries(pages)) {
  const outPath = path.resolve(`dist${file}`)
  await fs.writeFile(outPath, content.replace(/\n{3,}/g, '\n\n') + '\n')
  console.log(`Generated ${file} -> ${path.relative(process.cwd(), outPath)}`)
}
