# GLC mega-menu: token inventory and source map

Use this document when porting the GLC header / mega-menu pattern to another codebase. Pair it with that project’s own tokens—do not copy GLC hex values into a foreign design system unless you intend to match GLC visually.

**File paths for “bring GLC into Cursor” (corrected for this repo):** see [`bring-list-to-other-repo.md`](./bring-list-to-other-repo.md) — older notes that mention `src/components/layout/…` or `glc-base.css` do not match this Next.js tree.

**Split mega + zip bundle (for other machines):** [`gl-mega-menu-full-source-for-other-repo/README.md`](./gl-mega-menu-full-source-for-other-repo/README.md) — TS/CSS/JSON mirror production; regenerate **`glc-mega-menu-source-bundle.zip`** from that folder when sources change (see README).

## Where tokens live (this repo)

- **Primary:** [`app/globals.css`](../../app/globals.css) — `:root` custom properties, shadcn-aligned aliases, `@theme inline` (Tailwind v4), and utilities (`.eyebrow`, `.label-overline`, `.panel-machined`, `.cta-primary`, etc.).
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

### Text

- Default: `--ink`, `--ink-deep`, `--foreground`.
- Muted: `--ink-muted`, `--t400`, `--t500`, `--t600`, `--muted-foreground`.

### Borders

- `--g200`, `--border`, `--input`.

### Fonts

- Body: `var(--font-source-sans)`; `@theme` → `--font-sans`.
- Display / headings: `var(--font-oswald)`; `@theme` → `--font-serif`, `--font-heading`.
- Condensed kickers: `var(--font-barlow-condensed)` — `.eyebrow`, `.label-overline`, `.font-label`.

### Layout tokens

- Width: `--max` (1320px), `--max-bleed`, `--container-max`, `--header`, `--site-header-offset` (defaults in `globals.css`; **`GlcRecoveredSiteHeader`** sets `--site-header-offset` and `--header` on `<html>` from the measured height of fixed `#site-header` so hero `pt-[var(--site-header-offset)]` stays aligned when the utility row wraps or the mobile bar is visible).
- Spacing scale: `--s1` … `--s14` (8px grid-style steps).

### Motion

- `--ease` — `cubic-bezier(0.22, 1, 0.36, 1)`.

### Z-index (production header)

- [`SiteHeader`](../../components/ui/SiteHeader.tsx): `<header>` uses Tailwind `z-40`; mobile overlay `z-30`.
- No global `--z-nav` in `:root`. DNA lane defines `--gl-header-z` / `--gl-mega-z` / `--gl-backdrop-z` only for `.glc-dna-sandbox`.

### Radius

- `--radius: 0` — sharp industrial corners.

### Popover gap

- `--popover` / `--popover-foreground` already exist; prefer extending shadcn-style pairs over inventing a second naming scheme.

### Header / mega (composed in `:root` from existing palette)

- `--header-utility-bg`, `--header-utility-border` — dark utility strip.
- `--header-nav-bg`, `--header-nav-bg-scrolled`, `--header-nav-shadow` — main nav shell + scrolled state.
- `--mega-panel-bg` — frosted mega panel fill.
- `--mega-elevated-surface` — machined column tint.
- `--mega-mobile-row-bg` — mobile drawer row fill.

Utilities in `globals.css`: `.site-header-utility-bar`, `.site-header-nav-shell`, `.mega-panel`, `.mega-panel--enter`, `.mega-elevated`, `.mega-service-link`, `.mega-mobile-row`.

## 2) Token bridge (semantic roles → GLC)

| Semantic role | GLC mapping |
| --- | --- |
| Trigger idle | `text-ink`, `text-ink-muted` |
| Trigger hover / accent | `hover:text-[color:var(--y)]`, `focus-visible:outline-[color:var(--y)]` |
| Panel background | `.mega-panel` → `var(--mega-panel-bg)` + `backdrop-filter: var(--glass-depth)` |
| Panel top border | `border-border` / `var(--border)` (also on `.mega-panel`) |
| Kicker / label | `.label-overline` or `.eyebrow` + `text-ink` / `text-white` |
| Yellow rail | `.accent-punctuation-l` → `4px solid var(--y)` |
| Elevated column | `.panel-machined` + `.mega-elevated` → `var(--mega-elevated-surface)` |
| Service card (mega grid) | Border / surface: `border-border`, `bg-muted/25`, hover `bg-muted`; num `text-[color:var(--y)]` + `font-serif` |
| Primary CTA | `.cta-primary` |
| Dark utility bar | `.site-header-utility-bar` → `var(--header-utility-bg)` + `var(--header-utility-border)` |
| Main nav shell | `.site-header-nav-shell` + `data-scrolled="true"` → scrolled bg + `var(--header-nav-shadow)` |
| Mobile drawer rows | `.mega-mobile-row` → `var(--mega-mobile-row-bg)` + `var(--border)` |

## 3) Source files

