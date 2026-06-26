<div align="center">

<br />

<img src="public/logo.png" alt="TransitionX Logo" width="200"/>

<br />
<br />

# TRANSITIONX 2026

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-Custom%20Design%20System-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Branch-main%20%7C%20dev-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" />
</p>

<br />

**🌐 [transitionx.vercel.app](https://transitionx.vercel.app)**

</div>

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 — App Router |
| **Language** | TypeScript |
| **Styling** | Pure CSS — Custom Design System (no Tailwind) |
| **Animations** | CSS Keyframes + Canvas API |
| **Font** | Rajdhani via `next/font/google` |
| **Deployment** | Vercel — auto deploy from `main` |
| **Version Control** | Git + GitHub |

---

## 🗂 Project Structure

```bash
transitionx/
│
├── 📁 app/
│   ├── layout.tsx              # Root layout — Navbar, Footer, Font, Global CSS
│   ├── page.tsx                # / — Home
│   ├── about/page.tsx          # /about
│   ├── process/page.tsx        # /process
│   ├── impact/page.tsx         # /impact
│   ├── dates/page.tsx          # /dates
│   ├── contact/page.tsx        # /contact
│   ├── register/page.tsx       # /register
│   └── globals.css             # ← All styles live here
│
├── 📁 components/
│   ├── Navbar.tsx              # Floating glassmorphism navbar
│   ├── Footer.tsx              # Footer with shine wordmark animation
│   └── HeroScene.tsx           # Canvas particle network (hero bg)
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
npm -v    # comes with Node
```

### Local Development

```bash
# 1 — Clone the repository
git clone https://github.com/YOUR_USERNAME/transitionx.git

# 2 — Enter the project directory
cd transitionx

# 3 — Install dependencies
npm install

# 4 — Start the development server
npm run dev
```

> Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build

```bash
npm run build    # build for production
npm start        # run production build locally
```

---

## 🌿 Branch Strategy

```
main ──────────────────────────────► Vercel (auto-deploy)
  └── dev ──► active development
```

| Branch | Purpose |
|--------|---------|
| `main` | Production — connected to Vercel, every push auto-deploys |
| `dev` | Development — all work happens here |

### Workflow

```bash
# Step 1 — always work on dev
git checkout dev

# Step 2 — make changes, then stage and commit
git add .
git commit -m "feat: your change here"
git push origin dev

# Step 3 — when ready to go live, merge into main
git checkout main
git merge dev
git push origin main
# ↑ Vercel picks this up and deploys automatically
```

---

## 🧠 Developer Notes

```
📌  All CSS           →  app/globals.css only — no component-level styles
📌  useReveal hook    →  must be called on every page that uses .reveal class
📌  'use client'      →  required on any page using useState / useEffect / onClick
📌  Logo              →  public/logo.png — swap file to update branding site-wide
📌  Google Form link  →  app/register/page.tsx — search GOOGLE_FORM_LINK_HERE
📌  Navbar scroll     →  scrolled class toggled via JS — handled in Navbar.tsx
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

<div align="center">

Made with 💜 · TransitionX Tech Team · 2026

</div>