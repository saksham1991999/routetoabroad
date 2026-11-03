/**
 * Generate the full icon set from the canonical brand mark (public/favicon.svg):
 *  - favicon-32.png           PNG fallback for the head links
 *  - favicon.ico              legacy fallback (32px PNG embedded in an ICO container)
 *  - apple-touch-icon.png     180x180, flattened opaque (iOS rejects alpha corners)
 *  - icon-192.png / icon-512.png        manifest "any" icons
 *  - icon-512-maskable.png    mark at 80% inside the maskable safe zone
 *
 * All rasters derive from one SVG, so the mark stays identical everywhere.
 * Usage: node scripts/generate-icons.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, '..', 'public');
const svgPath = join(publicDir, 'favicon.svg');

// The SVG's natural size is 32px; density scales the rasterisation.
const render = (size) => sharp(svgPath, { density: 72 * (size / 32) }).png();

// Full-bleed opaque square: the mark's rounded corners are invisible against
// the same black, so iOS/Android masks never see transparency.
async function opaque(size, markSize) {
  const mark = await render(markSize).toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: '#000000' },
  })
    .composite([{ input: mark, top: Math.round((size - markSize) / 2), left: Math.round((size - markSize) / 2) }])
    .png()
    .toBuffer();
}

// Minimal ICO packer: header + one directory entry + embedded PNG (valid since Vista).
function makeIco(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width
  entry.writeUInt8(32, 1); // height
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12); // data offset (6 + 16)
  return Buffer.concat([header, entry, pngBuffer]);
}

const favicon32 = await render(32).toBuffer();

const outputs = [
  ['favicon-32.png', favicon32],
  ['favicon.ico', makeIco(favicon32)],
  ['apple-touch-icon.png', await opaque(180, 180)],
  ['icon-192.png', await render(192).toBuffer()],
  ['icon-512.png', await render(512).toBuffer()],
  ['icon-512-maskable.png', await opaque(512, 410)], // mark at 80% of the safe zone
];

for (const [name, buffer] of outputs) {
  writeFileSync(join(publicDir, name), buffer);
  console.log(`✓ ${name} (${buffer.length} bytes)`);
}
