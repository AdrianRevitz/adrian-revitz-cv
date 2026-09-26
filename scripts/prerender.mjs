// Prerenders each route to static HTML so crawlers that don't execute
// JavaScript (many AI crawlers included) still see real page content.
// Run after `vite build` + `vite build --ssr src/entry-server.jsx --outDir dist-server`.
import fs from 'node:fs/promises'
import path from 'node:path'
import { render } from '../dist-server/entry-server.js'
import { seoByRoute, SITE_URL } from '../src/data/seo.js'

const routes = ['/', '/experience', '/projects', '/education', '/photography', '/music', '/contact']
const baseTemplate = await fs.readFile(path.resolve('dist/index.html'), 'utf-8')

// Preload the two Latin font files (self-hosted via @fontsource) so the browser
// fetches them with the HTML instead of discovering them late through the CSS.
const assets = await fs.readdir(path.resolve('dist/assets'))
const preloadFonts = assets
  .filter((file) => /^(inter|jetbrains-mono)-latin-wght-normal-.*\.woff2$/.test(file))
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')
const template = preloadFonts ? baseTemplate.replace('</title>', `</title>\n    ${preloadFonts}`) : baseTemplate

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Prerender template pattern not found: ${pattern}`)
  }
  return html.replace(pattern, replacement)
}

for (const route of routes) {
  const appHtml = render(route)
  const meta = seoByRoute.en[route]
  const canonicalUrl = `${SITE_URL}${route}`

  let html = template
  html = replaceTag(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`)
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
  html = replaceTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`)
  html = replaceTag(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${meta.description}$2`)
  html = replaceTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`)
  html = replaceTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${meta.title}$2`)
  html = replaceTag(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${meta.description}$2`)
  html = replaceTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${meta.title}$2`)
  html = replaceTag(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${meta.description}$2`)

  const outPath = route === '/' ? path.resolve('dist/index.html') : path.resolve(`dist${route}/index.html`)
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, html)
  console.log(`Prerendered ${route} -> ${path.relative(process.cwd(), outPath)} (${appHtml.length} chars of content)`)
}
