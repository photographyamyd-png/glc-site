# GLC Site Clone Master Map

Portable master reference for rebuilding active pages, URL structure, navigation, anchors, SEO wiring, and internal links in another project.

## Purpose

- Provide exact route/nav/SEO parity targets.
- Keep parity implementation binary and verifiable.
- Allow shell-first scaffolding when page content is not yet migrated.

## Canonical route model (trailing slash)

- `home`: `/`
- `about`: `/about/`
- `contact`: `/contact/`
- `services index`: `/services/`
- `service detail`: `/services/{slug}/`
- `snow location`: `/locations/{slug}/`
- `privacy`: `/privacy/`
- `terms`: `/terms/`

## Primary service slugs

- `excavation-site-preparation`
- `site-preparation-grading`
- `foundations-civil-infrastructure`
- `drainage-hardscaping`
- `hauling-site-clearing-logistics`
- `snow-removal`

## Active page directory map (reference shape)

Core:
- `/` -> `src/app/page.tsx`
- `/about/` -> `src/app/about/page.tsx`
- `/contact/` -> `src/app/contact/page.tsx`
- `/services/` -> `src/app/services/page.tsx`
- `/privacy/` -> `src/app/privacy/page.tsx`
- `/terms/` -> `src/app/terms/page.tsx`

Primary services:
- `/services/excavation-site-preparation/` -> `src/app/services/excavation-site-preparation/page.tsx`
- `/services/site-preparation-grading/` -> `src/app/services/site-preparation-grading/page.tsx`
- `/services/foundations-civil-infrastructure/` -> `src/app/services/foundations-civil-infrastructure/page.tsx`
- `/services/drainage-hardscaping/` -> `src/app/services/drainage-hardscaping/page.tsx`
- `/services/hauling-site-clearing-logistics/` -> `src/app/services/hauling-site-clearing-logistics/page.tsx`
- `/services/snow-removal/` -> `src/app/services/snow-removal/page.tsx`

Dynamic services:
- `/services/{snow-subservice-slug}/` -> `src/app/services/[slug]/page.tsx`
- `generateStaticParams` source: `getAllSnowSubServiceDefs()`

Dynamic locations:
- `/locations/{slug}/` -> `src/app/locations/[slug]/page.tsx`
- `generateStaticParams` source: `getAllSnowLocationDefs()`

## Full URL parity inventory

### 1) Main routes

- `/`
- `/about/`
- `/contact/`
- `/services/`
- `/privacy/`
- `/terms/`

### 2) Primary service routes

- `/services/excavation-site-preparation/`
- `/services/site-preparation-grading/`
- `/services/foundations-civil-infrastructure/`
- `/services/drainage-hardscaping/`
- `/services/hauling-site-clearing-logistics/`
- `/services/snow-removal/`

### 3) Snow sub-service routes

- `/services/commercial-parking-lot-snow-plowing-barrie/`
- `/services/industrial-snow-removal-simcoe-county/`
- `/services/commercial-ice-management-deicing-simcoe-county/`
- `/services/247-emergency-snow-removal-barrie/`
- `/services/commercial-snow-hauling-removal-simcoe-county/`
- `/services/retail-plaza-snow-removal-barrie/`
- `/services/property-management-snow-removal-contracts/`
- `/services/office-building-corporate-campus-snow-removal-barrie/`

### 4) Snow location routes

- `/locations/commercial-snow-removal-barrie-ontario/`
- `/locations/commercial-snow-removal-orillia-ontario/`
- `/locations/commercial-snow-removal-innisfil-ontario/`
- `/locations/commercial-snow-removal-wasaga-beach-ontario/`
- `/locations/commercial-snow-removal-simcoe-county/`

## Navigation parity map

### Utility bar

- Location text: `Barrie • Midland • Orillia • Simcoe County`
- Phone display/href: `705-619-4902` / `tel:+17056194902`
- Rotator lines:
  - `Available for Site Dispatch — Commercial Projects`
  - `Licensed & Insured — Barrie, Midland, Orillia & Simcoe County`
  - `From Concept to Creation`

### Primary nav

- `About` -> `/about/`
- `Process` -> `/#process`
- `Coverage` -> `/#coverage`
- `Projects` -> `/#testimonials`

### Services mega menu

- `View all` -> `/services/`
- 6 primary service entries:
  - `/services/excavation-site-preparation/`
  - `/services/site-preparation-grading/`
  - `/services/foundations-civil-infrastructure/`
  - `/services/drainage-hardscaping/`
  - `/services/hauling-site-clearing-logistics/`
  - `/services/snow-removal/`

### Company mega menu

Ground Level:
- `About` -> `/about/`
- `Contact` -> `/contact/`
- `Our Process` -> `/#process`
- `Coverage Area` -> `/#coverage`

Resources:
- `All services` -> `/services/`
- `Why Ground Level` -> `/#why`
- `Client Projects` -> `/#testimonials`
- `Site consultation` -> `/#cta-band`

Dispatch CTA:
- `Call 705-619-4902` -> `tel:+17056194902`

### Mobile nav links

