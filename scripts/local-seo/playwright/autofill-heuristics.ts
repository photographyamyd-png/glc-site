/**
 * Heuristic form-fill rules shared by Playwright auto-submit and the browser extension.
 */
import type { AutofillValues } from "../listing-payload";

export type FillRule = {
  keys: string[];
  value: string;
  inputTypes?: string[];
};

export function buildFillRules(values: AutofillValues): FillRule[] {
  const rules: FillRule[] = [
    {
      keys: ["business", "company", "organization", "org", "name", "title", "firm"],
      value: values.businessName,
      inputTypes: ["text"],
    },
    {
      keys: ["legal", "registered"],
      value: values.legalName,
      inputTypes: ["text"],
    },
    {
      keys: ["slogan", "tagline", "motto"],
      value: values.slogan,
      inputTypes: ["text"],
    },
    {
      keys: ["email", "e-mail", "mail", "username", "user", "login"],
      value: values.signupEmail || values.email,
      inputTypes: ["email", "text"],
    },
    {
      keys: ["phone", "tel", "mobile", "telephone", "fax"],
      value: values.phone,
      inputTypes: ["tel", "text"],
    },
    {
      keys: ["website", "url", "web", "homepage", "site"],
      value: values.website,
      inputTypes: ["url", "text"],
    },
    {
      keys: ["street", "address1", "address_1", "addr", "line1"],
      value: values.street,
      inputTypes: ["text"],
    },
    {
      keys: ["city", "locality", "town"],
      value: values.city,
      inputTypes: ["text"],
    },
    {
      keys: ["province", "region", "state", "territory"],
      value: values.region,
      inputTypes: ["text"],
    },
    {
      keys: ["postal", "zip", "postcode"],
      value: values.postalCode,
      inputTypes: ["text"],
    },
    {
      keys: ["country"],
      value: values.country,
      inputTypes: ["text"],
    },
    {
      keys: ["description", "about", "summary", "bio", "details", "overview"],
      value: values.descriptionMedium,
      inputTypes: ["textarea"],
    },
    {
      keys: ["service", "area", "coverage", "location"],
      value: values.serviceAreas,
      inputTypes: ["text", "textarea"],
    },
    {
      keys: ["category", "industry", "sector"],
      value: values.primaryCategory,
      inputTypes: ["text"],
    },
  ];

  if (values.signupPassword.trim()) {
    rules.splice(4, 0, {
      keys: ["password", "passwd", "pass", "confirm"],
      value: values.signupPassword,
      inputTypes: ["password", "text"],
    });
  }

  return rules;
}

export function scoreField(
  attr: string,
  rule: FillRule,
): number {
  const hay = attr.toLowerCase();
  let score = 0;
  for (const key of rule.keys) {
    if (hay.includes(key)) score += 10;
  }
  return score;
}

export function matchInputToRule(
  attrs: { name: string; id: string; placeholder: string; type: string; tag: string },
  rules: FillRule[],
): FillRule | null {
  const combined = `${attrs.name} ${attrs.id} ${attrs.placeholder} ${attrs.type}`;
  let best: FillRule | null = null;
  let bestScore = 0;

  for (const rule of rules) {
    if (rule.inputTypes && attrs.tag === "textarea") {
      if (!rule.inputTypes.includes("textarea")) continue;
    } else if (rule.inputTypes && attrs.tag === "input") {
      if (!rule.inputTypes.includes(attrs.type) && !rule.inputTypes.includes("text")) {
        continue;
      }
    }

    const score = scoreField(combined, rule);
    if (score > bestScore) {
      bestScore = score;
      best = rule;
    }
  }

  return bestScore >= 10 ? best : null;
}
