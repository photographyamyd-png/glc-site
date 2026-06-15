# Figma handoff — Excavation & Site Preparation (pilot)

**Slug:** `excavation-site-preparation`  
**Production URL:** `/services/excavation-site-preparation/`  
**Code template:** `ExcavationSitePreparationPage` (not generic `ServicePageTemplate`)  
**Purpose:** Wireframe and restyle layout/components with real GLC brand tokens, copy, and photography.

---

## How to use this file in Figma

### 1. Create the file structure in Figma

1. Open **Figma** → your GLC project (or **New design file**).
2. Add a page: **`GLC / Excavation pilot`**.
3. Create frames (use **Frame** tool, `F`):
   - `00 — Tokens` (1440×900, documentation)
   - `01 — Components` (1440×2000)
   - `02 — Wireframe desktop` (1440× auto height)
   - `03 — Wireframe mobile` (390× auto height)
   - `Handoff` (paste key tables from this doc as text)

### 2. Set up brand variables (15 min)

1. Open the file → left sidebar **Local variables** (diamond icon) → **Create variable**.
2. Create collection: **`GLC / Production`**.
3. Add **Color** variables from [Brand tokens](#brand-tokens) below (exact hex).
4. Create **Text styles** (right panel with text selected → **Type styles** → **+**):
   - Eyebrow, H1 Hero, H2 Section, H3 Card, Body, CTA — specs in [Typography](#typography).
5. On frame `00 — Tokens`, place swatches bound to variables so the team sees the system.

### 3. Import photography

1. On your computer, open:  
   `c:\dev\glc-site\public\images\services\Excavation\`
2. In Figma: drag these files onto the canvas (or **Place image**):
   - **Hero:** `excavation-016.jpg`
   - **Pain:** `excavation-013.jpg`
   - **Solution:** `excavation-008.jpg`, `excavation-015.jpg`
   - **Proof grid:** `excavation-001.jpg`, `excavation-003.jpg`, `excavation-005.jpg`, `excavation-014.jpg`
3. Optionally import related-service images from `Grading/`, `Foundations/`, `Drainage-and-Hardscaping/` (paths in [Image map](#image-map)).

### 4. Build components (frame `01 — Components`)

Create components (**Create component** `Ctrl+Alt+K` / `⌥⌘K`) for:

| Component | Notes |
|-----------|--------|
| `Hero / GlassPanel` | Dark glass `rgb(10,12,11)` ~40–45%, border `white/10`, blur |
| `Section / Header` | 4px yellow left rail + Eyebrow + H2 |
| `Feature / RowDark` | Icon + H3 + body on dark card |
| `Gallery / TileSquare` | 1:1 image + light border |
| `CTA / YellowBand` | Full-width `#F2B705`, ink text and buttons |
| `Marquee / Chip` | Condensed uppercase chip |
| `FAQ / Row` | Question + chevron |

Match spacing: section vertical padding **96px**, header-to-body **56px** after H2.

### 5. Wireframe desktop (frame `02`)

Follow [Target wireframe structure](#target-wireframe-structure-7-sections) and paste copy from [Page copy](#page-copy) sections — **no lorem ipsum**.

### 6. Use Figma AI (optional)

1. Select frame `02` or an empty frame.
2. Open **Figma AI** (toolbar or right panel — availability depends on your plan).
3. Paste the full prompt from [Figma AI prompt](#figma-ai-prompt-copy-paste).
4. **After generation:** Rebind colors to **variables**, replace fonts with Oswald / Source Sans 3 / Barlow Condensed, swap placeholders for your placed photos, and align section `id` labels.

### 7. Dev Mode / handoff to dev (later)

When approved:

1. Toggle **Dev Mode** (top right).
2. Select layers → copy spacing, colors, and type specs.
3. Share frame link with dev; implementation stays on a **feature branch** + Vercel Preview (not `main` until approved).

### 8. Do not use for implementation

- **Copy as React** / Anima / full-page export plugins — they will ignore V7 rules and wrong fonts.
- This doc is the **spec**; code changes map to `ExcavationSitePreparationPage` and related components.

---

## Route metadata

| Field | Value |
|-------|--------|
| SEO title | Excavation & Site Preparation Barrie \| Simcoe County Contractor |
| SEO description | Expert excavation & site preparation across Barrie, Orillia, Wasaga Beach, Innisfil & Simcoe County. Grading, clearing, trenching, pool digging, hydrovac & more. Free estimates. |
| H1 (hero) | Precision / Digging for Complex / Projects. (three-act) |
| Primary CTAs | Call now · Get free quote |
| Phone display | (705) 619-4902 |
| Email CTA label | Email us |

---

## Brand tokens

### Colors

| Variable name | Hex / value | Usage |
|---------------|-------------|--------|
| `yellow/core` | `#F2B705` | Accent, yellow CTA band, stat values, emphasis in H1/H2 |
| `yellow/dark` | `#C99804` | Hover states |
| `ink/deep` | `#1E1C1A` | Dark bands, hero scrim, buttons on yellow |
| `ink/mid` | `#2E2B28` | Dark panels |
| `ink/warm` | `#585653` | Muted UI |
| `canvas` | `#FAFAFA` | Light section background (`band-light`) |
| `white` | `#FFFFFF` | Cards on light |
| `glass/hero` | `rgb(10, 12, 11)` at 40–45% opacity + backdrop blur | Hero inner panel |
| `border/light` | `rgb(30 28 26 / 0.12)` | `--g200` on light cards |

### Typography

| Style | Font family | Size | Weight | Transform | Tracking |
|-------|-------------|------|--------|-----------|----------|
| Eyebrow | Barlow Condensed | 13px | 600 | Uppercase | 0.07em |
| H1 Hero (3-act) | Oswald | clamp ~58–118px | 200 / 600 / 700 per line | Uppercase | -0.02em |
| H2 Section | Oswald | 36–52px | 700 | Uppercase | tight |
| H3 Card | Oswald | 20–24px | 700 | Uppercase | 0.04em |
| Body | Source Sans 3 | 15–16px | 400 | Sentence | normal |
| Body line height | — | — | — | — | **1.72** |
| CTA button | Source Sans 3 or Barlow | 12px | 600–700 | Uppercase | 0.12em |

### Layout

| Token | Value |
|-------|--------|
| Max content width | 1320px (`--max`) |
| Max bleed width | 1440px (`--max-bleed`) |
| Section padding Y | 96px (`--s12`) |
| Heading release gap | 56px (`--s7`) below H2 |
| Gutters | 28px → 40px → 80px (sm → md → lg) |
| Yellow spine | 4px left border ` #F2B705` on section headers |

### Band classes (annotate on each section)

| Class | Background | Text |
|-------|------------|------|
| `band-dark-field` | `#1E1C1A` + photo + scrims | White / white 90% |
| `band-light` | `#FAFAFA` | `#1E1C1A` |
| `band-dark` | `#1E1C1A` | White |
| `band-yellow-solid` | `#F2B705` | `#1E1C1A` |

**Rule:** Do not place three `band-dark` sections in a row. Alternate dark ↔ light.

---

## Current production anatomy (reference)

Built in code as:

| Order | Section `id` | Band | Component / role |
|-------|----------------|------|------------------|
| 0 | `#hero` | `band-dark-field` | `GLHero` variant `marketing` |
| — | (marquee) | ticker strip | `GLMarqueeBand` |
| 1 | `#excavation-pain` | `band-light` | Pain + image |
| 2 | `#excavation-solution` | `band-dark` | 2 images + 3 features |
| 3 | `#excavation-proof` | `band-light` | 4-up gallery |
| 4 | `#excavation-final-cta` | solid yellow | Conversion strip |
| 5 | `#technical-specifications-faq` | `band-light` | SEO basement (long) |
| 6 | `#related-services` | `band-dark` | 3 image cards |

**Design problem:** Too many repeating headers (yellow spine), heavy SEO basement (11 sub-service accordions + 8 FAQs), and related image cards after a full yellow CTA.

---

## Target wireframe structure (7 sections)

Design the **simplified** page in Figma first; dev implements on a preview branch later.

| # | `id` | Band | Content |
|---|------|------|---------|
| 1 | `#hero` | `band-dark-field` | Marketing hero — 80–100svh, glass panel, stats, coverage, 2 CTAs |
| 2 | `(marquee)` | yellow/dark chips | 9 phrases (loop) |
| 3 | `#excavation-pain` | `band-light` | Split: image + pain copy |
| 4 | `#excavation-solution` | `band-dark` | 2 images + 3 feature rows |
| 5 | `#excavation-proof` | `band-light` | 4-square gallery |
| 6 | `#excavation-final-cta` | `#F2B705` | Single conversion band |
| 7 | `#close` | `band-light` | 6 FAQ rows + related **text links** (not 3 image cards) |

**Wireframe only:** Collapse SEO basement into one labeled panel “Technical reference — see handoff doc”; full long copy remains in code source (`lib/site/copy.ts`).

---

## Page copy

### Hero (`#hero`)

| Element | Copy |
|---------|------|
| Eyebrow | Commercial excavation & site preparation |
| H1 line 1 | Precision |
| H1 line 2 | Digging for Complex |
| H1 line 3 | Projects. |
| Lede | Utility-aware excavation, disciplined spoils handling, and survey-tied grades for schedule-critical sites across Simcoe County. |
| Stat 1 | **500+** — Projects |
| Stat 2 | **15+** — Years |
| Stat 3 | **4** — Regions |
| Coverage label | Service Coverage |
| Coverage tags | Barrie · Midland · Orillia · Simcoe County |
| Primary CTA | Call now |
| Secondary CTA | Get free quote |

**Service shortcut chips (optional in wireframe):**

| Label | Route slug |
|-------|------------|
| Excavation & Site Prep | excavation-site-preparation |
| Site Prep & Grading | site-preparation-grading |
| Foundations & Civil | foundations-civil-infrastructure |
| Drainage & Hardscaping | drainage-hardscaping |
| Hauling | hauling-site-clearing-logistics |
| Snow | snow-removal |

### Marquee

1. Commercial Excavation  
2. Barrie & Simcoe County  
3. Midland & Orillia  
4. Site Preparation  
5. Foundation Specialists  
6. Grading & Pad Prep  
7. Drainage Solutions  
8. Commercial Snow Removal  
9. From Concept to Creation  

### Pain (`#excavation-pain`)

| Element | Copy |
|---------|------|
| Eyebrow | The cost of guessing |
| H2 line 1 | Digging blind costs |
| H2 accent | thousands. |
| Body 1 | Utility strikes, undocumented locates, and rushed trench walls turn a single day into a week of insurance calls and re-design. |
| Body 2 | Poor soil management — mixing organics into structural lifts, skipping moisture checks, or hauling without a balanced cut-fill plan — shows up as settlement, heave, and failed compaction tests. |
| Body 3 | Without survey-tied precision, pads drift, footings miss line, and trades stack delay on delay. You need operators who read the plan set like a control document, not a suggestion. |

### Solution (`#excavation-solution`)

| Element | Copy |
|---------|------|
| Eyebrow | How we de-risk the dig |
| H2 line 1 | Precision equipment |
| H2 accent | & field control |

| # | Title | Body |
|---|--------|------|
| 1 | Laser- & GPS-guided grading | Machine control tied to survey models keeps pads, trenches, and finish corridors inside tolerance so the next trade inherits a true surface. |
| 2 | Heavy excavator capability | Deep structural digs, mass rock handling, and production trenching with the reach and power your schedule assumes — not rental-store guesswork. |
| 3 | Utility discipline & spoils control | Coordinated daylighting, benching, and export/import sequencing so corridors stay safe and inspectors see intent, not improvisation. |

### Proof (`#excavation-proof`)

| Element | Copy |
|---------|------|
| Eyebrow | Field proof |
| H2 | Clean footings. Tight trenches. |
| Sub | Tight shots from active commercial digs — structural lines held, spoils managed, and turnover ready for forming. |

### Yellow CTA (`#excavation-final-cta`)

| Element | Copy |
|---------|------|
| Eyebrow | Mobilization |
| H2 | Book your site prep window |
| Supporting | Ready to break ground? Our team will visit your site, review the scope and deliver a clear, no-obligation quote. |
| Primary button | Book Your Site Prep |
| Phone button | Call Direct — (705) 619-4902 |
| Email link | Email us |

### Related (`#related-services` — simplify in wireframe)

| Element | Copy |
|---------|------|
| Eyebrow | Related |
| H2 line 1 | Other |
| H2 accent | service lines |
| Intro | Explore adjacent service lines that pair with excavation — grading, foundations, drainage, and hauling on commercial programs. |

| Card title | Description (short) |
|------------|------------------------|
| Site Preparation & Grading | Precision grading, compaction, and civil-ready site shaping for reliable turnover. |
| Foundations & Civil Infrastructure | Foundation excavation and civil support work aligned to engineering and schedule constraints. |
| Drainage & Hardscaping | Drainage systems and hardscape-adjacent civil details for long-term site durability. |

| Button | All services |

### Scope intro (for SEO basement / scope panels)

1. We mobilize excavators, dozers, and hauling assets to prepare raw land for commercial construction — from initial tree and stump removal through precision rough grading.  
2. Our crews coordinate with your surveyor and GC to maintain pad elevations, manage spoils, and keep haul routes efficient so your foundation contractor can start on time.  

### Deliverables

**Heading:** What we deliver

- Commercial mass grading and fine grading  
- Topsoil stripping and stockpiling  
- Rock breaking and trench work  
- Erosion control and silt management  
- Cut-and-fill balanced to geotech specs  

### Process

| Field | Copy |
|-------|------|
| Eyebrow | Field process |
| Heading | From mobilization to final grade |

| Step | Title | Body |
|------|--------|------|
| 01 | Site review | Benchmarks, access, utilities, and geotech context before the first machine moves. |
| 02 | Cut & shape | Rough grading, trenching, and structural digs to engineered tolerances. |
| 03 | Backfill & compaction | Correct lifts, moisture control, and testing coordination. |
| 04 | Handoff | Fine grading, inspection-ready documentation, and clean turnover to trades. |

### Trust block (SEO basement)

**Heading:** Trust & Authority

1. Our work spans the full spectrum of excavation and earthworks — from hydrovac precision digs around buried utilities to multi-acre commercial site clearing. We understand the drainage challenges unique to Simcoe County's terrain, the seasonal window pressures contractors face, and the quality standards demanded by engineers, municipalities and building inspectors across Barrie, Orillia and beyond.  
2. We work directly with homeowners, GCs, land developers, site engineers and municipal contractors — becoming the excavation partner that keeps your project moving without surprises.  

### FAQ (all 8)

| Question | Answer |
|----------|--------|
| How much does excavation cost in Barrie, Ontario? | Excavation costs vary based on scope, soil, access, depth, and export volume. We provide free on-site estimates with transparent pricing. |
| Do you serve areas outside of Barrie? | Yes — we operate throughout Simcoe County including Orillia, Wasaga Beach, Innisfil, Collingwood, Midland, and surrounding communities. |
| Are you licensed and insured for excavation work in Ontario? | Yes. We are fully licensed, insured, and compliant with Ontario excavation and grading requirements. |
| How far in advance do I need to book? | Lead times vary by season; spring through fall is busiest. Contact us 3–6 weeks ahead where possible. |
| What is the difference between rough grading and final grading? | Rough grading sets base elevations. Final grading brings the lot to permit-ready finished grades for drainage and landscaping. |
| What is hydrovac excavation and when should I use it? | Hydrovac uses pressurized water and vacuum extraction for safer digging near buried utilities and sensitive roots. |
| Can you handle both residential and commercial jobs? | Yes — from pool digs and basements to commercial foundations and subdivision grading. |
| Do you provide free estimates? | Yes. We offer free, no-obligation on-site estimates across Simcoe County. |

### CTA override (sitewide service pattern)

| Field | Copy |
|-------|------|
| Heading | Request a Site Visit |
| Button | Request a Site Visit |
| Supporting | Ready to break ground? Our team will visit your site, review the scope and deliver a clear, no-obligation quote. |

**Trust signals (chips / footer list):**

- Licensed & Fully Insured — Ontario Compliant  
- Residential, Commercial & Industrial — All Project Scales  
- GPS-Assisted Grading Equipment for Precision Results  
- Free On-Site Estimates — No Obligation  
- Locally Owned & Operated — Serving Simcoe County Since [Year]  
- All Soil Types & Conditions — Including Rock & High Water Table  
- Competitive Rates — Reliable Scheduling — Transparent Communication  

### Sub-services (SEO basement accordions — full copy)

Use in a separate Figma frame `Handoff / SEO basement` if needed; collapse to one panel on main wireframe.

#### 1. Residential & Commercial Excavation

Whether it's a full basement dig on a residential lot or the structural foundation for a commercial building, our excavation crews bring the precision and power to handle jobs at any depth and scale.

Our fleet includes machines ranging from compact excavators for tight residential access to full-size equipment for deep commercial foundation work.

**Closing:** Key Work: Basement excavation, commercial footings, foundation digs, cut-and-fill grading, rock breaking, soil removal and haulage.

#### 2. Grading for New Subdivisions

Subdivision development demands a level of precision and coordination that only experienced grading contractors can deliver.

We coordinate directly with engineers, developers and municipal inspectors to ensure every phase meets subdivision control requirements.

**Closing:** Serving subdivision developers in Barrie, Innisfil, Bradford, Angus, Midland, Penetanguishene, Wasaga Beach and throughout Simcoe County.

#### 3. Grading for Custom Homes & High-End Builds

Custom home builds — especially on sloped, ravine or lakefront lots — require a grading specialist who understands the relationship between drainage, landscaping and structural integrity.

We handle complex topography including steep slopes, rock outcroppings, tight setbacks and finished grade coordination with retaining walls, pool decks, driveways and landscaping elements.

**Closing:** Serving custom home builders and owners in Barrie, Collingwood, Wasaga Beach, Oro-Medonte, Springwater, Innisfil and throughout Simcoe County.

#### 4. Pool Excavation & Digging for Custom Pools

An inground pool starts with the right excavation — and in Simcoe County's varied soils, that means working with an operator who understands clay subsoil, high water tables and tight residential lots.

Our pool excavation service includes precise depth control, side-slope stability, proper soil management and spoil removal so your pool contractor steps in to a clean, accurate dig.

**Closing:** Pool excavation in Barrie, Innisfil, Wasaga Beach, Angus, Oro-Medonte, Orillia and surrounding Simcoe County areas.

#### 5. Trenching for Utilities, Services, Water & Sanitary Lines

Underground utility work requires more than just digging a trench — it demands accurate depth control, proper bedding, code-compliant backfill and compaction.

We provide trenching services across Simcoe County for water mains, sanitary sewer lines, storm drains, hydro conduit, gas line installations and communication ducts.

**Closing:** Trenching for residential, commercial and municipal projects in Barrie, Orillia, Collingwood, Midland, Wasaga Beach, Innisfil, Bradford and across Simcoe County.

#### 6. Site Preparation for Residential, Commercial & Multi-Unit Construction

Proper site preparation sets the foundation for everything that follows — cutting corners here costs significantly more later.

Our site prep services cover the full pre-construction scope: clearing, topsoil stripping, rough grading, subgrade preparation, compaction and drainage establishment.

**Closing:** Full site preparation for developers, builders and GCs across Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Midland, Penetanguishene and all of Simcoe County.

#### 7. Lot & Land Clearing

Before a shovel touches the ground on your new build, the lot needs to be prepared — and that starts with clearing.

We provide complete lot and land clearing across Simcoe County, removing trees, stumps, brush, demolition debris, surface vegetation and organic materials.

**Closing:** Lot clearing and land clearing for residential builders, landowners and developers in Barrie, Innisfil, Wasaga Beach, Oro-Medonte, Springwater, Midland, Bradford and throughout Simcoe County.

#### 8. Hydro & Vacuum Excavation (Hydrovac)

When you're digging near buried utilities, tree roots, or environmentally sensitive areas, conventional excavation isn't the safe choice — hydrovac is.

Hydrovac is the industry standard for utility locating, slot trenching, daylighting buried pipes, exposing conduit and working in congested utility corridors.

**Closing:** Hydrovac excavation across Barrie, Orillia, Wasaga Beach, Innisfil and Simcoe County for utility contractors, municipalities, arborists, engineers and general contractors.

#### 9. Heavy Civil & Commercial Site Preparation

Industrial parks, commercial complexes, multi-unit residential and institutional builds require site preparation at a scale and precision level that demands proven experience and serious equipment.

We handle heavy civil site preparation projects across Simcoe County — including mass grading, road base preparation, parking lot sub-base, structural fill placement and large-scale drainage system installation.

**Closing:** Heavy civil site prep for commercial, institutional and industrial projects in Barrie, Orillia, Angus, Bradford, Midland, Collingwood and across Simcoe County.

#### 10. Backfilling & Compaction

Proper backfilling and compaction is one of the most overlooked — and most critical — phases of any excavation project.

Our service ensures every void, trench and excavated area is filled with the correct material, placed in proper lifts, and compacted to required density.

**Closing:** Backfill and compaction for residential, commercial, municipal and industrial projects across Barrie, Orillia, Innisfil, Wasaga Beach and all of Simcoe County.

#### 11. Lot Grading — Final & Subgrade

Final lot grading is the last earthwork step before landscaping, sod, driveway and exterior finish work begins.

Our team reads grading plans, works to survey benchmarks, and delivers precise finished grades that pass the first time.

**Closing:** Final lot grading and subgrade preparation across Barrie, Orillia, Innisfil, Wasaga Beach, Angus, Midland, Bradford, Springwater, Oro-Medonte and all of Simcoe County.

---

## Image map

### Excavation folder

**Disk path:** `public/images/services/Excavation/`  
**Files:** `excavation-001.jpg` through `excavation-016.jpg`

| Role | File | Alt text |
|------|------|----------|
| Hero background | `excavation-016.jpg` | Commercial excavation equipment on an active Simcoe County construction site |
| Pain section | `excavation-013.jpg` | Trench and earthwork cut on a commercial development site in Simcoe County |
| Solution left | `excavation-008.jpg` | Laser- and GPS-guided grading on a commercial site in Simcoe County |
| Solution right | `excavation-015.jpg` | Heavy excavator on structural excavation and footing prep |
| Proof 1 | `excavation-001.jpg` | Clean structural footing excavation and trench line on a commercial site |
| Proof 2 | `excavation-003.jpg` | Machine-controlled trench and grade on a Simcoe County civil project |
| Proof 3 | `excavation-005.jpg` | (alternate commercial dig) |
| Proof 4 | `excavation-014.jpg` | (alternate commercial dig) |

### Related services (if keeping image cards)

| Service | Path |
|---------|------|
| Grading | `public/images/services/Grading/Ground Level Contracting grading.jpg` |
| Foundations | `public/images/services/Foundations/` (see `lib/site/service-images.ts` for encoded filename) |
| Drainage | `public/images/services/Drainage-and-Hardscaping/drainage-hardscaping-001.jpg` |

---

## Figma AI prompt — full production parity (copy-paste)

Use this when Figma’s first pass was **missing sections or shortened copy**. Paste the entire block below in one message. If Figma truncates, split at `--- SECTION BREAK ---` lines.

See also: [Figma AI prompt (short wireframe)](#figma-ai-prompt-short-wireframe) below.

```text
[START PROMPT — paste everything below this line through END PROMPT]

You are wireframing the FULL production Excavation service page for Ground Level Contracting (Ontario commercial contractor). Desktop frame 1440px wide, auto height. Optional second frame 390px mobile below.

CRITICAL RULES:
- Include EVERY section listed below in order — do not skip marquee, SEO basement, or related cards.
- Use EXACT copy verbatim — do not summarize, paraphrase, or use lorem ipsum.
- Label each major block with its section id as a small caption.
- Image placeholders: labeled rectangles only (I will replace with real JPGs): excavation-016, -013, -008, -015, -001, -003, -005, -014, plus related grading/foundations/drainage.
- Colors: #F2B705 yellow, #1E1C1A ink, #FAFAFA canvas, #FFFFFF white.
- Fonts: Oswald uppercase headings, Source Sans 3 body 15px line-height 1.72, Barlow Condensed eyebrows 13px semibold uppercase 0.07em.
- Alternate band-dark-field / band-light / band-dark — never three dark sections in a row.
- Section headers: 4px yellow left border + eyebrow + H2.

--- SECTION 0: #hero (band-dark-field, full-bleed photo placeholder "excavation-016") ---
Eyebrow: Commercial excavation & site preparation
H1 line 1: Precision
H1 line 2: Digging for Complex
H1 line 3: Projects.
Lede: Utility-aware excavation, disciplined spoils handling, and survey-tied grades for schedule-critical sites across Simcoe County.

Stat card 1: 500+ / Projects / sublabel: Commercial scale
Stat card 2: 15+ / Years / sublabel: Field leadership
Stat card 3: 4 / Regions / sublabel: Central Ontario

Service Coverage label: Service Coverage
Tags: Barrie, Midland, Orillia, Simcoe County

Service shortcut chips (label + sublabel):
- Excavation & Site Prep / DIGS · CLEARING · MOBILIZATION
- Site Prep & Grading / PADS · ROADS · FINISH GRADE
- Foundations & Civil / FOOTINGS · UTILITIES · CIVIL
- Drainage & Hardscaping / WATER · WALLS · HARDSCAPE
- Hauling & Clearing / AGGREGATE · SPOILS · LOGISTICS
- Snow Removal / COMMERCIAL WINTER OPS

Buttons: Call now (primary) | Get free quote (secondary)

--- SECTION: MARQUEE (horizontal ticker, no images) ---
Phrases in order, separated by bullets or pipes:
Commercial Excavation | Barrie & Simcoe County | Midland & Orillia | Site Preparation | Foundation Specialists | Grading & Pad Prep | Drainage Solutions | Commercial Snow Removal | From Concept to Creation

--- SECTION 1: #excavation-pain (band-light, image left "excavation-013") ---
Eyebrow: The cost of guessing
H2: Digging blind costs thousands. (accent word: thousands.)
Body paragraph 1: Utility strikes, undocumented locates, and rushed trench walls turn a single day into a week of insurance calls and re-design.
Body paragraph 2: Poor soil management — mixing organics into structural lifts, skipping moisture checks, or hauling without a balanced cut-fill plan — shows up as settlement, heave, and failed compaction tests.
Body paragraph 3: Without survey-tied precision, pads drift, footings miss line, and trades stack delay on delay. You need operators who read the plan set like a control document, not a suggestion.

--- SECTION 2: #excavation-solution (band-dark, images "excavation-008" and "excavation-015") ---
Eyebrow: How we de-risk the dig
H2: Precision equipment & field control (accent: & field control)

Feature 1 title: Laser- & GPS-guided grading
Feature 1 body: Machine control tied to survey models keeps pads, trenches, and finish corridors inside tolerance so the next trade inherits a true surface.

Feature 2 title: Heavy excavator capability
Feature 2 body: Deep structural digs, mass rock handling, and production trenching with the reach and power your schedule assumes — not rental-store guesswork.

Feature 3 title: Utility discipline & spoils control
Feature 3 body: Coordinated daylighting, benching, and export/import sequencing so corridors stay safe and inspectors see intent, not improvisation.

--- SECTION 3: #excavation-proof (band-light, 4 square images: 001, 003, 005, 014) ---
Eyebrow: Field proof
H2: Clean footings. Tight trenches.
Sub: Tight shots from active commercial digs — structural lines held, spoils managed, and turnover ready for forming.

--- SECTION 4: #excavation-final-cta (solid background #F2B705 full width) ---
Eyebrow: Mobilization
H2: Book your site prep window
Supporting: Ready to break ground? Our team will visit your site, review the scope and deliver a clear, no-obligation quote.
Button 1: Book Your Site Prep
Button 2: Call Direct — (705) 619-4902
Link: Email us

--- SECTION 5: #technical-specifications-faq (band-light, accordion stack + FAQ grid) ---
Eyebrow: Technical reference
H2: Technical Specifications & Project FAQ

Accordion row 1 — summary: Commercial site preparation overview
Body: We mobilize excavators, dozers, and hauling assets to prepare raw land for commercial construction — from initial tree and stump removal through precision rough grading.
Body: Our crews coordinate with your surveyor and GC to maintain pad elevations, manage spoils, and keep haul routes efficient so your foundation contractor can start on time.

Accordion row 2 — summary: Trust & Authority
Body: Our work spans the full spectrum of excavation and earthworks — from hydrovac precision digs around buried utilities to multi-acre commercial site clearing. We understand the drainage challenges unique to Simcoe County's terrain, the seasonal window pressures contractors face, and the quality standards demanded by engineers, municipalities and building inspectors across Barrie, Orillia and beyond.
Body: We work directly with homeowners, GCs, land developers, site engineers and municipal contractors — becoming the excavation partner that keeps your project moving without surprises.

Accordion row 3 — summary: Serving contractors, developers & homeowners
Body: Serving contractors, developers & homeowners across all of Simcoe County with precision excavation and site preparation.
Body: Licensed, insured and locally trusted — delivering exceptional results on residential, commercial and industrial projects of all scales.

Accordion row 4 — summary: Coverage, permitting & local requirements
Body: When your project demands precision, experience and reliable equipment, you need an excavation partner who knows the soils, topography and permit requirements of Simcoe County inside and out. We provide professional excavation and site preparation services across Barrie, Orillia, Wasaga Beach, Innisfil, Midland, Collingwood, Bradford and surrounding communities — handling everything from residential lot clearing and pool digs to large-scale commercial site prep and heavy civil grading.

Accordion row 5 — summary: Project types & workmanship standards
Body: Whether you're a homeowner planning a new build, a custom home builder working a complex sloped lot, or a developer breaking ground on a multi-lot subdivision, our experienced operators and modern equipment fleet deliver the grading accuracy, compaction quality and project timelines your job demands.
Body: We operate under a strict standard of workmanship, safety and communication — because in this industry, the groundwork you lay at the start determines everything that gets built on top of it.

Accordion row 6 — summary: Deliverables checklist
Bullets: Commercial mass grading and fine grading | Topsoil stripping and stockpiling | Rock breaking and trench work | Erosion control and silt management | Cut-and-fill balanced to geotech specs

Accordion row 7 — summary: From mobilization to final grade
Eyebrow inside: Field process
Step 01 Site review: Benchmarks, access, utilities, and geotech context before the first machine moves.
Step 02 Cut & shape: Rough grading, trenching, and structural digs to engineered tolerances.
Step 03 Backfill & compaction: Correct lifts, moisture control, and testing coordination.
Step 04 Handoff: Fine grading, inspection-ready documentation, and clean turnover to trades.

Accordion row 8 — summary: Residential & Commercial Excavation
Whether it's a full basement dig on a residential lot or the structural foundation for a commercial building, our excavation crews bring the precision and power to handle jobs at any depth and scale.
Our fleet includes machines ranging from compact excavators for tight residential access to full-size equipment for deep commercial foundation work.
Closing: Key Work: Basement excavation, commercial footings, foundation digs, cut-and-fill grading, rock breaking, soil removal and haulage.

Accordion row 9 — summary: Grading for New Subdivisions
Subdivision development demands a level of precision and coordination that only experienced grading contractors can deliver.
We coordinate directly with engineers, developers and municipal inspectors to ensure every phase meets subdivision control requirements.
Closing: Serving subdivision developers in Barrie, Innisfil, Bradford, Angus, Midland, Penetanguishene, Wasaga Beach and throughout Simcoe County.

Accordion row 10 — summary: Grading for Custom Homes & High-End Builds
Custom home builds — especially on sloped, ravine or lakefront lots — require a grading specialist who understands the relationship between drainage, landscaping and structural integrity.
We handle complex topography including steep slopes, rock outcroppings, tight setbacks and finished grade coordination with retaining walls, pool decks, driveways and landscaping elements.
Closing: Serving custom home builders and owners in Barrie, Collingwood, Wasaga Beach, Oro-Medonte, Springwater, Innisfil and throughout Simcoe County.

Accordion row 11 — summary: Pool Excavation & Digging for Custom Pools
An inground pool starts with the right excavation — and in Simcoe County's varied soils, that means working with an operator who understands clay subsoil, high water tables and tight residential lots.
Our pool excavation service includes precise depth control, side-slope stability, proper soil management and spoil removal so your pool contractor steps in to a clean, accurate dig.
Closing: Pool excavation in Barrie, Innisfil, Wasaga Beach, Angus, Oro-Medonte, Orillia and surrounding Simcoe County areas.

Accordion row 12 — summary: Trenching for Utilities, Services, Water & Sanitary Lines
Underground utility work requires more than just digging a trench — it demands accurate depth control, proper bedding, code-compliant backfill and compaction.
We provide trenching services across Simcoe County for water mains, sanitary sewer lines, storm drains, hydro conduit, gas line installations and communication ducts.
Closing: Trenching for residential, commercial and municipal projects in Barrie, Orillia, Collingwood, Midland, Wasaga Beach, Innisfil, Bradford and across Simcoe County.

Accordion row 13 — summary: Site Preparation for Residential, Commercial & Multi-Unit Construction
Proper site preparation sets the foundation for everything that follows — cutting corners here costs significantly more later.
Our site prep services cover the full pre-construction scope: clearing, topsoil stripping, rough grading, subgrade preparation, compaction and drainage establishment.
Closing: Full site preparation for developers, builders and GCs across Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Midland, Penetanguishene and all of Simcoe County.

Accordion row 14 — summary: Lot & Land Clearing
Before a shovel touches the ground on your new build, the lot needs to be prepared — and that starts with clearing.
We provide complete lot and land clearing across Simcoe County, removing trees, stumps, brush, demolition debris, surface vegetation and organic materials.
Closing: Lot clearing and land clearing for residential builders, landowners and developers in Barrie, Innisfil, Wasaga Beach, Oro-Medonte, Springwater, Midland, Bradford and throughout Simcoe County.

Accordion row 15 — summary: Hydro & Vacuum Excavation (Hydrovac)
When you're digging near buried utilities, tree roots, or environmentally sensitive areas, conventional excavation isn't the safe choice — hydrovac is.
Hydrovac is the industry standard for utility locating, slot trenching, daylighting buried pipes, exposing conduit and working in congested utility corridors.
Closing: Hydrovac excavation across Barrie, Orillia, Wasaga Beach, Innisfil and Simcoe County for utility contractors, municipalities, arborists, engineers and general contractors.

Accordion row 16 — summary: Heavy Civil & Commercial Site Preparation
Industrial parks, commercial complexes, multi-unit residential and institutional builds require site preparation at a scale and precision level that demands proven experience and serious equipment.
We handle heavy civil site preparation projects across Simcoe County — including mass grading, road base preparation, parking lot sub-base, structural fill placement and large-scale drainage system installation.
Closing: Heavy civil site prep for commercial, institutional and industrial projects in Barrie, Orillia, Angus, Bradford, Midland, Collingwood and across Simcoe County.

Accordion row 17 — summary: Backfilling & Compaction
Proper backfilling and compaction is one of the most overlooked — and most critical — phases of any excavation project.
Our service ensures every void, trench and excavated area is filled with the correct material, placed in proper lifts, and compacted to required density.
Closing: Backfill and compaction for residential, commercial, municipal and industrial projects across Barrie, Orillia, Innisfil, Wasaga Beach and all of Simcoe County.

Accordion row 18 — summary: Lot Grading — Final & Subgrade
Final lot grading is the last earthwork step before landscaping, sod, driveway and exterior finish work begins.
Our team reads grading plans, works to survey benchmarks, and delivers precise finished grades that pass the first time.
Closing: Final lot grading and subgrade preparation across Barrie, Orillia, Innisfil, Wasaga Beach, Angus, Midland, Bradford, Springwater, Oro-Medonte and all of Simcoe County.

FAQ section (8 rows, show question + full answer):
Q: How much does excavation cost in Barrie, Ontario? A: Excavation costs vary based on scope, soil, access, depth, and export volume. We provide free on-site estimates with transparent pricing.
Q: Do you serve areas outside of Barrie? A: Yes — we operate throughout Simcoe County including Orillia, Wasaga Beach, Innisfil, Collingwood, Midland, and surrounding communities.
Q: Are you licensed and insured for excavation work in Ontario? A: Yes. We are fully licensed, insured, and compliant with Ontario excavation and grading requirements.
Q: How far in advance do I need to book? A: Lead times vary by season; spring through fall is busiest. Contact us 3–6 weeks ahead where possible.
Q: What is the difference between rough grading and final grading? A: Rough grading sets base elevations. Final grading brings the lot to permit-ready finished grades for drainage and landscaping.
Q: What is hydrovac excavation and when should I use it? A: Hydrovac uses pressurized water and vacuum extraction for safer digging near buried utilities and sensitive roots.
Q: Can you handle both residential and commercial jobs? A: Yes — from pool digs and basements to commercial foundations and subdivision grading.
Q: Do you provide free estimates? A: Yes. We offer free, no-obligation on-site estimates across Simcoe County.

Testimonials accordion — summary: Client feedback
Eyebrow: Client Feedback
Heading: Trusted by Site Supervisors & PMs
Intro: Ground Level Contracting is built for commercial relationships. Here's what the teams we work with have to say.
Quote 1: "Ground Level mobilized faster than any contractor we'd used before. Site was prepped and ready two days ahead of our concrete pour — that kind of reliability is rare." — Marcus T., Project Manager — Commercial Developer, Barrie
Quote 2: "We brought them in on a challenging Simcoe County site with heavy rock. They diagnosed the issue, adjusted their approach same day, and kept us on schedule. Exactly who you want on complex ground." — Diane P., Site Supervisor — General Contractor, Midland
Quote 3: "Professional, communicative, and thorough. The drainage install was clean, documented properly, and the final grading passed inspection first time. Will be using Ground Level on all our Simcoe County projects going forward." — James R., Construction Coordinator — Simcoe County

--- SECTION 6: #related-services (band-dark, 3 cards with 16:10 image placeholders) ---
Eyebrow: Related
H2: Other service lines (accent: service lines)
Intro: Explore adjacent service lines that pair with excavation — grading, foundations, drainage, and hauling on commercial programs.

Card 1 image placeholder: grading | Title: Site Preparation & Grading | Description: Precision grading, compaction, and civil-ready site shaping for reliable turnover.
Card 2 image placeholder: foundations | Title: Foundations & Civil Infrastructure | Description: Foundation excavation and civil support work aligned to engineering and schedule constraints.
Card 3 image placeholder: drainage | Title: Drainage & Hardscaping | Description: Drainage systems and hardscape-adjacent civil details for long-term site durability.

Button: All services

[END PROMPT]
```

If the model stops early, re-run from the first missing `--- SECTION` line.

---

## Figma AI prompt (short wireframe)

```text
Wireframe a desktop (1440px) and mobile (390px) page for Ground Level Contracting — Excavation & Site Preparation.

Use exact brand tokens:
Colors: #F2B705 yellow, #1E1C1A ink, #FAFAFA canvas, #FFFFFF white.
Fonts: Oswald headings (uppercase), Source Sans 3 body 15px line-height 1.72, Barlow Condensed eyebrows 13px semibold uppercase 0.07em tracking.

Build only from components: HeroGlassPanel, MarqueeStrip, SectionHeader (4px yellow left rail), SplitMediaCopy, FeatureRowDark, SquareGallery4, YellowCtaBand, FaqList.

Section order and ids:
1. #hero band-dark-field — photo excavation-016, glass panel: eyebrow "Commercial excavation & site preparation", H1 three lines "Precision" / "Digging for Complex" / "Projects.", lede about utility-aware excavation Simcoe County, 3 stat cards 500+ Projects, 15+ Years, 4 Regions, chips Barrie Midland Orillia Simcoe County, buttons Call now + Get free quote
2. Marquee — Commercial Excavation, Barrie & Simcoe County, Midland & Orillia, Site Preparation, Foundation Specialists, Grading & Pad Prep, Drainage Solutions, Commercial Snow Removal, From Concept to Creation
3. #excavation-pain band-light — image excavation-013, eyebrow The cost of guessing, H2 Digging blind costs thousands (yellow accent), three body paragraphs about utility strikes, soil management, survey precision
4. #excavation-solution band-dark — How we de-risk the dig, Precision equipment & field control, images 008 and 015, three features: Laser GPS grading, Heavy excavator capability, Utility discipline spoils control
5. #excavation-proof band-light — Field proof, Clean footings. Tight trenches., four square images
6. #excavation-final-cta solid #F2B705 — Mobilization, Book your site prep window, Book Your Site Prep button, phone (705) 619-4902, Email us
7. #close band-light — six FAQ items about Barrie pricing, service area, licensed insured, booking, rough vs final grading, hydrovac; text links to Grading Foundations Drainage; All services button

Rules: alternate light and dark bands; no three dark sections in a row; one yellow band only; no lorem ipsum; commercial construction photography only.
```

---

## Source files in repo (for dev handoff later)

| File | Purpose |
|------|---------|
| `components/templates/ExcavationSitePreparationPage.tsx` | Page shell |
| `components/templates/ExcavationSitePreparationArticle.tsx` | Funnel sections |
| `components/templates/ExcavationSeoBasement.tsx` | Long SEO accordion |
| `lib/ground-level/excavation-sandbox-map.ts` | Pain, solution, proof, CTA copy |
| `lib/site/copy.ts` | `SERVICE_DETAILS["excavation-site-preparation"]` |
| `lib/site/service-images.ts` | Hero image path |
| `app/globals.css` | Design tokens |
| `.cursor/rules/design-system.mdc` | V7 layout rules |

---

## Approval checklist (before coding)

- [ ] Variables match token table  
- [ ] All copy matches this doc (no lorem)  
- [ ] Photos from `Excavation/` folder placed  
- [ ] Desktop + mobile frames  
- [ ] Section `id` labels on frames  
- [ ] Stakeholder sign-off comment on frame `02`  
- [ ] Simplified 7-section structure agreed (basement collapsed in wireframe)  

**Live site safety:** Implement on a feature branch → Vercel Preview URL → merge to `main` only after explicit approval.
