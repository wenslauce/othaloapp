// Email: Internal notification to Othalo sales team when a quote is requested
import { emailWrapper, fieldRow, dataTable, ctaButton, sectionHeading, subHeading, badge, divider, formatProduct, formatUnits, formatProfile, BRAND } from './email-base.js';

export function quoteInternalEmail({ name, email, phone, dialCode, org, country, profileType, product, units, message, context, submittedAt }) {
  const fullPhone = dialCode && phone ? `${dialCode} ${phone}` : phone || '—';
  const productLabel = formatProduct(product);
  const unitsLabel = formatUnits(units);
  const profileLabel = formatProfile(profileType);
  const contextLabel = context === 'product' ? 'Products Page' : context === 'solutions' ? 'Solutions Page' : 'Website';
  const dateStr = submittedAt ? new Date(submittedAt).toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' }) : new Date().toLocaleString('en-GB');

  const content = `
    ${badge('New Quote Request')}
    ${sectionHeading(`Quote Request from ${name}`)}
    ${subHeading(`Submitted via ${contextLabel} on ${dateStr}`)}

    ${dataTable(`
      ${fieldRow('Full Name', name, true)}
      ${fieldRow('Email', email)}
      ${fieldRow('Phone', fullPhone)}
      ${fieldRow('Organization', org || '—')}
      ${fieldRow('Country', country)}
      ${fieldRow('Profile Type', profileLabel)}
    `)}

    <p style="margin:0 0 8px 0; font-size:11px; font-weight:700; color:${BRAND.muted}; text-transform:uppercase; letter-spacing:0.8px;">Project Details</p>
    ${dataTable(`
      ${fieldRow('Product / Configuration', productLabel, true)}
      ${fieldRow('Units Required', unitsLabel)}
    `)}

    ${message ? `
      ${divider()}
      <p style="margin:0 0 8px 0; font-size:11px; font-weight:700; color:${BRAND.muted}; text-transform:uppercase; letter-spacing:0.8px;">Message from Enquirer</p>
      <div style="background-color:#F8FAFB; border-left:3px solid #2DD4A8; padding:14px 18px; border-radius:0 4px 4px 0; margin:8px 0 24px 0;">
        <p style="margin:0; font-size:13px; color:#1E293B; line-height:1.7; white-space:pre-line;">${message}</p>
      </div>
    ` : ''}

    ${divider()}

    <p style="margin:0 0 16px 0; font-size:12px; color:${BRAND.muted}; text-align:center;">Reply directly to this email to respond to the enquirer, or click below to compose a reply.</p>

    ${ctaButton('Reply to Enquirer', `mailto:${email}?subject=Re: Your Othalo Quote Request`)}
  `;

  return {
    subject: `New Quote Request — ${productLabel} — ${country}`,
    html: emailWrapper(content),
  };
}
