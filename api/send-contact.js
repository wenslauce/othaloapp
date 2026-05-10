// Vercel Serverless Function — POST /api/send-contact
// Handles contact form submissions: sends internal notification + customer confirmation via Resend

import { Resend } from 'resend';
import { contactInternalEmail } from './templates/contact-internal.js';
import { contactConfirmationEmail } from './templates/contact-confirmation.js';

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@othalo.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@othalo.com';
const FROM_NAME = 'Othalo Contact';

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
    enquiryType,
    solution,
    product,
    units,
    timeline,
    budget,
    message,
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
    console.error('[send-contact] Turnstile error:', err);
    return res.status(500).json({ error: 'Security service unavailable. Please try again later.' });
  }

  // Server-side validation
  if (!name?.trim()) return res.status(400).json({ error: 'Name is required' });
  if (!email || !validateEmail(email)) return res.status(400).json({ error: 'Valid email is required' });
  if (!country?.trim()) return res.status(400).json({ error: 'Country is required' });
  if (!profileType?.trim()) return res.status(400).json({ error: 'Profile type is required' });
  if (!enquiryType?.trim()) return res.status(400).json({ error: 'Enquiry type is required' });
  if (!message?.trim() || message.trim().length < 10) return res.status(400).json({ error: 'Please include a message (at least 10 characters)' });

  const submittedAt = new Date().toISOString();
  const payload = { name, email, phone, dialCode, org, country, profileType, enquiryType, solution, product, units, timeline, budget, message, submittedAt };

  try {
    // 1. Internal notification email to Othalo team
    const internal = contactInternalEmail(payload);
    await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: internal.subject,
      html: internal.html,
    });

    // 2. Confirmation email to sender
    const confirmation = contactConfirmationEmail(payload);
    await resend.emails.send({
      from: `Othalo <${FROM_EMAIL}>`,
      to: [email],
      subject: confirmation.subject,
      html: confirmation.html,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('[send-contact] Resend error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again or email us directly at contact@othalo.com' });
  }
}
