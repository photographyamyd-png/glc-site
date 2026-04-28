import { describe, expect, it } from "vitest";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import { PRIMARY_SERVICES, SNOW_SUB_SERVICES } from "@/lib/site/registry";

describe("service registry integrity", () => {
  it("has detail entries for every primary service slug", () => {
    PRIMARY_SERVICES.forEach((service) => {
      expect(SERVICE_DETAILS[service.slug as keyof typeof SERVICE_DETAILS]).toBeDefined();
    });
  });

  it("points every snow sub-service to an anchored snow hub section", () => {
    SNOW_SUB_SERVICES.forEach((service) => {
      expect(service.moreHref).toMatch(/^\/services\/snow-removal\/#svc-/);
    });
  });
});
