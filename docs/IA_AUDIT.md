# GLC Homepage Information Architecture Audit

**Scope:** Production homepage `app/page.tsx` and global chrome (`SiteHeader`, `SiteFooter`) as of audit date.  
**Method:** Discovery only — no implementation changes.  
**Target model:** Conversion hierarchy (8 tiers) supplied in audit brief.

---

## Tier-by-tier assessment

### 1. Header — pinned phone + primary CTA always visible


| Question     | Answer                                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Present?** | **Partial**                                                                                                                                                                                                           |
| **Where**    | `components/ui/SiteHeader.tsx` — `fixed` header (`z-40`); top utility row shows `tel:` link (`705-619-4902`) on all breakpoints; primary nav CTA **“Site consultation”** links to `/contact` on `**xl` and up** only. |
| **Gap**      | On viewports **below `xl`**, the sticky primary CTA is **not** in the bar — it appears only after opening the hamburger menu. Phone remains in the top dark utility strip when that strip is visible.                 |
| **Priority** | **Medium** (mobile/tablet conversion path weaker than desktop).                                                                                                                                                       |


---

### 2. Hero — emotional hook + single primary action


| Question     | Answer                                                                                                                                                                                                                                                                                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Present?** | **Partial**                                                                                                                                                                                                                                                                                                                                                          |
| **Where**    | `components/home/HomeHeroSection.tsx` — `<section id="hero" className="hero-stage band-dark-field …">` (full-viewport dark field + imagery + glass panels).                                                                                                                                                                                                          |
| **Gap**      | Strong emotional/visual hook. **Two** competing actions in the CTA row (`cta-hero-fill` → `tel:` “Request a Quote”, `cta-outline-light` → `/#services` “View Services”) plus supporting microcopy — does not match “single primary action.” Featured aside (“Request Quote / Fast Site Review”) adds a third narrative CTA cluster without a single dominant action. |
| **Priority** | **Medium**                                                                                                                                                                                                                                                                                                                                                           |


---

### 3. Service silos — named commercial services as individual gateways to sub-pages (flat)


| Question     | Answer                                                                                                                                                                                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Present?** | **Partial** (for full route inventory — see Service silo check below).                                                                                                                                                                                                                                        |
| **Where**    | `app/page.tsx` — `<section id="services" className="section-major band-light …">` maps `PRIMARY_SERVICES` to `CardSurface` + `Link` → `/services/${slug}/`. Header mega-menu lists the same six primaries.                                                                                                    |
| **Gap**      | **IA order:** Target model places service silos immediately after hero; **current order** inserts `HomeStatsBand` (`#metrics`) **before** `#services`. Eight **snow sub-service** pages exist under `/services/[slug]` but are **not** surfaced on the homepage body (only the snow **hub** primary appears). |
| **Priority** | **High** (ordering + missing gateways for indexed long-tail service URLs).                                                                                                                                                                                                                                    |


---

### 4. Commercial-only positioning statement — explicit, early, above the fold on desktop


| Question     | Answer                                                                                                                                                                                                                                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Present?** | **Partial**                                                                                                                                                                                                                                                                                                                 |
| **Where**    | **Hero** eyebrow: “Commercial Excavation & Civil Infrastructure” (`HOME_COPY.hero.eyebrow` in `lib/site/copy.ts`). Hero lede and aside reference commercial excavation, project audiences, and commercial winter ops — but **no** explicit “commercial **only**” / “we do not serve residential” (or equivalent) statement. |
| **Gap**      | Commercial **focus** is clear; commercial-**exclusive** positioning is **not** stated within the first ~two desktop scroll heights as an explicit qualifier. Dedicated “positioning” copy also appears later in `#why` (`band-dark`), not as a concise early manifesto block.                                               |
| **Priority** | **High** (per brief: treat as **HIGH** if not explicit within first two scrolls).                                                                                                                                                                                                                                           |


---

### 5. Pedigree trust layer — numbers not values (years, projects, scope)


