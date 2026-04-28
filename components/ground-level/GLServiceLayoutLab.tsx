import { FEATURED_SERVICES } from "@/lib/ground-level/homepage-copy";
import { SERVICE_LAYOUT_LAB_ITEMS } from "@/lib/ground-level/service-layout-lab-data";
import { ServiceLayoutLabA } from "@/components/ground-level/service-layout-lab/ServiceLayoutLabA";
import { ServiceLayoutLabB } from "@/components/ground-level/service-layout-lab/ServiceLayoutLabB";
import { ServiceLayoutLabC } from "@/components/ground-level/service-layout-lab/ServiceLayoutLabC";
import { ServiceLayoutLabD } from "@/components/ground-level/service-layout-lab/ServiceLayoutLabD";
import { ServiceLayoutLabE } from "@/components/ground-level/service-layout-lab/ServiceLayoutLabE";
import { ServiceLayoutLabF } from "@/components/ground-level/service-layout-lab/ServiceLayoutLabF";

/**
 * Review-only: six alternative “six service lines” layouts (images + copy from project data).
 * Remove this block after you pick a winner for production.
 */
export function GLServiceLayoutLab() {
  const items = SERVICE_LAYOUT_LAB_ITEMS;

  return (
    <div className="border-t-4 border-[color:var(--y)]/40 bg-[linear-gradient(180deg,rgb(250_250_250),rgb(255_255_255))]">
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 py-10 sm:px-6 sm:py-12">
        <p className="label-overline mb-2 text-ink-muted">Review only — layout lab</p>
        <p className="max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
          Six independent presentations of the same six service lines (data from{" "}
          <code className="rounded bg-[color:var(--g100)] px-1 text-xs text-ink">GROUND_LEVEL_SERVICES</code>{" "}
          plus accordion image paths). Pick a favorite, then promote that pattern and delete this lab block.
        </p>
        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-ink-muted sm:text-sm">
          <span className="font-semibold text-ink">{FEATURED_SERVICES.eyebrow}:</span> {FEATURED_SERVICES.intro}
        </p>
      </div>

      <ServiceLayoutLabA items={items} />
      <ServiceLayoutLabB items={items} />
      <ServiceLayoutLabC items={items} />
      <ServiceLayoutLabD items={items} />
      <ServiceLayoutLabE items={items} />
      <ServiceLayoutLabF items={items} />
    </div>
  );
}
