import { describe, expect, it } from "vitest";
import { contactLeadSchema } from "@/lib/contact/schema";

describe("contactLeadSchema", () => {
  it("accepts minimal valid payload", () => {
    const r = contactLeadSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      message: "Need a site visit next week.",
      source: "contact",
      website: "",
    });
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.phone).toBeUndefined();
    }
  });

  it("rejects invalid email", () => {
    const r = contactLeadSchema.safeParse({
      name: "Jane",
      email: "not-an-email",
      message: "Hello there",
      source: "contact",
      website: "",
    });
    expect(r.success).toBe(false);
  });

  it("rejects short message", () => {
    const r = contactLeadSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      message: "hi",
      source: "foundations-hub",
      website: "",
    });
    expect(r.success).toBe(false);
  });

  it("rejects unknown keys", () => {
    const r = contactLeadSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello there",
      source: "contact",
      website: "",
      extra: "nope",
    });
    expect(r.success).toBe(false);
  });
});
