# BeFree — marketing website

A small, calm, mobile-first static site for **BeFree** (a free app for gently reducing
compulsive phone use). Built with **Astro + Tailwind**. No backend, no trackers.

## Pages
- `/` — single-scroll home (hero + promo video → feature cards → screenshots → Plus → values → CTA)
- `/plus` — BeFree Plus: free-vs-Plus, the three Plus benefits, and pricing
- `/privacy` — the Privacy Policy (rendered from `src/content/privacy-policy.md`)
- `/support` — contact, FAQ, and always-reachable crisis resources (`/support#crisis`)

Plus pricing/benefits are single-sourced in `src/data/plus.ts` (mirrors the app's
`entitlements.ts` — £3.99/mo, £38/yr). The promo video is responsive: the landscape
`promo.mp4` on desktop, the vertical `promo-vertical.mp4` on mobile.

## Develop
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the production build
```

## Brand
Colours and fonts are exact to the brand system, wired into `tailwind.config.mjs`
(`bg-forest`, `text-terracotta`, etc.). Fraunces + Hanken Grotesk are **self-hosted** via
`@fontsource-variable` (imported in `src/styles/global.css`) — no third-party font
requests, and the woff2 files are bundled and fingerprinted at build time. The signature
terracotta full-stop is `src/components/FullStop.astro`.

Assets live in `public/assets/` (copied from the app repo): wordmark, icon, feature
graphic (also the Open Graph image), four phone screenshots, and the self-hosted promo
video.

## Before publishing — checklist
- [ ] Fill the remaining privacy placeholders in `src/content/privacy-policy.md`:
      **effective date** and **legal entity name + address**. (Contact email is set to
      `info@befreeapp.net` in the policy and on the Support page.)
- [ ] Set the real **Google Play** URL in `src/components/CtaButtons.astro` (currently a
      labelled "coming soon" placeholder) and remove the "Coming soon" note.
- [ ] Set the production domain in `astro.config.mjs` (`site`) so canonical/OG URLs are correct.
- [ ] Re-verify crisis lines are current before launch.
- [ ] Deploy and put the `/privacy` URL in the Play Console listing (see below).

## Deploy (Netlify)
`netlify.toml` is included (base `website`, build `npm run build`, publish `dist`, plus
security/cache headers). Two options:
- **Git-connected:** point Netlify at this repo — it reads `netlify.toml` automatically.
- **Manual:** `npm run build`, then drag the `website/dist/` folder into the Netlify UI.

Then add the custom domain (`befreeapp.net`, already set as `site` in `astro.config.mjs`).

## Notes
- No analytics or ad trackers (consistent with the privacy promise). Add a
  privacy-respecting option like Plausible later if desired.
- Financial-stakes / charity features are intentionally **not** mentioned (parked feature).
- No medical/treatment claims; the "support tool, not treatment" disclaimer is in the
  footer on every page.
