import { z } from "zod";

export const CONTACT_LEAD_SOURCES = ["contact", "foundations-hub"] as const;
export type ContactLeadSource = (typeof CONTACT_LEAD_SOURCES)[number];

const emptyToUndefined = (v: unknown) =>
  typeof v === "string" && v.trim() === "" ? undefined : v;

export const contactLeadSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required").max(120),
    email: z.string().trim().email("Enter a valid email").max(254),
    phone: z.preprocess(emptyToUndefined, z.string().trim().max(40).optional()),
    message: z.string().trim().min(5, "Please add a few more details").max(8000),
    source: z.enum(CONTACT_LEAD_SOURCES),
    /** Honeypot — must stay empty (hidden field). */
    website: z.preprocess((v) => (typeof v === "string" ? v : ""), z.string().max(200)),
  })
  .strict();

export type ContactLeadPayload = z.infer<typeof contactLeadSchema>;

export function parseContactLeadJson(body: unknown) {
  return contactLeadSchema.safeParse(body);
}
