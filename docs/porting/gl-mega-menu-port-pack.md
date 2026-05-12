# GLC mega-menu: token inventory and source map

Use this document when porting the GLC header / mega-menu pattern to another codebase. Pair it with that project’s own tokens—do not copy GLC hex values into a foreign design system unless you intend to match GLC visually.

## Where tokens live (this repo)

- **Primary:** [`app/globals.css`](../../app/globals.css) — `:root` custom properties, shadcn-aligned aliases, `@theme inline` (Tailwind v4), site-header surface tokens, `.site-header-*` utilities, and patterns like `.eyebrow`, `.label-overline`, `.panel-machined`, `.cta-primary`, etc.
- **Sandbox-only (not production header):** [`components/glc-dna/glc-dna-lane.css`](../../components/glc-dna/glc-dna-lane.css) — variables such as `--gl-mega-z`, `--ease-expo` under `.glc-dna-sandbox`.
- **`glc-base.css`:** Referenced in comments in `globals.css` but **not** present in the repository. Treat `app/globals.css` as canonical.

## 1) Variable names (main app)

### Primary / accent

- `--y`, `--yellow-core` — accent yellow.
- `--color-accent-primary` — maps to `--y`.
- shadcn: `--primary`, `--primary-foreground`, `--ring` (`--ring` → `--y`).

### Surfaces

- Canvas: `--canvas`, `--brand-canvas`, `--background`.
- Cards / panels: `--card`, `--popover` (both white in `:root`).
- Depth: `--machined-edge`, `--glass-depth`; classes `.panel-machined`, `.bespoke-surface` (compose `bespoke-surface` with explicit `bg-*` per file comments).

### Site header–scoped surfaces (production `SiteHeader`)

Defined in `:root` and consumed by `.site-header-*` classes in [`app/globals.css`](../../app/globals.css); all values are `color-mix` / shadows built **only** from existing tokens (`--ink-deep`, `--popover`, `--card`, `--brand-white`, etc.):

- `--site-header-utility-bg`, `--site-header-utility-border` — top utility strip (dark).
- `--site-header-nav-bg`, `--site-header-nav-bg-scrolled`, `--site-header-nav-scrolled-shadow` — main nav shell (glass + scrolled lift).
- `--site-header-mega-panel-bg` — in-flow mega panel wash.
- `--site-header-mega-card-bg` — machined column wash (`color-mix` with `--card`).

Utility classes: `.site-header-utility-bar`, `.site-header-nav-shell` (expects `data-scrolled="true"|"false"`), `.site-header-mega-panel`, `.site-header-mega-panel-transition`, `.site-header-mega-card`.

### Text

- Default: `--ink`, `--ink-deep`, shadcn `--foreground` (Tailwind: `text-foreground`, `text-ink`).
- Muted: `--ink-muted`, `--t400`, `--t500`, `--t600`, shadcn `--muted-foreground` (`text-muted-foreground`).

### Borders

- `--g200`, shadcn `--border`, `--input` (Tailwind: `border-border`).

### Fonts

- Body: `var(--font-source-sans)`; `@theme` → `--font-sans` (`font-sans`).
- Display / headings: `var(--font-oswald)`; `@theme` → `--font-serif`, `--font-heading` (`font-heading` / `font-serif`).
- Condensed kickers: `var(--font-barlow-condensed)` — `.eyebrow`, `.label-overline`, `.font-label`.

### Layout tokens

- Width: `--max` (1320px), `--max-bleed`, `--container-max`, `--header`, `--site-header-offset` (mobile sheet `top` anchor under fixed header).
- Spacing scale: `--s1` … `--s14` (8px grid-style steps).

### Motion

- `--ease` — `cubic-bezier(0.22, 1, 0.36, 1)` (site-header shells and `.cta-primary` use this).

### Z-index (production header)

- [`SiteHeader`](../../components/ui/SiteHeader.tsx): `<header>` uses Tailwind `z-40`; mobile overlay `z-30`.
- No global `--z-nav` in `:root`. DNA lane defines `--gl-header-z` / `--gl-mega-z` / `--gl-backdrop-z` only for `.glc-dna-sandbox`.

### Radius

- `--radius: 0` — sharp industrial corners.

### Popover gap

- `--popover` / `--popover-foreground` already exist; prefer extending shadcn-style pairs over inventing a second naming scheme.

## 2) Token bridge (semantic roles → GLC)

