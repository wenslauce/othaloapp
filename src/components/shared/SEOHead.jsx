import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SITE_URL = 'https://othalo.com';
const SITE_NAME = 'Othalo';
const DEFAULT_IMAGE = `${SITE_URL}/images/panels-factory.png`;
const DEFAULT_DESCRIPTION = 'Othalo transforms recycled plastic into affordable, durable housing. Patented panel technology. 72-hour build time. UN-Habitat endorsed.';

const SUPPORTED_LOCALES = ['en', 'de', 'pl', 'no', 'fr', 'es', 'pt', 'ru', 'ar', 'hi', 'id', 'fil', 'th', 'vi'];

// Map locale code → og:locale BCP47 / locale string
const OG_LOCALE_MAP = {
  en: 'en_US', de: 'de_DE', pl: 'pl_PL', no: 'nb_NO',
  fr: 'fr_FR', es: 'es_ES', pt: 'pt_PT', ru: 'ru_RU',
  ar: 'ar_AE', hi: 'hi_IN', id: 'id_ID', fil: 'fil_PH',
  th: 'th_TH', vi: 'vi_VN',
};

/**
 * SEOHead — sets document title and all meta/link tags for a page.
 * Place at the top of each page component.
 *
 * @param {string}   props.title       - Page title (appended with " | Othalo")
 * @param {string}   [props.description]
 * @param {string}   [props.ogImage]   - Absolute OG image URL
 * @param {string}   [props.pagePath]  - e.g. "/about", "/products". Used to build locale-aware canonical & hreflangs.
 * @param {string}   [props.canonical] - Override full canonical URL (use pagePath instead when possible)
 * @param {'website'|'article'} [props.type]
 * @param {string[]} [props.keywords]
 */
export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_IMAGE,
  pagePath,
  canonical: canonicalOverride,
  type = 'website',
  keywords = [],
}) {
  const { lang = 'en' } = useParams();
  const locale = SUPPORTED_LOCALES.includes(lang) ? lang : 'en';

  // Build canonical: locale-prefixed URL for this page
  const resolvedCanonical = canonicalOverride
    || (pagePath ? `${SITE_URL}/${locale}${pagePath}` : `${SITE_URL}/${locale}`);

  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Affordable, Sustainable Homes from Recycled Plastic`;

  const ogLocale = OG_LOCALE_MAP[locale] || 'en_US';

  useEffect(() => {
    // ── Title ────────────────────────────────────────────
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const parts = selector.match(/\[([^=]+)="([^"]+)"\]/);
        if (parts) el.setAttribute(parts[1], parts[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (attrs, href) => {
      // Build a unique selector from attrs
      const selector = Object.entries(attrs)
        .map(([k, v]) => `[${k}="${v}"]`)
        .join('');
      let el = document.querySelector(`link${selector}`);
      if (!el) {
        el = document.createElement('link');
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard meta ─────────────────────────────────────
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', 'index, follow');
    if (keywords.length > 0) {
      setMeta('meta[name="keywords"]', 'content', keywords.join(', '));
    }

    // ── Open Graph ────────────────────────────────────────
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:site_name"]', 'content', SITE_NAME);
    setMeta('meta[property="og:url"]', 'content', resolvedCanonical);
    setMeta('meta[property="og:locale"]', 'content', ogLocale);

    // ── Twitter Card ──────────────────────────────────────
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);

    // ── Canonical ─────────────────────────────────────────
    setLink({ rel: 'canonical' }, resolvedCanonical);

    // ── hreflang alternate links ──────────────────────────
    // Remove stale hreflang links first
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    if (pagePath !== undefined) {
      SUPPORTED_LOCALES.forEach(loc => {
        const href = `${SITE_URL}/${loc}${pagePath}`;
        const el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', loc === 'no' ? 'nb' : loc);
        el.setAttribute('href', href);
        document.head.appendChild(el);
      });

      // x-default → English
      const xDefault = document.createElement('link');
      xDefault.setAttribute('rel', 'alternate');
      xDefault.setAttribute('hreflang', 'x-default');
      xDefault.setAttribute('href', `${SITE_URL}/en${pagePath}`);
      document.head.appendChild(xDefault);
    }
  }, [fullTitle, description, ogImage, resolvedCanonical, type, keywords, pagePath, locale, ogLocale]);

  return null;
}
