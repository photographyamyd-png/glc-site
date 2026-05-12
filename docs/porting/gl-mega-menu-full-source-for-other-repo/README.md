# GLC mega menu — full reference bundle for other repos

This folder is the **single drop-in artifact** for another Cursor project (or a second workspace root) so nobody has to argue about whether “the full GLC mega” existed: **behavior, split components, animations, and JSON/types** live here or are explicitly listed for copy from a recovered `glc-site/src/` tree.

## Straight story (what went wrong elsewhere)

Saying “we never had that source in **this** repo” was only accurate for **the other project’s** git tree if nobody committed reference files there.

The **full** GLC mega (split components, `glc-base` animations, hover delay, backdrop, `usePathname` close, etc.) is expected to live in a **recovered** GLC tree under paths like:

| Artifact | Typical path in recovered `glc-site/` |
|----------|----------------------------------------|
| Header + mega state, hover delay, backdrop | `src/components/layout/site-header.tsx` |
| Services mega body | `src/components/layout/mega-menu-services.tsx` |
| Company mega body | `src/components/layout/mega-menu-company.tsx` |
| Styles | `src/styles/glc-base.css` (mega blocks + `.btn-primary`) |

**This canonical Next.js workspace** (`components/ui/SiteHeader.tsx`, `app/globals.css`) may **not** include `src/` — it is the production app that **collapsed** mega into one file and refactored tokens. Until someone copies the recovered TS/CSS into this folder, the **React slice of the bundle is incomplete**; the JSON, types slice, and README are still useful.

## What is in this folder today

| File | Status |
|------|--------|
| `README.md` | You are reading it |
| `navigation-mega-payload.example.json` | Full navigation payload (synced from `content/navigation.json` in this repo) |
| `types-mega-slice.ts` | TypeScript types for `NavigationConfig` / mega menu (synced from `content/types.ts`) |
| `glc-mega-menu-extracted.css` | **Placeholder** — paste extracted rules from recovered `glc-base.css` (see below) |
| `site-header.tsx` | **Add** — copy from recovered `src/components/layout/site-header.tsx` |
| `mega-menu-services.tsx` | **Add** — copy from recovered `src/components/layout/mega-menu-services.tsx` |
| `mega-menu-company.tsx` | **Add** — copy from recovered `src/components/layout/mega-menu-company.tsx` |

After you add the three `.tsx` files and paste CSS into `glc-mega-menu-extracted.css`, regenerate the zip (see end of README).

## Dependencies the recovered `site-header.tsx` usually imports

Copy from recovered `glc-site/src/` or stub in the destination app:

- `src/components/ui/smart-link.tsx` (or replace with `next/link`)
- `src/components/ui/icon-arrow.tsx` (if used in company dispatch CTA)
- `src/lib/routes.ts` — replace `ROUTES` / `ROUTES.service()` with the target app’s routing helper
- `src/components/layout/utility-rotator.tsx`
- `src/components/layout/mobile-drawer.tsx`

If the other team only wants **desktop mega**, they can paste mega-related state/markup only from `site-header.tsx`.

## CSS extraction (into `glc-mega-menu-extracted.css`)

From recovered `src/styles/glc-base.css`, copy at least:

| Block | Approx. lines (recovered file) | Contents |
|-------|-------------------------------|----------|
| Mega menu (services + backdrop + responsive) | ~2597–2862 | `@keyframes glmc-panel-in` / `glmc-item-in`, `.gl-nav-mega-*`, `.gl-mega-panel*`, `.gl-mega-card*`, `.gl-mega-backdrop`, `body.gl-mega-open` |
| Company mega panel | ~3041–3151 | `.gl-mega-panel--company`, columns, dispatch band |
| `.btn-primary` | ~98–113 | If the target app already has a primary button, map classes instead |

Backdrop may use `var(--gl-header-z)` — define that token in the target app or substitute their header z-index.

## What to send the other team (copy-paste)

```text
The GLC mega source was never in our repo—we only tokenized the existing menu. The full reference implementation lives in the recovered GLC repo under glc-site/src/. The backup glc-site repo also publishes a bundle under docs/porting/gl-mega-menu-full-source-for-other-repo/ plus glc-mega-menu-source-bundle.zip at repo root—extract to docs/porting/reference-glc-mega and wire it per our port-pack token bridge. That gives you site-header + mega-menu-services + mega-menu-company + extracted CSS + example JSON/types once the recovered TS/CSS files are copied into the bundle folder (or inside the zip).
```

## Cursor prompt (other project)

```text
@docs/porting/reference-glc-mega @docs/porting/gl-mega-menu-port-pack.md

Wire the GLC reference bundle into our SiteHeader: full behavior (hover delay, backdrop, pathname close) only if we explicitly want parity with the bundle; otherwise keep our port-pack behavior but adopt layout/animation/CSS class structure from the reference and map vars to our tokens.
```

## Regenerate `glc-mega-menu-source-bundle.zip`

From the **glc-site** repo root (PowerShell):

```powershell
Compress-Archive -Path "docs/porting/gl-mega-menu-full-source-for-other-repo" -DestinationPath "glc-mega-menu-source-bundle.zip" -Force
```

Commit the updated zip when the folder gains the recovered `.tsx` and filled CSS so the bundle is complete.

## Related docs in this repo

- [`../bring-list-to-other-repo.md`](../bring-list-to-other-repo.md) — canonical **Next.js** paths vs legacy `src/` naming
- [`../gl-mega-menu-port-pack.md`](../gl-mega-menu-port-pack.md) — token bridge + current production behavior notes
