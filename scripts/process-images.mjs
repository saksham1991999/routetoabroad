/**
 * Optimize generated raw PNGs for the web:
 *  - resize to max 2000px wide
 *  - export JPEG q82 into src/assets/images/ (Astro re-encodes to AVIF/WebP at build)
 *  - export the default OG image (1200x630) into public/og/
 * Usage: node scripts/process-images.mjs
 */
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const rawDir = join(here, 'raw');
const outDir = join(here, '..', 'src', 'assets', 'images');
const ogDir = join(here, '..', 'public', 'og');

mkdirSync(outDir, { recursive: true });
mkdirSync(ogDir, { recursive: true });

const OG_SOURCES = new Map([
  ['hero-home', 'default.jpg'], // site default OG
  ['hero-education', 'education.jpg'],
  ['hero-tourism', 'tourism.jpg'],
  ['hero-trade', 'trade.jpg'],
]);

const files = readdirSync(rawDir).filter((f) => f.endsWith('.png'));
let done = 0;

for (const file of files) {
  const name = basename(file, '.png');
  const src = sharp(join(rawDir, file));

  await src
    .clone()
    .resize({ width: 2000, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(outDir, `${name}.jpg`));

  const ogName = OG_SOURCES.get(name);
  if (ogName) {
    await src
      .clone()
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(join(ogDir, ogName));
  }

  done++;
  console.log(`✓ ${name} → jpg ${ogName ? `+ og/${ogName}` : ''}`);
}

console.log(`Processed ${done}/${files.length} images.`);
