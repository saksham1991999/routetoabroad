# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Type-check then build (tsc -b && vite build)
npm run lint       # ESLint with flat config
npm run preview    # Preview production build
```

No test runner is configured.

## Architecture

RouteToAbroad is a multilingual marketing/service website with three pillars: **Education**, **Tourism**, and **Trade**. It's a React 19 SPA using Vite, TypeScript strict mode, Tailwind CSS v4, and React Router v7.

### Routing & Pages

Routes are defined in `src/App.tsx` using React Router's `BrowserRouter`. Route paths are centralized in `src/constants/` as a `ROUTES` object — use this for navigation links rather than hardcoding strings.

Six pages: Home, Education, Tourism, Trade, About, Contact.

### Internationalization

All UI strings go through `react-i18next`. Translation keys live in `src/i18n/locales/{en,zh,fr,ar}.json`. The i18n setup (`src/i18n/i18n.ts`) uses browser language detection with localStorage persistence. **Arabic triggers RTL** by setting `document.dir = 'rtl'` — any layout work must account for this.

### Styling

Tailwind CSS v4 via Vite plugin (no `tailwind.config.js` needed). Uses a custom color palette: `primary`, `secondary`, `tourism-emerald`, `trade-violet`. Dark mode is class-based (`dark:` prefix) — theme state is managed by `ThemeContext` and persisted to localStorage. An inline script in `index.html` prevents theme flash on load.

Use the `cn()` utility (`src/utils/`) which wraps `clsx` + `tailwind-merge` for safe class merging.

Icons come from two sources: `lucide-react` (JS) and Material Symbols Outlined (Google Font, used via CSS class `material-symbols-outlined`).

### State & Context

- **ThemeContext** — light/dark theme, syncs to `document.documentElement.classList` and localStorage
- **ToastContext** — notification system; `addToast(message, type, duration?)` with types `success | error | info`

Access via `useTheme()` and `useToast()` hooks.

### Forms & Validation

The `useFormValidation<T>` hook (`src/hooks/`) handles all form state. Rules: `required`, `minLength`, `maxLength`, `email`, `phone`, `pattern`. Each service has its own form component in `src/components/forms/`.

### Animation

`Reveal` component (`src/components/animation/`) wraps content with Intersection Observer-based entrance animations (variants: `fade`, `slide-up`, `slide-left`, `slide-right`). It respects `prefers-reduced-motion`.

### Key Conventions

- `useMobileMenu` hook manages mobile nav state — it locks body scroll and handles Escape key
- Static data (e.g. testimonials) lives in `src/data/`
- Company info, social links, nav links are all in `src/constants/` — edit there, not inline
- TypeScript strict mode is on with `noUnusedLocals` and `noUnusedParameters` enforced at build time
