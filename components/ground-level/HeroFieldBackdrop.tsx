import Image from "next/image";

/** Default matches legacy `GLHero` field when no `imageSrc` prop is passed. */
export const HERO_FIELD_IMAGE_DEFAULT_SRC = "/images/services/Excavation/excavation-016.jpg" as const;

export type HeroFieldBackdropProps = {
  imageSrc?: string;
  imageAlt: string;
  priority?: boolean;
  /** Applied to the `next/image` layer (default matches hero field treatment). */
  imageClassName?: string;
};

/**
 * Shared full-bleed field photo + scrim stack for `GLHero` (default) and homepage FAQ bookend.
 * Parent must be `relative overflow-hidden` (and typically `band-dark-field`).
 */
export function HeroFieldBackdrop({
  imageSrc = HERO_FIELD_IMAGE_DEFAULT_SRC,
  imageAlt,
  priority = false,
  imageClassName = "hero-bg-image object-cover object-center",
}: HeroFieldBackdropProps) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className={imageClassName}
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.92)] via-[rgb(20_24_22/0.55)] to-[rgb(15_18_16/0.35)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgb(255_255_255/0.06),transparent_55%)]"
        aria-hidden
      />
    </>
  );
}
