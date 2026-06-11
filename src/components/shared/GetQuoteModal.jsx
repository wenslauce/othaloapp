import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, AlertCircle, ArrowRight, Package, XCircle } from 'lucide-react';
import { COUNTRIES, validateEmail, validatePhone } from '@/lib/countries';
import { Turnstile } from '@marsidev/react-turnstile';
import { useTranslation } from 'react-i18next';

// @ts-ignore
const API_BASE = (import.meta.env && import.meta.env.VITE_API_BASE_URL) || '';

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <div className="flex items-center gap-1.5 mt-1">
      <AlertCircle className="w-3 h-3 text-destructive flex-shrink-0" />
      <span className="text-destructive text-[10px]">{msg}</span>
    </div>
  );
}

const INITIAL_FORM = {
  name: '', email: '', countryCode: '', dialCode: '', phone: '', org: '',
  country: '', profileType: '', product: '', units: '', message: ''
};

export default function GetQuoteModal({ open, onClose, context = 'general' }) {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [errors, setErrors] = useState({
    name: '', email: '', phone: '', country: '', profileType: '', product: '', units: ''
  });
  const [token, setToken] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }));
    if (apiError) setApiError('');
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t('quote.err_name');
    if (!form.email || !validateEmail(form.email)) errs.email = t('quote.err_email');
    if (form.phone && !validatePhone(form.phone, form.countryCode)) errs.phone = t('quote.err_phone');
    if (!form.country) errs.country = t('quote.err_country');
    if (!form.profileType) errs.profileType = t('quote.err_profile');
    if (!form.product) errs.product = t('quote.err_product');
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    if (!token) {
      setApiError(t('quote.security_check'));
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/send-quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, context, token }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
    } catch (err) {
      setApiError(err.message || 'Something went wrong. Please try again or email contact@othalo.com');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm(INITIAL_FORM);
      setErrors({});
      setApiError('');
    }, 300);
  };

  const getHeaderInfo = () => {
    switch (context) {
      case 'governments': return { title: t('quote.gov_title'), sub: t('quote.gov_subtitle') };
      case 'housing-developers': return { title: t('quote.dev_title'), sub: t('quote.dev_subtitle') };
      case 'corporations': return { title: t('quote.corp_title'), sub: t('quote.corp_subtitle') };
      case 'products': return { title: t('quote.prod_title'), sub: t('quote.prod_subtitle') };
      default: return { title: t('quote.main_title'), sub: t('quote.main_subtitle') };
    }
  };

  const header = getHeaderInfo();

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-none rounded-sm sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto">
        {!submitted ? (
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col justify-between w-60 flex-shrink-0 bg-navy p-8 text-white">
              <div>
                <div className="w-10 h-10 bg-teal/20 rounded-sm flex items-center justify-center mb-6">
                  <Package className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">{t('quote.sidebar_title')}</h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {t('quote.sidebar_desc')}
                </p>
              </div>
              <div className="space-y-3 mt-8">
                {t('quote.sidebar_items', { returnObjects: true }).map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />
                    <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 bg-white p-6 md:p-8">
              <DialogHeader className="mb-5">
                <DialogTitle className="font-heading text-2xl font-semibold text-navy">{header.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm">
                  {header.sub}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{`${t('quote.name')} *`}</Label>
                    <Input
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      placeholder="Jane Smith"
                      className={`h-9 rounded-sm text-sm ${errors.name ? 'border-destructive' : ''}`}
                    />
                    <FieldError msg={errors.name} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{`${t('quote.email')} *`}</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      placeholder="jane@organization.com"
                      className={`h-9 rounded-sm text-sm ${errors.email ? 'border-destructive' : ''}`}
                    />
                    <FieldError msg={errors.email} />
                  </div>
                </div>

                {/* Country + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{`${t('quote.country')} *`}</Label>
                    <Select onValueChange={v => set('country', v)} value={form.country}>
                      <SelectTrigger className={`h-9 rounded-sm text-sm ${errors.country ? 'border-destructive' : ''}`}>
                        <SelectValue placeholder={t('quote.select_country')} />
                      </SelectTrigger>
                      <SelectContent className="max-h-52">
                        {COUNTRIES.map(c => (
                          <SelectItem key={c.code} value={c.name} className="text-sm">{c.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError msg={errors.country} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{t('quote.phone')}</Label>
                    <div className="flex gap-1.5">
                      <Select 
                        onValueChange={v => {
                          const country = COUNTRIES.find(c => c.code === v);
                          setForm(f => ({ ...f, countryCode: v, dialCode: country ? country.dial : '' }));
                        }} 
                        value={form.countryCode}
                      >
                        <SelectTrigger className="w-20 h-9 rounded-sm text-[10px] flex-shrink-0">
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
                        placeholder="Phone number"
                        className={`h-9 rounded-sm text-sm flex-1 ${errors.phone ? 'border-destructive' : ''}`}
                      />
                    </div>
                    <FieldError msg={errors.phone} />
                  </div>
                </div>

                {/* Org + Profile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{t('quote.org')}</Label>
                    <Input
                      value={form.org}
                      onChange={e => set('org', e.target.value)}
                      placeholder={t('quote.org_placeholder')}
                      className="h-9 rounded-sm text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{`${t('quote.profile')} *`}</Label>
                    <Select onValueChange={v => set('profileType', v)} value={form.profileType}>
                      <SelectTrigger className={`h-9 rounded-sm text-sm ${errors.profileType ? 'border-destructive' : ''}`}>
                        <SelectValue placeholder={t('quote.select_profile')} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(t('contact.profiles', { returnObjects: true })).map(([key, val]) => (
                          <SelectItem key={key} value={key}>{val}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError msg={errors.profileType} />
                  </div>
                </div>

                {/* Product + Units */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{`${t('quote.product')} *`}</Label>
                    <Select onValueChange={v => set('product', v)} value={form.product}>
                      <SelectTrigger className={`h-9 rounded-sm text-sm ${errors.product ? 'border-destructive' : ''}`}>
                        <SelectValue placeholder={t('quote.select_product')} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(t('contact.products_list', { returnObjects: true })).map(([key, val]) => (
                          <SelectItem key={key} value={key}>{val}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError msg={errors.product} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{t('quote.units')}</Label>
                    <Select onValueChange={v => set('units', v)} value={form.units}>
                      <SelectTrigger className="h-9 rounded-sm text-sm">
                        <SelectValue placeholder={t('quote.select_units')} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(t('contact.units_list', { returnObjects: true })).map(([key, val]) => (
                          <SelectItem key={key} value={key}>{val}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">{t('quote.message')}</Label>
                  <Textarea
                    rows={3}
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    placeholder={t('quote.message_placeholder')}
                    className="rounded-sm resize-none text-sm"
                  />
                </div>

                <div className="py-2 scale-90 origin-left">
                  <Turnstile 
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

                <Button
                  type="submit"
                  className="w-full bg-teal hover:bg-teal-light text-white font-semibold h-11 rounded-sm text-sm"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t('quote.submit')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center bg-white">
            <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-teal" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-3">{t('quote.success_title')}</h2>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-2 leading-relaxed">
              {t('quote.success_note', { email: form.email })}
            </p>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              {t('quote.success_review')}
            </p>
            <Button
              onClick={handleClose}
              className="bg-navy hover:bg-navy/90 text-white font-semibold px-10 rounded-sm"
            >
              {t('quote.done')}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
