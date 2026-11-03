/**
 * Build-time generator for the hero globe.
 *
 * Produces src/data/globe.generated.json from Natural Earth 110m:
 *   - rings:   land polygon rings (even-odd fill) as [lon, lat]
 *   - borders: country boundary polylines as [lon, lat]
 *   - dots:    7,200 Fibonacci-sphere points filtered to land
 *
 * The runtime renderer only needs an orthographic projection — no d3 or
 * topojson in the browser bundle. Re-run with:
 *   node scripts/build-globe-data.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { feature, mesh } from 'topojson-client';
import { geoContains } from 'd3-geo';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const landTopo = JSON.parse(
  readFileSync(resolve(root, 'node_modules/world-atlas/land-110m.json'), 'utf8')
);
const countryTopo = JSON.parse(
  readFileSync(resolve(root, 'node_modules/world-atlas/countries-110m.json'), 'utf8')
);

const round = (n) => Math.round(n * 10) / 10;

/** Squared distance from p to segment ab, in degree space. */
function segDist2(p, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) {
    const px = p[0] - a[0];
    const py = p[1] - a[1];
    return px * px + py * py;
  }
  let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const qx = a[0] + t * dx - p[0];
  const qy = a[1] + t * dy - p[1];
  return qx * qx + qy * qy;
}

/** Douglas–Peucker, iterative to avoid deep recursion on long rings. */
function simplify(points, tolerance) {
  if (points.length <= 3) return points;
  const tol2 = tolerance * tolerance;
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [first, last] = stack.pop();
    let best = -1;
    let bestD = tol2;
    for (let i = first + 1; i < last; i++) {
      const d = segDist2(points[i], points[first], points[last]);
      if (d > bestD) {
        bestD = d;
        best = i;
      }
    }
    if (best !== -1) {
      keep[best] = 1;
      stack.push([first, best], [best, last]);
    }
  }
  const out = [];
  for (let i = 0; i < points.length; i++) if (keep[i]) out.push(points[i]);
  return out;
}

const quantize = (line) => line.map(([lon, lat]) => [round(lon), round(lat)]);

/**
 * Remove antimeridian jumps by carrying a ±360° offset across them.
 * Without this, a ±180 → ∓180 step projects as a chord straight across the
 * visible disc (streaks through the ocean, torn land fills). The projection
 * is 360-periodic, so the shifted geometry draws identically.
 */
function unwrap(line) {
  const out = [];
  let offset = 0;
  for (let i = 0; i < line.length; i++) {
    const lon = line[i][0];
    const lat = line[i][1];
    if (i > 0) {
      const delta = lon + offset - out[i - 1][0];
      if (delta > 180) offset -= 360;
      else if (delta < -180) offset += 360;
    }
    out.push([lon + offset, lat]);
  }
  return out;
}

// ---- Land rings -----------------------------------------------------------
const landFeature = feature(landTopo, landTopo.objects.land);
const features =
  landFeature.type === 'FeatureCollection' ? landFeature.features : [landFeature];
const rings = [];
for (const f of features) {
  const g = f.geometry;
  if (!g) continue;
  const polygons = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  for (const polygon of polygons) {
    for (const ring of polygon) {
      const simplified = simplify(unwrap(ring), 0.18);
      if (simplified.length >= 4) rings.push(quantize(simplified));
    }
  }
}

// ---- Country borders ------------------------------------------------------
const borderMesh = mesh(countryTopo, countryTopo.objects.countries);
const borders = [];
for (const line of borderMesh.coordinates) {
  const simplified = simplify(unwrap(line), 0.28);
  if (simplified.length >= 2) borders.push(quantize(simplified));
}

// ---- Halftone dots --------------------------------------------------------
// Even distribution on the sphere (Fibonacci), then keep only land points.
const DOTS = 7200;
const golden = Math.PI * (3 - Math.sqrt(5));
const dots = [];
for (let i = 0; i < DOTS; i++) {
  const y = 1 - (i / (DOTS - 1)) * 2;
  const radius = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = golden * i;
  const lon = (Math.atan2(Math.sin(theta) * radius, Math.cos(theta) * radius) * 180) / Math.PI;
  const lat = (Math.asin(Math.max(-1, Math.min(1, y))) * 180) / Math.PI;
  if (geoContains(landFeature, [lon, lat])) dots.push([round(lon), round(lat)]);
}

const out = { rings, borders, dots };
const target = resolve(root, 'src/data/globe.generated.json');
writeFileSync(target, JSON.stringify(out));

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(
  `globe data → ${target}\n` +
    `  rings ${rings.length} (${rings.reduce((n, r) => n + r.length, 0)} pts)\n` +
    `  borders ${borders.length} (${borders.reduce((n, b) => n + b.length, 0)} pts)\n` +
    `  dots ${dots.length}\n` +
    `  ${kb(JSON.stringify(out).length)} raw`
);
