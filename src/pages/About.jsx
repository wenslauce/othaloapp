// About page
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const team = [
    {
      name: t('about.team_members.frank.name'),
      title: t('about.team_members.frank.title'),
      img: '/placeholder.svg',
      linkedin: '#',
      contribution: t('about.contributions.vision'),
      slug: 'frank-cato-lahti',
    },
    {
      name: t('about.team_members.claus.name'),
      title: t('about.team_members.claus.title'),
      img: '/placeholder.svg',
      linkedin: '#',
      contribution: t('about.contributions.operations'),
      slug: 'claus-skadkjaer',
    },
    {
      name: t('about.team_members.martin.name'),
      title: t('about.team_members.martin.title'),
      img: '/placeholder.svg',
      linkedin: '#',
      contribution: t('about.contributions.supply'),
      slug: 'martin-dokkedal',
    },
    {
      name: t('about.team_members.thomas.name'),
      title: t('about.team_members.thomas.title'),
      img: '/placeholder.svg',
      linkedin: '#',
      contribution: t('about.contributions.legal'),
      slug: 'thomas-meidell-laan',
    },
    {
      name: t('about.team_members.kjell.name'),
      title: t('about.team_members.kjell.title'),
      img: '/placeholder.svg',
      linkedin: '#',
      contribution: t('about.contributions.manufacturing'),
      slug: 'kjell-steen',
    },
    {
      name: t('about.team_members.bengt.name'),
      title: t('about.team_members.bengt.title'),
      img: '/placeholder.svg',
      linkedin: '#',
      contribution: t('about.contributions.engineering'),
      slug: 'bengt-erling-berg',
    },
    {
      name: t('about.team_members.stephane.name'),
      title: t('about.team_members.stephane.title'),
      img: '/placeholder.svg',
      linkedin: '#',
      contribution: t('about.contributions.business'),
      slug: 'stephane-bernard',
    },
    {
      name: t('about.team_members.wenslauce.name'),
      title: t('about.team_members.wenslauce.title'),
      img: '/placeholder.svg',
      linkedin: '#',
      contribution: t('about.contributions.pr'),
      slug: 'wenslauce-chengo',
    },
  ];

  const cultureValues = t('about.culture_values', { returnObjects: true });
  const impacts = t('about.impact_items', { returnObjects: true });

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.about.title')}
        description={t('seo.about.description')}
        canonical="https://othalo.com/about"
        keywords={t('seo.about.keywords').split(', ')}
      />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Othalo",
          "url": "https://othalo.com",
          "logo": "https://othalo.com/images/logo.png",
          "description": t('seo.home.description'),
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Oslo",
            "addressCountry": "Norway"
          },
          "founders": [
            { "@type": "Person", "name": "Frank Cato Lahti" },
            { "@type": "Person", "name": "Claus Skadkjaer" }
          ],
          "employee": team.map(member => ({
            "@type": "Person",
            "name": member.name,
            "jobTitle": member.title,
            "url": `https://othalo.com/about#${member.slug}`,
            "worksFor": {
              "@type": "Organization",
              "name": "Othalo"
            },
            "sameAs": member.linkedin !== '#' ? [member.linkedin] : []
          }))
        })}
      </script>
      {/* Vision / Mission / Values Hero */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SlotIn>
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-6 font-heading">
                    <span className="w-8 h-px bg-teal" />
                    {t('about.label')}
                  </div>
                  <div className="space-y-10">
                    {[
                      {
                        label: t('about.vision_label'),
                        text: t('about.vision'),
                      },
                      {
                        label: t('about.mission_label'),
                        text: t('about.mission'),
                      },
                      {
                        label: t('about.values_label'),
                        items: t('about.values_items', { returnObjects: true }),
                      },
                    ].map((block) => (
                      <div key={block.label} className="border-l-2 border-teal pl-6">
                        <h2 className="font-heading font-semibold text-navy text-2xl mb-3">{block.label}</h2>
                        {block.text && (
                          <p className="text-muted-foreground leading-relaxed">{block.text}</p>
                        )}
                        {block.items && Array.isArray(block.items) && (
                          <ul className="space-y-1">
                            {block.items.map((item) => (
                              <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                                <span className="w-1 h-1 bg-teal rounded-full flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="mt-10 bg-teal hover:bg-teal-light text-white font-semibold px-6 h-11 rounded-sm text-sm"
                  >
                    <Link to="/products">
                      {t('about.cta')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </SlotIn>
            </div>
            <SlotIn delay={0.15}>
              <img
                src="/images/Kids crop.jpg"
                alt="Community impact"
                className="w-full h-[600px] object-cover rounded-sm"
              />
            </SlotIn>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlotIn>
              <img
                src="/images/Slum house crop.png"
                alt="Challenges in informal settlements"
                className="w-full h-80 lg:h-96 object-cover rounded-sm"
              />
            </SlotIn>
            <SlotIn delay={0.15}>
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-6 font-heading">
                <span className="w-8 h-px bg-teal" />
                {t('about.story_label')}
              </div>
              <div className="text-navy/20 font-heading text-7xl leading-none mb-2">"</div>
              <blockquote className="font-heading text-lg text-navy font-light leading-relaxed mb-8 -mt-4">
                {t('about.story_quote')}
              </blockquote>
              <div className="flex items-center gap-4 border-t border-tech-slate pt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal/30">
                  <img
                    src="/placeholder.svg"
                    alt="Frank Cato Lahti"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-heading font-semibold text-navy">Frank Cato Lahti</div>
                  <div className="text-muted-foreground text-sm">{t('about.team_members.frank.title')}</div>
                </div>
              </div>
            </SlotIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                {t('about.team_label')}
                <span className="w-8 h-px bg-teal" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-3">{t('about.team_title')}</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm italic">
                {`"${t('about.team_subtitle')}"`}
              </p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">
            {team.map((member, i) => (
              <SlotIn key={member.name} delay={i * 0.07}>
                <div 
                  id={member.slug}
                  className="group relative overflow-hidden rounded-sm bg-surface border border-tech-slate hover:border-teal/30 hover:shadow-lg transition-all duration-300 scroll-mt-24"
                >
                  {/* 4:5 aspect ratio image */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Teal duotone overlay on hover */}
                    <div className="absolute inset-0 bg-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* LinkedIn overlay */}
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-navy/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-sm hover:bg-teal transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-heading font-semibold text-navy text-sm">{member.name}</div>
                    <div className="text-muted-foreground text-xs mt-0.5 leading-snug">{member.title}</div>
                    <div className="mt-2">
                      <span className="inline-block bg-teal/10 text-teal text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm font-heading">
                        {member.contribution}
                      </span>
                    </div>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlotIn>
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
                <span className="w-8 h-px bg-teal" />
                {t('about.culture_label')}
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-3">
                {t('about.culture_title')}
              </h2>
              <p className="text-white/60 mb-10">
                {t('about.culture_subtitle')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cultureValues.map((v, i) => (
                  <div key={v.title} className="border-l-2 border-teal pl-5">
                    <h3 className="font-heading font-semibold text-white text-sm mb-1">{v.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </SlotIn>
            <SlotIn delay={0.15}>
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85"
                alt="Team culture"
                className="w-full h-[480px] object-cover rounded-sm"
              />
            </SlotIn>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SlotIn>
                <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
                  <span className="w-8 h-px bg-teal" />
                  {t('about.impact_label')}
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-10">
                  {t('about.impact_title')}
                </h2>
              </SlotIn>
              <div className="space-y-8">
                {impacts.map((item, i) => (
                  <SlotIn key={item.num} delay={i * 0.1}>
                    <div className="flex gap-6">
                      <div className="font-heading font-semibold text-teal text-3xl leading-none flex-shrink-0">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-navy text-base mb-1.5">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SlotIn>
                ))}
              </div>
            </div>
            <SlotIn delay={0.1}>
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=85"
                alt="Community impact"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </SlotIn>
          </div>
        </div>
      </section>
    </div>
  );
}