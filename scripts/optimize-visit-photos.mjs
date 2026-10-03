import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'

// Each phase gets its own subfolder under public/. Photos may be named either
// `<index>.jpeg` (Phase 03) or `<phase>_<index>.jpeg` (Phase 02 and later), and
// their thumbs are written to `<folder>/thumbs/<same-stem>.webp`.
const SRC_ROOT = 'public'
// `1` (index only) or `2_1` (phase_index)
const STEM_RE = /^\d+(?:_\d+)?$/
const WIDTH = 860
const QUALITY = 70

const names = (await readdir(SRC_ROOT, { withFileTypes: true }))
  .filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== 'thumbs')
  .map(d => d.name)
  .sort()

if (names.length === 0) {
  console.log('No phase folders matching N_M found under public/')
  process.exit(0)
}

let grandTotal = 0

for (const name of names) {
  const srcDir = path.join(SRC_ROOT, name)
  const outDir = path.join(srcDir, 'thumbs')
  await mkdir(outDir, { recursive: true })

  const files = (await readdir(srcDir)).filter(f => /\.(jpe?g|png)$/i.test(f))

  let total = 0
  let count = 0

  for (const file of files) {
    const stem = path.parse(file).name
    if (!STEM_RE.test(stem)) continue

    const out = path.join(outDir, `${stem}.webp`)
    const src = path.join(srcDir, file)

    try {
      await sharp(src)
        .resize({ width: WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(out)
    } catch (err) {
      console.error(`skipped ${name}/${file}: ${err.message}`)
      continue
    }

    const { size } = await stat(out)
    total += size
    count++
    console.log(`${name}/${file} -> thumbs/${stem}.webp  ${(size / 1024).toFixed(1)} kB`)
  }

  grandTotal += total
  console.log(`\n${name}: ${count} photos, ${(total / 1024).toFixed(1)} kB total\n`)
}

console.log(`All phases: ${(grandTotal / 1024).toFixed(1)} kB total`)