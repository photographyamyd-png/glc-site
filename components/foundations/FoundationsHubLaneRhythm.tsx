import Image from "next/image";
import type { FoundationsSubSlug } from "@/lib/site/foundations-civil-infrastructure-content";
import { getFoundationsSubImageAlt, getFoundationsSubImageSrc } from "@/lib/site/foundations-civil-infrastructure-content";

/** Light-band blueprint grid (matches prior hub solution band). */
export const foundationsBlueprintMotif =
  "pointer-events-none absolute inset-0 opacity-[0.35] [background-image:repeating-linear-gradient(0deg,transparent,transparent_11px,rgb(30_28_26/0.06)_11px,rgb(30_28_26/0.06)_12px),repeating-linear-gradient(90deg,transparent,transparent_11px,rgb(30_28_26/0.06)_11px,rgb(30_28_26/0.06)_12px)]";

type BridgeProps = {
  slug: FoundationsSubSlug;
  /** Dark scrims for transitions into charcoal DNA bands; light for pale bands / yellow quote. */
  variant?: "into-dark" | "into-light";
  priority?: boolean;
};

/** Full-bleed visual punctuation between major DNA blocks (atmosphere + rhythm). */
export function FoundationsHubVisualBridge({ slug, variant = "into-dark", priority = false }: BridgeProps) {
  const src = getFoundationsSubImageSrc(slug);
  const darkScrim =
    variant === "into-dark"
      ? "from-[rgb(10_12_11/0.72)] via-[rgb(10_12_11/0.35)] to-[rgb(10_12_11/0.55)]"
      : "from-[rgb(255_255_255/0.88)] via-[rgb(255_255_255/0.45)] to-[rgb(245_244_242/0.92)]";

  return (
    <div className="relative -mt-px h-24 w-full overflow-hidden sm:h-32 md:h-40" aria-hidden>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${darkScrim}`} />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgb(242 183 5 / 0.2) 42%, transparent 62%), linear-gradient(0deg, rgb(0 0 0 / 0.12), transparent 38%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[color:var(--y)]/90" />
    </div>
  );
}

type StripProps = {
  slugs: readonly FoundationsSubSlug[];
};

/** Editorial filmstrip above the services grid — raster anchor on the capabilities band. */
export function FoundationsHubServiceFilmstrip({ slugs }: StripProps) {
  return (
    <div className="relative z-[2] border-b border-[color:var(--g200)] bg-[rgb(255_255_255/0.92)] px-4 py-6 sm:px-6 lg:px-10">
      <div className={foundationsBlueprintMotif} aria-hidden />
      <div className="relative z-[1] mx-auto grid max-w-[min(100%,var(--container-max))] grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 md:gap-3">
        {slugs.map((slug) => (
          <div
            key={slug}
            className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[color:var(--g200)] shadow-[0_12px_32px_rgb(0_0_0/0.08)]"
          >
            <Image
              src={getFoundationsSubImageSrc(slug)}
              alt={getFoundationsSubImageAlt(slug)}
              fill
              sizes="(max-width: 768px) 50vw, 16vw"
              className="object-cover object-center transition duration-500 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.45)] via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
