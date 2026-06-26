# TransitionX 2026

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

🌐 **Live:** [transitionx.vercel.app](https://transitionx.vercel.app)

---

## Tech Stack

```
Framework     →  Next.js 15 (App Router)
Language      →  TypeScript
Styling       →  Pure CSS (no Tailwind)
Animations    →  CSS Keyframes + Canvas API
Font          →  Rajdhani (next/font/google)
Deployment    →  Vercel (auto-deploy from main)
```

---

## Project Structure

```
transitionx/
├── app/
│   ├── layout.tsx              # Root layout — Navbar, Footer, Font, CSS
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── process/page.tsx
│   ├── impact/page.tsx
│   ├── dates/page.tsx
│   ├── contact/page.tsx
│   ├── register/page.tsx
│   └── globals.css             # All styles live here
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── HeroScene.tsx           # Canvas particle animation
│
├── hooks/
│   └── useReveal.ts            # Scroll reveal hook (used on every page)
│
└── public/
    └── logo.png
```

---

## Run Locally

### Prerequisites
- Node.js v18+
- npm

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/transitionx.git

# 2. Move into the project
cd transitionx

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Branch Strategy

```
main  →  Production — connected to Vercel, auto-deploys on every push
dev   →  Active development — all changes go here first
```

**Workflow:**
```bash
# Always work on dev
git checkout dev

# Make your changes, then commit
git add .
git commit -m "your message"
git push

# When ready to deploy — merge dev into main
git checkout main
git merge dev
git push
```

Pushing to `main` triggers an automatic Vercel deployment.

---

## Build & Preview Production

```bash
npm run build
npm start
```

---

## Notes for Devs

- All CSS is in `app/globals.css` — no component-level CSS files
- `useReveal` hook must be called on any page that uses the `reveal` CSS class
- Pages that use `useState`, `useEffect` or any interactivity need `'use client'` at the top
- Logo file is at `public/logo.png` — replace to update branding
- Google Form link in `app/register/page.tsx` is marked `GOOGLE_FORM_LINK_HERE` — replace when ready
