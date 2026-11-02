#!/usr/bin/env python3
"""RouteToAbroad v3 — image generation via Agnes AI.

Reads scripts/images.config.json, generates every missing image in parallel
batches via the agnes.py CLI, and leaves raw PNGs in scripts/raw/.
Then run `node scripts/process-images.mjs` to optimize into src/assets/.

Usage: npm run images:generate   (requires AGNES_AI_API_KEY in env or ~/.zshrc)
"""
import json
import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG = HERE / "images.config.json"
RAW = HERE / "raw"
AGNES = Path.home() / ".claude" / "skills" / "agnes-ai" / "scripts" / "agnes.py"

SIZE = os.environ.get("IMAGE_SIZE", "2K")
PARALLEL = int(os.environ.get("IMAGE_PARALLEL", "4"))


def main() -> int:
    cfg = json.loads(CONFIG.read_text())
    style = cfg["styleSuffix"]
    RAW.mkdir(parents=True, exist_ok=True)

    jobs = []
    for img in cfg["images"]:
        out = RAW / f"{img['name']}.png"
        if out.exists():
            print(f"skip  {img['name']} (exists)")
            continue
        prompt = f"{img['prompt']} {style}"
        jobs.append((img["name"], prompt, img["ratio"], out))

    if not jobs:
        print("Nothing to generate — all images present.")
        return 0

    print(f"Generating {len(jobs)} images at {SIZE} ({PARALLEL} at a time)…")

    def gen(item):
        name, prompt, ratio, out = item
        cmd = [
            sys.executable, str(AGNES), "image", prompt,
            "--size", SIZE, "--ratio", ratio, "-o", str(out),
        ]
        try:
            proc = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
            if proc.returncode == 0 and out.exists():
                print(f"  ok  {name}")
                return name, True
            tail = (proc.stderr or proc.stdout).strip().splitlines()
            print(f"  FAIL {name}: {tail[-1] if tail else 'unknown error'}")
            return name, False
        except Exception as exc:  # noqa: BLE001
            print(f"  FAIL {name}: {exc}")
            return name, False

    failures = []
    with ThreadPoolExecutor(max_workers=PARALLEL) as pool:
        futures = [pool.submit(gen, job) for job in jobs]
        for fut in as_completed(futures):
            name, ok = fut.result()
            if not ok:
                failures.append(name)

    print(f"Done: {len(jobs) - len(failures)}/{len(jobs)} generated.")
    if failures:
        for name in failures:
            print(f"  missing: {name}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
