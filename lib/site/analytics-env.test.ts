import { describe, expect, it } from "vitest";
import { getGa4MeasurementId, isGa4Enabled } from "./analytics-env";

describe("analytics-env", () => {
  it("getGa4MeasurementId returns undefined when unset", () => {
    const prev = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    delete process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    try {
      expect(getGa4MeasurementId()).toBeUndefined();
    } finally {
      if (prev === undefined) delete process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
      else process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = prev;
    }
  });

  it("getGa4MeasurementId rejects non-GA4 ids", () => {
    const prev = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = "UA-123456-1";
    try {
      expect(getGa4MeasurementId()).toBeUndefined();
    } finally {
      if (prev === undefined) delete process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
      else process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = prev;
    }
  });

  it("getGa4MeasurementId accepts G- measurement ids", () => {
    const prev = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = "  G-ABC123XYZ  ";
    try {
      expect(getGa4MeasurementId()).toBe("G-ABC123XYZ");
    } finally {
      if (prev === undefined) delete process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
      else process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = prev;
    }
  });

  it("isGa4Enabled is false outside production", () => {
    const prevId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    const prevNodeEnv = process.env.NODE_ENV;
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = "G-TEST123";
    process.env.NODE_ENV = "development";
    try {
      expect(isGa4Enabled()).toBe(false);
    } finally {
      if (prevId === undefined) delete process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
      else process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID = prevId;
      process.env.NODE_ENV = prevNodeEnv;
    }
  });
});
