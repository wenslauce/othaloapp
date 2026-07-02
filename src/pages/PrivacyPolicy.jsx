// Privacy Policy page
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  
  // Safely load localizable sections from the translation resource file
  const sections = t('privacy.sections', { returnObjects: true }) || [];

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('privacy.title')}
        description={t('seo.privacy.description')}
        pagePath="/privacy"
      />

      {/* Hero */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
              <span className="w-8 h-px bg-teal" />
              {t('privacy.label')}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-3">
              {t('privacy.title')}
            </h1>
            <p className="text-white/50 text-sm">
              {t('privacy.effective')}
            </p>
          </SlotIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-10">
            {Array.isArray(sections) && sections.map((sec, i) => (
              <SlotIn key={sec.title || i} delay={i * 0.04}>
                <div className="border-b border-tech-slate pb-10">
                  <h2 className="font-heading font-semibold text-navy text-xl mb-4">{sec.title}</h2>
                  <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{sec.content}</div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}