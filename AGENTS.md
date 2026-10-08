# Adrian Wehmüller Revitz — CV / Portfolio Site

A personal CV and portfolio site built with React + Vite. Terminal-inspired
aesthetic — JetBrains Mono for labels/data, Inter for body text, teal accent —
with a clean light theme as the default (dark mode available via toggle).

## Stack & commands

- React 18 + Vite 5, React Router (client-side routing), plain CSS (no framework).
- `npm run dev` — dev server (usually http://localhost:5173, hot reload).
- `npm run build` — **three steps chained**: client build (`vite build`) → SSR
  build (`vite build --ssr src/entry-server.jsx --outDir dist-server`) →
  `node scripts/prerender.mjs`. Output is `dist/`, fully prerendered (see SEO
  section below) — this is what actually gets deployed, don't skip steps.
  `npm run build:client-only` runs just the plain `vite build` if you need a
  quick client-only build without prerendering.
- `npm run preview` — preview the production build locally (note: `vite
  preview`'s own dev server has an SPA-fallback quirk that serves `/` for
  extension-less paths without a trailing slash even when a real prerendered
  file exists at `dist/<route>/index.html` — this is a `vite preview`-only
  testing artifact, not how Netlify actually serves the site. To verify
  prerendered routes locally, use a real static server instead, e.g.
  `npx serve dist`, or request paths with a trailing slash.).
- No test suite currently.

## Deployment

- **Netlify**, site name `adrianrevitz`, connected to GitHub repo
  `AdrianRevitz/adrian-revitz-cv` (branch `master`) for auto-deploy on push.
- Netlify CLI is also set up locally (`netlify-cli` via npx, linked to the
  project) for manual `netlify deploy --prod` when needed.
- Custom domain `adrianrevitz.dk` (and `www.adrianrevitz.dk`) is configured via
  DNS at the registrar — apex A record → Netlify's load balancer IP, `www`
  CNAME → the Netlify subdomain. MX record for email is untouched.
- **Workflow preference (important):** the user is watching Netlify build-minute
  usage. Default to making and verifying changes locally (dev server + git
  commits) and only run `git push` / `netlify deploy` when the user explicitly
  says they want it live. Don't push after every small change.
- For visual verification without deploying: run the dev server and either
  have the user check it in their own browser, or use a temporary local
  Playwright install (`npm install --no-save playwright`, screenshot, then
  `npm uninstall playwright --no-save` after) to check rendering yourself.
  A known gotcha: a single-shot full-page screenshot taken immediately after
  page load can catch scroll-reveal animations mid-transition (elements below
  the fold appear blank) — this is a capture-timing artifact, not a bug;
  verify with a real scroll simulation (incrementally scroll + wait) before
  concluding something is broken.

## Content — where things live

- `src/data/cv.en.js` / `src/data/cv.da.js` — **all CV content**, English and
  Danish versions, identical shape. Edit both when changing profile info,
  experience, or education. Company/school names and badge codes (e.g. `PVP`,
  `ITU`) are the same in both languages; roles, descriptions, bullets, skills,
  employment type, and degree names are translated per file.
  - `experience`: array of entries; grouped ones (multiple roles at the same
    company, e.g. Semler IT) have `group: true` and a `roles` array instead of
    top-level `role`/`start`/etc.
  - Dates: experience roles store `start`/`end` as `'YYYY-MM'` (`end: null` =
    current). The displayed `period`, `duration`, the group total appended to
    `groupNote`, and `profile.age` (from `profile.born`) are all derived by
    `withComputedDates()` in `src/utils/cvDates.js` - never hand-write them.
    It counts months inclusively (LinkedIn style) against `__BUILD_DATE__`
    (a Vite `define`), so SSR output and hydration always agree; durations
    refresh on each build. Education periods are still plain strings.
  - `projects`: cards for the `/projects` page and the Home projects section
    (`name`, `context`, `description`, `bullets`, `tech`, optional `link`).
  - `education`: same group pattern (`programs` array) — the ITU entry groups
    the Master's and Bachelor's together.
  - Home page hides some entries from its summarized timeline via
    `HOME_HIDDEN_COMPANIES` / `HOME_HIDDEN_SCHOOLS` in `src/pages/Home.jsx`
    (currently: Center for IT og Medicoteknologi, Coop Denmark, Føtex, Nørre
    Gymnasium) — full detail is still on
    the dedicated `/experience` and `/education` pages, linked via a
    "Read full…" button.
- `src/data/photos.js` — Photography page gallery data (EXIF metadata per
  photo). **Generated, don't hand-edit** — see Scripts below.
- `src/i18n/strings.js` — all UI copy (nav labels, headings, buttons, terminal
  text, etc.) for `en`/`da`. `createTranslator(lang)` returns a `t(key)`
  function; some values are functions themselves (e.g.
  `terminalNotFound(cmd)`) for interpolation.
- `src/data/seo.js` — per-route `<title>`/meta description, `en`/`da`, plus
  `SITE_URL` (`https://adrianrevitz.dk`). Used by both `useSeo()` (client-side,
  live route/language changes) and `scripts/prerender.mjs` (English only,
  baked into the static HTML per route at build time).

## Architecture notes

- **i18n**: `src/i18n/LanguageContext.jsx` provides `{ lang, setLang,
  toggleLang, cv, t }` via context (`useLanguage()` hook). `cv` is
  `cv.en.js`/`cv.da.js` picked by current `lang`. Default language is English;
  choice persists to `localStorage` (key `lang`). Toggle button is
  `LanguageToggle.jsx` in the nav.
- **Theme**: light/dark via a `data-theme` attribute on `<html>`, CSS custom
  properties in `index.css` (`:root` = light/default, `:root[data-theme='dark']`
  = dark overrides). An inline script in `index.html` sets the attribute from
  `localStorage` before paint to avoid a flash of the wrong theme. Default is
  **light** regardless of OS preference (explicit product decision). Toggle is
  `ThemeToggle.jsx`.
- **Hydration-safe preferences**: the prerendered HTML is always English and
  light. `LanguageProvider` and `ThemeToggle` therefore start from those
  defaults and apply the stored language/theme in
  `useIsomorphicLayoutEffect` (`src/hooks/`), after hydration but before
  paint. Don't read `localStorage` in a `useState` initializer - it causes
  hydration mismatches for Danish or dark-mode visitors.
- **Fonts**: self-hosted Inter and JetBrains Mono variable fonts via
  `@fontsource-variable/*` (imported in `main.jsx`); no Google Fonts request.
  `scripts/prerender.mjs` injects `<link rel="preload">` for the two Latin
  woff2 files.
- **Reveal-on-scroll**: `src/components/Reveal.jsx` wraps an element, adds
  `.reveal`/`.is-visible` classes via IntersectionObserver. Content is only
  hidden under `.js .reveal` (the inline script in `index.html` adds `js` to
  `<html>`), so the prerendered page stays readable without JavaScript. The
  `prefers-reduced-motion` block is last in `index.css` so it wins the
  cascade; it drops movement but keeps colour/opacity feedback.
- **Accessibility structure**: `App.jsx` has a skip link and `<main id="main">`;
  the terminal output is a `role="log"` live region; `PhotoLightbox.jsx` is a
  modal dialog that traps focus and returns it to the tile. Gallery alt text
  lives in `src/data/photoAlts.js` (keyed by photo id, en/da), since
  `photos.js` is generated - add an entry there when adding photos.
- **Timeline component**: `src/components/Timeline.jsx` (`Timeline`,
  `TimelineItem`, `TimelineMore`) — the connected-dot vertical timeline used on
  the Home page for experience/education, including the "current role/degree"
  glow treatment and the trailing "⋯ + read more" entry.
- **Terminal**: `src/components/Terminal.jsx` — interactive fake shell on the
  Home page. Commands are matched via a plain `switch` (no `eval`, safe by
  construction): `help`, `whoami`, `skills`, `experience`, `projects`,
  `education`,
  `contact`, `neofetch`, `sudo hire-me` (easter egg, navigates to /contact),
  `clear`. Command names stay in English regardless of UI language; only the
  output text is translated.
- **Neofetch card**: `src/components/NeofetchCard.jsx` +
  `src/data/neofetch.js` (`getNeofetchFields`) — shared between the card and
  the terminal's `neofetch` command so they always match.
- **Photography gallery**: masonry CSS-columns grid + `PhotoLightbox.jsx`
  (keyboard nav, full EXIF panel). Trip header banner text is in
  `strings.js` (`tripKicker`/`tripTitle`/`tripCopy`); the *photo-derived* date
  range shown in the stats line is computed live from the photos' actual EXIF
  dates (`tripDateRange()` in `Photography.jsx`) — don't confuse the two when
  asked to update "the exchange dates": the kicker is the official program
  duration, the stats line is when the photos were actually taken.
- **Music page**: real Spotify artist embed (public iframe, artist ID
  `4Vid8SCRubn0xYbDIPQwTd`, no API keys needed) — not the personal "currently
  listening" kind of integration, which would need OAuth + a Netlify function
  and hasn't been built.

## SEO & prerendering (important — read before touching routes)

The site is client-rendered React, which by default means crawlers that don't
execute JavaScript (many AI training/retrieval crawlers, e.g. some that feed
LLM knowledge — this was the explicit motivation) would only ever see an empty
`<div id="root"></div>`. To fix this without a framework migration, the build
prerenders each route to real static HTML via React's `renderToString`
(**not** a headless-browser/Playwright prerender — much cheaper and doesn't
touch Netlify build minutes):

- `src/entry-server.jsx` — SSR entry point (`render(url)`), wraps `App` in
  `StaticRouter` + `LanguageProvider`. Renders the **English** version only
  (matches what a first-time visitor/crawler with no stored language
  preference actually sees).
- `scripts/prerender.mjs` — for each route in its `routes` array: calls
  `render(route)`, injects the resulting HTML into the `dist/index.html`
  template's `#root`, swaps in that route's title/description/canonical/OG/
  Twitter tags from `seo.js`, and writes the result to `dist/index.html` (for
  `/`) or `dist/<route>/index.html` (for everything else).
- `src/main.jsx` branches on `rootEl.hasChildNodes()`: hydrates
  (`hydrateRoot`) onto prerendered markup in production, or mounts fresh
  (`createRoot`) in dev where `#root` starts empty. Verified: no hydration
  mismatches, and all interactivity (toggles, terminal, client-side nav)
  keeps working post-hydration.
- **`public/_redirects` was deleted on purpose.** It used to contain a
  catch-all SPA fallback (`/* /index.html 200`) from before prerendering
  existed. That rule is no longer just unnecessary but actively wrong now —
  it would make every route serve the *home page's* prerendered HTML instead
  of its own. Every defined route already has a real file at
  `dist/<route>/index.html`, which Netlify serves automatically via standard
  clean-URL directory-index resolution. **Do not re-add a catch-all
  redirect** unless prerendering is removed first.
- **Adding a new route?** Update all of: the `<Routes>` in `App.jsx`, the
  `routes` array in `scripts/prerender.mjs`, the `routes` array in
  `scripts/generate-sitemap.mjs`, and add an entry (both `en`/`da`) to
  `seoByRoute` in `src/data/seo.js`. Missing any of these means that route
  either won't prerender, won't appear in the sitemap, or will fall back to
  generic/home-page SEO metadata. Also add it to the nav links in `Nav.jsx`,
  the pages in `scripts/generate-markdown.mjs`, and both lists in
  `netlify/edge-functions/markdown-negotiation.js`.
- JSON-LD `Person` structured data lives statically in `index.html` (not
  per-route — it describes the person, same on every page, which is correct).
- `public/og-image.jpg` — generated by `scripts/generate-og-image.mjs` (sharp
  + inline SVG, no external fonts needed since it renders at build time, not
  in-browser — uses system fonts like Arial/Consolas). Regenerate if the
  hero/branding details it shows (name, title, current job) change.
- `public/sitemap.xml` — generated by `scripts/generate-sitemap.mjs`. Not
  auto-run as part of `npm run build`; re-run manually if routes change.

## Scripts

- `scripts/process-photos.mjs` — regenerates `public/photos/` (full + thumb
  JPEGs) and `src/data/photos.js` from a source folder of JPEGs (default
  `~/Pictures`, or pass a path as an argument). Uses
  `exifr` (EXIF parsing) and `sharp` (resize/compress), both devDependencies.
  Re-run this if the user adds more photos to feature.
- `scripts/generate-og-image.mjs` — regenerates `public/og-image.jpg`.
- `scripts/generate-sitemap.mjs` — regenerates `public/sitemap.xml`.
- `scripts/prerender.mjs` — see SEO section above; runs automatically as part
  of `npm run build`, not meant to be run standalone (needs `dist/index.html`
  and `dist-server/entry-server.js` to already exist).
