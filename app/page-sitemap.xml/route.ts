const SITE_URL = "https://lucamedtech.no";
const LAST_UPDATED = "2026-02-18T00:00:00.000Z";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${LAST_UPDATED}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="nb" href="${SITE_URL}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}" />
  </url>
  <url>
    <loc>${SITE_URL}/dialuca</loc>
    <lastmod>${LAST_UPDATED}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="nb" href="${SITE_URL}/dialuca" />
  </url>
  <url>
    <loc>${SITE_URL}/om</loc>
    <lastmod>${LAST_UPDATED}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="nb" href="${SITE_URL}/om" />
  </url>
  <url>
    <loc>${SITE_URL}/kontakt</loc>
    <lastmod>${LAST_UPDATED}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="nb" href="${SITE_URL}/kontakt" />
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
