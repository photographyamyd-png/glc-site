/** Google Search Console HTML verification — keep after verification succeeds. */
const VERIFICATION_BODY = "google-site-verification: google87afc87a2e2c8dd9.html";

export function GET() {
  return new Response(`${VERIFICATION_BODY}\n`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
