# GLC mega-menu: token inventory and source map

Use this document when porting the GLC header / mega-menu pattern to another codebase. Pair it with that project’s own tokens—do not copy GLC hex values into a foreign design system unless you intend to match GLC visually.

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

- Width: `--max` (1320px), `--max-bleed`, `--container-max`, `--header`, `--site-header-offset`.
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

## 2) Token bridge (semantic roles → GLC)

| Semantic role | GLC mapping |
| --- | --- |
| Trigger idle | `text-ink`, `text-ink-muted` |
| Trigger hover / accent | `hover:text-[color:var(--y)]`, `focus-visible:outline-[color:var(--y)]` |
| Panel background | In header: `bg-[color:rgb(255_255_255/0.97)]` + `backdrop-blur-md` on bar; refactor target may use `bg-popover` / `bg-card` |
| Panel top border | `border-t border-black/[0.08]` or `border-border` / `var(--g200)` |
| Kicker / label | `.label-overline` or `.eyebrow` + `text-ink` / `text-white` |
| Yellow rail | `.accent-punctuation-l` → `4px solid var(--y)` |
| Elevated column | `.panel-machined` + e.g. `bg-white/80` |
| Link row hover | `hover:bg-black/[0.02]`, `hover:border-black/[0.08]`, `group-hover:text-[color:var(--y)]` |
| Primary CTA | `.cta-primary` |

## 3) Source files (what exists—no split mega components)

There are **no** `mega-menu-services.tsx` or `mega-menu-company.tsx` files.

| Concern | Path |
| --- | --- |
| All mega + mobile behavior and markup | [`components/ui/SiteHeader.tsx`](../../components/ui/SiteHeader.tsx) |
| Tokens + shared utilities | [`app/globals.css`](../../app/globals.css) |

### Suggested slices for `globals.css` (line numbers as of last doc update)

When attaching to another chat, copy these ranges from `app/globals.css`:

- `:root` token block — approximately lines **12–139**
- `@theme inline` — approximately **141–195**
- `.eyebrow` — **211–219**
- `.label-overline-on-dark` — **258–266**
- `.accent-punctuation-l` — **329–333**
- `.panel-machined` / `.panel-machined-dark` — **357–375**
- `.bespoke-surface` (+ `::before`) — **402–426**
- `.cta-primary` (+ hover/active/focus-visible) — **428–464**
- `.label-overline` — **564–572**

Re-verify line numbers if `globals.css` changes (`rg -n "^:root|^@theme|^\\.eyebrow"`).

## 4) Interaction and layout (read before porting)

**Desktop mega panels are click toggles**, not hover-open with a pointer grace-period close delay.

Close paths today:

- **Escape** — document `keydown` closes all.
- **Outside click** — `mousedown` on `document` outside `wrapRef` closes Services/Company.
- **In-panel links** — `onClick={closeAll}` on `Link`s.
- Trigger buttons use `stopPropagation` on click so document handler does not immediately close.

**Body class / scroll lock:** `document.body.style.overflow = "hidden"` is applied only when the **mobile** menu is open, not when desktop mega panels are open.

**Route change:** There is no `usePathname` listener; closing on navigation relies on link `click`. Programmatic navigation may leave a panel open until another close path runs.

**Layout:** Outer `<header>` is `fixed` with `pointer-events-none`; inner wrapper uses `pointer-events-auto`. Mega panels are **in-flow** below the nav row (not absolutely positioned under a single trigger), which differs from classic flyout dropdowns.

### Accessibility gaps (optional GLC follow-up)

- **Services** trigger: has `aria-expanded`, `aria-haspopup`, `aria-controls="mega-services-panel"`.
- **Company** trigger: missing matching `aria-*` and the company panel has no `id` for `aria-controls` symmetry.

## 5) Dependencies

Production implementation uses Next.js (`next/link`), React client hooks only—no separate mega-menu library.

## Second message checklist (other Cursor project)

1. Paste or `@` this repo’s [`components/ui/SiteHeader.tsx`](../../components/ui/SiteHeader.tsx).
2. Paste or `@` the `globals.css` slices listed in section 3 (or `@` full [`app/globals.css`](../../app/globals.css) and ask the model to ignore unrelated sections).
3. Paste a link or short quote from **section 4** of this file so the model does not assume hover + delay + body class behavior that GLC does not implement.

There is **no** `glc-base.css` excerpt to attach from this repository.
