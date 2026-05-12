# GLC mega menu — full reference bundle for other repos

This folder is a **snapshot of production** in this Next.js repo: split header, hover-delay mega, backdrop, mobile drawer, shell + extracted CSS, and navigation JSON. Regenerate **`glc-mega-menu-source-bundle.zip`** from the repo root after updating these files:

```powershell
Set-Location "c:\dev\glc-site"   # your clone
Compress-Archive -Path "docs/porting/gl-mega-menu-full-source-for-other-repo\*" -DestinationPath "glc-mega-menu-source-bundle.zip" -Force
```

Use `\*` so the zip contains **files at the root of the archive** (not a nested folder named like the path). Commit the zip when you ship bundle updates.

If `Compress-Archive` errors with **file in use** (often `SiteHeader.tsx` while the IDE has the bundle folder open), copy the same file set to a short path under `%TEMP%`, run `Compress-Archive` there, then move the zip to the repo root.

## Files in this bundle

| File | Role |
|------|------|
| `README.md` | This file |
| `glc-recovered-mega-shell.css` | Fixed `#site-header`, utility row, nav row, mobile bar, drawer, CSS var bridge — load after the target app’s `globals.css` |
| `glc-mega-menu-extracted.css` | Mega panels, cards, backdrop, `.btn-primary`, keyframes (same as `app/glc-recovered-mega-extracted.css` in the app) |
| `glc-recovered-site-header.tsx` | Client header: mega state, hover ~130ms close, `body.gl-mega-open`, `usePathname` close, measures `#site-header` → sets `--site-header-offset` on `<html>` |
| `mega-menu-services.tsx` | Services mega body |
| `mega-menu-company.tsx` | Company mega body |
| `mobile-drawer.tsx` | Mobile slide-in drawer |
| `utility-rotator.tsx` | Utility strip rotator |
| `SiteHeader.tsx` | App entry: reads JSON, renders `GlcRecoveredSiteHeader` |
| `smart-link.tsx` | Shim: re-export or replace with `next/link` |
| `icon-arrow.tsx` | Shim for CTA arrow |
| `routes.ts` | `ROUTES` helper — replace with the target app’s paths |
| `navigation-mega-payload.example.json` | Copy of `content/navigation.json` at bundle build time |
| `types-mega-slice.ts` | Navigation / mega TypeScript types (mirror of `content/types.ts` navigation block) |

## Imports in this repo

Components use the `@/` path alias (`@/components/...`, `@/content/types`, `@/lib/routes`). In another repo, either configure the same alias in `tsconfig.json` or rewrite imports to relative paths.

## Layout / hero offset

`glc-recovered-site-header.tsx` uses **`useLayoutEffect` + `ResizeObserver`** on `#site-header` to set `--site-header-offset` and `--header` on `document.documentElement`, so heroes using `pt-[var(--site-header-offset)]` stay clear of the fixed stack (utility + gold strip + nav + **mobile bar** when viewport ≤1024px). `app/globals.css` still defines **fallback** values for no-JS / first paint.

## Related docs

- [`../bring-list-to-other-repo.md`](../bring-list-to-other-repo.md) — canonical paths in this monorepo
- [`../gl-mega-menu-port-pack.md`](../gl-mega-menu-port-pack.md) — tokens, behavior, checklist for other Cursor sessions

## Cursor prompt (other project)

```text
@docs/porting/reference-glc-mega @docs/porting/gl-mega-menu-port-pack.md

Wire the GLC reference bundle: import shell + extracted CSS after globals, map design tokens, and either keep measured --site-header-offset (ResizeObserver) or set static breakpoints to match your header height.
```
