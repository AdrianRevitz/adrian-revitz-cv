import fs from 'node:fs/promises'
import path from 'node:path'

const SITE_URL = 'https://adrianrevitz.dk'
const routes = ['/', '/experience', '/projects', '/education', '/photography', '/music', '/contact']
const today = process.env.SITEMAP_DATE || new Date().toISOString().slice(0, 10)

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

await fs.writeFile(path.resolve('public/sitemap.xml'), xml)
console.log('Wrote public/sitemap.xml')
