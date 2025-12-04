## Objective
- Apply consistent dark gradient cards site-wide, update remaining pages (including Competition), and unify all buttons to one theme that matches the current dark background.

## Design Tokens
- Card surface: `bg-white/5` + `border border-white/10` + light text (`text-gray-100/300`) + subtle gradient overlay.
- Primary button: gradient `from-indigo-500 via-purple-600 to-fuchsia-600`, text `text-white`, hover `bg-white/10` overlay.
- Secondary button: transparent dark (`bg-white/10`) with `text-white`, hover `bg-white/20`.

## Global Components (index.css)
- Add component classes via Tailwind `@layer components`:
  - `.btn-primary`, `.btn-secondary` with the unified gradient and states.
  - `.card-dark` applying the semi-transparent dark surface, border, and text defaults.
  - Optional `.card-gradient-overlay` for animated subtle overlay.

## Pages to Update
- LandingPage: replace remaining light cards (`bg-white`/`bg-gray-50`) with `.card-dark`; convert in-place inline styles to use the shared classes; change buttons to `.btn-primary`/`.btn-secondary`.
- CoursePage: ensure pricing box, features, and testimonials use `.card-dark`; switch all CTAs to unified button classes.
- ProfilePage: convert stats and quick actions to `.card-dark`; update action buttons to `.btn-primary`.
- Chatroom: ensure header/action chips and settings use `.card-dark`/buttons; keep message bubbles readable.
- ChartCompetition: update hero and list/cards to `.card-dark`; unified filter/toggle buttons and action buttons to `.btn-primary`.

## Text Contrast Fixes
- Ensure any white text remains only on dark surfaces; on lighter badges (e.g., `bg-yellow-500`) keep `text-black`; otherwise use `text-white`.

## Inline Style Blocks
- Replace hardcoded light backgrounds with dark gradient surfaces; keep existing animations but adjust shadows for dark UI.

## Verification
- Run dev server and visually verify across routes for consistent card gradients and button theme; check hover/active states and WCAG contrast.

I will implement shared classes and update all pages to use the unified dark card and button theme, including the Competition page.