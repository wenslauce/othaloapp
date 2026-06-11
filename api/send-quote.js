// Vercel Serverless Function — POST /api/send-quote
// Handles quote form submissions: sends internal notification + customer confirmation via Resend

import { Resend } from 'resend';
import { quoteInternalEmail } from './templates/quote-internal.js';
import { quoteConfirmationEmail } from './templates/quote-confirmation.js';

const resend = new Resend(process.env.RESEND_API_KEY);

const SALES_EMAIL = process.env.SALES_EMAIL || 'contact@othalo.com'; // Temporarily routed to contact@othalo.com
const FROM_EMAIL = process.env.FROM_EMAIL || 'quotes@othalo.com';
const FROM_NAME = 'Othalo Quote System';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name,
    email,
    phone,
    dialCode,
    org,
    country,
    profileType,
    product,
    units,
    message,
    context,
    token,
  } = req.body || {};

  // Verify Turnstile Token
  if (!token) {
    return res.status(403).json({ error: 'Security token is missing. Please refresh and try again.' });
  }

  try {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(403).json({ error: 'Security verification failed. Please try again.' });
    }
  } catch (err) {
    console.error('[send-quote] Turnstile error:', err);
    return res.status(500).json({ error: 'Security service unavailable. Please try again later.' });
  }

  // Server-side validation
  if (!name?.trim()) return res.status(400).json({ error: 'Name is required' });
  if (!email || !validateEmail(email)) return res.status(400).json({ error: 'Valid email is required' });
  if (!country?.trim()) return res.status(400).json({ error: 'Country is required' });
  if (!product?.trim()) return res.status(400).json({ error: 'Product selection is required' });

  const submittedAt = new Date().toISOString();
  const payload = { name, email, phone, dialCode, org, country, profileType, product, units, message, context, submittedAt };

  try {
    // 1. Internal notification email to Othalo sales team
    const internal = quoteInternalEmail(payload);
    await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [SALES_EMAIL],
      replyTo: email,
      subject: internal.subject,
      html: internal.html,
    });

    // 2. Confirmation email to customer
    const confirmation = quoteConfirmationEmail(payload);
    await resend.emails.send({
      from: `Othalo <${FROM_EMAIL}>`,
      to: [email],
      subject: confirmation.subject,
      html: confirmation.html,
    });

    return res.status(200).json({ success: true, message: 'Quote request submitted successfully' });
  } catch (err) {
    console.error('[send-quote] Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again or contact us directly at contact@othalo.com' });
  }
}
