# MightBeMedia Editorial Redesign

## Goal
Rebuild the public MightBeMedia experience into a distinctive editorial agency site inspired by the FORME reference while preserving the brand, truthful service claims, portfolio links, contact details, blog routes, revenue-system route, proposal route, and SEO content.

## What will change
- Replace the current neon SaaS/glass-card look with a black, off-white, and grey editorial system using neon yellow-green only for focused emphasis.
- Recompose the homepage from top to bottom: compact navigation, cinematic first screen, manifesto, editorial service and industry lists, startup MVP feature, scroll-led process, failure-versus-solution story, portfolio gallery, oversized proof metrics, contact, and a bold closing statement.
- Use the official MBM logo unchanged and reuse the real project screenshots as primary visual proof.
- Add a cohesive set of original cinematic imagery for the first screen and supporting feature sections, with art direction that matches the reference without copying it.
- Replace repetitive rounded cards, glowing blobs, and generic icon grids with asymmetrical layouts, strong rules, large typography, image-led storytelling, and restrained interaction details.
- Restyle the blog listing, article pages, and shared footer/navigation so the visual language remains consistent across public routes.
- Preserve working anchors, external portfolio URLs, mail and phone actions, contact form behavior, sitemap, and existing metadata.

## Interaction and responsiveness
- Add measured reveal, marquee, image-shift, and scroll-progress effects using lightweight CSS and browser APIs.
- Respect reduced-motion preferences and keep all content usable without animation.
- Build mobile layouts deliberately rather than shrinking desktop composition; remove every horizontal-scroll source and verify 375px, tablet, and desktop widths.
- Maintain readable contrast, visible focus states, semantic headings, keyboard navigation, and descriptive image text.

## Technical details
- Consolidate the site tokens and typography in the global stylesheet; load display fonts through the document head rather than CSS imports.
- Refactor existing homepage sections in place and introduce small shared editorial primitives only where repetition warrants them.
- Keep content static and fast: optimized local assets, lazy loading below the fold, no heavy 3D runtime, and no new backend.
- Validate the preview through desktop/mobile screenshots, interaction checks, overflow measurements, console errors, and the automated build signal.

## Scope boundary
- The proposal page keeps its purpose and data; only shared navigation behavior will be protected from regressions.
- No new testimonials, client results, awards, or business claims will be invented.
