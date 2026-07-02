# AEROFORM Motion Lab

A high-end motion design prototype for AEROFORM, a lightweight running system brand. The site combines cinematic running imagery, editorial typography, product scanning details, material archive moments, and scroll-driven motion.

## Live Site

GitHub Pages deployment:

```text
https://yanjj539-dot.github.io/aeroform-site/
```

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP + Lenis
- GitHub Pages static export

## Local Development

```bash
npm install
npm run dev
```

Local preview runs at `http://127.0.0.1:3000/`.

## Build

```bash
npm run lint
npm run build
npm run build:pages
```

`npm run build:pages` exports the GitHub Pages version into `out/` with the `/aeroform-site` base path.

## Deployment

Deployment is published from the `gh-pages` branch. Source code lives on `main`; static export files live on `gh-pages`.
