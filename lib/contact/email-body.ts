import type { ContactLeadPayload } from "@/lib/contact/schema";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildContactLeadSubject(data: ContactLeadPayload): string {
  const tag = data.source === "foundations-hub" ? "foundations" : "contact";
  return `[GLC web · ${tag}] ${data.name}`;
}

export function buildContactLeadText(data: ContactLeadPayload): string {
  const lines = [
    `Source: ${data.source}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    ...(data.phone ? [`Phone: ${data.phone}`] : []),
    "",
    "Message:",
    data.message,
  ];
  return lines.join("\n");
}

export function buildContactLeadHtml(data: ContactLeadPayload): string {
  const phoneRow = data.phone
    ? `<tr><td><strong>Phone</strong></td><td>${escapeHtml(data.phone)}</td></tr>`
    : "";
  return `
<table style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;color:#1e1c1a">
  <tr><td><strong>Source</strong></td><td>${escapeHtml(data.source)}</td></tr>
  <tr><td><strong>Name</strong></td><td>${escapeHtml(data.name)}</td></tr>
  <tr><td><strong>Email</strong></td><td>${escapeHtml(data.email)}</td></tr>
  ${phoneRow}
</table>
<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;margin-top:16px;padding:12px;background:#f6f5f3;border-radius:4px">${escapeHtml(data.message)}</pre>
`.trim();
}
