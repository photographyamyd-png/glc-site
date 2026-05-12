import Image from "next/image";
import { getServiceImage } from "@/lib/site/service-images";

/** Primary service rasters — distinct from default #about column (excavation). */
const DIVISION_PAIR = [
  getServiceImage("foundations-civil-infrastructure"),
  getServiceImage("hauling-site-clearing-logistics"),
] as const;

/**
 * Full-bleed visual bridge between major homepage bands (services → about).
 * Mirrors hub / hauling lane two-up rhythm: paired photography + yellow hairline.
 */
export function HomeVisualDivision() {
  return (
    <section
      className="relative -mt-px scroll-mt-[var(--site-header-offset)] border-y border-[color:var(--g200)] bg-[rgb(10_12_11)]"
      aria-label="Commercial foundations and hauling project photography"
    >
      <div className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-px sm:bg-[color:var(--g200)]">
        {DIVISION_PAIR.map((img) => (
          <div key={img.src} className="relative aspect-[16/10] min-h-[11rem] overflow-hidden sm:min-h-[12rem] md:min-h-[14rem]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.58)] via-[rgb(10_12_11/0.14)] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.18]"
              style={{
                background:
                  "linear-gradient(105deg, transparent 0%, rgb(242 183 5 / 0.22) 44%, transparent 64%)",
              }}
              aria-hidden
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1 bg-[color:var(--y)]/90" aria-hidden />
    </section>
  );
}