| Concern | Path |
| --- | --- |
| App entry for header | [`components/ui/SiteHeader.tsx`](../../components/ui/SiteHeader.tsx) — passes [`content/navigation.json`](../../content/navigation.json) into recovered header |
| Recovered header (hover delay, pathname close, backdrop) | [`components/layout/glc-recovered-site-header.tsx`](../../components/layout/glc-recovered-site-header.tsx) |
| Mega bodies | [`components/layout/mega-menu-services.tsx`](../../components/layout/mega-menu-services.tsx), [`components/layout/mega-menu-company.tsx`](../../components/layout/mega-menu-company.tsx) |
| Mobile drawer + utility rotator | [`components/layout/mobile-drawer.tsx`](../../components/layout/mobile-drawer.tsx), [`components/layout/utility-rotator.tsx`](../../components/layout/utility-rotator.tsx) |
| Smart link / routes / icon (compat shims) | [`components/ui/smart-link.tsx`](../../components/ui/smart-link.tsx), [`lib/routes.ts`](../../lib/routes.ts), [`components/ui/icon-arrow.tsx`](../../components/ui/icon-arrow.tsx) |
| Mega + header shell CSS | [`app/glc-recovered-mega-shell.css`](../../app/glc-recovered-mega-shell.css), [`app/glc-recovered-mega-extracted.css`](../../app/glc-recovered-mega-extracted.css) (imported from [`app/layout.tsx`](../../app/layout.tsx) after `globals.css`) |
| Tokens + rest of site | [`app/globals.css`](../../app/globals.css) |

### Suggested slices for `globals.css` (line numbers as of last doc update)

When attaching to another chat, copy these ranges from `app/globals.css`:

- `:root` token block — starts ~line **12** (includes header/mega composed vars through ~**150**)
- `@theme inline` — ~**151** onward until `body`
- `.eyebrow` — ~**222**
- `.label-overline-on-dark` — ~**268**
- `.accent-punctuation-l` — ~**340**
- Site header / mega utilities — **`.site-header-utility-bar`** through **`.mega-mobile-row`** (~**368–416**)
- `.panel-machined` / `.panel-machined-dark` — ~**419**+
- `.bespoke-surface` (+ `::before`) — ~**471**+
- `.cta-primary` (+ hover/active/focus-visible) — ~**491**+
- `.label-overline` — ~**626**

Re-verify line numbers if `globals.css` changes (`rg -n "^:root|^@theme|^\\.eyebrow"`).

## 4) Interaction and layout (production `GlcRecoveredSiteHeader`)

**Desktop mega** uses **hover intent** plus **click toggle**: moving onto Services/Company opens the panel; leaving the `#site-header` schedules a **~130ms** close delay so the cursor can move into the panel. Panels call `onMouseEnter` / `onMouseLeave` to cancel or schedule that close while moving between trigger and panel.

**Backdrop:** `#gl-mega-backdrop` dims the page when `body.gl-mega-open` is set (while a mega panel is open).

**Body class:** `document.body.classList.add("gl-mega-open")` when `megaMode` is non-null.

**Mobile drawer:** `document.body.style.overflow = "hidden"` while the drawer is open.

**Route change:** `usePathname` — mega and drawer **close on every pathname change**.

**Keyboard:** `Escape` closes drawer and mega.

**Layout:** `#site-header` is **fixed** with `z-index: var(--gl-header-z)` (900). Mega panels are **`position: absolute; top: 100%; left: 0; right: 0`** under the header (recovered `gl-mega-panel` CSS). Styles live in [`app/glc-recovered-mega-shell.css`](../../app/glc-recovered-mega-shell.css) (header chrome + drawer) and [`app/glc-recovered-mega-extracted.css`](../../app/glc-recovered-mega-extracted.css) (mega grid, `.btn-primary`, backdrop).

**Mobile (≤1024px):** The desktop nav row is hidden so the brand appears only on the **mobile bar** (logo + hamburger). Mega panels and backdrop are CSS-disabled; navigation is the drawer. Utility strip stacks in a column on very narrow widths.

**Hero offset:** `useLayoutEffect` + `ResizeObserver` on `#site-header` writes `--site-header-offset` / `--header` to `document.documentElement` so full-bleed heroes (`pt-[var(--site-header-offset)]`, `scroll-mt-[var(--site-header-offset)]`, `min-h-[calc(100svh-var(--site-header-offset)-…)]`) track the real chrome height. `matchMedia('(max-width: 1024px)')` clears mega when crossing into the drawer layout.

### Accessibility (mega triggers)

- **Services** / **Company** triggers: `aria-expanded`, `aria-haspopup`, `aria-controls` wired to `mega-services-panel` / `mega-company-panel`.

## 5) Dependencies

Production implementation uses Next.js (`next/link`), React client hooks only—no separate mega-menu library.

## Second message checklist (other Cursor project)

1. Paste or `@` this repo’s [`components/ui/SiteHeader.tsx`](../../components/ui/SiteHeader.tsx) and [`content/navigation.json`](../../content/navigation.json).
2. Paste or `@` the `globals.css` slices listed in section 3 (or `@` full [`app/globals.css`](../../app/globals.css) and ask the model to ignore unrelated sections).
3. Paste or quote **section 4** of this file for current behavior (hover grace delay, `usePathname` close, `gl-mega-open`, backdrop, measured `--site-header-offset`).

There is **no** monolithic `glc-base.css` in-repo; recovered mega rules live in **`app/glc-recovered-mega-extracted.css`** plus the shell file above.
