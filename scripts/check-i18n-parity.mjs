import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const localesDir = path.join(root, 'src', 'i18n', 'locales');
const localeFiles = ['en.json', 'zh.json', 'fr.json', 'ar.json'];

function flattenKeys(value, prefix = '', result = new Set()) {
  for (const [key, nested] of Object.entries(value)) {
    const next = prefix ? `${prefix}.${key}` : key;
    if (nested && typeof nested === 'object' && !Array.isArray(nested)) {
      flattenKeys(nested, next, result);
    } else {
      result.add(next);
    }
  }
  return result;
}

const localeKeySets = Object.fromEntries(
  localeFiles.map((file) => {
    const json = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'));
    return [file, flattenKeys(json)];
  }),
);

const baseFile = 'en.json';
const baseKeys = localeKeySets[baseFile];
let hasError = false;

for (const file of localeFiles) {
  if (file === baseFile) continue;

  const keys = localeKeySets[file];
  const missing = [...baseKeys].filter((key) => !keys.has(key));
  const extra = [...keys].filter((key) => !baseKeys.has(key));

  if (missing.length || extra.length) {
    hasError = true;
    console.error(`\n${file}`);
    if (missing.length) {
      console.error('  Missing keys:');
      for (const key of missing) console.error(`    - ${key}`);
    }
    if (extra.length) {
      console.error('  Extra keys:');
      for (const key of extra) console.error(`    - ${key}`);
    }
  }
}

if (hasError) {
  process.exitCode = 1;
} else {
  console.log('i18n parity check passed');
}
