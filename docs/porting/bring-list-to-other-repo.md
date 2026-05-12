# Bring list: GLC site → another Cursor project

Use this when the **other** repo needs enough GLC context to port or diff a mega menu. Copy files into `docs/porting/source-glc/` there, or add this repo as a second workspace root and `@` paths from **this** tree.

## Path correction (read this first)

Some older notes describe GLC as:

- `src/components/layout/site-header.tsx`
- `src/components/layout/mega-menu-services.tsx`
- `src/components/layout/mega-menu-company.tsx`
- `src/styles/glc-base.css`
- `src/content/navigation.json`
- `src/content/types.ts`

**That layout is not this repository.** This app is **Next.js App Router** with no `src/` app tree for layout, **no** `glc-base.css`, and **no** split `mega-menu-*.tsx` files. Production header + mega live in **one** component.

Anything you copy for “canonical GLC” should use the **Canonical paths** table below.

---

## 1) React (behavior + mega markup) — this repo

| What | Canonical path (repo root) |
|------|----------------------------|
| Recovered header (hover delay, backdrop, pathname close) | [`components/layout/glc-recovered-site-header.tsx`](../../components/layout/glc-recovered-site-header.tsx) |
| Split mega bodies | [`components/layout/mega-menu-services.tsx`](../../components/layout/mega-menu-services.tsx), [`components/layout/mega-menu-company.tsx`](../../components/layout/mega-menu-company.tsx) |
| App entry (wires `navigation.json`) | [`components/ui/SiteHeader.tsx`](../../components/ui/SiteHeader.tsx) |

**Transitive imports** (from `SiteHeader.tsx` today):

- [`components/ui/LogoMark.tsx`](../../components/ui/LogoMark.tsx)
- `next/link`
- [`content/navigation.json`](../../content/navigation.json) — mega + company + mobile + utility copy
- [`content/types.ts`](../../content/types.ts) — `NavigationConfig` (type assertion on import)

There is **no** `smart-link`, `icon-arrow`, or `lib/routes.ts` in this tree. If your bring list assumed those, they belong to a **different** GLC mirror or a stub you add in the target app.

**Optional** (not used by production `SiteHeader`, but present in repo):

- [`content/footer-clone-data.ts`](../../content/footer-clone-data.ts) imports [`content/navigation.json`](../../content/navigation.json) for footer-style nav data.
- [`components/glc-dna/GLCDnaSandbox.tsx`](../../components/glc-dna/GLCDnaSandbox.tsx) imports [`lib/glc-dna/navigation.json`](../../lib/glc-dna/navigation.json) (same shape as `content/navigation.json` for sandbox).

---

## 2) Content + types (`megaMenu` / `companyMega`)

| What | Canonical path |
|------|----------------|
| JSON payload (`megaMenu`, `companyMega`, `primary`, `utility`, `utilityRotator`) | [`content/navigation.json`](../../content/navigation.json) |
| Duplicate JSON (DNA sandbox) | [`lib/glc-dna/navigation.json`](../../lib/glc-dna/navigation.json) — keep in sync with `content/` if you edit both |
| Types (`NavLink`, `MegaMenuCard`, `CompanyMegaColumn`, `CompanyMegaConfig`, `NavigationConfig`) | [`content/types.ts`](../../content/types.ts) (navigation-related types mid-file) |
| DNA / sandbox types (overlap) | [`lib/glc-dna/types.ts`](../../lib/glc-dna/types.ts) — `MegaMenuCard`, `NavigationConfig`, etc. |

**Note:** Production [`SiteHeader`](../../components/ui/SiteHeader.tsx) now reads **[`content/navigation.json`](../../content/navigation.json)** for utility copy, primary nav links, `megaMenu` (services mega layout + cards), `companyMega` (company panel + dispatch band), and mobile drawer links. [`lib/site/registry.ts`](../../lib/site/registry.ts) remains the source of truth for **service page** metadata elsewhere; keep navigation card `slug` values aligned with `PRIMARY_SERVICES` slugs when you edit JSON.

---

## 3) CSS — this repo

| What | Canonical path |
|------|----------------|
| Global tokens + Tailwind `@theme inline` | [`app/globals.css`](../../app/globals.css) — `:root` from file start |
| Recovered header shell + drawer + CSS var bridge | [`app/glc-recovered-mega-shell.css`](../../app/glc-recovered-mega-shell.css) |
| Recovered mega extract (panels, cards, `.btn-primary`, backdrop) | [`app/glc-recovered-mega-extracted.css`](../../app/glc-recovered-mega-extracted.css) |
| Shared chrome (rest of site) | `.eyebrow`, `.label-overline`, `.panel-machined`, `.cta-primary`, etc. in `globals.css` |

**There is no monolithic `glc-base.css` in this repository.** The mega slice from the recovered bundle lives in **`app/glc-recovered-mega-extracted.css`**.

---

## 4) Cursor @ block (other project) — corrected for **this** repo

If this repo is mounted as e.g. `glc-site/` next to the target app:

```text
@glc-site/components/ui/SiteHeader.tsx
@glc-site/components/layout/glc-recovered-site-header.tsx
@glc-site/components/layout/mega-menu-services.tsx
@glc-site/components/layout/mega-menu-company.tsx
@glc-site/content/navigation.json
@glc-site/content/types.ts
@glc-site/app/globals.css
@glc-site/app/glc-recovered-mega-shell.css
@glc-site/app/glc-recovered-mega-extracted.css

Merge behavior and tokens with our port pack:
@docs/porting/gl-mega-menu-port-pack.md
@components/ui/SiteHeader.tsx
```

Adjust the last two lines to the **target** repo’s paths for its own port pack and header.

---

## 5) One-line note for the other Cursor

```text
Production GLC uses the recovered split header (`glc-recovered-site-header` + mega components), hover close delay, `body.gl-mega-open`, backdrop, and `usePathname` close — see docs/porting/gl-mega-menu-port-pack.md section 4. Map fonts and palette to the target repo’s tokens.
```

---

## 6) Full reference bundle (legacy `src/` mega + zip)

For the **split** header/mega implementation, extracted CSS slice, and copy-paste prompts intended for another machine, see:

- Folder: [`gl-mega-menu-full-source-for-other-repo/`](./gl-mega-menu-full-source-for-other-repo/README.md)
- Zip (regenerate after copying recovered TS/CSS into the folder): **`glc-mega-menu-source-bundle.zip`** at repo root (see README in that folder for `Compress-Archive`).

That bundle may be **partial** until someone copies `site-header.tsx`, `mega-menu-services.tsx`, `mega-menu-company.tsx`, and `glc-base.css` extracts from a recovered `glc-site/src/` tree into the folder.

---

## 7) Related doc

- In-repo mega/token story and interaction notes: [`gl-mega-menu-port-pack.md`](./gl-mega-menu-port-pack.md)
