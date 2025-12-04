## Objective
- Change the entire site to a dark theme: black/near-black gradient backgrounds with readable light text and accents.

## Approach
- Add a global dark gradient in `body` so all pages inherit it.
- Convert page wrappers and components to dark backgrounds; ensure text is light (`text-gray-100/200`) for contrast.
- Replace any white text on light surfaces with dark text (`text-gray-900`).

## Global Styles
- Edit `src/index.css` using Tailwind base layer:
  - `@layer base { body { @apply min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-gray-100; } }`
  - Ensure `html, #root` fill height.

## Pages
- `src/pages/LandingPage.js`: set all section wrappers to dark gradients (e.g., `bg-gradient-to-br from-slate-950 via-gray-900 to-black`), headings `text-gray-100`, paragraphs `text-gray-300`.
- `src/pages/CoursePage.js`: change all wrappers to dark gradients and text to light; keep accent cards readable (use `bg-white/10` and `text-gray-100`).
- `src/pages/ProfilePage.js`: hero and content sections use dark gradients and light text; soften shadows for dark UI.
- `src/pages/Chatroom.js`: page wrapper to dark gradient; ensure message text and chips use light text.
- `src/pages/ChartCompetition.js`: hero and content wrappers to dark gradients; table text/light borders for contrast.

## Header & Footer
- `src/components/Header.js`: change `.wave-nav` background to a dark gradient; nav links use `text-white`/`text-gray-100`; hover states use light overlays (`bg-white/10`).
- `src/components/Footer.js`: switch to dark gradient background, light text (`text-gray-100`), links `text-gray-300` with accent hover.

## Buttons & Cards
- Accent-filled buttons keep white text; neutral buttons on dark surfaces use `bg-white/10` with `text-gray-100`.
- Ensure badges/chips use darker fills (`/30` overlays) with light text.

## Fix White-On-Light Text
- Find and fix cases where `text-white` sits on light backgrounds (from earlier light theme edits). Update to `text-gray-900` on light cards and `text-gray-100` on dark cards.
- Current `text-white` occurrences to review: `src/pages/LandingPage.js`, `src/pages/CoursePage.js`, `src/pages/ProfilePage.js`, `src/pages/Chatroom.js`, `src/pages/ChartCompetition.js`, `src/components/Footer.js`.

## Inline Styles
- Update `.jsx` style blocks to use darker palettes (replace light hex colors with dark-friendly hues) and adjust drop-shadows to subtle glows.

## Verification
- Run dev server; verify all pages for contrast and readability (WCAG AA), hover/active states, and consistent dark gradient backdrop.
- Build production to confirm CSS processes correctly.

I’ll implement these updates across all pages and shared components, ensuring all text remains visible against the new dark gradients. Confirm to apply.