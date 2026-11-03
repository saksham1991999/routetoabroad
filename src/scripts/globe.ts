/**
 * Hero globe — dotted-continent orthographic sphere.
 *
 * Visual reference: RouteToAbroad v2 — charcoal land at 78%, a halftone dot
 * field over the continents, white country borders, paper ocean, 1.6px rim.
 *
 * The geography is precomputed at build time by scripts/build-globe-data.mjs,
 * so the browser ships a projection and nothing else. Rings are clipped to the
 * visible hemisphere with a horizon arc inserted between exit and re-entry
 * points, which is what keeps continents filling right up to the limb instead
 * of being cut by a straight chord.
 *
 * Interactions: slow auto-spin, drag to spin, resumes 1.4s after release.
 * Pauses when off-screen or when the tab is hidden. Reduced motion draws a
 * single static frame.
 */
import data from '../data/globe.generated.json';

type Marker = { name: string; lat: number; lon: number };
type Range = { start: number; len: number };
type PointSet = {
  cl: Float32Array;
  sl: Float32Array;
  co: Float32Array;
  so: Float32Array;
  ranges: Range[];
  /** Per-ring spherical orientation (+1 = exterior land, -1 = interior water). */
  winds: Int8Array;
  count: number;
};

const DEG = Math.PI / 180;
const TAU = Math.PI * 2;

const PAPER = '#f7f7f7';
const LAND = '#3a3a3a';
const LAND_ALPHA = 0.78;
const BORDER = 'rgba(255, 255, 255, 0.7)';
const RIM = 'rgba(18, 18, 18, 0.72)';
const SIGNAL = '#5e78ee';

const BASE_SPIN = 0.18; // degrees per frame — v2 cadence
const RESUME_MS = 1400;
const ARC_STEP = 0.09; // radians between horizon samples (~5°)

/**
 * Orientation of a ring in lon/lat space — constant for a given ring, which
 * is what the rim-arc direction needs. Natural Earth stores exterior land
 * rings clockwise and inland water rings counter-clockwise in lon/lat
 * coordinates, so the sign cleanly separates the two. (Projected-chain
 * shoelace is not usable: it flips sign when the continent is mostly hidden
 * behind the limb.)
 */
function ringWinding(ring: [number, number][]): number {
  let sum = 0;
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i]!;
    const b = ring[(i + 1) % ring.length]!;
    sum += a[0] * b[1] - b[0] * a[1];
  }
  return sum >= 0 ? 1 : -1;
}

/** Compile [lon, lat] rings into cos/sin tables, dropping closing duplicates. */
function compile(lines: number[][][]): PointSet {
  const cleaned = lines.map((line) => {
    const n = line.length;
    if (n > 1) {
      const a = line[0]!;
      const b = line[n - 1]!;
      if (a[0] === b[0] && a[1] === b[1]) return line.slice(0, n - 1);
    }
    return line;
  });
  const count = cleaned.reduce((n, line) => n + line.length, 0);
  const cl = new Float32Array(count);
  const sl = new Float32Array(count);
  const co = new Float32Array(count);
  const so = new Float32Array(count);
  const ranges: Range[] = [];
  const winds = new Int8Array(cleaned.length);

  let k = 0;
  for (let r = 0; r < cleaned.length; r++) {
    const line = cleaned[r]!;
    const start = k;
    for (const point of line as [number, number][]) {
      const lat = point[1] * DEG;
      const lon = point[0] * DEG;
      cl[k] = Math.cos(lat);
      sl[k] = Math.sin(lat);
      co[k] = Math.cos(lon);
      so[k] = Math.sin(lon);
      k++;
    }
    ranges.push({ start, len: line.length });
    winds[r] = ringWinding(line as [number, number][]);
  }

  return { cl, sl, co, so, ranges, winds, count };
}

const land = compile(data.rings as number[][][]);
const borders = compile(data.borders as number[][][]);
const dots = compile([data.dots as number[][]]);

