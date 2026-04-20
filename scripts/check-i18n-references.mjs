import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcDir = path.join(root, 'src');
const enLocalePath = path.join(srcDir, 'i18n', 'locales', 'en.json');

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

function getCodeFiles(dir, result = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getCodeFiles(fullPath, result);
      continue;
    }
    if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      result.push(fullPath);
    }
  }
  return result;
}

const localeKeys = flattenKeys(JSON.parse(fs.readFileSync(enLocalePath, 'utf8')));
const patterns = [
  /\bt\(\s*['"`]([^'"`$]+)['"`]/g,
  /translationKey\s*:\s*['"`]([^'"`$]+)['"`]/g,
  /aria-label=\{t\(\s*['"`]([^'"`$]+)['"`]/g,
];

const missingByFile = new Map();

for (const file of getCodeFiles(srcDir)) {
  const content = fs.readFileSync(file, 'utf8');
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content))) {
      const key = match[1];
      if (!localeKeys.has(key)) {
        const relativePath = path.relative(root, file);
        const missing = missingByFile.get(relativePath) ?? new Set();
        missing.add(key);
        missingByFile.set(relativePath, missing);
      }
    }
  }
}

if (missingByFile.size > 0) {
  for (const [file, keys] of [...missingByFile.entries()].sort()) {
    console.error(`\n${file}`);
    for (const key of [...keys].sort()) {
      console.error(`  - ${key}`);
    }
  }
  process.exitCode = 1;
} else {
  console.log('i18n reference check passed');
}
