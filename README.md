# Tula's International School (TIS) - Modern Homepage Redesign

A production-ready redesign of the **Tula's International School** official homepage ([https://tis.edu.in/](https://tis.edu.in/)).

Developed according to high-converting modern education aesthetics, preserving TIS branding, official copy, verified ranking accolades, and Modern Gurukul heritage.

---

## Repository Structure

```
tis-redesign/
├── frontend/
│   ├── app/                    # Next.js 14 App Router (layout, page)
│   ├── components/
│   │   ├── ui/                 # Reusable atomic UI (Button, Badge, Modal, ThemeToggle)
│   │   ├── layout/             # Navbar, Footer, ScrollProgress
│   │   ├── sections/           # 9 Homepage Sections (Hero, About, WhyTis, Academics, etc.)
│   │   └── animation/          # CustomCursor, Reveal, Stagger
│   ├── hooks/                  # useTheme, useReducedMotion, useWindowSize
│   ├── data/                   # tis-data.ts (Authentic TIS information source of truth)
│   ├── public/                 # Static assets and robots.txt
│   ├── styles/                 # Tailwind CSS & global styles
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── backend/
│   ├── src/
│   │   ├── routes/             # Admissions routing
│   │   ├── controllers/        # Admissions controller
│   │   ├── services/           # Notification alerts service
│   │   ├── models/             # Enquiry data model
│   │   └── server.js           # Minimal zero-dependency HTTP server
│   ├── package.json
│   └── README.md
│
└── README.md                   # Project overview & technical documentation
```

---

## Key Highlights & Standout Features

| Feature | Implementation Details |
|---|---|
| **Custom Animated Cursor** | Desktop-only spring follower powered by Framer Motion `useSpring`. Expands on interactive links/buttons/inputs. Automatically disabled on mobile touch screens and when `prefers-reduced-motion` is active. |
| **Scroll-Triggered Reveals** | Framer Motion `whileInView` with `viewport={{ once: true }}` ensuring buttery 60fps scrolling. Smooth cubic-bezier transitions between 0.3s and 0.5s. |
| **Animated Theme Switcher** | Sun/Moon morphing toggle with `localStorage` persistence, fallback to system preferences, and zero hydration mismatch. |
| **Top Scroll-Progress Bar** | Framer Motion `useScroll` with a tri-color brand gradient (`TIS Crimson` -> `TIS Gold` -> `TIS Teal`). |
| **360° Virtual Tour Modal** | Multi-tab interactive tour switcher for Aerial View, Residential Wings, and Olympic Sports Arena. |
| **Interactive Admissions Form** | High-converting enquiry system with Class selection, State dropdown, OTP verification simulation, and confetti celebration. |
| **Authentic School Content** | Real verified rankings (#1 in Dehradun by Education Today, #1 in North India by Outlook), 16+ sports, student quotes, and parent testimonials from `tis.edu.in`. |

---

## Quick Start Guide

### 1. Frontend (Next.js + TypeScript + Tailwind + Framer Motion)

```bash
cd frontend
npm install
npm run dev
```

App will be live at `http://localhost:3000`.

To create a production build:
```bash
npm run build
npm start
```

### 2. Backend (Minimal Node.js Service)

```bash
cd backend
npm start
```

Server listens on `http://localhost:5000`.

---

## Technical Decisions & Architecture

1. **Next.js 14 App Router**: Provides modern server-rendered HTML for fast First Contentful Paint (FCP) and optimal SEO with comprehensive Open Graph and Twitter cards.
2. **Separation of Concerns**: Kept atomic UI components (`/components/ui/`), layout shells (`/components/layout/`), animated wrappers (`/components/animation/`), and page sections (`/components/sections/`) strictly isolated for maintainability and technical interview review.
3. **Authentic Data Layer (`/data/tis-data.ts`)**: Rather than hardcoding text throughout components, all verified facts, rankings, sports descriptions, testimonials, and campus highlights are consolidated into typed data structures.
4. **Performance & Accessibility**:
   - Zero horizontal overflow across 375px, 768px, and 1280px+ viewports.
   - Reduced-motion accessibility checks embedded in cursor and scroll reveals.
   - Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Standard ARIA labels on all modal controls, theme toggles, and mobile drawer triggers.

---

## Deployment to Vercel

The frontend is ready for 1-click deployment on [Vercel](https://vercel.com/):
1. Connect this repository to Vercel.
2. Set Root Directory to `frontend`.
3. Vercel will automatically detect Next.js and run `npm run build`.
