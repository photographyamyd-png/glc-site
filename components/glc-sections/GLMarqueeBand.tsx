import { GLC_MARQUEE_ITEMS } from "@/lib/glc/marquee-items";

type GLMarqueeBandProps = {
  items?: readonly string[];
};

/**
 * GLC DNA — trust ticker (`marquee-band` in globals.css). Uses `var(--y)` for fill.
 * §2 thin chromatic interrupt between hero and article (not a full tonal section).
 * §8 tri-tone on strip: yellow field (anchor) + ink ticker copy + sep dots (texture).
 * Animation pauses under `prefers-reduced-motion` (see `.marquee-track` in globals.css).
 */
export function GLMarqueeBand({ items }: GLMarqueeBandProps = {}) {
  const source = items ?? GLC_MARQUEE_ITEMS;
  const doubled = [...source, ...source];
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