| Question     | Answer                                                                                                                                                                                                                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Present?** | **Yes** (with IA caveat).                                                                                                                                                                                                                                                        |
| **Where**    | **In-hero:** `HomeHeroSection` — two stat links (“15+ Years…”, “500+ Commercial Projects…”) → `/about/`. **Primary band:** `components/home/HomeStatsBand.tsx` — `<section id="metrics" className="section-major band-light">` with four quantitative cards (`HOME_COPY.stats`). |
| **Gap**      | **Misplaced vs target hierarchy:** Pedigree appears **before** the service grid and is **duplicated** (hero stats + metrics band). Target model expects pedigree **after** service silos and commercial positioning.                                                             |
| **Priority** | **Medium** (content exists; sequence and duplication dilute the model).                                                                                                                                                                                                          |


---

### 6. Process or proof section


| Question     | Answer                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Present?** | **Yes**                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Where**    | **Process:** `app/page.tsx` — `<section id="process" className="section-major band-dark">` with `HOME_COPY.process.steps`. **Proof:** `GLTestimonialsFeature` (`section-major band-dark`, `id="testimonials-feature"`) — featured quote, image, proof panel, CTA; followed by **marquee-band** trust ticker. Additional **testimonial grid** in `<section id="testimonials" className="section-major band-dark">`. |
| **Gap**      | Multiple proof-adjacent blocks (feature + marquee + grid) create **long** social-proof runway; may compete with a single “proof” moment.                                                                                                                                                                                                                                                                           |
| **Priority** | **Low** (content present; consolidation is editorial/UX).                                                                                                                                                                                                                                                                                                                                                          |


---

### 7. Coverage / service area (SEO value)


| Question     | Answer                                                                                                                                                                                                                                                                |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Present?** | **Yes**                                                                                                                                                                                                                                                               |
| **Where**    | **Hero:** “Service Coverage” chips (Barrie, Midland, Orillia, Simcoe County). **Dedicated:** `<section id="coverage" className="section-major band-light">` with `HOME_COPY.coverage.areas` — links currently point to `**/contact/`** only (not city/location URLs). |
| **Gap**      | No homepage links to `**/locations/[slug]`** hub pages (those routes exist for snow/geo SEO). Footer repeats coverage as plain text + anchor to `/#coverage`.                                                                                                         |
| **Priority** | **Medium** (geo long-tail under-served from homepage/footer).                                                                                                                                                                                                         |


---

### 8. Footer — long-tail content, educational, city links


| Question     | Answer                                                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Present?** | **Partial**                                                                                                                                                                                |
| **Where**    | `components/ui/SiteFooter.tsx` — `band` on canvas; columns: **Services** (six primaries), **Company**, **Coverage** (text + `/#coverage`), **Legal** (privacy/terms).                      |
| **Gap**      | **No** city/location deep links (`/locations/...`), **no** snow sub-service links, **no** educational/blog/long-form SEO block. Not a “long-tail” footer in the sense of the target model. |
| **Priority** | **Medium**                                                                                                                                                                                 |


---

## GAPS table (missing or misplaced tiers)

Ordered by **estimated conversion impact** (highest first).


| Rank | Gap                                                                                       | Impact note                                    | Priority   |
| ---- | ----------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------- |
| 1    | **Commercial-only** qualifier not explicit in first two desktop scrolls                   | Wrong-fit inquiries; weaker qualification      | **High**   |
| 2    | **Service silo order** — metrics band before services; hero already carries stats         | Delays primary commercial paths (service SLAs) | **High**   |
| 3    | **Eight snow sub-services** have `/services/...` pages but **no** named homepage gateways | Long-tail SEO and CRO leakage vs indexed URLs  | **High**   |
| 4    | **Coverage** section does not link to `**/locations/[slug]`** pages                       | Geo intent not fully captured from homepage    | **Medium** |
| 5    | **Footer** lacks city/long-tail and educational depth                                     | Internal linking and trust depth               | **Medium** |
| 6    | **Header** primary CTA hidden behind menu on `< xl`                                       | Friction on tablet/mobile                      | **Medium** |
| 7    | **Hero** multiple CTAs + aside                                                            | Diluted primary action                         | **Medium** |
| 8    | **Pedigree** duplicated and early vs model                                                | Cognitive load; hierarchy drift                | **Medium** |
| 9    | **Proof** stack (feature + marquee + grid)                                                | Possible fatigue; not a missing tier           | **Low**    |