export function initGlobe(
  canvas: HTMLCanvasElement,
  markerList: Marker[]
): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Shared buffers ----------------------------------------------------
  const nLand = land.count;
  const nAll = nLand + borders.count;
  const nDots = dots.count;

  const PX = new Float32Array(nAll);
  const PY = new Float32Array(nAll);
  const PZ = new Float32Array(nAll);

  const DX = new Float32Array(nDots);
  const DY = new Float32Array(nDots);
  const DZ = new Float32Array(nDots);

  const maxRing = Math.max(
    2,
    ...land.ranges.map((r) => r.len),
    ...borders.ranges.map((r) => r.len)
  );
  // A clipped ring can gain a full horizon sweep at each crossing.
  const CX = new Float32Array(maxRing + Math.ceil((TAU / ARC_STEP) * 2) + 16);
  const CY = new Float32Array(CX.length);

  let W = 0;
  let H = 0;
  let R = 0;
  let DPR = 1;
  let cx = 0;
  let cy = 0;

  // View centre — starts on the India–China corridor, like v2.
  let lon0 = 88;
  let lat0 = 22;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let flick = 0;
  let resumeTimer = 0;
  let spinning = true;

  let visible = true;
  let running = false;
  let raf = 0;

  function size() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    DPR = Math.min(devicePixelRatio || 1, 2);
    W = w;
    H = h;
    canvas.width = Math.round(w * DPR);
    canvas.height = Math.round(h * DPR);
    // Draw in CSS-pixel space; the transform maps into the DPR-scaled buffer.
    ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    R = Math.min(w, h) / 2 - 1.5;
    cx = w / 2;
    cy = h / 2;
  }

  /** Project one compiled point set into the given screen/depth buffers. */
  function project(
    set: PointSet,
    outX: Float32Array,
    outY: Float32Array,
    outZ: Float32Array,
    off = 0
  ) {
    const sinL0 = Math.sin(lon0 * DEG);
    const cosL0 = Math.cos(lon0 * DEG);
    const sinP0 = Math.sin(lat0 * DEG);
    const cosP0 = Math.cos(lat0 * DEG);
    const { cl, sl, co, so, count } = set;

    for (let i = 0; i < count; i++) {
      const cosD = co[i]! * cosL0 + so[i]! * sinL0;
      const sinD = so[i]! * cosL0 - co[i]! * sinL0;
      const cli = cl[i]!;
      outX[off + i] = cx + R * (cli * sinD);
      outY[off + i] = cy - R * (cosP0 * sl[i]! - sinP0 * cli * cosD);
      outZ[off + i] = sinP0 * sl[i]! + cosP0 * cli * cosD;
    }
  }

  /**
   * Project a closed ring, clipped to the visible hemisphere. On exit the
   * boundary walks the rim in the ring's own traversal direction until it
   * re-enters, so the fill hugs the limb instead of cutting a chord across
   * the disc. The rim direction comes from the ring's spherical orientation,
   * which is constant for a given ring.
   */
  function clipRing(start: number, len: number, wind: number) {
    let s0 = -1;
    for (let i = 0; i < len; i++) {
      if (PZ[start + i]! >= 0) {
        s0 = i;
        break;
      }
    }
    if (s0 < 0) return 0;

    // Screen y runs downward, so the rim sense flips relative to math angles.
    let dir = wind >= 0 ? 1 : -1;

    let m = 0;
    const put = (i: number) => {
      CX[m] = PX[start + i]!;
      CY[m] = PY[start + i]!;
      m++;
    };
    put(s0);

    let exitAngle = 0;

    for (let k = 1; k <= len; k++) {
      const ai = start + ((s0 + k - 1) % len);
      const bi = start + ((s0 + k) % len);
      const az = PZ[ai]!;
      const bz = PZ[bi]!;
      const ain = az >= 0;
      const bin = bz >= 0;

      if (ain && bin) {
        put((s0 + k) % len);
        continue;
      }
      if (!ain && !bin) continue;

      const t = az / (az - bz);
      const ax = PX[ai]!;
      const ay = PY[ai]!;
      const x = ax + (PX[bi]! - ax) * t;
      const y = ay + (PY[bi]! - ay) * t;

      if (ain) {
        exitAngle = Math.atan2(y - cy, x - cx);
        CX[m] = x;
        CY[m] = y;
        m++;
      } else {
        // Re-entering: sweep the rim from the exit point to this crossing.
        // Always take the short way round — with an even-odd fill both arcs
        // give a valid loop, but the long one inverts the whole disc's parity.
        let sweep = (Math.atan2(y - cy, x - cx) - exitAngle) * dir;
        sweep = ((sweep % TAU) + TAU) % TAU;
        let arcDir = dir;
        if (sweep > Math.PI) {
          sweep = TAU - sweep;
          arcDir = -dir;
        }
        const steps = Math.max(1, Math.ceil(sweep / ARC_STEP));
        for (let s = 1; s <= steps; s++) {
          const a = exitAngle + arcDir * sweep * (s / steps);
          CX[m] = cx + R * Math.cos(a);
          CY[m] = cy + R * Math.sin(a);
          m++;
        }
      }
    }

    return m;
  }

  /** Stroke an open line, breaking the path wherever it dips behind the globe. */
  function traceOpen(base: number, start: number, len: number) {
    let drawing = false;
    for (let i = 0; i < len; i++) {
      const p = base + start + i;
      const z = PZ[p]!;
      if (z >= 0) {
        if (drawing) ctx!.lineTo(PX[p]!, PY[p]!);
        else {
          ctx!.moveTo(PX[p]!, PY[p]!);
          drawing = true;
        }
      } else if (drawing) {
        const q = p - 1;
        const t = PZ[q]! / (PZ[q]! - z);
        ctx!.lineTo(PX[q]! + (PX[p]! - PX[q]!) * t, PY[q]! + (PY[p]! - PY[q]!) * t);
        drawing = false;
      }
    }
  }

  function draw() {
    if (!W || !H || R < 4) return;

    project(land, PX, PY, PZ, 0);
    project(borders, PX, PY, PZ, nLand);
    project(dots, DX, DY, DZ, 0);

    ctx!.clearRect(0, 0, W, H);

    // Ocean disc + rim
    ctx!.beginPath();
    ctx!.arc(cx, cy, R, 0, TAU);
    ctx!.fillStyle = PAPER;
    ctx!.fill();
    ctx!.strokeStyle = RIM;
    ctx!.lineWidth = 1.6;
    ctx!.stroke();

    ctx!.save();
    ctx!.beginPath();
    ctx!.arc(cx, cy, R, 0, TAU);
    ctx!.clip();

    // Land — one even-odd path so inland water stays punched out.
    ctx!.beginPath();
    let any = false;
    for (let ri = 0; ri < land.ranges.length; ri++) {
      const r = land.ranges[ri]!;
      const m = clipRing(r.start, r.len, land.winds[ri]!);
      if (m < 3) continue;
      ctx!.moveTo(CX[0]!, CY[0]!);
      for (let i = 1; i < m; i++) ctx!.lineTo(CX[i]!, CY[i]!);
      ctx!.closePath();
      any = true;
    }
    if (any) {
      ctx!.globalAlpha = LAND_ALPHA;
      ctx!.fillStyle = LAND;
      ctx!.fill('evenodd');
      ctx!.globalAlpha = 1;
    }

    // Country borders
    ctx!.beginPath();
    for (const r of borders.ranges) traceOpen(nLand, r.start, r.len);
    ctx!.strokeStyle = BORDER;
    ctx!.lineWidth = 0.7;
    ctx!.stroke();

    // Halftone dot field, one path and one fill for the whole globe.
    const dotR = Math.max(0.85, 0.0052 * R);
    const edge = R - 1;
    const edge2 = edge * edge;
    ctx!.beginPath();
    for (let i = 0; i < nDots; i++) {
      if (DZ[i]! <= 0.02) continue;
      const dx = DX[i]! - cx;
      const dy = DY[i]! - cy;
      if (dx * dx + dy * dy > edge2) continue;
      ctx!.moveTo(DX[i]! + dotR, DY[i]!);
      ctx!.arc(DX[i]!, DY[i]!, dotR, 0, TAU);
    }
    ctx!.fillStyle = LAND;
    ctx!.fill();

    ctx!.restore();

    // Rim again — the clip above eats half the stroke width.
    ctx!.beginPath();
    ctx!.arc(cx, cy, R, 0, TAU);
    ctx!.strokeStyle = RIM;
    ctx!.lineWidth = 1.6;
    ctx!.stroke();

    drawMarkers();
  }

  /**
   * Two signal dots for the Delhi and Guangzhou offices. No labels — the
   * globe is an instrument at this size, and type over the dot field is
   * noise. The names live in the copy below it and in the stage coordinates.
   */
  function drawMarkers() {
    if (!markerList.length) return;
    const radius = R < 62 ? 1.9 : 2.4;
    const sinL0 = Math.sin(lon0 * DEG);
    const cosL0 = Math.cos(lon0 * DEG);
    const sinP0 = Math.sin(lat0 * DEG);
    const cosP0 = Math.cos(lat0 * DEG);

    for (const marker of markerList) {
      const lat = marker.lat * DEG;
      const lon = marker.lon * DEG;
      const cl = Math.cos(lat);
      const cosD = Math.cos(lon) * cosL0 + Math.sin(lon) * sinL0;
      const sinD = Math.sin(lon) * cosL0 - Math.cos(lon) * sinL0;
      const z = sinP0 * Math.sin(lat) + cosP0 * cl * cosD;
      if (z <= 0.08) continue;

      const sx = cx + R * cl * sinD;
      const sy = cy - R * (cosP0 * Math.sin(lat) - sinP0 * cl * cosD);
      ctx!.globalAlpha = Math.min(1, (z - 0.08) / 0.35);
      ctx!.fillStyle = SIGNAL;
      ctx!.beginPath();
      ctx!.arc(sx, sy, radius, 0, TAU);
      ctx!.fill();
      ctx!.globalAlpha = 1;
    }
  }

  function tick() {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    if (!visible || document.hidden) return;

    if (!dragging && spinning) {
      lon0 -= BASE_SPIN;
      if (lon0 < -180) lon0 += 360;
      // A flick decays back into the base cadence rather than stopping dead.
      lon0 -= flick;
      flick *= 0.94;
    }
    draw();
  }

  function start() {
    if (running || reduced) return;
    running = true;
    raf = requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  // ---- Interaction -------------------------------------------------------
  canvas.addEventListener('pointerdown', (e) => {
    if (reduced) return;
    dragging = true;
    spinning = false;
    flick = 0;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
    window.clearTimeout(resumeTimer);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    lon0 -= dx * 0.3;
    lat0 = Math.max(-68, Math.min(68, lat0 + dy * 0.3));
    flick = dx * 0.02;
    draw();
  });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      spinning = true;
      flick = 0;
    }, RESUME_MS);
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  const ro = new ResizeObserver(() => {
    size();
    draw();
  });
  ro.observe(canvas);

  const io = new IntersectionObserver(
    (entries) => {
      visible = entries[0]?.isIntersecting ?? true;
      if (visible) start();
    },
    { threshold: 0 }
  );
  io.observe(canvas);

  const onVisibility = () => {
    if (!document.hidden) draw();
  };
  document.addEventListener('visibilitychange', onVisibility);

  size();
  draw();
  start();

  return () => {
    stop();
    ro.disconnect();
    io.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    window.clearTimeout(resumeTimer);
  };
}
