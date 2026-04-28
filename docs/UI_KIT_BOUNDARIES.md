# UI Kit Boundaries — Approved Stack & Audit Scaffold

**Status:** shadcn **initialized** (2026-04-27). **§3.3** GLC token mapping and **§3.4** typography (`@theme` + layout) are **applied** in `app/globals.css` and `app/layout.tsx`.  
**Authority:** [MASTER_RULES_SOURCE_OF_TRUTH.md](./MASTER_RULES_SOURCE_OF_TRUTH.md) amendment **2026-04-25**; operative **P-IIc** in [PROJECT_PRIME_DIRECTIVE_RULES.md](./PROJECT_PRIME_DIRECTIVE_RULES.md); **§4.2** in [MASTER_DESIGN_BUILD_COMPLIANCE.md](./MASTER_DESIGN_BUILD_COMPLIANCE.md).

**Baseline lock:** Color anchors, typography stack (Oswald / Barlow / Barlow Condensed), and spacing tokens must not drift. shadcn semantic tokens in `:root` reference GLC variables; Tailwind `font-sans` / `--font-heading` resolve to Barlow / Oswald via `@theme inline`.

---

## 1) Allowed stack (in)

| Layer | Allowed | Notes |
|--------|---------|--------|
| Component kit | **shadcn** (CLI + registry) | `npx shadcn@latest init -d -y` completed; style **`base-nova`**. |
| Primitives | **Base UI** (`@base-ui/react`) | **This preset** generates components using Base UI (e.g. `components/ui/button.tsx`). *Not* `@radix-ui/*` in `package.json` yet; registry items may add Radix later — add to this table when they do. |
| Styling | **Tailwind CSS v4** | `@import "tailwindcss"` in `app/globals.css`; PostCSS: `@tailwindcss/postcss`. |
| Animation helper | **tw-animate-css** | Added by init: `@import "tw-animate-css"` in `globals.css`. |
| Icons | **lucide-react** | `components.json` → `"iconLibrary": "lucide"` (already in dependencies). |

**Direct Radix usage:** none installed as of audit snapshot; revisit when adding components that depend on `@radix-ui/*`.

---

## 2) Disallowed / out of scope (out)

| Stack | Status | Notes |
|--------|--------|--------|
| **MUI** | Disallowed | Unless `MASTER_RULES` amended. |
| **Other kits** | Disallowed unless §7 | Chakra, Mantine, etc. |
| **Drop-in block themes** | Disallowed for full sections | Must still meet GLC composition, rhythm, **P-VIIIe**. |

---

## 3) Theming & token mapping

### 3.1 Files (authoritative)

| Role | Path |
|------|------|
| Global CSS + GLC + shadcn variables | `app/globals.css` |
| shadcn config | `components.json` (root) |
| Tailwind v4 | No separate `tailwind.config` — inline `@theme` in `globals.css` |
| cn helper | `lib/utils.ts` |
| First kit component | `components/ui/button.tsx` |

### 3.2 GLC source tokens (unchanged block)

Defined in `:root` **above** shadcn’s semantic block: `--canvas`, `--brand-canvas`, `--ink`, `--ink-deep`, `--ink-muted`, `--y`, `--yellow-tint`, `--g100`, `--g200`, `--w`, `--brand-white`, `--s1`…`--s14`, `--dna-space-*`, etc.

### 3.3 shadcn semantic variables — **required mapping** (replace oklch defaults)

After init, `:root` still contains **neutral oklch** values for `--background`, `--foreground`, `--primary`, … Those **must** reference GLC tokens so kit UI matches the locked palette.

**Replace** the shadcn block in `app/globals.css` (from `--background:` through `--sidebar-ring:`) with:

```css
  /* shadcn semantic tokens — mapped to GLC baseline */
  --background: var(--canvas);
  --foreground: var(--ink);
  --card: var(--w);
  --card-foreground: var(--ink);
  --popover: var(--w);
  --popover-foreground: var(--ink);
  --primary: var(--ink-deep);
  --primary-foreground: var(--brand-white);
  --secondary: var(--g100);
  --secondary-foreground: var(--ink);
  --muted: var(--g100);
  --muted-foreground: var(--ink-muted);
  --accent: var(--yellow-tint);
  --accent-foreground: var(--ink-deep);
  --destructive: oklch(0.577 0.245 27.325);
  --border: var(--g200);
  --input: var(--g200);
  --ring: var(--y);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --radius: 0;
  --sidebar: var(--canvas);
  --sidebar-foreground: var(--ink);
  --sidebar-primary: var(--ink-deep);
  --sidebar-primary-foreground: var(--brand-white);
  --sidebar-accent: var(--yellow-tint);
  --sidebar-accent-foreground: var(--ink-deep);
  --sidebar-border: var(--g200);
  --sidebar-ring: var(--y);
```