- `/about/`
- `/services/`
- `/#services`
- `/#process`
- `/#coverage`
- `/#testimonials`

### Footer links

Services:
- `/services/excavation-site-preparation/`
- `/services/site-preparation-grading/`
- `/services/foundations-civil-infrastructure/`
- `/services/drainage-hardscaping/`
- `/services/hauling-site-clearing-logistics/`
- `/services/snow-removal/`

Company:
- `/about/`
- `/contact/`
- `/#why`
- `/#process`
- `/#coverage`
- `/#testimonials`

Coverage:
- `/#coverage` (Barrie, Midland, Orillia, Simcoe County)

Legal:
- `/privacy/`
- `/terms/`

## Anchor contract

Homepage anchors required:
- `#services`
- `#why`
- `#process`
- `#coverage`
- `#testimonials`
- `#cta-band`

Service-page anchors required:
- `#overview`
- `#scope`
- `#field-capabilities`
- `#process`
- `#faq`
- `#related-services`
- `#request-site-visit`

Snow hub fragments required:
- `svc-parking-lot`
- `svc-industrial`
- `svc-ice`
- `svc-emergency`
- `svc-hauling`
- `svc-retail`
- `svc-property-management`
- `svc-office-campus`
- `service-area`

## Internal link contract

- Every nav/footer href must resolve to a valid route or existing anchor ID.
- Every in-page anchor must exist exactly once on its target page.
- Snow sub-service and location pages must cross-link according to hub flow.
- Scope-strip links on service pages must map to real IDs and remain hash-offset compatible.

## SEO parity model

### Sitemap and robots

- Sitemap source pattern: `src/app/sitemap.ts`
- Must include:
  - core pages
  - all primary service pages
  - all snow sub-service pages
  - all snow location pages
- Robots source pattern: `src/app/robots.ts`
  - allow all crawling
  - expose `/sitemap.xml`

### Metadata title parity

Core pages:
- Home: `Excavation & Site Preparation Barrie | Simcoe County | Orillia | Innisfil`
- Services index: `Services | {site.name}`
- About: `About | {site.name}`
- Contact: `Contact | {site.name}`
- Snow hub: `Commercial Snow Removal Contractors | Barrie, Simcoe County`

Primary services:
- Excavation & Site Preparation:
  - `Excavation & Site Preparation Barrie | Simcoe County Contractor`
- Site Preparation & Grading:
  - `Site Preparation & Grading | Ground Level Contracting`
- Foundations & Civil Infrastructure:
  - `Commercial Foundation Excavation Barrie | Civil Infrastructure | Ground Level`
- Drainage & Hardscaping:
  - `Drainage & Hardscaping | Ground Level Contracting`
- Hauling, Site Clearing & Logistics:
  - `Hauling, Site Clearing & Logistics | Ground Level Contracting`
- Snow Removal:
  - `Commercial Snow Removal Contractors | Barrie, Simcoe County`

Snow locations:
- `Commercial Snow Removal Barrie Ontario | Ground Level Contracting`
- `Commercial Snow Removal Orillia Ontario | Ground Level Contracting`
- `Commercial Snow Removal Innisfil Ontario | Ground Level Contracting`
- `Commercial Snow Removal Wasaga Beach Ontario | Ground Level Contracting`
- `Commercial Snow Removal Simcoe County | Ground Level Contracting`

## Scaffold-shell policy (required)

If source content is missing in the destination project:

1. Scaffold all pages using exact target slugs first.
2. Wire navigation and footer links with exact parity hrefs.
3. Implement anchor IDs on target templates so hash links resolve.
4. Add metadata titles, sitemap entries, and robots config before content fill.
5. Replace shell content incrementally without changing slug/link contracts.

## Non-negotiable parity rules

1. Route parity must be exact (including trailing slash policy).
2. Slug parity must be exact (no synonym or casing changes).
3. Nav parity must be exact across utility/primary/mega/mobile/footer/legal surfaces.
4. Anchor IDs must exist and be linkable from all declared internal hrefs.
5. Sitemap and robots parity must include all required route groups.

## Binary implementation checklist (for destination project)

- [ ] All URLs in the route inventory exist and resolve.
- [ ] All utility/primary/mega/mobile/footer/legal links are wired exactly.
- [ ] All declared homepage anchors exist and resolve.
- [ ] All declared service-page anchors exist and resolve.
- [ ] Snow hub fragments and area fragment are present where referenced.
- [ ] Sitemap includes core, primary services, snow sub-services, and locations.
- [ ] Robots exposes sitemap URL and allows crawling.
- [ ] Metadata title groups match parity map.
- [ ] Missing-content routes were scaffolded without slug/link drift.
- [ ] Internal link checks pass (no broken route or hash targets).

## Reference implementation prompt

Use this prompt in a new project:

`Recreate the full active GLC website IA exactly as defined in docs/GLC_SITE_CLONE_MASTER_MAP.md: build all routes with trailing slashes, preserve all slug and nav parity, ensure every anchor target exists, implement full sitemap/robots/metadata parity, and scaffold missing pages with shell templates before content migration.`
