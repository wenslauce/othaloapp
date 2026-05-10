import { useEffect } from 'react';

const SITE_NAME = 'Othalo';
const DEFAULT_IMAGE = 'https://othalo.com/images/Panels in the factory.png';
const DEFAULT_DESCRIPTION = 'Othalo transforms recycled plastic into affordable, durable housing. Patented panel technology. 72-hour build time. UN-Habitat endorsed.';

/**
 * SEOHead — sets document title and all meta tags for a page.
 * Place at the top of each page component, outside any wrapper divs.
 *
 * @param {object} props
 * @param {string} props.title - Page title (will be appended with " | Othalo")
 * @param {string} [props.description] - Meta description
 * @param {string} [props.ogImage] - Open Graph image URL (absolute)
 * @param {string} [props.canonical] - Canonical URL
 * @param {'website'|'article'} [props.type] - OG type
 * @param {string[]} [props.keywords] - Meta keywords
 */
export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_IMAGE,
  canonical,
  type = 'website',
  keywords = [],
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Affordable, Sustainable Homes from Recycled Plastic`;

  useEffect(() => {
    // Title
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

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Standard meta
    setMeta('meta[name="description"]', 'content', description);
    if (keywords.length > 0) setMeta('meta[name="keywords"]', 'content', keywords.join(', '));

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:site_name"]', 'content', SITE_NAME);
    if (canonical) setMeta('meta[property="og:url"]', 'content', canonical);

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);

    // Canonical
    if (canonical) setLink('canonical', canonical);
  }, [fullTitle, description, ogImage, canonical, type, keywords]);

  return null;
}
