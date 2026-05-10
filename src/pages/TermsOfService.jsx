// Terms of Service page
import SlotIn from '@/components/shared/SlotIn';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Othalo AS website at othalo.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site. These Terms apply to all visitors, users, and others who access or use the Site.`,
  },
  {
    title: '2. About Othalo',
    content: `Othalo AS is a Norwegian technology company registered under Norwegian law. We develop and commercialize patented modular housing solutions manufactured from recycled plastic, serving governments, housing developers, corporations, and NGOs globally.

Company registration: Othalo AS, Oslo, Norway
Contact: contact@othalo.com`,
  },
  {
    title: '3. Use of the Site',
    content: `You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:

• Use the Site in any way that violates any applicable local, national, or international law or regulation
• Transmit any unsolicited or unauthorized advertising or promotional material
• Knowingly transmit any data or material that contains viruses, Trojan horses, or other harmful code
• Attempt to gain unauthorized access to any portion of the Site or its related systems
• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site
• Use the Site to scrape, harvest, or otherwise collect information about other users

We reserve the right to terminate your access to the Site immediately, without notice, if we reasonably believe you have breached these Terms.`,
  },
  {
    title: '4. Intellectual Property',
    content: `All content on this Site — including text, graphics, logos, images, product designs, technology descriptions, and software — is the property of Othalo AS or its content suppliers and is protected by Norwegian and international intellectual property laws.

The Othalo name, logo, and all related product names, design marks, and slogans are trademarks of Othalo AS. You may not use any trademark or trade name without our prior written permission.

The Othalo structural panel system is protected by patents filed in multiple jurisdictions. Nothing on this Site grants any license or right to use any patented technology.

You may view and download content from this Site solely for your personal, non-commercial use, provided you keep all copyright and other proprietary notices intact.`,
  },
  {
    title: '5. Products and Services',
    content: `The products and services described on this Site are subject to availability and may vary by region. Product specifications, pricing, and delivery timelines are indicative and subject to formal quotation. Nothing on this Site constitutes a binding offer to sell.

All product quotations, partnerships, and deployment agreements are subject to separate written agreements between Othalo AS and the relevant party. These Terms do not govern such agreements.`,
  },
  {
    title: '6. Accuracy of Information',
    content: `We strive to ensure that the information on this Site is accurate and up-to-date. However, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics on the Site.

Technical specifications, impact metrics, and performance claims are based on controlled testing and representative deployments. Actual results may vary depending on local conditions, site preparation, and construction practices.`,
  },
  {
    title: '7. Third-Party Links',
    content: `The Site may contain links to third-party websites or resources. These links are provided for your convenience only. We have no control over the content of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: '8. Disclaimer of Warranties',
    content: `THE SITE AND ALL CONTENT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OTHALO AS DISCLAIMS ALL WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

We do not warrant that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site or the server that makes it available are free of viruses or other harmful components.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL OTHALO AS, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.

This limitation applies whether the liability arises in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable.`,
  },
  {
    title: '10. Privacy',
    content: `Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.`,
  },
  {
    title: '11. Governing Law and Jurisdiction',
    content: `These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of Norway, without regard to its conflict of law provisions.

Any disputes shall be subject to the exclusive jurisdiction of the courts of Oslo, Norway, unless mandatory consumer protection laws in your country require otherwise.`,
  },
  {
    title: '12. Changes to These Terms',
    content: `We reserve the right to modify these Terms at any time. We will post the revised Terms on this page with an updated effective date. By continuing to use the Site after any changes become effective, you agree to the revised Terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: '13. Severability',
    content: `If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.`,
  },
  {
    title: '14. Contact',
    content: `If you have any questions about these Terms of Service, please contact us:

Othalo AS
Email: legal@othalo.com
Address: Oslo, Norway`,
  },
];

export default function TermsOfService() {
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
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-3">Terms of Service</h1>
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