// Corporations solutions page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';
import { COUNTRIES, validatePhone, validateEmail } from '@/lib/countries';
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
  name: '', email: '', countryCode: '', dialCode: '', phone: '', org: '', title: '', reason: '', message: '',
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
    if (form.phone && !validatePhone(form.phone, form.countryCode)) errs.phone = t('contact.err_phone');
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
      const apiBase = (import.meta.env && import.meta.env.VITE_API_BASE_URL) || '';
      const res = await fetch(`${apiBase}/api/send-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, enquiryType: form.reason, profileType: 'corporation', token }),
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
        title="Corporations — Othalo ESG Housing Solutions"
        description={t('seo.solutions.description')}
        canonical="https://othalo.com/solutions/corporations"
        keywords={t('seo.solutions.keywords').split(', ')}
      />

      {/* ── HERO: image right / content left ── */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row lg:min-h-[520px]">
          {/* Left: content */}
          <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-14 py-14 lg:py-20 flex flex-col justify-center">
            <SlotIn>
              <p className="text-teal text-xs font-heading font-semibold uppercase tracking-widest mb-3">Solutions — Corporations</p>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-8 leading-tight">
                You are a Corporation
              </h1>

              <div className="mb-6">
                <h2 className="font-heading font-bold text-navy text-lg mb-3">Challenge</h2>
                <ul className="space-y-2">
                  {Array.isArray(challengeBullets) && challengeBullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-navy/70 text-sm">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="font-heading font-bold text-navy text-lg mb-3">Othalo Solution</h2>
                <ul className="space-y-2">
                  {Array.isArray(solutionBullets) && solutionBullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-navy/70 text-sm">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-heading font-bold text-navy text-lg mb-3">Key Benefits</h2>
                <ul className="space-y-2">
                  {Array.isArray(benefits) && benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-navy/70 text-sm">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0 mt-1.5" />
                      {b.title}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild className="bg-navy hover:bg-navy/90 text-white font-semibold px-6 h-10 rounded-[6px] text-sm tracking-wide uppercase">
                    <Link to="/products">Products</Link>
                  </Button>
                </div>
              </div>

              <p className="font-heading font-semibold text-navy text-sm">
                Partner with Othalo to turn plastic waste into measurable impact and strategic value.
              </p>
            </SlotIn>
          </div>
          {/* Right: image */}
          <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-0">
            <img
              src="/images/The House Kenya crop.png"
              alt="Corporate ESG housing solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="bg-surface py-14 lg:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <SlotIn>
            <h2 className="font-heading font-bold text-navy text-2xl lg:text-3xl mb-8 text-center">Contact our team</h2>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="bg-white border border-tech-slate rounded-sm shadow-sm p-6 sm:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">Full Name *</Label>
                      <Input value={form.name} onChange={e => set('name', e.target.value)} placeholder="John Smith" className={`h-10 rounded-sm ${errors.name ? 'border-destructive' : ''}`} />
                      <FieldError msg={errors.name} />
                    </div>
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">Email Address *</Label>
                      <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="john@company.com" className={`h-10 rounded-sm ${errors.email ? 'border-destructive' : ''}`} />
                      <FieldError msg={errors.email} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">Phone</Label>
                      <div className="flex gap-2">
                        <Select 
                          onValueChange={v => {
                            const country = COUNTRIES.find(c => c.code === v);
                            setForm(f => ({ ...f, countryCode: v, dialCode: country ? country.dial : '' }));
                          }} 
                          value={form.countryCode}
                        >
                          <SelectTrigger className="w-[100px] h-10 rounded-sm text-xs flex-shrink-0">
                            <SelectValue placeholder="+00" />
                          </SelectTrigger>
                          <SelectContent className="max-h-52">
                            {COUNTRIES.map(c => (
                              <SelectItem key={c.code} value={c.code} className="text-xs">{c.dial} {c.code}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input value={form.phone} onChange={e => set('phone', e.target.value.replace(/[^0-9\s\-().]/g, ''))} placeholder="Phone number" className={`h-10 rounded-sm flex-1 ${errors.phone ? 'border-destructive' : ''}`} />
                      </div>
                      <FieldError msg={errors.phone} />
                    </div>
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">Company *</Label>
                      <Input value={form.org} onChange={e => set('org', e.target.value)} placeholder="Company Name" className={`h-10 rounded-sm ${errors.org ? 'border-destructive' : ''}`} />
                      <FieldError msg={errors.org} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">Title</Label>
                    <Input value={form.title} onChange={e => set('title', e.target.value)} placeholder="Job Title" className="h-10 rounded-sm" />
                  </div>
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">Reason for contacting us</Label>
                    <Select onValueChange={v => set('reason', v)} value={form.reason}>
                      <SelectTrigger className={`h-10 rounded-sm ${errors.reason ? 'border-destructive' : ''}`}>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {REASONS.map(r => <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FieldError msg={errors.reason} />
                  </div>
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">Message *</Label>
                    <Textarea rows={5} value={form.message} onChange={e => set('message', e.target.value)} placeholder="Tell us about your ESG goals or partnership interest..." className={`rounded-sm resize-none ${errors.message ? 'border-destructive' : ''}`} />
                    <FieldError msg={errors.message} />
                  </div>
                  <div className="py-1">
                    <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} onSuccess={t => setToken(t)} onExpire={() => setToken(null)} />
                  </div>
                  {apiError && (
                    <div className="flex items-start gap-2 bg-destructive/5 border border-destructive/20 rounded-sm p-3">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-destructive text-xs leading-relaxed">{apiError}</p>
                    </div>
                  )}
                  <div className="flex justify-center pt-1">
                    <Button type="submit" disabled={loading} className="bg-navy hover:bg-navy/90 text-white font-semibold px-10 h-10 rounded-[6px] text-sm tracking-wide uppercase">
                      {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Send Message'}
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
                  <Button onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }} className="mt-8 bg-navy hover:bg-navy/90 text-white font-semibold px-8 rounded-[6px]">
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
