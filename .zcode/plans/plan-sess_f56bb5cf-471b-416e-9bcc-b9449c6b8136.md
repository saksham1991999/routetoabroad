# Promote Astro v3 to repo root, delete v1, open PR to main

## Context

The Astro redesign (in `astro/`, untracked) is complete and verified — 56 pages, Lighthouse 95–100, full JSON-LD/sitemap/llms.txt stack. The old React SPA still occupies the repo root (~101 tracked files). The user wants the port audited as complete, the old site deleted, the Astro project living at the parent main folder, and delivery as a **PR to main** (not direct push, not CLI deploy).

**Audit finding:** every old v1 URL resolves on the new site except one — `/blog/india-china-trade-practical-guide-2025` (new slug dropped the `-2025`). It needs a 301 before the move. `stitch/` is untracked (deleting = gone for good — user confirmed); `design.md` is tracked (recoverable in history).

## Steps

### 1. Port-completeness fix (in `astro/` before moving)
- Add to `astro/netlify.toml` redirects: `[[redirects]] from = "/blog/india-china-trade-practical-guide-2025" to = "/blog/india-china-trade-practical-guide" status = 301`
- Rebuild (`npx astro build`) + `node scripts/validate-site.mjs` → green before anything moves.

### 2. Branch + stop dev server
- `git checkout -b astro-v3-root` from main.
- Kill the background `npm run dev` (running from `astro/`) — file-watchers must die before the move.

### 3. Move Astro to root
- Delete conflicting v1 root items first (`git rm -r` tracked ones; plain `rm -rf` for untracked): `src/ public/ index.html vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json eslint.config.js netlify.toml netlify/ scripts/ package.json package-lock.json node_modules/ design.md stitch/ README.md`
- Keep: `.agents/`, `.zcode/`, `.git/`, `.gitignore` (merge), `AGENTS.md`+`CLAUDE.md` (rewrite), `.env.example` (rewrite), `skills-lock.json`
- `mv` from `astro/` → root: `astro.config.mjs package.json package-lock.json tsconfig.json netlify.toml netlify/ public/ scripts/ src/ README.md node_modules/` (delete `astro/dist` + `astro/.astro` first — regenerable)
- Merge `.gitignore`: add `.astro/`, `scripts/raw/`, `agnes-out/` (root already covers node_modules/dist/.env)
- `rmdir astro`

### 4. Update repo docs
- Rewrite `AGENTS.md` (and mirror `CLAUDE.md`) for Astro: commands (`npm run dev/build/preview`, `node scripts/validate-site.mjs`), architecture (static Astro 5, content collections, vanilla-JS tools, netlify function chatbot, design tokens), pointers to `scripts/images.config.json` workflow.
- Rewrite `.env.example`: `ANTHROPIC_API_KEY`, `ANTHROPIC_API_URL` (chatbot), note `AGNES_AI_API_KEY` optional/local-only.

### 5. Verify at root
- `npm run build` → 56 pages; `node scripts/validate-site.mjs` → all green
- `npm run preview` + curl: `/`, `/education`, a blog slug, and confirm `dist/` has no stale v1 artifacts
- Confirm redirect entries present in root `netlify.toml` (Netlify applies them at deploy; note in PR)

### 6. Commit + PR
- `git add -A` → single commit: "restructure: replace React SPA with Astro v3 at repo root" (body: port audit summary, verification scores, deploy notes)
- `git push -u origin astro-v3-root`
- `gh pr create --base main` — body includes: what changed, port-coverage table (20/21 same-path + 4 redirects), Lighthouse/verification results, **Netlify deploy notes** (build `npm run build`, publish `dist`, functions `netlify/functions`, env `ANTHROPIC_API_KEY`/`ANTHROPIC_API_URL`, no base directory), open items (i18n zh/fr/ar deferred; `{{VERIFY}}` facts: founding year, 98% visa rate, 4.9 rating)

## Verification
1. Root build + validator green; `git status` clean after commit; `astro/` no longer exists
2. `git ls-files | grep -v .agents | head` shows only Astro-project files; old files recoverable at commit c120988
3. PR open with checklist body; reviewer can deploy a Netlify branch preview from the PR to see redirects live
