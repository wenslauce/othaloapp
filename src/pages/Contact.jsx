// Contact page
import { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SlotIn from '@/components/shared/SlotIn';
import { useTranslation } from 'react-i18next';
import { COUNTRIES, validatePhone, validateEmail } from '@/lib/countries';

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <div className="flex items-center gap-1.5 mt-1">
      <AlertCircle className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
      <span className="text-destructive text-xs">{msg}</span>
    </div>
  );
}

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '', email: '', dialCode: '', phone: '', org: '',
    country: '', profileType: '', enquiryType: '',
    solution: '', product: '', units: '', timeline: '', budget: '', message: '',
  });

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }));
  };

  const showSolutionField = form.enquiryType === 'solutions' || form.enquiryType === 'partnership';
  const showProductField = form.enquiryType === 'products' || form.enquiryType === 'quote';
  const showBudget = form.profileType === 'developer';

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t('contact.err_name');
    if (!form.email || !validateEmail(form.email)) errs.email = t('contact.err_email');
    if (form.phone && !validatePhone(form.phone)) errs.phone = t('contact.err_phone');
    if (!form.country) errs.country = t('contact.err_country');
    if (!form.profileType) errs.profileType = t('contact.err_profile');
    if (!form.enquiryType) errs.enquiryType = t('contact.err_enquiry');
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = t('contact.err_message');
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Headquarters', val: 'Oslo, Norway' },
    { icon: Mail, label: 'Email', val: 'contact@othalo.com' },
    { icon: Phone, label: 'Phone', val: '+47 00 00 00 00' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-navy py-24 lg:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
              <span className="w-8 h-px bg-teal" />
              {t('contact.label')}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white max-w-xl leading-tight mb-3">
              {t('contact.title')}
            </h1>
            <p className="text-white/60 max-w-lg">{t('contact.subtitle')}</p>
          </SlotIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <SlotIn>
                <h2 className="font-heading text-xl font-semibold text-navy mb-7">{t('contact.offices')}</h2>
                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex gap-4">
                        <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-teal" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-widest font-heading font-semibold mb-0.5">{item.label}</div>
                          <div className="text-navy font-medium text-sm">{item.val}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-surface border border-tech-slate rounded-sm p-5">
                  <div className="text-xs text-teal font-heading font-semibold uppercase tracking-widest mb-2">{t('contact.response_label')}</div>
                  <p className="text-navy text-sm font-semibold mb-1">{t('contact.response_time')}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{t('contact.response_note')}</p>
                </div>
              </SlotIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <SlotIn delay={0.1}>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.name')} *</Label>
                        <Input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" className={`h-11 rounded-sm ${errors.name ? 'border-destructive' : ''}`} />
                        <FieldError msg={errors.name} />
                      </div>
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.email')} *</Label>
                        <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@org.com" className={`h-11 rounded-sm ${errors.email ? 'border-destructive' : ''}`} />
                        <FieldError msg={errors.email} />
                      </div>
                    </div>

                    {/* Phone with dial code + Org */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.phone')}</Label>
                        <div className="flex gap-2">
                          <Select onValueChange={v => set('dialCode', v)}>
                            <SelectTrigger className="w-28 h-11 rounded-sm flex-shrink-0 text-xs">
                              <SelectValue placeholder="+code" />
                            </SelectTrigger>
                            <SelectContent className="max-h-52">
                              {COUNTRIES.map(c => (
                                <SelectItem key={c.code} value={c.dial} className="text-xs">
                                  {c.dial} {c.code}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input
                            value={form.phone}
                            onChange={e => set('phone', e.target.value.replace(/[^0-9\s\-().]/g, ''))}
                            placeholder="000 000 0000"
                            className={`h-11 rounded-sm flex-1 ${errors.phone ? 'border-destructive' : ''}`}
                          />
                        </div>
                        <FieldError msg={errors.phone} />
                      </div>
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.org')}</Label>
                        <Input value={form.org} onChange={e => set('org', e.target.value)} placeholder="Company / Ministry" className="h-11 rounded-sm" />
                      </div>
                    </div>

                    {/* Country + Profile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.country')} *</Label>
                        <Select onValueChange={v => set('country', v)}>
                          <SelectTrigger className={`h-11 rounded-sm ${errors.country ? 'border-destructive' : ''}`}>
                            <SelectValue placeholder={t('contact.select_country')} />
                          </SelectTrigger>
                          <SelectContent className="max-h-52">
                            {COUNTRIES.map(c => (
                              <SelectItem key={c.code} value={c.name}>{c.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FieldError msg={errors.country} />
                      </div>
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.profile')} *</Label>
                        <Select onValueChange={v => set('profileType', v)}>
                          <SelectTrigger className={`h-11 rounded-sm ${errors.profileType ? 'border-destructive' : ''}`}>
                            <SelectValue placeholder={t('contact.select_profile')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="government">Government / Public Agency</SelectItem>
                            <SelectItem value="developer">Housing Developer</SelectItem>
                            <SelectItem value="corporation">Corporation / Enterprise</SelectItem>
                            <SelectItem value="ngo">NGO / International Organization</SelectItem>
                            <SelectItem value="media">Media / Press</SelectItem>
                            <SelectItem value="investor">Investor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldError msg={errors.profileType} />
                      </div>
                    </div>

                    {/* Enquiry Type */}
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.enquiry')} *</Label>
                      <Select onValueChange={v => set('enquiryType', v)}>
                        <SelectTrigger className={`h-11 rounded-sm ${errors.enquiryType ? 'border-destructive' : ''}`}>
                          <SelectValue placeholder={t('contact.select_enquiry')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quote">Request a Quote / Pricing</SelectItem>
                          <SelectItem value="solutions">Solutions & Deployment Planning</SelectItem>
                          <SelectItem value="products">Product Information & Specifications</SelectItem>
                          <SelectItem value="partnership">Corporate Partnership / ESG Program</SelectItem>
                          <SelectItem value="investment">Investment Opportunity</SelectItem>
                          <SelectItem value="media">Media / Press Enquiry</SelectItem>
                          <SelectItem value="general">General Information</SelectItem>
                        </SelectContent>
                      </Select>
                      <FieldError msg={errors.enquiryType} />
                    </div>

                    {showSolutionField && (
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.solution')}</Label>
                        <Select onValueChange={v => set('solution', v)}>
                          <SelectTrigger className="h-11 rounded-sm"><SelectValue placeholder={t('contact.select_solution')} /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="governments">Governments — National/Municipal Housing</SelectItem>
                            <SelectItem value="housing-developers">Housing Developers — Private Development</SelectItem>
                            <SelectItem value="corporations">Corporations — ESG / CSR Program</SelectItem>
                            <SelectItem value="worker-accommodation">Worker Accommodation</SelectItem>
                            <SelectItem value="multiple">Multiple / Unsure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {showProductField && (
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.product')}</Label>
                        <Select onValueChange={v => set('product', v)}>
                          <SelectTrigger className="h-11 rounded-sm"><SelectValue placeholder={t('contact.select_product')} /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="community-1a">The Community 1a — 2BR Single Unit (42m²)</SelectItem>
                            <SelectItem value="community-2c">The Community 2c — 6-Unit Block (252m²)</SelectItem>
                            <SelectItem value="district-2a">The District 2a — 24-Unit Cluster (1,008m²)</SelectItem>
                            <SelectItem value="worker-6x">Worker Accommodation 6x (144m²)</SelectItem>
                            <SelectItem value="panel-system">Panel System Only</SelectItem>
                            <SelectItem value="custom">Custom Configuration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Units + Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.units')}</Label>
                        <Select onValueChange={v => set('units', v)}>
                          <SelectTrigger className="h-11 rounded-sm"><SelectValue placeholder={t('contact.select_units')} /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1–10 units</SelectItem>
                            <SelectItem value="10-50">10–50 units</SelectItem>
                            <SelectItem value="50-200">50–200 units</SelectItem>
                            <SelectItem value="200-1000">200–1,000 units</SelectItem>
                            <SelectItem value="1000+">1,000+ units</SelectItem>
                            <SelectItem value="unsure">Not yet determined</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.timeline')}</Label>
                        <Select onValueChange={v => set('timeline', v)}>
                          <SelectTrigger className="h-11 rounded-sm"><SelectValue placeholder={t('contact.select_timeline')} /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As soon as possible</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="6months">3–6 months</SelectItem>
                            <SelectItem value="12months">6–12 months</SelectItem>
                            <SelectItem value="planning">Planning phase only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {showBudget && (
                      <div>
                        <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.budget')}</Label>
                        <Select onValueChange={v => set('budget', v)}>
                          <SelectTrigger className="h-11 rounded-sm"><SelectValue placeholder={t('contact.select_budget')} /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500k">Under $500,000</SelectItem>
                            <SelectItem value="500k-2m">$500K – $2M</SelectItem>
                            <SelectItem value="2m-10m">$2M – $10M</SelectItem>
                            <SelectItem value="10m+">$10M+</SelectItem>
                            <SelectItem value="unsure">To be determined</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <Label className="text-navy text-xs font-semibold font-heading uppercase tracking-wider mb-1.5 block">{t('contact.message')} *</Label>
                      <Textarea
                        rows={5}
                        value={form.message}
                        onChange={e => set('message', e.target.value)}
                        placeholder={t('contact.message_placeholder')}
                        className={`rounded-sm resize-none ${errors.message ? 'border-destructive' : ''}`}
                      />
                      <FieldError msg={errors.message} />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <Button type="submit" size="lg" className="bg-teal hover:bg-teal-light text-white font-semibold px-10 h-12 rounded-sm text-base">
                        {t('contact.submit')}
                      </Button>
                      <p className="text-xs text-muted-foreground">{t('contact.respond_note')}</p>
                    </div>
                  </form>
                ) : (
                  <div className="bg-surface border border-tech-slate rounded-sm p-12 text-center">
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-teal" />
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-2xl mb-3">{t('contact.success_title')}</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">{t('contact.success_note')}</p>
                  </div>
                )}
              </SlotIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}