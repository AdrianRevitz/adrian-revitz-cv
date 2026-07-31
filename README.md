# Adrian Wehmüller Revitz — CV Site

A dark-mode, terminal-inspired personal CV site built with React + Vite.

## Setup

Requires [Node.js](https://nodejs.org/) (LTS) and npm.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`, which can be deployed to any
static host (Netlify, Vercel, GitHub Pages, etc.).

## Structure

- `src/data/cv.js` — all CV content (profile, skills, experience, education).
  Edit this file to update your information.
- `src/pages/` — Home, Experience, Education, Contact pages.
- `src/components/` — shared Nav and Footer.
- `src/index.css` — the dark tech theme.


