// Corporations solutions page
import { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';
import { validatePhone, validateEmail } from '@/lib/countries';
import { Turnstile } from '@marsidev/react-turnstile';

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <div className="flex items-center gap-1.5 mt-1">
      <AlertCircle className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
      <span className="text-destructive text-xs">{msg}</span>
    </div>
  );
}

const REASONS = [
  { value: 'general',     label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnerships & Projects' },
  { value: 'pricing',     label: 'Request Pricing / Proposal' },
  { value: 'technical',   label: 'Technical & Product Information' },
  { value: 'investor',    label: 'Investor Inquiry' },
  { value: 'media',       label: 'Media / Press' },
  { value: 'careers',     label: 'Careers' },
];

const INITIAL_FORM = {
  name: '', email: '', phone: '', org: '', title: '', reason: '', message: '',
};

export default function Corporations() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }));
    if (apiError) setApiError('');
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t('contact.err_name');
    if (!form.email || !validateEmail(form.email)) errs.email = t('contact.err_email');
    if (form.phone && !validatePhone(form.phone)) errs.phone = t('contact.err_phone');
    if (!form.org.trim()) errs.org = 'Organisation is required';
    if (!form.reason) errs.reason = 'Please select a reason';
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = t('contact.err_message');
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    if (!token) { setApiError(t('contact.security_check')); return; }

    setLoading(true);
    try {
      // @ts-ignore
      const apiBase = (import.meta.env && import.meta.env.VITE_API_BASE_URL) || '';
      const res = await fetch(`${apiBase}/api/send-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          org: form.org,
          enquiryType: form.reason,
          profileType: 'corporation',
          message: form.message,
          token,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
    } catch (err) {
      setApiError(err.message || 'Something went wrong. Please email contact@othalo.com');
    } finally {
      setLoading(false);
    }
  };

  const challengeBullets = t('corporations.challenge_bullets', { returnObjects: true });
  const solutionBullets  = t('corporations.solution_bullets',  { returnObjects: true });
  const benefits         = t('corporations.benefits',          { returnObjects: true });

  return (
    <div className="overflow-hidden bg-white">
      <SEOHead
        title={t('seo.solutions.title')}
        description={t('seo.solutions.description')}
        canonical="https://othalo.com/solutions/corporations"
        keywords={t('seo.solutions.keywords').split(', ')}
      />

      {/* ── MAIN CONTENT: centered narrow column ── */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Page heading */}
          <SlotIn>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-navy text-center mb-12">
              You are a Corporation
            </h1>
          </SlotIn>

          {/* Challenge */}
          <SlotIn delay={0.05}>
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-teal text-xl mb-4">Challenge</h2>
              <ul className="space-y-1.5">
                {Array.isArray(challengeBullets) && challengeBullets.map((item, i) => (
                  <li key={i} className="text-navy/80 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          </SlotIn>

          {/* Othalo solution */}
          <SlotIn delay={0.1}>
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-teal text-xl mb-4">Othalo solution</h2>
              <ul className="space-y-1.5">
                {Array.isArray(solutionBullets) && solutionBullets.map((item, i) => (
                  <li key={i} className="text-navy/80 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          </SlotIn>

          {/* Key benefits */}
          <SlotIn delay={0.15}>
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-teal text-xl mb-4">Key benefits</h2>
              <ul className="space-y-1.5">
                {Array.isArray(benefits) && benefits.map((b, i) => (
                  <li key={i} className="text-navy/80 text-sm">{b.title}</li>
                ))}
              </ul>
            </div>
          </SlotIn>

          {/* Partner tagline */}
          <SlotIn delay={0.18}>
            <p className="text-center font-heading font-semibold text-navy text-sm mb-12">
              Partner with Othalo to deliver affordable, sustainable, safe housing at scale.
            </p>
          </SlotIn>

          {/* ── CONTACT FORM ── */}
          <SlotIn delay={0.2}>
            <div className="bg-white border border-tech-slate rounded-sm shadow-sm p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Full Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                        Full Name *
                      </Label>
                      <Input
                        value={form.name}
                        onChange={e => set('name', e.target.value)}
                        placeholder="John Smith"
                        className={`h-10 rounded-sm ${errors.name ? 'border-destructive' : ''}`}
                      />
                      <FieldError msg={errors.name} />
                    </div>
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={e => set('email', e.target.value)}
                        placeholder="john@company.com"
                        className={`h-10 rounded-sm ${errors.email ? 'border-destructive' : ''}`}
                      />
                      <FieldError msg={errors.email} />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                        Phone *
                      </Label>
                      <Input
                        value={form.phone}
                        onChange={e => set('phone', e.target.value.replace(/[^0-9\s\-().+]/g, ''))}
                        placeholder="+1 234 567 8900"
                        className={`h-10 rounded-sm ${errors.phone ? 'border-destructive' : ''}`}
                      />
                      <FieldError msg={errors.phone} />
                    </div>
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                        Company/Organisation *
                      </Label>
                      <Input
                        value={form.org}
                        onChange={e => set('org', e.target.value)}
                        placeholder="Company Name"
                        className={`h-10 rounded-sm ${errors.org ? 'border-destructive' : ''}`}
                      />
                      <FieldError msg={errors.org} />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                      Title *
                    </Label>
                    <Input
                      value={form.title}
                      onChange={e => set('title', e.target.value)}
                      placeholder="Job Title"
                      className="h-10 rounded-sm"
                    />
                  </div>

                  {/* Reason for contacting us */}
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                      Reason for contacting us
                    </Label>
                    <Select onValueChange={v => set('reason', v)} value={form.reason}>
                      <SelectTrigger className={`h-10 rounded-sm ${errors.reason ? 'border-destructive' : ''}`}>
                        <SelectValue placeholder="Partnerships & Projects" />
                      </SelectTrigger>
                      <SelectContent>
                        {REASONS.map(r => (
                          <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError msg={errors.reason} />
                  </div>

                  {/* Message */}
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                      Message *
                    </Label>
                    <Textarea
                      rows={5}
                      value={form.message}
                      onChange={e => set('message', e.target.value)}
                      placeholder="Tell us about your interest..."
                      className={`rounded-sm resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    <FieldError msg={errors.message} />
                  </div>

                  {/* Turnstile */}
                  <div className="py-1">
                    <Turnstile
                      // @ts-ignore
                      siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                      onSuccess={(t) => setToken(t)}
                      onExpire={() => setToken(null)}
                    />
                  </div>

                  {/* API Error */}
                  {apiError && (
                    <div className="flex items-start gap-2 bg-destructive/5 border border-destructive/20 rounded-sm p-3">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-destructive text-xs leading-relaxed">{apiError}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex justify-center pt-1">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-navy hover:bg-navy/90 text-white font-semibold px-10 h-11 rounded-sm text-sm tracking-wide uppercase"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : 'Send Message'}
                    </Button>
                  </div>

                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-2xl mb-3">{t('contact.success_title')}</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">{t('contact.success_note')}</p>
                  <Button
                    onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
                    className="mt-8 bg-navy hover:bg-navy/90 text-white font-semibold px-8 rounded-sm"
                  >
                    Send another message
                  </Button>
                </div>
              )}
            </div>
          </SlotIn>

        </div>
      </section>
    </div>
  );
}
