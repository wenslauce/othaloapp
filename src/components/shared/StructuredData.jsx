import { useEffect } from 'react';

const SITE_URL = 'https://othalo.com';

/**
 * Injects JSON-LD structured data into <head>.
 * Pass an array of schema objects — one <script> per schema.
 */
export default function StructuredData({ schemas = [] }) {
  useEffect(() => {
    // Remove any previously injected JSON-LD scripts by this component
    document.querySelectorAll('script[data-seo="structured"]').forEach(s => s.remove());

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'structured');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
      document.querySelectorAll('script[data-seo="structured"]').forEach(s => s.remove());
    };
  }, [schemas]);

  return null;
}

// ── Pre-built schema factories ──────────────────────────────────────────────

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Othalo',
  alternateName: 'Othalo Group Ltd',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/Othalo Logo full Green.png`,
    width: 400,
    height: 120,
  },
  description:
    'Othalo transforms recycled plastic waste into affordable, durable, and sustainable housing. Our patented panel technology is 7× stronger than concrete, fire-resistant, and hurricane-proof — endorsed by UN-Habitat.',
  foundingDate: '2018',
  foundingLocation: {
    '@type': 'Place',
    name: 'Norway',
    addressCountry: 'NO',
  },
  sameAs: [
    'https://www.linkedin.com/company/othalo',
    'https://www.youtube.com/@othalo',
    'https://twitter.com/othalo',
    'https://www.instagram.com/othalo',
    'https://www.facebook.com/othalo',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@othalo.com',
      url: `${SITE_URL}/contact`,
    },
  ],
  knowsAbout: [
    'Affordable Housing',
    'Recycled Plastic Construction',
    'Modular Housing',
    'Sustainable Building Materials',
    'UN-Habitat Endorsed Technology',
    'Plastic Waste Recycling',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Othalo',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: ['en', 'de', 'pl', 'no', 'fr', 'es', 'pt', 'ru', 'ar', 'hi', 'id', 'fil', 'th', 'vi'],
};

// Team member Person schemas
export const teamPersonSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/about#frank-cato-lahti`,
    name: 'Frank Cato Lahti',
    givenName: 'Frank Cato',
    familyName: 'Lahti',
    jobTitle: 'CEO & Founder',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/frank-cato.webp`,
    url: `${SITE_URL}/about#frank-cato-lahti`,
    sameAs: 'https://www.linkedin.com/in/frank-cato-lahti-01b4072/',
    description:
      'Frank Cato Lahti is the CEO and Founder of Othalo, leading the mission to solve the global housing crisis using recycled plastic technology.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/about#claus-skadkjaer`,
    name: 'Claus Skadkjaer',
    givenName: 'Claus',
    familyName: 'Skadkjaer',
    jobTitle: 'Board Member',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/claus.jpg`,
    url: `${SITE_URL}/about#claus-skadkjaer`,
    sameAs: 'https://www.linkedin.com/in/claus-skadkjaer-6457383/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/about#thomas-meidell-laan`,
    name: 'Thomas Meidell Løsnes',
    givenName: 'Thomas',
    familyName: 'Løsnes',
    jobTitle: 'Board Member',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/thomas.jpg`,
    url: `${SITE_URL}/about#thomas-meidell-laan`,
    sameAs: 'https://www.linkedin.com/in/thomas-meidell-l%C3%B8snes-8b051b22/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/about#kjell-steen`,
    name: 'Kjell Steen',
    givenName: 'Kjell',
    familyName: 'Steen',
    jobTitle: 'Advisor',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/Kjell-headshot.jpg`,
    url: `${SITE_URL}/about#kjell-steen`,
    sameAs: 'https://www.linkedin.com/in/kjell-steen-57438ab2/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/about#bengt-erling-berg`,
    name: 'Bengt Erling Berg',
    givenName: 'Bengt Erling',
    familyName: 'Berg',
    jobTitle: 'Advisor',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/bengt-erling.webp`,
    url: `${SITE_URL}/about#bengt-erling-berg`,
    sameAs: 'https://www.linkedin.com/in/bengt-erling-berg-a4831b3a/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/about#stephane-bernard`,
    name: 'Stephane Bernard',
    givenName: 'Stephane',
    familyName: 'Bernard',
    jobTitle: 'Business Development',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/Stephane-headshot.jpg`,
    url: `${SITE_URL}/about#stephane-bernard`,
    sameAs: 'https://www.linkedin.com/in/stephanebernard-iam/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/about#wenslauce-chengo`,
    name: 'Wenslauce Chengo',
    givenName: 'Wenslauce',
    familyName: 'Chengo',
    jobTitle: 'Technology & Development',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/wenslauce-chengo.webp`,
    url: `${SITE_URL}/about#wenslauce-chengo`,
    sameAs: 'https://www.linkedin.com/in/chengo-wenslauce/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/about#meranda-chan`,
    name: 'Meranda Chan',
    givenName: 'Meranda',
    familyName: 'Chan',
    jobTitle: 'Marketing & Communications',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/merenda-chan.jpg`,
    url: `${SITE_URL}/about#meranda-chan`,
    sameAs: 'https://www.linkedin.com/in/meranda-chan-b64ab520/',
  },
];
