/**
 * Playwright heuristic form fill on the current page.
 */
import type { Page } from "playwright";
import type { AutofillValues } from "../listing-payload";
import { buildFillRules, matchInputToRule } from "./autofill-heuristics";

export type FillResult = {
  filled: number;
  skipped: number;
  fields: string[];
};

export async function fillPageForms(page: Page, values: AutofillValues): Promise<FillResult> {
  const rules = buildFillRules(values);
  const result: FillResult = { filled: 0, skipped: 0, fields: [] };

  const elements = await page.locator("input, textarea, select").all();

  for (const el of elements) {
    const tag = await el.evaluate((node) => node.tagName.toLowerCase());
    if (tag === "select") {
      result.skipped++;
      continue;
    }

    const attrs = await el.evaluate((node) => {
      const input = node as HTMLInputElement | HTMLTextAreaElement;
      return {
        name: input.getAttribute("name") ?? "",
        id: input.id ?? "",
        placeholder: input.getAttribute("placeholder") ?? "",
        type: (input as HTMLInputElement).type ?? "text",
        tag: node.tagName.toLowerCase(),
      };
    });

    if (attrs.type === "hidden" || attrs.type === "submit" || attrs.type === "button") {
      result.skipped++;
      continue;
    }

    const visible = await el.isVisible().catch(() => false);
    if (!visible) {
      result.skipped++;
      continue;
    }

    const current = await el.inputValue().catch(() => "");
    if (current.trim().length > 0) {
      result.skipped++;
      continue;
    }

    const rule = matchInputToRule(attrs, rules);
    if (!rule) {
      result.skipped++;
      continue;
    }

    await el.fill(rule.value);
    result.filled++;
    result.fields.push(`${attrs.name || attrs.id || attrs.placeholder} → ${rule.value.slice(0, 40)}...`);
  }

  return result;
}
