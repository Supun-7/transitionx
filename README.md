<div align="center">

<img src="public/logo.png" alt="TransitionX Logo" width="180"/>

# ⚡ TransitionX 2026 — Web Platform

**The official web platform for TransitionX 2026 — built with Next.js**

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Custom%20Design%20System-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[🌐 Live Site](https://transitionx.vercel.app) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

</div>

---

## 📌 Overview

TransitionX 2026 web platform — a modern, animated, fully responsive multi-page website built with **Next.js 15 App Router** and **TypeScript**. Zero UI libraries, zero Tailwind — pure custom CSS design system with glassmorphism, CSS 3D animations, and a Canvas particle network hero.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎬 **Hero Animation** | CSS 3D geometric shape + Canvas API particle network |
| 🧭 **Floating Navbar** | Glassmorphism pill navbar — fixed, blurred, fully responsive |
| 📱 **Mobile Responsive** | Animated hamburger menu, mobile-first layout |
| ✨ **Scroll Reveal** | `IntersectionObserver` powered reveal on every page |
| 🌊 **Shine Wordmark** | Wave shine animation on footer text |
| ⚡ **Zero Dependencies** | No animation libraries — pure CSS + Canvas API |
| ♿ **Accessible** | ARIA labels, `focus-visible` outlines, `prefers-reduced-motion` support |
| 🔠 **Optimized Font** | Rajdhani via `next/font/google` — no layout shift |

---

## 🛠️ Tech Stack

```
Framework     →  Next.js 15 (App Router)
Language      →  TypeScript
Styling       →  Pure CSS — Custom Design System (no Tailwind)
Animations    →  CSS Keyframes + Canvas API
Font          →  Rajdhani (next/font/google)
Deployment    →  Vercel (auto-deploy from main)
Version Ctrl  →  Git + GitHub
```

---

## 📁 Project Structure

```
transitionx/
│
├── 📁 app/
│   ├── layout.tsx              # Root layout — Navbar, Footer, Font, Global CSS
│   ├── globals.css             # ← All styles live here
│   ├── page.tsx                # / Home
│   ├── about/page.tsx          # /about
│   ├── process/page.tsx        # /process
│   ├── impact/page.tsx         # /impact
│   ├── dates/page.tsx          # /dates
│   ├── contact/page.tsx        # /contact
│   └── register/page.tsx       # /register
│
├── 📁 components/
│   ├── Navbar.tsx              # Floating glassmorphism navbar
│   ├── Footer.tsx              # Footer with shine wordmark animation
│   └── HeroScene.tsx           # Canvas particle network background
│
├── 📁 hooks/
│   └── useReveal.ts            # Custom scroll reveal hook
│
└── 📁 public/
    └── logo.png                # Brand logo
```

---

## 🚀 Getting Started

### Prerequisites

```bash
node -v   # v18 or higher required
npm -v    # comes with Node.js
```

### Installation

```bash
# 1 — Clone the repository
git clone https://github.com/YOUR_USERNAME/transitionx.git

# 2 — Move into the project
cd transitionx

# 3 — Install dependencies
npm install

# 4 — Start dev server
npm run dev
```

> App runs at **[http://localhost:3000](http://localhost:3000)**

### Production Build

```bash
npm run build     # build for production
npm start         # preview production build locally
```

---

## 🌿 Branch Strategy

```
main ─────────────────────────────► Vercel (auto-deploys on every push)
  └── dev ──► all active development happens here
```

| Branch | Purpose |
|--------|---------|
| `main` | Production — connected to Vercel, pushes auto-deploy |
| `dev` | Development — all changes go here first |

### Git Workflow

```bash
# Always work on dev
git checkout dev

# Make your changes, commit and push
git add .
git commit -m "feat: your change"
git push origin dev

# When ready to go live — merge into main
git checkout main
git merge dev
git push origin main
# ↑ Vercel detects the push and deploys automatically
```

---

## 📜 Available Scripts

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm start         # Run production build locally
npm run lint      # Run ESLint
```

---

## 🧠 Developer Notes

```
📌  All CSS            →  app/globals.css only — no component-level styles
📌  useReveal hook     →  must be called on every page using the .reveal CSS class
📌  'use client'       →  required on pages using useState / useEffect / onClick
📌  Logo               →  public/logo.png — swap file to update branding site-wide
📌  Google Form link   →  app/register/page.tsx — find GOOGLE_FORM_LINK_HERE
📌  Scroll effect      →  .scrolled class toggled on navbar via scroll event listener
```

---

## 🎨 Design Tokens

```css
--purple:     #3b0764    /* Vibranium Purple   */
--lavender:   #ca8cd3    /* Royal Glow         */
--x-cyan:     #22d3ee    /* Accent Cyan        */
--x-magenta:  #e056c1    /* Accent Magenta     */
--bg-0:       #0c0a12    /* Deep Background    */
--bg-1:       #14101c    /* Surface Background */
```

---

## 🌐 Deployment

Deployed on **Vercel** — connected to the `main` branch.

Every push to `main` triggers an automatic production deployment.

> ⚠️ Never push unfinished work directly to `main` — always use `dev` first.