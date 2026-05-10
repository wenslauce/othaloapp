import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, AlertCircle, ArrowRight, Building2, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { COUNTRIES, validateEmail, validatePhone } from '@/lib/countries';

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <div className="flex items-center gap-1.5 mt-1">
      <AlertCircle className="w-3 h-3 text-destructive flex-shrink-0" />
      <span className="text-destructive text-[10px]">{msg}</span>
    </div>
  );
}

export default function GetQuoteModal({ open, onClose, context = 'general' }) {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '', email: '', dialCode: '', phone: '', org: '',
    country: '', profileType: '', product: '', units: '', message: ''
  });

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t('contact.err_name') || 'Name is required';
    if (!form.email || !validateEmail(form.email)) errs.email = t('contact.err_email') || 'Valid email required';
    if (form.phone && !validatePhone(form.phone)) errs.phone = t('contact.err_phone') || 'Invalid phone format';
    if (!form.country) errs.country = t('contact.err_country') || 'Country is required';
    if (!form.product) errs.product = 'Please select a product configuration';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset form after a delay to avoid flicker during close animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '', email: '', dialCode: '', phone: '', org: '',
        country: '', profileType: '', product: '', units: '', message: ''
      });
      setErrors({});
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-none rounded-sm sm:max-w-xl md:max-w-2xl">
        {!submitted ? (
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Info */}
            <div className="hidden md:flex flex-col justify-between w-64 bg-navy p-8 text-white">
              <div>
                <div className="w-10 h-10 bg-teal/20 rounded-sm flex items-center justify-center mb-6">
                  <Package className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">Request a Project Quote</h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  Our specialists will prepare a detailed technical and financial proposal tailored to your regional requirements and scale.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Fast Deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Patented Tech</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Global Impact</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 bg-white p-6 md:p-8">
              <DialogHeader className="mb-6">
                <DialogTitle className="font-heading text-2xl font-semibold text-navy">Get a Quote</DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm">
                  Provide your details and we'll get back to you within 48 hours.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">Name *</Label>
                    <Input 
                      value={form.name} 
                      onChange={e => set('name', e.target.value)} 
                      placeholder="John Doe" 
                      className={`h-9 rounded-sm text-sm ${errors.name ? 'border-destructive' : ''}`}
                    />
                    <FieldError msg={errors.name} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">Email *</Label>
                    <Input 
                      type="email" 
                      value={form.email} 
                      onChange={e => set('email', e.target.value)} 
                      placeholder="john@organization.com" 
                      className={`h-9 rounded-sm text-sm ${errors.email ? 'border-destructive' : ''}`}
                    />
                    <FieldError msg={errors.email} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">Country *</Label>
                    <Select onValueChange={v => set('country', v)} value={form.country}>
                      <SelectTrigger className={`h-9 rounded-sm text-sm ${errors.country ? 'border-destructive' : ''}`}>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="max-h-48">
                        {COUNTRIES.map(c => (
                          <SelectItem key={c.code} value={c.name} className="text-sm">{c.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError msg={errors.country} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">Phone</Label>
                    <div className="flex gap-1.5">
                      <Select onValueChange={v => set('dialCode', v)} value={form.dialCode}>
                        <SelectTrigger className="w-20 h-9 rounded-sm text-[10px] flex-shrink-0">
                          <SelectValue placeholder="+Code" />
                        </SelectTrigger>
                        <SelectContent className="max-h-48">
                          {COUNTRIES.map(c => (
                            <SelectItem key={c.code} value={c.dial} className="text-[10px]">{c.dial}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input 
                        value={form.phone} 
                        onChange={e => set('phone', e.target.value.replace(/[^0-9]/g, ''))} 
                        placeholder="Phone number" 
                        className="h-9 rounded-sm text-sm flex-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">Product Configuration *</Label>
                  <Select onValueChange={v => set('product', v)} value={form.product}>
                    <SelectTrigger className={`h-9 rounded-sm text-sm ${errors.product ? 'border-destructive' : ''}`}>
                      <SelectValue placeholder="Select configuration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="community-1a">The Community 1a (Single 2BR Unit)</SelectItem>
                      <SelectItem value="community-2c">The Community 2c (6-Unit Block)</SelectItem>
                      <SelectItem value="district-2a">The District 2a (24-Unit Cluster)</SelectItem>
                      <SelectItem value="worker-6x">Worker Accommodation 6x</SelectItem>
                      <SelectItem value="panel-system">Othalo Panel System Only</SelectItem>
                      <SelectItem value="custom">Custom Development Solution</SelectItem>
                    </SelectContent>
                  </Select>
                  <FieldError msg={errors.product} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">Units Required</Label>
                    <Select onValueChange={v => set('units', v)} value={form.units}>
                      <SelectTrigger className="h-9 rounded-sm text-sm">
                        <SelectValue placeholder="Project scale" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1–10 units</SelectItem>
                        <SelectItem value="10-50">10–50 units</SelectItem>
                        <SelectItem value="50-200">50–200 units</SelectItem>
                        <SelectItem value="200-1000">200–1,000 units</SelectItem>
                        <SelectItem value="1000+">1,000+ units</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-navy opacity-70">Organization</Label>
                    <Input 
                      value={form.org} 
                      onChange={e => set('org', e.target.value)} 
                      placeholder="Company / Government" 
                      className="h-9 rounded-sm text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <Button 
                    type="submit" 
                    className="w-full bg-teal hover:bg-teal-light text-white font-semibold h-11 rounded-sm text-sm"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Request Quote Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center bg-white">
            <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-teal" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">Quote Request Received</h2>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              Thank you for your interest in Othalo. A regional manager will review your requirements and contact you within 2 business days.
            </p>
            <Button 
              onClick={handleClose}
              className="bg-navy hover:bg-navy/90 text-white font-semibold px-10 rounded-sm"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
