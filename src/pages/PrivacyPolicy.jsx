// Privacy Policy page
import SlotIn from '@/components/shared/SlotIn';

const sections = [
  {
    title: '1. Introduction',
    content: `Othalo AS ("Othalo," "we," "us," or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website othalo.com (the "Site") or engage with our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect the following types of information:

Personal Identification Information: Name, email address, phone number, job title, and organization name when you submit a contact form, request a quote, or otherwise communicate with us.

Technical Information: IP address, browser type and version, operating system, referral source, length of visit, page views, and website navigation paths, collected through cookies and similar tracking technologies.

Communications: Records of correspondence if you contact us, including emails and messages submitted through our website.

We do not collect sensitive personal data (such as health data, financial account information, or government identification numbers) through this Site.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:

• Respond to enquiries and provide the services you request
• Send you information about our products and solutions you have requested
• Process transactions and send related information
• Improve and optimize our website and user experience
• Comply with legal obligations
• Send periodic emails regarding our services (you may opt out at any time)
• Monitor and analyze usage trends to improve functionality

We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this policy.`,
  },
  {
    title: '4. Legal Basis for Processing (GDPR)',
    content: `For users in the European Economic Area (EEA), we process your personal data under the following legal bases:

Consent: Where you have given explicit consent (e.g., subscribing to our newsletter).

Legitimate Interests: To respond to business enquiries, improve our services, and conduct marketing activities where these interests are not overridden by your data protection rights.

Contractual Necessity: Where processing is necessary to perform a contract or take steps at your request prior to entering a contract.

Legal Obligation: Where we are required to comply with applicable laws.`,
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: `Our Site uses cookies and similar tracking technologies to enhance your browsing experience. Types of cookies we use:

Essential Cookies: Necessary for the website to function and cannot be switched off.

Analytics Cookies: Help us understand how visitors interact with our Site (e.g., Google Analytics). Data collected is aggregated and anonymous.

Marketing Cookies: Used to deliver relevant advertisements and track campaign effectiveness.

You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain personal data only as long as necessary for the purposes for which it was collected, or as required by applicable law. Enquiry data is typically retained for up to 3 years. Marketing contact data is retained until you unsubscribe or request deletion. Analytics data may be retained in anonymized form indefinitely.`,
  },
  {
    title: '7. International Data Transfers',
    content: `Othalo AS is registered in Norway and operates under the jurisdiction of the European Economic Area. If we transfer your data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, to protect your information in accordance with this Privacy Policy.`,
  },
  {
    title: '8. Your Rights',
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• Right of Access: Request a copy of the personal data we hold about you
• Right to Rectification: Request correction of inaccurate or incomplete data
• Right to Erasure: Request deletion of your personal data ("right to be forgotten")
• Right to Restrict Processing: Request that we limit how we use your data
• Right to Data Portability: Receive your data in a structured, machine-readable format
• Right to Object: Object to our processing of your personal data
• Right to Withdraw Consent: Withdraw consent at any time where processing is based on consent

To exercise any of these rights, please contact us at privacy@othalo.com.`,
  },
  {
    title: '9. Third-Party Links',
    content: `Our Site may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. We encourage you to review the privacy policy of every site you visit.`,
  },
  {
    title: '10. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encrypted data transmission (HTTPS), access controls, and regular security reviews. However, no method of transmission over the Internet or electronic storage is 100% secure.`,
  },
  {
    title: '11. Children\'s Privacy',
    content: `Our Site is not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can delete it.`,
  },
  {
    title: '12. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: '13. Contact Us',
    content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact:

Othalo AS
Data Privacy Officer
Email: privacy@othalo.com
Address: Oslo, Norway

You also have the right to lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet) at www.datatilsynet.no.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
              <span className="w-8 h-px bg-teal" />
              Legal
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-3">Privacy Policy</h1>
            <p className="text-white/50 text-sm">Effective Date: 9 May 2026 · Last Updated: 9 May 2026</p>
          </SlotIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <SlotIn key={sec.title} delay={i * 0.04}>
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