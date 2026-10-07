# Tula's International School (TIS) - Modern Homepage

A production-ready redesign of the **Tula's International School** official homepage ([tis.edu.in](https://tis.edu.in/)). The repository contains a Next.js frontend and a small, independently runnable Node.js admissions API, organized in one modular `src/` tree.

## Project structure

```text
.
├── public/                     # Static assets and robots.txt
├── src/
│   ├── app/                    # Next.js App Router pages, layout, and metadata
│   ├── components/
│   │   ├── ui/                 # Reusable interface primitives
│   │   ├── layout/             # Navbar, footer, and scroll progress
│   │   ├── sections/           # Homepage content sections
│   │   └── animation/          # Cursor and reveal animation components
│   ├── hooks/                  # Shared React hooks
│   ├── data/                   # School content and static data
│   ├── lib/                    # Shared frontend utilities
│   ├── styles/                 # Global styles
│   └── server/
│       ├── routes/             # Admissions and health route dispatch
│       ├── controllers/        # HTTP request handlers and validation
│       ├── services/           # Notification service
│       ├── models/             # Admission enquiry model
│       └── server.js           # Node.js HTTP server entry point
├── package.json                # Root frontend and backend scripts
└── README.md
```

The frontend remains a Next.js App Router application in `src/app`. Backend routes, controllers, services, and models remain separate modules under `src/server`; they are not combined into one file.

## Tech stack

- Next.js 14 App Router, React 18, and TypeScript
- Tailwind CSS 3.4 and Framer Motion 11
- Lucide React icons and `canvas-confetti`
- A zero-dependency Node.js HTTP service for admissions enquiries

## Local development

Install dependencies once from the repository root:

```bash
npm install
```

Start the frontend at [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

Start the admissions API separately at [http://localhost:5000](http://localhost:5000):

```bash
npm run backend:dev
```

Use `npm run backend:start` to run the backend without watch mode. Its endpoints are:

- `POST /api/admissions/enquire` - submit an admission enquiry
- `GET /api/health` (or `/`) - health check

## Build and run

```bash
npm run lint
npm run build
npm start
```

The frontend can be deployed to Vercel from the repository root; no separate frontend root directory is needed.

## Features

- Animated, responsive school homepage with reduced-motion support
- Light/dark theme toggle with saved preference
- Scroll reveals, custom cursor, and scroll-progress indicator
- Campus tour modal, gallery, testimonials, and admissions enquiry form
- Modular components, hooks, and school content data
