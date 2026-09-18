# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for SolidTV (solidtv.dev), served from the `docs/` directory via GitHub Pages (see `docs/CNAME`). There is no application code or test suite — just HTML + Tailwind CSS.

## Commands

- `npm start` — runs `live-server` against `docs/` and Tailwind in `--watch` mode in parallel. Use this for local development.
- `npm run build` — compiles `docs/input.css` → `docs/output.css` (minified). Runs automatically via `prepack`.
- `npm run watch` — Tailwind watcher only.
- `npm run preview` — serves `docs/` with `http-server` (no rebuild).
- `npm run lint` / `npm run lint:fix` — Prettier + ESLint over `**/*.{ts,js,cjs,md}`.
- `npm test` — not implemented (exits non-zero by design).

Husky + lint-staged run Prettier on staged `.ts/.js/.cjs/.md` files on commit.

## Architecture

- `docs/index.html` — the homepage: hero, customer logos, features, platforms, Apple TV band, articles, about, support & services (`#services`, with a legacy `#consulting` anchor), FAQ, and the contact form.
- `docs/apple-tv/`, `docs/lightningjs-alternative/`, `docs/tv-app-performance-consulting/` — search landing pages, one `index.html` each.
- `docs/blog/` — blog index and articles, one HTML file per post.
- `docs/thanks.html` — where the contact form redirects after a submission (`noindex`); it fires the GA4 `generate_lead` event.
- `docs/sitemap.xml` — add every new indexable page here.
- `docs/input.css` — Tailwind entrypoint (`@tailwind base/components/utilities`).
- `docs/output.css` — generated; do not edit by hand. Rebuild via `npm run build` or `npm run watch` after adding any new utility class.
- `tailwind.config.js` — scans `./docs/**/*.{html,js}` and defines two brand colors: `solidtv` (`#6F45E8`) and `solidtv-dark` (`#1C64F2`).
- `docs/images/` — static assets (logos, favicons, `og-card.png` social card, `companies/` customer logos).

There is no templating. The `<header>`, `<footer>`, font links and GA snippet are duplicated in every page, so a change to the nav or footer must be applied to all of them. Use root-relative URLs (`/images/...`, `/#services`) so the same markup works at any depth.

The FAQ on the homepage exists twice: as visible `<details>` elements and as `FAQPage` JSON-LD in the `<head>`. Keep the two in sync.

Links with a `data-cta` attribute report a `cta_click` event to GA4. On the homepage a `data-topic` attribute, or a `?topic=` query parameter, preselects the contact form's "What do you need?" option.

The `docs/` directory is the deployable artifact (GitHub Pages serves it directly), which is why generated CSS is committed. Anything written under `docs/` is published, so keep notes, specs and scratch files out of it.