---

## Commercial-only positioning check (brief criterion)

**Does the homepage explicitly state, within the first two scrolls on desktop, that GLC serves commercial clients only?**

**No.** The first scroll is almost entirely hero content: it **does** say “Commercial” in the eyebrow and describes commercial excavation and audiences, but it **does not** state exclusivity (e.g. no residential / consumer-only disclaimer). **Flag: HIGH priority gap** per brief.

---

## Service silo check

### Every `/services/[slug]` page (from `ALL_SERVICES` in `lib/site/registry.ts`)

**Primary (6):**

- `excavation-site-preparation`
- `site-preparation-grading`
- `foundations-civil-infrastructure`
- `drainage-hardscaping`
- `hauling-site-clearing-logistics`
- `snow-removal`

**Snow sub-services (8):**

- `commercial-parking-lot-snow-plowing-barrie`
- `industrial-snow-removal-simcoe-county`
- `commercial-ice-management-deicing-simcoe-county`
- `247-emergency-snow-removal-barrie`
- `commercial-snow-hauling-removal-simcoe-county`
- `retail-plaza-snow-removal-barrie`
- `property-management-snow-removal-contracts`
- `office-building-corporate-campus-snow-removal-barrie`

### Homepage surface


| Slug                                 | Named, clickable gateway on homepage?                                |
| ------------------------------------ | -------------------------------------------------------------------- |
| All six **primary** slugs            | **Yes** — `#services` grid + header mega-menu                        |
| All eight **snow** sub-service slugs | **No** — only the **snow-removal** hub is surfaced as a primary card |


**Missing from homepage surface (body + footer):** the eight snow sub-service rows above. (They remain reachable from hub content and direct URL.)

**Related:** `**/locations/[slug]`** (5 snow location pages) are **not** service slugs but are **geo landing URLs**; they are **not** linked from `SiteFooter` or the homepage coverage grid (only generic `/#coverage` / `/contact`).

---

## Archetype check (GLC_GLOBAL_DESIGN_SYSTEM.md Part 4.4)

**Method:** Each block classified by **dominant** structural pattern (AR-1 … AR-6). Production homepage is **not** fully documented in design references as GL “lab” sections; classifications are **audit judgments** for rhythm review.


| #   | Section (scroll order) | Component / markup         | Archetype                   | Notes                                                    |
| --- | ---------------------- | -------------------------- | --------------------------- | -------------------------------------------------------- |
| 1   | Hero                   | `HomeHeroSection`          | **AR-6** *Ghost Transition* | Full-viewport media field + overlays + typographic stack |
| 2   | Metrics                | `HomeStatsBand` `#metrics` | **AR-5** *Data Field*       | Grid of quantitative cells / proof chips                 |
| 3   | Services               | `#services`                | **AR-4** *Kinetic Silo*     | Service/category gateway grid                            |
| 4   | Why                    | `#why`                     | **AR-5** *Data Field*       | 2×2 card grid of reasons                                 |
| 5   | Process                | `#process`                 | **AR-4** *Kinetic Silo*     | Multi-column step silos                                  |
| 6   | Marquee                | `marquee-band`             | *(separator)*               | Not tallied as content archetype                         |
| 7   | Testimonials feature   | `GLTestimonialsFeature`    | **AR-2** *Staggered Duo*    | Asymmetric media + quote + offset aside                  |
| 8   | Coverage               | `#coverage`                | **AR-1** *Monolith*         | Single centered editorial block in a panel               |
| 9   | Testimonials grid      | `#testimonials`            | **AR-5** *Data Field*       | Three-column quote grid                                  |
| 10  | CTA band               | `#cta-band`                | **AR-1** *Monolith*         | Single CTA strip / panel                                 |


