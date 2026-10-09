# FORMA — Interior studio website concept

Cinematic, mobile-first Next.js concept inspired by the **interaction/layout direction** of the provided TARQ Studio homepage and Abvtek's editorial approach. This is an original implementation, not a reproduction of their code or branding.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing as a real studio website

- **FORMA is a working concept name**, not a verified client's name.
- Project names, categories, years, and narrative are *temporary editorial labels*. Replace them with real, approved project information.
- All 24 interior images came from the supplied `New folder.rar`; confirm permission to publish these photographs.
- Replace `hello@example.com` with the actual studio's email (in `app/page.tsx`).
- Replace the logo, text and metadata as appropriate; metadata currently uses `noindex` to prevent accidental indexing of a concept pitch.

## Features

- Full-screen featured project slideshow with animated scene wipe, keyboard arrows, previous/next controls and responsive presentation.
- Asymmetrical project portfolio with interactive fullscreen project galleries.
- Studio introduction, manifesto, accessible expandable process section, and contact section.
- Mobile navigation overlay, Escape-key close, alt text, reduced-motion support, no external stock imagery.

## Stack

Next.js App Router, TypeScript, Framer Motion, Lucide icons and CSS. The Google Fonts import gracefully falls back to system fonts if offline.
