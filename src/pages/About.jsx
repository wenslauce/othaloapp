// About page
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const team = [
    { name: t('about.team_members.frank.name'),     title: t('about.team_members.frank.title'),     img: '/placeholder.svg', linkedin: '#', slug: 'frank-cato-lahti' },
    { name: t('about.team_members.claus.name'),     title: t('about.team_members.claus.title'),     img: '/placeholder.svg', linkedin: '#', slug: 'claus-skadkjaer' },
    { name: t('about.team_members.martin.name'),    title: t('about.team_members.martin.title'),    img: '/placeholder.svg', linkedin: '#', slug: 'martin-dokkedal' },
    { name: t('about.team_members.thomas.name'),    title: t('about.team_members.thomas.title'),    img: '/placeholder.svg', linkedin: '#', slug: 'thomas-meidell-laan' },
    { name: t('about.team_members.kjell.name'),     title: t('about.team_members.kjell.title'),     img: '/placeholder.svg', linkedin: '#', slug: 'kjell-steen' },
    { name: t('about.team_members.bengt.name'),     title: t('about.team_members.bengt.title'),     img: '/placeholder.svg', linkedin: '#', slug: 'bengt-erling-berg' },
    { name: t('about.team_members.stephane.name'),  title: t('about.team_members.stephane.title'),  img: '/placeholder.svg', linkedin: '#', slug: 'stephane-bernard' },
    { name: t('about.team_members.wenslauce.name'), title: t('about.team_members.wenslauce.title'), img: '/placeholder.svg', linkedin: '#', slug: 'wenslauce-chengo' },
  ];

  const cultureValues = t('about.culture_values', { returnObjects: true });
  const impacts = t('about.impact_items', { returnObjects: true });
  const valuesItems = t('about.values_items', { returnObjects: true });

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.about.title')}
        description={t('seo.about.description')}
        canonical="https://othalo.com/about"
        keywords={t('seo.about.keywords').split(', ')}
      />

      {/* ── VISION / MISSION / VALUES + IMAGE ── */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[520px]">
          {/* Left: text */}
          <div className="w-full lg:w-1/2 px-8 md:px-14 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
            <SlotIn>
              <div className="space-y-8 max-w-md">
                {/* Vision */}
                <div>
                  <h2 className="font-heading font-bold text-navy text-xl mb-2">{t('about.vision_label')}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t('about.vision')}</p>
                </div>
                {/* Mission */}
                <div>
                  <h2 className="font-heading font-bold text-navy text-xl mb-2">{t('about.mission_label')}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t('about.mission')}</p>
                </div>
                {/* Values */}
                <div>
                  <h2 className="font-heading font-bold text-navy text-xl mb-2">{t('about.values_label')}</h2>
                  <ul className="space-y-1">
                    {Array.isArray(valuesItems) && valuesItems.map(item => (
                      <li key={item} className="text-muted-foreground text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  asChild
                  className="bg-teal hover:bg-teal-light text-white font-semibold px-6 h-10 rounded-sm text-sm self-start mt-2"
                >
                  <Link to="/products">Discover</Link>
                </Button>
              </div>
            </SlotIn>
          </div>
          {/* Right: kids image */}
          <div className="w-full lg:w-1/2 min-h-[320px] lg:min-h-0">
            <img
              src="/images/Kids crop.jpg"
              alt="Community impact"
              className="w-full h-full object-cover"
              style={{ minHeight: '320px' }}
            />
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          {/* Left: slum image */}
          <div className="w-full lg:w-2/5 min-h-[280px] lg:min-h-0">
            <img
              src="/images/Slum house crop.png"
              alt="Housing challenges"
              className="w-full h-full object-cover"
              style={{ minHeight: '280px' }}
            />
          </div>
          {/* Right: quote */}
          <div className="w-full lg:w-3/5 bg-surface px-8 md:px-14 lg:px-16 py-14 lg:py-20 flex flex-col justify-center">
            <SlotIn delay={0.1}>
              <h2 className="font-heading font-bold text-navy text-2xl mb-6">{t('about.story_label')}</h2>
              <blockquote className="text-navy/80 text-sm leading-relaxed mb-8 max-w-lg">
                "{t('about.story_quote')}"
              </blockquote>
              {/* Frank avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-teal font-heading font-bold text-sm flex-shrink-0">
                  FL
                </div>
                <div>
                  <p className="font-heading font-semibold text-navy text-sm">Frank Cato Lahti</p>
                  <p className="text-muted-foreground text-xs">{t('about.team_members.frank.title')}</p>
                </div>
              </div>
            </SlotIn>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-navy text-3xl mb-3">Team</h2>
              <p className="text-muted-foreground text-sm italic max-w-lg mx-auto">
                "A diverse group of innovators, engineers, and visionaries united by the mission to create sustainable housing solutions"
              </p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <SlotIn key={member.slug} delay={i * 0.06}>
                <div
                  id={member.slug}
                  className="border border-tech-slate rounded-sm overflow-hidden bg-white hover:shadow-md transition-shadow scroll-mt-24"
                >
                  {/* Portrait */}
                  <div className="aspect-square overflow-hidden bg-surface">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-3">
                    <p className="font-heading font-semibold text-navy text-xs leading-snug">{member.name}</p>
                    <p className="text-muted-foreground text-[10px] mt-0.5 leading-snug">{member.title}</p>
                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center justify-center w-6 h-6 bg-[#0077B5] rounded-sm mt-2 hover:bg-[#005885] transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CULTURE ── */}
      <section className="bg-teal py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h2 className="font-heading font-bold text-white text-2xl mb-2">Our culture</h2>
            <p className="text-white/70 text-sm mb-10">
              What shapes our approach to work and guides us in making a positive impact on the world
            </p>
          </SlotIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Array.isArray(cultureValues) && cultureValues.map((v, i) => (
              <SlotIn key={v.title} delay={i * 0.08}>
                <div>
                  <h3 className="font-heading font-bold text-white text-base mb-1">{v.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          {/* Left: numbered impact items */}
          <div className="w-full lg:w-1/2 px-8 md:px-14 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
            <SlotIn>
              <h2 className="font-heading font-bold text-navy text-2xl mb-8">Impact created by Othalo</h2>
              <div className="space-y-6">
                {Array.isArray(impacts) && impacts.map((item, i) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="font-heading font-bold text-teal text-3xl leading-none flex-shrink-0 w-7">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-navy text-sm mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlotIn>
          </div>
          {/* Right: community image */}
          <div className="w-full lg:w-1/2 min-h-[320px] lg:min-h-0">
            <img
              src="/images/The community 1a.png"
              alt="Community impact"
              className="w-full h-full object-cover"
              style={{ minHeight: '320px' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
