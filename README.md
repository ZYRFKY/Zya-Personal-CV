# ZYA — Personal Digital Archive

A mobile-first bilingual (English / Indonesian) personal portfolio built with React, Vite, Tailwind CSS 4, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Before publishing

1. Add your approved portrait at `public/images/profile.webp` (then wire it into the hero if desired).
2. Add your final CV PDF at `public/cv/zya-cv.pdf`.
3. Add original certificate scans and event photographs to `public/images/` and build out the archive gallery.
4. Confirm the exact year/category/title for each award, and exact organization roles and event dates. Some content is deliberately marked as pending or provisional.
5. Replace generic LinkedIn and GitHub URLs with your real profile URLs.
6. Check that you have permission to publish photos of other people and event participants.

## Content editing

Most portfolio content is in `src/data/content.js`. Update the English and Indonesian copy together so both language versions stay consistent.

## Deploy

Push the project to GitHub, import it into Vercel, and deploy with the default Vite settings. Add a custom domain later if desired.
