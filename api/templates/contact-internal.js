// Email: Internal notification to Othalo team when a contact form is submitted
import { emailWrapper, fieldRow, dataTable, ctaButton, sectionHeading, subHeading, badge, divider, formatProfile, formatEnquiry, formatProduct, formatUnits, BRAND } from './email-base.js';

export function contactInternalEmail({ name, email, phone, dialCode, org, country, profileType, enquiryType, solution, product, units, timeline, budget, message, submittedAt }) {
  const fullPhone = dialCode && phone ? `${dialCode} ${phone}` : phone || '—';
  const profileLabel = profileType ? formatProfile(profileType) : '—';
  const enquiryLabel = enquiryType ? formatEnquiry(enquiryType) : '—';
  const dateStr = submittedAt ? new Date(submittedAt).toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' }) : new Date().toLocaleString('en-GB');

  const timelineMap = {
    'asap': 'As soon as possible',
    '3months': 'Within 3 months',
    '6months': '3–6 months',
    '12months': '6–12 months',
    'planning': 'Planning phase only',
  };
  const budgetMap = {
    'under-500k': 'Under $500,000',
    '500k-2m': '$500K – $2M',
    '2m-10m': '$2M – $10M',
    '10m+': '$10M+',
    'unsure': 'To be determined',
  };
  const solutionMap = {
    'governments': 'Governments — National/Municipal Housing',
    'housing-developers': 'Housing Developers — Private Development',
    'corporations': 'Corporations — ESG / CSR Program',
    'worker-accommodation': 'Worker Accommodation',
    'multiple': 'Multiple / Unsure',
  };

  const content = `
    ${badge('New Contact Enquiry')}
    ${sectionHeading(`Enquiry from ${name}`)}
    ${subHeading(`Submitted via Contact Form on ${dateStr}`)}

    ${dataTable(`
      ${fieldRow('Full Name', name, true)}
      ${fieldRow('Email', email)}
      ${fieldRow('Phone', fullPhone)}
      ${org ? fieldRow('Organization', org) : ''}
      ${country ? fieldRow('Country', country) : ''}
      ${profileType ? fieldRow('Profile Type', profileLabel) : ''}
    `)}

    <p style="margin:0 0 8px 0; font-size:11px; font-weight:700; color:${BRAND.muted}; text-transform:uppercase; letter-spacing:0.8px;">Enquiry Details</p>
    ${dataTable(`
      ${enquiryType ? fieldRow('Reason / Enquiry Type', enquiryLabel, true) : ''}
      ${solution ? fieldRow('Solution Interest', solutionMap[solution] || solution) : ''}
      ${product ? fieldRow('Product Interest', formatProduct(product)) : ''}
      ${units ? fieldRow('Units Required', formatUnits(units)) : ''}
      ${timeline ? fieldRow('Timeline', timelineMap[timeline] || timeline) : ''}
      ${budget ? fieldRow('Budget Range', budgetMap[budget] || budget) : ''}
    `)}

    ${divider()}
    <p style="margin:0 0 8px 0; font-size:11px; font-weight:700; color:${BRAND.muted}; text-transform:uppercase; letter-spacing:0.8px;">Message</p>
    <div style="background-color:#F8FAFB; border-left:3px solid #2DD4A8; padding:14px 18px; border-radius:0 4px 4px 0; margin:8px 0 24px 0;">
      <p style="margin:0; font-size:13px; color:#1E293B; line-height:1.7; white-space:pre-line;">${message}</p>
    </div>

    ${ctaButton('Reply to Enquirer', `mailto:${email}?subject=Re: Your Othalo Enquiry`)}
  `;

  return {
    subject: `New Contact Enquiry — ${enquiryLabel}${country ? ' — ' + country : ''}`,
    html: emailWrapper(content),
  };
}
