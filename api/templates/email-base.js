// Shared base styles and helpers for all Othalo email templates

export const BRAND = {
  navy: '#0A1628',
  teal: '#2DD4A8',
  tealDark: '#1BAA84',
  white: '#FFFFFF',
  surface: '#F8FAFB',
  muted: '#6B7280',
  border: '#E5E9EF',
  text: '#1E293B',
};

export const baseStyles = `
  body { margin: 0; padding: 0; background-color: #F8FAFB; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  table { border-collapse: collapse; }
  img { border: 0; }
  a { color: #2DD4A8; }
`;

export function emailWrapper(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Othalo</title>
  <style>${baseStyles}</style>
</head>
<body>
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFB; padding: 32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">
          <!-- HEADER -->
          <tr>
            <td style="background-color:${BRAND.navy}; padding: 28px 40px; border-radius: 8px 8px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:22px; font-weight:800; color:${BRAND.white}; letter-spacing:-0.5px;">
                      OTHALO
                    </span>
                  </td>
                  <td align="right">
                    <span style="font-size:10px; font-weight:600; color:${BRAND.teal}; letter-spacing:2px; text-transform:uppercase;">
                      Building the Future
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- TEAL ACCENT BAR -->
          <tr>
            <td style="background-color:${BRAND.teal}; height:4px;"></td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:${BRAND.white}; padding: 40px; border-radius: 0;">
              ${content}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:${BRAND.navy}; padding: 24px 40px; border-radius: 0 0 8px 8px;">
              <p style="margin:0; font-size:11px; color:rgba(255,255,255,0.4); text-align:center; line-height:1.6;">
                Othalo AS · Oslo, Norway · 
                <a href="https://othalo.com" style="color:${BRAND.teal}; text-decoration:none;">othalo.com</a>
                <br/>
                This email was sent by the Othalo automated system. Please do not reply to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function fieldRow(label, value, accent = false) {
  if (!value) return '';
  return `
  <tr>
    <td style="padding: 10px 14px; border-bottom: 1px solid ${BRAND.border}; width:40%;">
      <span style="font-size:11px; font-weight:700; color:${BRAND.muted}; text-transform:uppercase; letter-spacing:0.8px;">${label}</span>
    </td>
    <td style="padding: 10px 14px; border-bottom: 1px solid ${BRAND.border};">
      <span style="font-size:13px; color:${accent ? BRAND.teal : BRAND.text}; font-weight:${accent ? '700' : '500'};">${value}</span>
    </td>
  </tr>`;
}

export function dataTable(rows) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid ${BRAND.border}; border-radius:6px; overflow:hidden; margin: 24px 0;">
    <tbody>
      ${rows}
    </tbody>
  </table>`;
}

export function ctaButton(text, href) {
  return `
  <div style="text-align:center; margin: 28px 0;">
    <a href="${href}" style="display:inline-block; background-color:${BRAND.teal}; color:${BRAND.navy}; font-size:13px; font-weight:800; text-decoration:none; padding:14px 36px; border-radius:4px; letter-spacing:0.5px; text-transform:uppercase;">
      ${text}
    </a>
  </div>`;
}

export function sectionHeading(text) {
  return `<h2 style="margin:0 0 6px 0; font-size:22px; font-weight:800; color:${BRAND.navy}; letter-spacing:-0.3px;">${text}</h2>`;
}

export function subHeading(text) {
  return `<p style="margin:0 0 24px 0; font-size:13px; color:${BRAND.muted}; line-height:1.5;">${text}</p>`;
}

export function badge(text) {
  return `<span style="display:inline-block; background-color:${BRAND.teal}20; color:${BRAND.tealDark}; font-size:10px; font-weight:700; padding:3px 10px; border-radius:3px; letter-spacing:1px; text-transform:uppercase; margin-bottom:16px;">${text}</span>`;
}

export function divider() {
  return `<hr style="border:none; border-top:1px solid ${BRAND.border}; margin:28px 0;" />`;
}

export function formatProduct(code) {
  const map = {
    'community-1a': 'The Community 1a — 2BR Single Unit (42m²)',
    'community-2c': 'The Community 2c — 6-Unit Block (252m²)',
    'district-2a': 'The District 2a — 24-Unit Cluster (1,008m²)',
    'worker-6x': 'Worker Accommodation 6x (144m²)',
    'panel-system': 'Othalo Panel System Only',
    'custom': 'Custom Development Solution',
  };
  return map[code] || code;
}

export function formatUnits(code) {
  const map = {
    '1-10': '1–10 units',
    '10-50': '10–50 units',
    '50-200': '50–200 units',
    '200-1000': '200–1,000 units',
    '1000+': '1,000+ units',
    'unsure': 'Not yet determined',
  };
  return map[code] || code;
}

export function formatProfile(code) {
  const map = {
    'government': 'Government / Public Agency',
    'developer': 'Housing Developer',
    'corporation': 'Corporation / Enterprise',
    'ngo': 'NGO / International Organization',
    'media': 'Media / Press',
    'investor': 'Investor',
    'other': 'Other',
  };
  return map[code] || code;
}

export function formatEnquiry(code) {
  const map = {
    'quote': 'Request a Quote / Pricing',
    'solutions': 'Solutions & Deployment Planning',
    'products': 'Product Information & Specifications',
    'partnership': 'Corporate Partnership / ESG Program',
    'investment': 'Investment Opportunity',
    'media': 'Media / Press Enquiry',
    'general': 'General Information',
  };
  return map[code] || code;
}
