// Contact page
import { useState } from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from 'react-i18next';
import { COUNTRIES, validatePhone, validateEmail } from '@/lib/countries';
import SEOHead from '@/components/shared/SEOHead';
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

const INITIAL_FORM = {
  name: '', email: '', countryCode: '', dialCode: '', phone: '', org: '', title: '', reason: '', message: '',
};

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);

  const reasons = t('contact.reasons', { returnObjects: true });

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
    if (!form.reason) errs.reason = t('contact.reason_required');
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
          countryCode: form.countryCode,
          dialCode: form.dialCode,
          phone: form.phone,
          org: form.org,
          enquiryType: form.reason,
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

  return (
    <div className="min-h-screen bg-surface overflow-hidden">
      <SEOHead
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        pagePath="/contact"
        keywords={t('seo.contact.keywords').split(', ')}
      />

      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-2xl mx-auto">

          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-navy text-center mb-10">
            {t('contact.page_title')}
          </h1>

          <div className="bg-white border border-tech-slate rounded-sm shadow-sm p-8 md:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                      {t('contact.name_asterisk')}
                    </Label>
                    <Input
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      placeholder={t('contact.name_placeholder')}
                      className={`h-10 rounded-sm ${errors.name ? 'border-destructive' : ''}`}
                    />
                    <FieldError msg={errors.name} />
                  </div>
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                      {t('contact.email_asterisk')}
                    </Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      placeholder={t('contact.email_placeholder')}
                      className={`h-10 rounded-sm ${errors.email ? 'border-destructive' : ''}`}
                    />
                    <FieldError msg={errors.email} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                      {t('contact.phone')}
                    </Label>
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
                      <Input
                        value={form.phone}
                        onChange={e => set('phone', e.target.value.replace(/[^0-9\s\-().]/g, ''))}
                        placeholder={t('contact.phone_placeholder')}
                        className={`h-10 rounded-sm flex-1 ${errors.phone ? 'border-destructive' : ''}`}
                      />
                    </div>
                    <FieldError msg={errors.phone} />
                  </div>
                  <div>
                    <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                      {t('contact.org_label')}
                    </Label>
                    <Input
                      value={form.org}
                      onChange={e => set('org', e.target.value)}
                      placeholder={t('contact.org_placeholder')}
                      className="h-10 rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                    {t('contact.title_label')}
                  </Label>
                  <Input
                    value={form.title}
                    onChange={e => set('title', e.target.value)}
                    placeholder={t('contact.title_placeholder')}
                    className="h-10 rounded-sm"
                  />
                </div>

                <div>
                  <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                    {t('contact.reason_label')}
                  </Label>
                  <Select onValueChange={v => set('reason', v)} value={form.reason}>
                    <SelectTrigger className={`h-10 rounded-sm ${errors.reason ? 'border-destructive' : ''}`}>
                      <SelectValue placeholder={t('contact.reason_placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.isArray(reasons) && reasons.map(r => (
                        <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError msg={errors.reason} />
                </div>

                <div>
                  <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">
                    Message *
                  </Label>
                  <Textarea
                    rows={5}
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    placeholder={t('contact.message_placeholder_contact')}
                    className={`rounded-sm resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  <FieldError msg={errors.message} />
                </div>

                <div className="py-1">
                  <Turnstile
                    // @ts-ignore
                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                    onSuccess={(t) => setToken(t)}
                    onExpire={() => setToken(null)}
                  />
                </div>

                {apiError && (
                  <div className="flex items-start gap-2 bg-destructive/5 border border-destructive/20 rounded-sm p-3">
                    <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-destructive text-xs leading-relaxed">{apiError}</p>
                  </div>
                )}

                <div className="flex justify-center pt-1">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-navy hover:bg-navy/90 text-white font-semibold px-10 h-11 rounded-sm text-sm tracking-wide uppercase"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : t('contact.submit')}
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
                  {t('contact.success_send_another')}
                </Button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}