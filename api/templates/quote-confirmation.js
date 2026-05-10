// Email: Confirmation sent to the customer after submitting a quote request
import { emailWrapper, fieldRow, dataTable, ctaButton, sectionHeading, subHeading, badge, divider, formatProduct, formatUnits, BRAND } from './email-base.js';

export function quoteConfirmationEmail({ name, email, product, units, country }) {
  const productLabel = formatProduct(product);
  const unitsLabel = formatUnits(units);
  const firstName = name.split(' ')[0];

  const content = `
    ${badge('Quote Request Received')}
    ${sectionHeading(`Thank you, ${firstName}.`)}
    ${subHeading('We have received your quote request and our team is reviewing your requirements. You can expect a response within <strong>2 business days</strong>.')}

    <p style="margin:0 0 24px 0; font-size:13px; color:${BRAND.text}; line-height:1.7;">
      Here is a summary of what you submitted:
    </p>

    ${dataTable(`
      ${fieldRow('Name', name)}
      ${fieldRow('Country', country)}
      ${fieldRow('Product / Configuration', productLabel, true)}
      ${fieldRow('Units Required', unitsLabel)}
    `)}

    ${divider()}

    <div style="background-color:${BRAND.navy}; border-radius:6px; padding:28px 32px; margin:24px 0;">
      <p style="margin:0 0 8px 0; font-size:11px; font-weight:700; color:${BRAND.teal}; text-transform:uppercase; letter-spacing:1px;">What Happens Next</p>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div style="margin-bottom:10px;">
          <p style="margin:0; font-size:13px; color:rgba(255,255,255,0.9); line-height:1.6;">
            <span style="color:${BRAND.teal}; font-weight:700;">01</span>&nbsp; A regional Othalo specialist will review your project requirements.
          </p>
        </div>
        <div style="margin-bottom:10px;">
          <p style="margin:0; font-size:13px; color:rgba(255,255,255,0.9); line-height:1.6;">
            <span style="color:${BRAND.teal}; font-weight:700;">02</span>&nbsp; We will prepare a detailed technical and financial proposal tailored to your context.
          </p>
        </div>
        <div>
          <p style="margin:0; font-size:13px; color:rgba(255,255,255,0.9); line-height:1.6;">
            <span style="color:${BRAND.teal}; font-weight:700;">03</span>&nbsp; You will receive a response within 2 business days.
          </p>
        </div>
      </div>
    </div>

    ${divider()}

    <p style="margin:0 0 8px 0; font-size:13px; color:${BRAND.muted}; text-align:center; line-height:1.6;">
      While you wait, explore our full product range and solution pages:
    </p>

    ${ctaButton('Explore Othalo Solutions', 'https://othalo.com/solutions')}

    <p style="margin:24px 0 0 0; font-size:12px; color:${BRAND.muted}; text-align:center;">
      Have a question in the meantime? Contact us at 
      <a href="mailto:contact@othalo.com" style="color:${BRAND.teal}; text-decoration:none;">contact@othalo.com</a>
    </p>
  `;

  return {
    subject: 'Your Othalo Quote Request Has Been Received',
    html: emailWrapper(content),
  };
}
