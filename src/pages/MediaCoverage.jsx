import { useState, useMemo } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import Link from '@/components/shared/LocalizedLink';
import { useTranslation } from 'react-i18next';

export default function MediaCoverage() {
  const { t } = useTranslation();

  const articles = t('media.articles', { returnObjects: true });
  const supplementary = t('media.supplementary', { returnObjects: true });

  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Derive unique years and regions from articles
  const years = useMemo(() => {
    if (!Array.isArray(articles)) return [];
    const yearSet = new Set();
    articles.forEach(a => {
      // Extract year from date string (e.g. "9 October 2025" -> "2025")
      const match = a.date.match(/\b(20\d{2})\b/);
      if (match) yearSet.add(match[1]);
    });
    return Array.from(yearSet).sort((a, b) => b - a); // newest first
  }, [articles]);

  const regions = useMemo(() => {
    if (!Array.isArray(articles)) return [];
    return Array.from(new Set(articles.map(a => a.region))).sort();
  }, [articles]);

  // Filter articles
  const filteredArticles = useMemo(() => {
    if (!Array.isArray(articles)) return [];
    return articles.filter(a => {
      const matchYear = selectedYear === 'all' || a.date.includes(selectedYear);
      const matchRegion = selectedRegion === 'all' || a.region === selectedRegion;
      return matchYear && matchRegion;
    });
  }, [articles, selectedYear, selectedRegion]);

  const hasActiveFilters = selectedYear !== 'all' || selectedRegion !== 'all';

  const clearFilters = () => {
    setSelectedYear('all');
    setSelectedRegion('all');
  };

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.media.title')}
        description={t('seo.media.description')}
        pagePath="/press"
        keywords={t('seo.media.keywords').split(', ')}
      />

      {/* ── HERO ── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h1 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-4 leading-tight">
              {t('media.page_title')}
            </h1>
            <p className="text-white/70 text-base lg:text-lg max-w-3xl leading-relaxed">
              {t('media.page_subtitle')}
            </p>
          </SlotIn>
        </div>
      </section>

      {/* ── NEWS ARTICLES ── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h2 className="font-heading font-bold text-navy text-2xl lg:text-3xl mb-1.5 leading-tight">
              {t('media.articles_heading')}
            </h2>
            <p className="text-navy/70 text-sm lg:text-base mb-8 max-w-2xl">
              {t('media.articles_subtitle')}
            </p>
          </SlotIn>

          {/* ── FILTERS ── */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-6 border-b border-navy/10">
            {/* Year filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-navy/60 uppercase tracking-wider mr-1">
                {t('media.filter_year')}:
              </span>
              <button
                onClick={() => setSelectedYear('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  selectedYear === 'all'
                    ? 'bg-teal text-white'
                    : 'bg-navy/5 text-navy/70 hover:bg-navy/10'
                }`}
              >
                {t('media.filter_all_years')}
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    selectedYear === year
                      ? 'bg-teal text-white'
                      : 'bg-navy/5 text-navy/70 hover:bg-navy/10'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Region filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-navy/60 uppercase tracking-wider mr-1">
                {t('media.filter_region')}:
              </span>
              <button
                onClick={() => setSelectedRegion('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  selectedRegion === 'all'
                    ? 'bg-teal text-white'
                    : 'bg-navy/5 text-navy/70 hover:bg-navy/10'
                }`}
              >
                {t('media.filter_all_regions')}
              </button>
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    selectedRegion === region
                      ? 'bg-teal text-white'
                      : 'bg-navy/5 text-navy/70 hover:bg-navy/10'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-navy/50 hover:text-teal transition-colors whitespace-nowrap"
              >
                <X className="w-3 h-3" />
                {t('media.filter_clear')}
              </button>
            )}
          </div>

          {/* ── ARTICLES LIST ── */}
          <div className="space-y-6">
            {filteredArticles.length === 0 ? (
              <p className="text-navy/50 text-sm text-center py-10">
                No articles match the selected filters.
              </p>
            ) : (
              filteredArticles.map((article, i) => (
                <SlotIn key={article.title + article.date} delay={i * 0.03}>
                  <div className="border border-navy/20 rounded-lg p-5 lg:p-6 hover:shadow-md transition-shadow bg-[#E7E9EC]">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-navy/50 mb-2 flex-wrap">
                          <span className="font-medium">{article.date}</span>
                          <span className="w-1 h-1 rounded-full bg-navy/30 flex-shrink-0" />
                          <span>{article.outlet}</span>
                          <span className="w-1 h-1 rounded-full bg-navy/30 flex-shrink-0" />
                          <span>{article.region}</span>
                        </div>
                        <h3 className="font-heading font-semibold text-navy text-base lg:text-lg leading-snug mb-2">
                          {article.title}
                        </h3>
                        <p className="text-navy/70 text-sm leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                      <div className="flex-shrink-0 lg:pt-6">
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-teal hover:text-teal-light text-sm font-semibold transition-colors whitespace-nowrap"
                        >
                          {t('media.read_article')}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SlotIn>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── SUPPLEMENTARY SOURCES ── */}
      <section className="bg-teal py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl mb-1.5 leading-tight">
              {t('media.supplementary_heading')}
            </h2>
            <p className="text-white/70 text-sm lg:text-base mb-10 max-w-3xl">
              {t('media.supplementary_subtitle')}
            </p>
          </SlotIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.isArray(supplementary) && supplementary.map((item, i) => (
              <SlotIn key={item.source} delay={i * 0.05}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 h-full flex flex-col">
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-white text-sm mb-1">
                      {item.source}
                    </p>
                    <p className="text-white/60 text-xs mb-3">
                      {item.platform}
                    </p>
                    {item.notes && (
                      <p className="text-white/70 text-xs leading-relaxed mb-3">
                        {item.notes}
                      </p>
                    )}
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold transition-colors mt-auto"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visit
                  </a>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SlotIn>
            <h2 className="font-heading font-bold text-navy text-2xl lg:text-3xl mb-3 leading-tight">
              {t('media.cta_title')}
            </h2>
            <p className="text-navy/70 text-sm lg:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('media.cta_subtitle')}
            </p>
            <Button
              asChild
              className="bg-teal hover:bg-teal-light text-white font-semibold px-6 h-10 rounded-[6px] text-sm"
            >
              <Link to="/contact">{t('media.cta_button')}</Link>
            </Button>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}