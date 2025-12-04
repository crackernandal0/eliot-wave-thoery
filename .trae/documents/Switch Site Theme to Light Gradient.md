## Objective
- Change entire site to a light theme: white base with a subtle gradient background, readable dark text, and refreshed component colors.

## Approach
- Apply a global light gradient to `body` so all pages inherit it.
- Replace dark backgrounds and `text-white` with light backgrounds and dark text in page wrappers and components.
- Keep existing brand accents (teal/indigo/purple) but on lighter surfaces.

## Global Styles
- Edit `src/index.css` using Tailwind base layer:
  - `@layer base { body { @apply min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-gray-900; } }`
  - Ensure `html, #root` fill height if needed.
- Confirm Tailwind config includes `./src/**/*.{js,jsx}` and `./public/index.html` in `content`.

## Pages
- `src/pages/LandingPage.js`: set top sections to light gradients (e.g., `bg-gradient-to-b from-white via-slate-50 to-indigo-50`), change headings and paragraphs from `text-white` to `text-gray-900`/`text-gray-700`.
- `src/pages/CoursePage.js`: change wrapper `min-h-screen bg-gradient-to-br from-slate-900...` to light gradient; ensure text uses dark colors; keep white cards.
- `src/pages/ProfilePage.js`: set page backgrounds to light, adjust text to dark; keep glow/float effects but soften box-shadows.
- `src/pages/Chatroom.js`: use light page background and dark text; update chips/badges to readable contrasts.
- `src/pages/ChartCompetition.js`: swap dark page backgrounds with light gradients and dark text.

## Header & Footer
- `src/components/Header.js`: change `.wave-nav` background from teal gradient to a white/very-light gradient; switch nav link text to `text-gray-900`; hover states remain accent-colored; keep wave SVG edge in a subtle light tone.
- `src/components/Footer.js`: use a white/very-light gradient background, dark text (`text-gray-700/900`), keep icons readable.

## Buttons & Cards
- Replace `text-white` on buttons with dark text when on light surfaces; or keep white text only on accent-filled buttons.
- Ensure components like `.premium-card`, `.luxury-button` use lighter backgrounds (white/50 variants) and adjust border colors for contrast.

## Inline Styles
- In each file’s `<style jsx>` blocks, replace dark color hex values with lighter variants and reduce heavy drop-shadows to softer ones.
- Preserve existing animations and gradients but shift palettes to light-friendly hues.

## Verification
- Run dev server; visually verify all pages: text contrast (WCAG AA), hover/active states, consistent gradient backdrop.
- Build production to confirm CSS processes correctly.

## Optional Customization
- If you prefer a different gradient palette, I’ll swap `via-slate-50 to-indigo-50` with your choice (e.g., `via-emerald-50 to-sky-50`).

I’ll proceed with these updates across all pages and shared components, keeping brand accents while moving to a clean light theme. Confirm to apply.