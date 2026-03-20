# RouteToAbroad

### Your Strategic Gateway Between India & East Asia

---

A multilingual marketing and service website bridging cross-border growth for students, travelers, and businesses across China and beyond. Operating since 2012 with offices in New Delhi and Guangzhou.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Mode-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![i18n](https://img.shields.io/badge/i18n-4%20Languages-25A162?logo=i18next&logoColor=white)](https://www.i18next.com)
[![React Router](https://img.shields.io/badge/React%20Router-v7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com)

---

## 🎯 Our Three Pillars

### Education
Study in China with RouteToAbroad — MBBS, Engineering, Business, Language & Research programs. Partner universities include Peking, Tsinghua, Fudan, Zhejiang, and SJTU. Over **500+ students placed** with **98% visa success rate**.

- CSC & university scholarships
- HSK language training
- Scholarship eligibility calculator

### Tourism
Experience East Asia through culturally immersive journeys — Cultural tours, Business delegations, and Custom travel across China, Japan, and South Korea.

- 24/7 multilingual ground support
- Visa concierge (L, M, F categories)
- Custom & group travel options

### Trade
India-China supply chain solutions — Product sourcing from verified factories, quality control, customs clearance, and logistics.

- Electronics, Textiles, Machinery, Auto Parts
- Sea freight (18-22 days) & Air freight (3-5 days)
- AQL quality protocols & BIS/WPC certifications

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 (SPA) with Vite |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router v7 |
| **i18n** | react-i18next + browser language detection |
| **State** | React Context API |
| **Icons** | lucide-react + Material Symbols |
| **Animation** | Framer Motion + Intersection Observer |
| **Utilities** | clsx + tailwind-merge |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── animation/       # Reveal (scroll animations)
│   ├── forms/          # Education, Tourism, Trade, Contact forms
│   ├── layout/         # Navbar, Footer, ScrollToTop
│   ├── seo/            # Meta tags, Open Graph, hreflang
│   └── ui/             # Button, Input, Select, Card, Toast, etc.
├── constants/          # Routes, Nav links, Company info
├── context/            # ThemeContext, ToastContext
├── data/               # Blogs, Testimonials
├── hooks/              # useFormValidation, useMobileMenu
├── i18n/
│   └── locales/        # en, zh, fr, ar translations
├── pages/              # Home, Education, Tourism, Trade, About, Contact, Blog
└── utils/              # cn() helper
```

---

## ✨ Key Features

### 🌐 Internationalization
Support for **4 languages** with automatic browser detection and localStorage persistence:

| Language | Code | RTL |
|----------|------|-----|
| English | `en` | No |
| 中文 (Chinese) | `zh` | No |
| Français (French) | `fr` | No |
| العربية (Arabic) | `ar` | Yes |

### 🌓 Dark Mode
Class-based dark mode with localStorage persistence and flash prevention via inline script in `index.html`.

### 📝 Forms & Validation
Typed form handling with built-in validation rules: `required`, `minLength`, `maxLength`, `email`, `phone`, `pattern`.

### 🎬 Animations
Scroll-triggered entrance animations using Intersection Observer with variants: `fade`, `slide-up`, `slide-left`, `slide-right`.

### 📱 Mobile Responsive
Mobile navigation with body scroll lock and Escape key handling.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check with TypeScript, then build |
| `npm run lint` | Run ESLint with flat config |
| `npm run preview` | Preview production build locally |

---

## 📬 Contact

### Offices

**New Delhi, India**
> Contact for Education & Tourism inquiries

**Guangzhou, China**
> Contact for Trade inquiries

### Get in Touch
- **Email**: info@routetoabroad.com
- **WhatsApp**: Available on website

---

## 📄 License

Proprietary — RouteToAbroad © 2012-2026. All rights reserved.
