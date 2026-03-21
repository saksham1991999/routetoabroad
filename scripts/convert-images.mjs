import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const dir = fileURLToPath(new URL('../public/assets/images/', import.meta.url));
const files = readdirSync(dir).filter(f => /\.jpe?g$/i.test(f));

for (const file of files) {
  const src = join(dir, file);
  const dest = join(dir, basename(file, extname(file)) + '.webp');
  if (existsSync(dest)) {
    console.log('skip', file);
    continue;
  }
  try {
    await sharp(src).webp({ quality: 80 }).toFile(dest);
    console.log('converted', file, '->', basename(dest));
  } catch (err) {
    console.warn('skipped (unsupported)', file, '-', err.message);
  }
}

console.log('Done.');
