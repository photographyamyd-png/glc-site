import { describe, expect, it } from "vitest";
import { COPY_LAB_HERO } from "@/lib/ground-level/home-copy-lab-content";
import { GROUND_LEVEL_SERVICES } from "@/lib/ground-level/services";
import {
  CANONICAL_INTERNAL_ROUTES,
  CANONICAL_SERVICE_ROUTES,
  HOME_HASH_ROUTES,
  HOME_SECTION_IDS,
} from "@/lib/site/internal-destinations";

describe("internal destinations integrity", () => {
  it("contains expected home section anchors", () => {
    expect(HOME_SECTION_IDS).toEqual([
      "hero",
      "services",
      "about",
      "metrics",
      "capabilities",
      "why",
      "process",
      "coverage",
      "testimonials",
      "cta-band",
      "ghost-test",
    ]);
    expect(HOME_HASH_ROUTES).toContain("/#services");
    expect(HOME_HASH_ROUTES).toContain("/#cta-band");
  });

  it("uses canonical primary service routes for home surfaces", () => {
    const canonicalServiceRouteSet = new Set(CANONICAL_SERVICE_ROUTES);
    GROUND_LEVEL_SERVICES.forEach((service) => {
      expect(canonicalServiceRouteSet.has(`/services/${service.slug}`)).toBe(true);
    });
    COPY_LAB_HERO.serviceShortcuts.forEach((shortcut) => {
      expect(canonicalServiceRouteSet.has(`/services/${shortcut.slug}`)).toBe(true);
    });
  });

  it("does not include known dead #top hash target", () => {
    expect(CANONICAL_INTERNAL_ROUTES).not.toContain("/#top");
  });
});
