import { COMMERCIAL_SNOW_SERVICE_DEEP_DIVES } from "@/lib/site/commercial-snow-page-data";
import type { ServiceDetailCopy } from "@/lib/site/copy";
import type { ServiceDef } from "@/lib/site/registry";

/**
 * Snow sub-service routes have no `SERVICE_DETAILS` entry; map the registry `moreHref`
 * hash to the hub deep-dive and add hub/dispatch context cards so `field-capabilities` is never empty.
 */
export function getSnowSubserviceCapabilityItems(
  service: ServiceDef,
): ServiceDetailCopy["subServices"] {
  if (service.category !== "snow-subservice" || !service.moreHref?.includes("#")) {
    return [];
  }
  const anchor = service.moreHref.split("#")[1] ?? "";
  const dive = COMMERCIAL_SNOW_SERVICE_DEEP_DIVES.find((d) => d.anchor === anchor);
  if (!dive) {
    return [];
  }

  return [
    {
      id: dive.anchor,
      heading: dive.summary,
      paragraphs: dive.paragraphs,
      closing: dive.learnMoreLabel,
    },
    {
      id: `${dive.anchor}-hub`,
      heading: "Full program context on the commercial snow hub",
      paragraphs: [
        "SLAs, ice programs, fleet scale, and portfolio reporting sit alongside every commercial line item on the main hub — expand the anchored section for the same scope narrative, property types, and FAQ set.",
        "Use the link below when you need the hub chapter for procurement review or to compare adjacent programs (ice, hauling, emergency tiers).",
      ],
      closing: "Open the matching hub section",
    },
    {
      id: `${dive.anchor}-dispatch`,
      heading: "Dispatch-ready next steps",
      paragraphs: [
        "Share property address, opening requirements, and liability priorities — we align triggers, blade order, ice revisits, and documentation before the first storm cycle.",
      ],
      closing: "Request commercial assessment",
    },
  ];
}