| Semantic role | GLC mapping |
| --- | --- |
| Trigger idle | `text-ink`, `text-ink-muted`, `text-muted-foreground` (panels / lists) |
| Trigger hover / accent | `hover:text-primary`, `focus-visible:outline-ring` (maps to `--ring` / `--y`) |
| Utility strip (dark) | `.site-header-utility-bar` (`--site-header-utility-*` + `color: var(--brand-white)`) |
| Main nav shell (frost + scroll) | `.site-header-nav-shell` + `data-scrolled` (`--site-header-nav-*`) |
| Mega panel background | `.site-header-mega-panel` (`--site-header-mega-panel-bg`) + `border-border` top |
| Mega panel motion | `.site-header-mega-panel-transition` (`opacity` / `--ease`) |
| Yellow rail (column accent) | `border-l-4 border-primary` (or `.accent-punctuation-l` where it does not conflict with other `border-l` utilities) |
| Elevated / machined column | `.panel-machined` + `.site-header-mega-card` (`--site-header-mega-card-bg`) |
| Service link row hover | `hover:bg-muted`, `hover:border-border` |
| Primary CTA | `.cta-primary` |
| Mobile sheet offset | `top-[var(--site-header-offset)]` |

## 3) Source files (what exists—no split mega components)

There are **no** `mega-menu-services.tsx` or `mega-menu-company.tsx` files.

| Concern | Path |
| --- | --- |
| All mega + mobile behavior and markup | [`components/ui/SiteHeader.tsx`](../../components/ui/SiteHeader.tsx) |
| Tokens + shared utilities | [`app/globals.css`](../../app/globals.css) |

### Suggested slices for `globals.css` (re-verify after edits)

When attaching to another chat, copy or cite these regions from `app/globals.css`:

- `:root` through shadcn tokens — from the opening `:root` through `--sidebar-ring` (site-header variables follow in the same block).
- Site header tokens — `--site-header-utility-bg` … `--site-header-mega-card-bg`.
- `@theme inline` — font and color bridges including `--color-card`, `--color-popover`, `--color-primary`, `--color-ring`, `--color-border`, `--color-muted`, etc.
- `.site-header-utility-bar` … `.site-header-mega-card` — token-backed header chrome.
- `.eyebrow`, `.label-overline-on-dark`, `.accent-punctuation-l`, `.panel-machined` / `.panel-machined-dark`, `.bespoke-surface`, `.cta-primary`, `.label-overline`.

Use `rg -n "^:root|^@theme|^\\.site-header|^\\.eyebrow"` to refresh line numbers.

## 4) Interaction and layout (read before porting)

**Desktop mega panels are click toggles**, not hover-open with a pointer grace-period close delay.

Close paths:

- **Escape** — document `keydown` closes all (`closeAll`).
- **Outside click** — `click` on `document` outside `wrapRef` closes Services and Company (mobile menu unchanged by this listener).
- **In-panel links** — `onClick={closeAll}` on `Link`s (including Company and Resources lists).
- Trigger buttons use `stopPropagation` on click so the document listener does not immediately close the menu they are opening.

**Body class / scroll lock:** `document.body.style.overflow = "hidden"` is applied only when the **mobile** menu is open, not when desktop mega panels are open.

**Route change:** There is no `usePathname` listener; closing on navigation relies on link `click`. Programmatic navigation may leave a panel open until another close path runs.

**Layout:** Outer `<header>` is `fixed` with `pointer-events-none`; inner wrapper uses `pointer-events-auto`. Mega panels are **in-flow** below the nav row (not absolutely positioned under a single trigger), which differs from classic flyout dropdowns.

**Accessibility (production):** Services and Company desktop triggers both use `aria-expanded`, `aria-haspopup="true"`, and `aria-controls` pointing at `mega-services-panel` and `mega-company-panel` respectively.

## 5) Dependencies

Production implementation uses Next.js (`next/link`), React client hooks only—no separate mega-menu library.

## Second message checklist (other Cursor project)

1. Paste or `@` this repo’s [`components/ui/SiteHeader.tsx`](../../components/ui/SiteHeader.tsx).
2. Paste or `@` the `globals.css` slices listed in section 3 (or `@` full [`app/globals.css`](../../app/globals.css) and ask the model to ignore unrelated sections).
3. Paste a short quote from **section 4** of this file so the model does not assume hover + delay + desktop body scroll lock.

There is **no** `glc-base.css` excerpt to attach from this repository.
