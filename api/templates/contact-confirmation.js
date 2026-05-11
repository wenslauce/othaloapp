// Email: Confirmation sent to the user after submitting a contact form
import { emailWrapper, ctaButton, sectionHeading, subHeading, badge, divider, formatEnquiry, BRAND } from './email-base.js';

export function contactConfirmationEmail({ name, email, enquiryType }) {
  const firstName = name.split(' ')[0];
  const enquiryLabel = enquiryType ? formatEnquiry(enquiryType) : 'General Enquiry';

  const content = `
    ${badge('Message Received')}
    ${sectionHeading(`Thank you, ${firstName}.`)}
    ${subHeading('We have received your enquiry and will respond within <strong>48 hours</strong> on business days.')}

    <div style="background-color:${BRAND.navy}; border-radius:6px; padding:24px 28px; margin:0 0 28px 0;">
      <p style="margin:0 0 6px 0; font-size:11px; font-weight:700; color:${BRAND.teal}; text-transform:uppercase; letter-spacing:1px;">Your Enquiry</p>
      <p style="margin:0; font-size:16px; font-weight:700; color:${BRAND.white};">${enquiryLabel}</p>
    </div>

    <p style="margin:0 0 20px 0; font-size:13px; color:${BRAND.text}; line-height:1.7;">
      A member of the Othalo team will review your message and get back to you at 
      <strong>${email}</strong>. Our team operates Monday–Friday, and we aim to respond to all enquiries promptly.
    </p>

    ${divider()}

    <div style="background-color:${BRAND.surface}; border-radius:6px; padding:20px 24px; margin:0 0 24px 0;">
      <p style="margin:0 0 12px 0; font-size:11px; font-weight:700; color:${BRAND.muted}; text-transform:uppercase; letter-spacing:1px;">While You Wait</p>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:6px 0; border-bottom:1px solid ${BRAND.border};">
            <a href="https://othalo.com/products" style="font-size:13px; color:${BRAND.navy}; text-decoration:none; font-weight:600;">
              → View the Othalo Panel System
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0; border-bottom:1px solid ${BRAND.border};">
            <a href="https://othalo.com/solutions" style="font-size:13px; color:${BRAND.navy}; text-decoration:none; font-weight:600;">
              → Explore Our Solutions
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0;">
            <a href="https://othalo.com/about" style="font-size:13px; color:${BRAND.navy}; text-decoration:none; font-weight:600;">
              → About Othalo
            </a>
          </td>
        </tr>
      </table>
    </div>

    ${ctaButton('Visit othalo.com', 'https://othalo.com')}

    <p style="margin:24px 0 0 0; font-size:12px; color:${BRAND.muted}; text-align:center;">
      Urgent? Reach us directly at 
      <a href="mailto:contact@othalo.com" style="color:${BRAND.teal}; text-decoration:none;">contact@othalo.com</a>
    </p>
  `;

  return {
    subject: 'Thank You for Contacting Othalo',
    html: emailWrapper(content),
  };
}
