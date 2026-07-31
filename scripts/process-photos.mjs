// Regenerates src/data/photos.js and public/photos/ from a source folder of JPEGs.
// Usage: node scripts/process-photos.mjs ["C:\\path\\to\\photos"]
// Defaults to C:\Users\adrev\Documents\Pictures if no path is given.
import exifr from 'exifr'
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'

const SOURCE_DIR = process.argv[2] || 'C:\\Users\\adrev\\Documents\\Pictures'
const OUT_DIR = path.resolve('public/photos')
const DATA_FILE = path.resolve('src/data/photos.js')
const FULL_WIDTH = 1600
const THUMB_WIDTH = 700

await fs.mkdir(OUT_DIR, { recursive: true })

const files = (await fs.readdir(SOURCE_DIR)).filter((f) => /\.(jpe?g)$/i.test(f))
const entries = []

for (const file of files) {
  const srcPath = path.join(SOURCE_DIR, file)
  const buf = await fs.readFile(srcPath)

  let meta = {}
  try {
    meta = (await exifr.parse(buf, {
      pick: ['DateTimeOriginal', 'CreateDate', 'Model', 'LensModel', 'ISO', 'FNumber', 'ExposureTime', 'FocalLength'],
    })) || {}
  } catch (e) {
    console.error(`EXIF parse failed for ${file}:`, e.message)
  }

  const id = path.parse(file).name.toLowerCase()
  const fullName = `${id}.jpg`
  const thumbName = `${id}-thumb.jpg`

  const image = sharp(buf).rotate()
  const fullInfo = await image
    .clone()
    .resize({ width: FULL_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer({ resolveWithObject: true })
  await fs.writeFile(path.join(OUT_DIR, fullName), fullInfo.data)

  const thumbInfo = await image
    .clone()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toBuffer({ resolveWithObject: true })
  await fs.writeFile(path.join(OUT_DIR, thumbName), thumbInfo.data)

  entries.push({
    id,
    full: `/photos/${fullName}`,
    thumb: `/photos/${thumbName}`,
    width: fullInfo.info.width,
    height: fullInfo.info.height,
    date: (meta.DateTimeOriginal || meta.CreateDate || new Date()).toISOString(),
    camera: meta.Model || 'Unknown camera',
    lens: meta.LensModel || 'Unknown lens',
    iso: meta.ISO || null,
    aperture: meta.FNumber || null,
    shutter: meta.ExposureTime || null,
    focalLength: meta.FocalLength || null,
  })

  console.log(`Processed ${file}`)
}

entries.sort((a, b) => new Date(a.date) - new Date(b.date))

const body = entries
  .map(
    (e) => `  {
    id: '${e.id}',
    full: '${e.full}',
    thumb: '${e.thumb}',
    width: ${e.width},
    height: ${e.height},
    date: '${e.date}',
    camera: '${e.camera}',
    lens: '${e.lens}',
    iso: ${e.iso},
    aperture: ${e.aperture},
    shutter: ${e.shutter},
    focalLength: ${e.focalLength},
  },`
  )
  .join('\n')

await fs.writeFile(DATA_FILE, `export const photos = [\n${body}\n]\n`)
console.log(`\nDone. ${entries.length} photos written to ${path.relative(process.cwd(), DATA_FILE)}`)
