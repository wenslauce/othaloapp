// About page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const [videoOpen, setVideoOpen] = useState(false);

  const team = [
    { name: t('about.team_members.frank.name'),     title: t('about.team_members.frank.title'),     img: '/images/frank-cato.webp',       linkedin: 'https://www.linkedin.com/in/frank-cato-lahti-01b4072/', slug: 'frank-cato-lahti' },
    { name: t('about.team_members.claus.name'),     title: t('about.team_members.claus.title'),     img: '/images/claus.jpg',             linkedin: 'https://www.linkedin.com/in/claus-skadkjaer-6457383/', slug: 'claus-skadkjaer' },
    { name: t('about.team_members.martin.name'),    title: t('about.team_members.martin.title'),    img: '/placeholder.svg',              linkedin: 'https://www.linkedin.com/in/martin-dokkedal-a1499/', slug: 'martin-dokkedal' },
    { name: t('about.team_members.thomas.name'),    title: t('about.team_members.thomas.title'),    img: '/images/thomas.jpg',            linkedin: 'https://www.linkedin.com/in/thomas-meidell-l%C3%B8snes-8b051b22/', slug: 'thomas-meidell-laan' },
    { name: t('about.team_members.kjell.name'),     title: t('about.team_members.kjell.title'),     img: '/images/Kjell-headshot.jpg',    linkedin: 'https://www.linkedin.com/in/kjell-steen-57438ab2/', slug: 'kjell-steen' },
    { name: t('about.team_members.bengt.name'),     title: t('about.team_members.bengt.title'),     img: '/images/bengt-erling.webp',     linkedin: 'https://www.linkedin.com/in/bengt-erling-berg-a4831b3a/', slug: 'bengt-erling-berg' },
    { name: t('about.team_members.stephane.name'),  title: t('about.team_members.stephane.title'),  img: '/images/Stephane-headshot.jpg', linkedin: 'https://www.linkedin.com/in/stephanebernard-iam/', slug: 'stephane-bernard' },
    { name: t('about.team_members.wenslauce.name'), title: t('about.team_members.wenslauce.title'), img: '/images/wenslauce-chengo.webp', linkedin: 'https://www.linkedin.com/in/chengo-wenslauce/', slug: 'wenslauce-chengo' },
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
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {/* Left: text */}
          <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-14 py-12 lg:py-16 flex flex-col justify-center">
            <SlotIn>
              <div className="space-y-7 max-w-lg">
                {/* Vision */}
                <div>
                  <h2 className="font-heading font-bold text-navy text-xl lg:text-2xl mb-1.5 leading-tight">{t('about.vision_label')}</h2>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{t('about.vision')}</p>
                </div>
                {/* Mission */}
                <div>
                  <h2 className="font-heading font-bold text-navy text-xl lg:text-2xl mb-1.5 leading-tight">{t('about.mission_label')}</h2>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{t('about.mission')}</p>
                </div>
                {/* Values */}
                <div>
                  <h2 className="font-heading font-bold text-navy text-xl lg:text-2xl mb-1.5 leading-tight">{t('about.values_label')}</h2>
                  <ul className="space-y-1">
                    {Array.isArray(valuesItems) && valuesItems.map(item => (
                      <li key={item} className="text-muted-foreground text-sm lg:text-base leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={() => setVideoOpen(true)}
                  className="flex items-center gap-2.5 bg-teal hover:bg-teal-light text-white font-semibold px-6 h-10 rounded-sm text-sm self-start"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0">
                    <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                  </div>
                  Discover
                </Button>
              </div>
            </SlotIn>
          </div>
          {/* Right: kids image */}
          <div className="w-full lg:w-1/2 min-h-[280px] lg:min-h-[420px]">
            <img
              src="/images/Kids crop.jpg"
              alt="Community impact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {/* Left: slum image */}
          <div className="w-full lg:w-2/5 min-h-[240px] lg:min-h-[400px]">
            <img
              src="/images/Slum house crop.png"
              alt="Housing challenges"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right: quote */}
          <div className="w-full lg:w-3/5 bg-navy px-8 md:px-12 lg:px-14 py-12 lg:py-16 flex flex-col justify-center">
            <SlotIn delay={0.1}>
              <h2 className="font-heading font-bold text-white text-xl lg:text-2xl mb-4 leading-tight">{t('about.story_label')}</h2>
              <blockquote className="text-white/90 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
                "{t('about.story_quote')}"
              </blockquote>
              {/* Frank avatar + name */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full bg-surface/20 flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0 overflow-hidden">
                  <span className="z-0">FL</span>
                  <img src="/images/frank-cato.webp" alt="Frank" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => e.target.style.display='none'} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">Frank Cato Lahti</p>
                  <p className="text-white/60 text-xs mt-0.5">{t('about.team_members.frank.title')}</p>
                </div>
              </div>
            </SlotIn>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-navy text-2xl lg:text-3xl mb-3 leading-tight">Team</h2>
              <p className="text-navy/70 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
                "A diverse group of innovators, engineers, and visionaries united by the mission to create sustainable housing solutions"
              </p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, i) => (
              <SlotIn key={member.slug} delay={i * 0.06}>
                <div
                  id={member.slug}
                  className="border border-navy/30 rounded-lg overflow-hidden bg-[#E7E9EC] hover:shadow-lg transition-shadow scroll-mt-24 flex flex-col h-full"
                >
                  {/* Portrait */}
                  <div className="pt-8 pb-4 flex justify-center">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover border border-navy/20 shadow-sm"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  {/* Info */}
                  <div className="px-4 pb-8 flex flex-col items-center flex-grow text-center">
                    <p className="font-heading font-bold text-navy text-xl lg:text-[22px] leading-tight mb-2">{member.name}</p>
                    <p className="text-navy/80 text-sm lg:text-[16px] leading-snug mb-6 flex-grow">{member.title}</p>
                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center justify-center w-9 h-9 bg-white rounded-full text-navy shadow-sm hover:shadow-md transition-all mt-auto"
                    >
                      <Linkedin className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CULTURE ── */}
      <section className="bg-teal py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl mb-1.5 leading-tight">Our culture</h2>
            <p className="text-white/70 text-sm lg:text-base mb-10 max-w-2xl">
              What shapes our approach to work and guides us in making a positive impact on the world
            </p>
          </SlotIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {Array.isArray(cultureValues) && cultureValues.map((v, i) => (
              <SlotIn key={v.title} delay={i * 0.08}>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base lg:text-lg mb-1.5">{v.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {/* Left: numbered impact items */}
          <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-14 py-12 lg:py-16 flex flex-col justify-center">
            <SlotIn>
              <h2 className="font-heading font-bold text-navy text-2xl lg:text-3xl mb-8 leading-tight">Impact created by Othalo</h2>
              <div className="space-y-6">
                {Array.isArray(impacts) && impacts.map((item, i) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="font-heading font-bold text-teal text-2xl leading-tight flex-shrink-0 w-7 pt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-navy text-base mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlotIn>
          </div>
          {/* Right: community image */}
          <div className="w-full lg:w-1/2 min-h-[280px] lg:min-h-[400px]">
            <img
              src="/images/Child crop 1.jpg"
              alt="Community impact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-navy/60 text-white hover:bg-navy transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src="/Building of Othalo housing 30s.mp4"
                autoPlay
                controls
                playsInline
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
