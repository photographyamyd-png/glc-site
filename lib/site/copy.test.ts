import { describe, expect, it } from "vitest";
import { HOME_COPY, SERVICE_DETAILS } from "@/lib/site/copy";

const TOKEN_PATTERN = /\b(TODO|TBD|FIXME)\b/i;

function collectFlaggedStrings(value: unknown, path = "root", acc: string[] = []) {
  if (typeof value === "string" && TOKEN_PATTERN.test(value)) {
    acc.push(path);
    return acc;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectFlaggedStrings(item, `${path}[${index}]`, acc));
    return acc;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, child]) => collectFlaggedStrings(child, `${path}.${key}`, acc));
  }

  return acc;
}

describe("site copy hygiene", () => {
  it("does not ship unresolved placeholder tokens", () => {
    const flagged = [
      ...collectFlaggedStrings(HOME_COPY, "HOME_COPY"),
      ...collectFlaggedStrings(SERVICE_DETAILS, "SERVICE_DETAILS"),
    ];
    expect(flagged).toEqual([]);
  });
});
