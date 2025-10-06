// src/pages/sitemap-0.xml.js
export async function GET() {
  const urls = [
    '/', '/solutions/', '/goval-ai/', '/about/', '/contact-us/',
    '/blog/', '/customer-stories/',
    '/compliance/gxp-compliance-guide/',
    '/compliance/21-cfr-part-11-guide/',
    '/compliance/gamp-5-validation/'
  ];

  const urlEntries = urls.map(url => `
  <url>
    <loc>https://govalidation.com${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