### Rule D5 (archetype adjacency) — same archetype back-to-back


| Adjacent pair                   | Shared archetype? | Flag |
| ------------------------------- | ----------------- | ---- |
| Hero → Metrics                  | AR-6 → AR-5       | No   |
| Metrics → Services              | AR-5 → AR-4       | No   |
| Services → Why                  | AR-4 → AR-5       | No   |
| Why → Process                   | AR-5 → AR-4       | No   |
| Process → Marquee               | —                 | No   |
| Marquee → Testimonials feature  | —                 | No   |
| Testimonials feature → Coverage | AR-2 → AR-1       | No   |
| Coverage → Testimonials grid    | AR-1 → AR-5       | No   |
| Testimonials grid → CTA band    | **AR-5 → AR-1**   | No   |


**D5 violation (same archetype adjacent):** **None** under the classifications above.

**Caveat:** If `#why` and `#testimonials` were both read as **AR-5**, they are **not** adjacent (Coverage sits between). If Process and Services were both read as **AR-4**, they are **not** adjacent. **If** an auditor classifies **Metrics** and **Why** both as **AR-5**, they are still separated by **Services (AR-4)** — no adjacency.

---

## Band rhythm check (Rule D1)

**Approved separators (Part 5.2):** e.g. `marquee-band`, `band-light`, `band-light-field`, light-dominant figure break.

**Scroll order — band class on section root**


| #   | Section              | Band class                                                                    |
| --- | -------------------- | ----------------------------------------------------------------------------- |
| 1   | Hero                 | `band-dark-field` (full-width dark field — treat as **dark root** for rhythm) |
| 2   | Metrics              | `band-light`                                                                  |
| 3   | Services             | `band-light`                                                                  |
| 4   | Why                  | `band-dark`                                                                   |
| 5   | Process              | `band-dark`                                                                   |
| 6   | Marquee              | `marquee-band`                                                                |
| 7   | Testimonials feature | `band-dark`                                                                   |
| 8   | Coverage             | `band-light`                                                                  |
| 9   | Testimonials grid    | `band-dark`                                                                   |
| 10  | CTA band             | `band-dark`                                                                   |


### Rule D1 — `band-dark` → `band-dark` without approved separator


| Adjacent pair                       | D1                        |
| ----------------------------------- | ------------------------- |
| Hero (dark field) → Metrics (light) | OK                        |
| Metrics → Services                  | light → light (D1 silent) |
| Services → Why                      | light → dark              |
| **Why → Process**                   | **dark → dark**           |
| Process → Marquee                   | dark → **marquee**        |
| Marquee → Testimonials feature      | separator → dark          |
| Testimonials feature → Coverage     | dark → light              |
| Coverage → Testimonials grid        | light → dark              |
| **Testimonials grid → CTA band**    | **dark → dark**           |


**D1 violations (count: 2):**

1. `**#why` (`band-dark`) → `#process` (`band-dark`)** — no `marquee-band`, `band-light`, or `band-light-field` between roots.
2. `**#testimonials` (`band-dark`) → `#cta-band` (`band-dark`)** — same.

**Note:** Part 5.3 allows a **sanctioned** “hero + stats” dark pairing in DSE; here **stats are on `band-light`**, and the violations are **mid-page** dark stacks, not hero-adjacent.

---

## Reference paths

- Homepage: `app/page.tsx`
- Hero / stats: `components/home/HomeHeroSection.tsx`, `components/home/HomeStatsBand.tsx`
- Testimonials feature: `components/ground-level/GLTestimonialsFeature.tsx`
- Header / footer: `components/ui/SiteHeader.tsx`, `components/ui/SiteFooter.tsx`
- Service registry: `lib/site/registry.ts` (`PRIMARY_SERVICES`, `SNOW_SUB_SERVICES`, `ALL_SERVICES`)
- Copy: `lib/site/copy.ts` (`HOME_COPY`)
- Archetypes / D1 / D5: `GLC_GLOBAL_DESIGN_SYSTEM.md` Part 4.4, Part 5.1, Part 5.5

---

*End of audit.*