| shadcn token | GLC / rationale |
|--------------|-----------------|
| `--background` | `var(--canvas)` → `#fafafa` via `--brand-canvas` |
| `--foreground` | `var(--ink)` |
| `--primary` | `var(--ink-deep)` — aligns with ink CTA slab language |
| `--primary-foreground` | `var(--brand-white)` |
| `--muted` / `--secondary` | `var(--g100)` |
| `--muted-foreground` | `var(--ink-muted)` |
| `--accent` | `var(--yellow-tint)` — brand yellow wash |
| `--accent-foreground` | `var(--ink-deep)` |
| `--border` / `--input` | `var(--g200)` |
| `--ring` | `var(--y)` — focus matches accent beacon |
| `--radius` | `0` — GLC machined / square discipline (components may still use `rounded-*` in CVA) |

### 3.4 Typography — **required fix** (`@theme` + `layout.tsx`)

Init set `--font-sans` in `@theme inline` to `var(--font-sans)` (**circular**) and added **Geist** as `--font-sans` in `app/layout.tsx`. That conflicts with the **locked** stack (Barlow body / Oswald display).

**Do this:**

1. In `app/layout.tsx`: remove `Geist` import, `geist` constant, and `geist.variable` from `<html className={...}>`.
2. In `app/globals.css` inside `@theme inline`, set:
   - `--font-sans: var(--font-barlow), system-ui, sans-serif;`
   - `--font-heading: var(--font-oswald), system-ui, sans-serif;`  
   (Keep `--font-serif: var(--font-oswald), …` as today.)

---

## 4) Where shadcn is used vs raw composition

| Use case | Approach |
|----------|----------|
| Buttons, dialogs, sheets, menus, tabs | Add via `npx shadcn@latest add …` after mapping is applied |
| Marketing sections (`GL*`, lanes) | Compose kit **inside** existing shells; no single generic card grid as the section |
| Motifs / watermarks | Unchanged — [MOTIF_ACCENT_RULES.md](./MOTIF_ACCENT_RULES.md) |

---

## 5) Accessibility & interaction

Still enforce [UI_INTERACTION_RULES.md](./UI_INTERACTION_RULES.md) and [MASTER_DESIGN_BUILD_COMPLIANCE.md](./MASTER_DESIGN_BUILD_COMPLIANCE.md) §§11–13 (motion caps, reduced-motion, keyboard, focus).

---

## 6) Dependency & version policy

**Snapshot: 2026-04-27** (from `package.json`).

| Package | Version |
|---------|---------|
| `next` | 16.2.4 |
| `react` | 19.2.4 |
| `react-dom` | 19.2.4 |
| `tailwindcss` | ^4 (dev) |
| `@tailwindcss/postcss` | ^4 (dev) |
| `shadcn` (CLI, dependency) | ^4.5.0 |
| `@base-ui/react` | ^1.4.1 |
| `class-variance-authority` | ^0.7.1 |
| `clsx` | ^2.1.1 |
| `tailwind-merge` | ^3.5.0 |
| `tw-animate-css` | ^1.4.0 |
| `lucide-react` | ^1.11.0 |
| `framer-motion` | ^12.38.0 (existing; unrelated to shadcn) |

**Upgrade rule:** Major bumps to Next, Tailwind 4, or shadcn preset → row in [COMPLIANCE_EXECUTION_PLAN.md](./COMPLIANCE_EXECUTION_PLAN.md) + quick a11y/visual check.

---

## 7) Expansion process

Unchanged: amend `MASTER_RULES_SOURCE_OF_TRUTH.md` → update this doc → adjust P-IIc text if needed.

---

## 8) Audit evidence

| Date | Change | Evidence |
|------|--------|----------|
| 2026-04-27 | shadcn init (`-d -y`, Next + Tailwind v4) | `components.json`; `npx shadcn@latest init` log; new deps in `package.json` |
| 2026-04-27 | Registry artifacts | `components/ui/button.tsx`, `lib/utils.ts`; `app/globals.css` imports `tw-animate-css`, `shadcn/tailwind.css` |
| 2026-04-27 | GLC token mapping + font fix | Applied **§3.3** (`:root` shadcn vars → GLC) and **§3.4** (`@theme` `--font-sans` / `--font-heading`; removed Geist from `app/layout.tsx`). Verified `npm run build`. Initial repo commit `1204221` (root after author rewrite; matches `git rev-list --max-parents=0 HEAD`). |

---

## 9) `components.json` (reference)

```json
{
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

## 10) Related documents

- [MASTER_RULES_SOURCE_OF_TRUTH.md](./MASTER_RULES_SOURCE_OF_TRUTH.md)
- [MASTER_DESIGN_BUILD_COMPLIANCE.md](./MASTER_DESIGN_BUILD_COMPLIANCE.md) — §4.2
- [PROJECT_PRIME_DIRECTIVE_RULES.md](./PROJECT_PRIME_DIRECTIVE_RULES.md) — Section II, P-IIc
- [COMPLIANCE_EXECUTION_PLAN.md](./COMPLIANCE_EXECUTION_PLAN.md)
- [UI_INTERACTION_RULES.md](./UI_INTERACTION_RULES.md)
