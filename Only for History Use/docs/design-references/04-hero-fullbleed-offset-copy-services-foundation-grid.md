# Structural reference — 04 (layout logic only)

**Paired asset:** `04-hero-fullbleed-offset-copy-services-foundation-grid.png`

## Non-negotiables (do not copy from the reference)

- **Do not** copy construction worker hero subject, carousel UI, shopping icons, or **multi-column saturated color blocks** as brand washes. **No** full-width colored service columns in client palette — use **light canvas, ink borders, and subtle tints** only if needed.
- **Governed by:** [PROJECT_PRIME_DIRECTIVE_RULES.md](../PROJECT_PRIME_DIRECTIVE_RULES.md) — 5% color rule; photography + ink overlay allowed.

## Structural patterns to borrow

- **Full-bleed hero with subject bias:** Strong figure or mass on one side → place **headline block on the opposite optical weight** (center-left vs right-heavy image).
- **Dual CTA hierarchy:** Primary filled + secondary outline — **functional color** on primary only.
- **Eyebrow in wide tracking** + **single accent word** in headline (accent = CTA beacon, not decorative rainbow).
- **Hero → foundation grid transition:** Immediately under hero, **dense three-column** “capability” strip: icon, title, body — reads as **grounding** after an airy hero. *Implement as* bordered light panels or hairline divisions, **not** saturated color columns.

## Composition stack — layers & placement (read against the PNG)

What the reference is *doing* with depth and color (GLC translation in parentheses):

| Order | Plane | Role | GLC-safe translation |
|------:|--------|------|----------------------|
| 0 | **Photo** | Full-bleed base, establishes temperature and mass | Keep real photography; avoid stacking multiple warm veils on top |
| 1 | **Single scrim** | One dark gradient/tint so **type + buttons** read; avoids “mud” from photo + yellow + blur | **One** neutral overlay; no extra radial accent on the same stack |
| 2 | **Type block** | Eyebrow + headline; **headline carries accent** (one word in brand yellow) | Same idea: accent lives in **typography**, not a second full-field wash |
| 3 | **CTA row** | Sits on the scrim, not inside a separate card | `cta-hero-fill` + outline secondary; no brown glass behind |
| 4 | **Foundation strip** | Three **parallel vertical fields** with **different values** (light / mid / light) — rhythm without one flat gray bar | **Not** saturated yellow/brown columns: use **canvas / white / ink border / machined edge / yellow punctuation** to get *steps* of contrast |
| — | **Interlock** | Grid **touches** hero; no floating gap | Negative margin / z-index seam (e.g. `GLCtaBand`-style overlap), not a muddy blend |

**Takeaway:** Variation comes from **(a)** one clear scrim, **(b)** accent in the **headline word**, **(c)** **stepped fields** in the foundation band — not from transparent brown overlays piled on the photo.

## Target homepage sections

- `GLHero` — offset copy, dual CTAs, optional carousel dots **omitted** unless product needs (prefer static hero for performance + clarity).
- `GLServices` — three-column rhythm with restrained panels; one column may use **machined border** or **yellow punctuation** only.

## Compliance cross-reference (intent)

- D-3b (no full-bleed brand backgrounds), B-Vb (accent guides conversion), D-5a (CTA clarity), B-IXb (short column copy).
