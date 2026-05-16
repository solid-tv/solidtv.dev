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

- `docs/index.html` — the entire site is a single HTML file (~487 lines). All content, layout, and Tailwind utility classes live here.
- `docs/input.css` — Tailwind entrypoint (`@tailwind base/components/utilities`).
- `docs/output.css` — generated; do not edit by hand. Rebuild via `npm run build` or `npm run watch`.
- `tailwind.config.js` — scans `./docs/*.{html,js}` and defines two brand colors: `solidtv` (`#6F45E8`) and `solidtv-dark` (`#1C64F2`).
- `docs/images/` — static assets (logos, favicons).

The `docs/` directory is the deployable artifact (GitHub Pages serves it directly), which is why generated CSS is committed.
