import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'

const WIDTH = 1200
const HEIGHT = 630
const ACCENT = '#0d9488'
const BG = '#ffffff'
const TEXT = '#0f172a'
const DIM = '#64748b'
const BORDER = '#e2e8f0'

function gridLines() {
  let lines = ''
  for (let x = 0; x <= WIDTH; x += 48) {
    lines += `<line x1="${x}" y1="0" x2="${x}" y2="${HEIGHT}" stroke="${BORDER}" stroke-width="1" />`
  }
  for (let y = 0; y <= HEIGHT; y += 48) {
    lines += `<line x1="0" y1="${y}" x2="${WIDTH}" y2="${y}" stroke="${BORDER}" stroke-width="1" />`
  }
  return lines
}

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG}" />
  <g opacity="0.6">${gridLines()}</g>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#fade)" />
  <defs>
    <radialGradient id="fade" cx="20%" cy="0%" r="80%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.12" />
      <stop offset="55%" stop-color="${ACCENT}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect x="80" y="80" width="4" height="64" fill="${ACCENT}" rx="2" />

  <text x="98" y="112" font-family="Consolas, monospace" font-size="26" fill="${ACCENT}" font-weight="700">$ whoami</text>

  <text x="80" y="230" font-family="Arial, sans-serif" font-size="72" font-weight="800" fill="${TEXT}" letter-spacing="-2">Adrian W. Revitz</text>

  <text x="80" y="290" font-family="Consolas, monospace" font-size="34" fill="${DIM}">Digital Innovation · CRM &amp; AI Automation</text>

  <text x="80" y="360" font-family="Arial, sans-serif" font-size="26" fill="${TEXT}">Junior Analyst @ Pinetree Venture Partners</text>
  <text x="80" y="400" font-family="Arial, sans-serif" font-size="26" fill="${TEXT}">MSc Digital Innovation &amp; Management, IT University of Copenhagen</text>

  <g font-family="Consolas, monospace" font-size="24" fill="${DIM}">
    <text x="80" y="540">Copenhagen, Denmark</text>
  </g>

  <text x="80" y="580" font-family="Consolas, monospace" font-size="24" fill="${ACCENT}">~/adrian-revitz</text>
  <text x="1120" y="580" font-family="Consolas, monospace" font-size="24" fill="${DIM}" text-anchor="end">adrianrevitz.dk</text>
</svg>
`

const outPath = path.resolve('public/og-image.jpg')
await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(outPath)
console.log(`Wrote ${outPath}`)
