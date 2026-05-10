// About page
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';

const team = [
  {
    name: 'Frank Cato Lahti',
    title: 'Founder & Chief Executive Officer',
    img: '/placeholder.svg',
    linkedin: '#',
    contribution: 'Vision & Strategy',
  },
  {
    name: 'Claus Skadkjaer',
    title: 'Founder, Chief Operating Officer',
    img: '/placeholder.svg',
    linkedin: '#',
    contribution: 'Operations',
  },
  {
    name: 'Martin Dokkedal',
    title: 'Chief Supply Chain Officer',
    img: '/placeholder.svg',
    linkedin: '#',
    contribution: 'Supply Chain',
  },
  {
    name: 'Thomas Meidell Laan',
    title: 'Chief Legal Officer',
    img: '/placeholder.svg',
    linkedin: '#',
    contribution: 'Legal & Compliance',
  },
  {
    name: 'Kjell Steen',
    title: 'Head of Production',
    img: '/placeholder.svg',
    linkedin: '#',
    contribution: 'Manufacturing',
  },
  {
    name: 'Bengt Erling Berg',
    title: 'Head of Technical Support',
    img: '/placeholder.svg',
    linkedin: '#',
    contribution: 'Engineering',
  },
  {
    name: 'Stephane Bernard',
    title: 'Chief Commercial Officer',
    img: '/placeholder.svg',
    linkedin: '#',
    contribution: 'Business Development',
  },
  {
    name: 'Wenslauce Chengo',
    title: 'Country Manager Kenya & Public Relations',
    img: '/placeholder.svg',
    linkedin: '#',
    contribution: 'Kenya & PR',
  },
];

const cultureValues = [
  {
    title: 'Teamwork',
    desc: 'Collaboration and mutual support drive our success. We believe in the power of working together to achieve extraordinary results.',
  },
  {
    title: 'Timeliness',
    desc: 'We respect deadlines and deliver on our promises. Punctuality and efficiency are core to our operational excellence.',
  },
  {
    title: 'Communication',
    desc: 'Open and transparent dialogue ensures alignment and understanding across all levels of our organization.',
  },
  {
    title: 'Commitment',
    desc: 'We are dedicated to our mission of creating sustainable housing solutions and making a positive impact on the world.',
  },
];

const impacts = [
  {
    num: '01',
    title: 'Environmental impact',
    desc: 'Plastic removed from the environment, no use of cement or steel — measurable planetary impact per unit built.',
  },
  {
    num: '02',
    title: 'Social impact',
    desc: 'Homes for low to mid-income communities. Dignified, safe housing that transforms lives and breaks cycles of poverty.',
  },
  {
    num: '03',
    title: 'Economic impact',
    desc: 'Enabling jobs in emerging economies. Every Othalo factory and build site creates sustainable local employment.',
  },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Vision / Mission / Values Hero */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SlotIn>
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-6 font-heading">
                    <span className="w-8 h-px bg-teal" />
                    Our Purpose
                  </div>
                  <div className="space-y-10">
                    {[
                      {
                        label: 'Our vision',
                        text: 'A world where waste is a resource — where every community has access to dignified, sustainable, and safe housing.',
                      },
                      {
                        label: 'Our mission',
                        text: 'Turn plastic waste into housing and housing into hope.',
                      },
                      {
                        label: 'Our values',
                        items: ['Do good', 'Integrity', 'Equality for everyone', 'Local empowerment', 'Safe communities for the next generation'],
                      },
                    ].map((block) => (
                      <div key={block.label} className="border-l-2 border-teal pl-6">
                        <h2 className="font-heading font-semibold text-navy text-2xl mb-3">{block.label}</h2>
                        {block.text && (
                          <p className="text-muted-foreground leading-relaxed">{block.text}</p>
                        )}
                        {block.items && (
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
                      Discover Our Technology
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
                Our Story
              </div>
              <div className="text-navy/20 font-heading text-7xl leading-none mb-2">"</div>
              <blockquote className="font-heading text-lg text-navy font-light leading-relaxed mb-8 -mt-4">
                After serving in the Norwegian Army and Intelligence across NATO missions in the 1990s, I witnessed both the resilience of people living through conflict and the harsh realities of refugee camps. Years later, standing on a plastic-covered beach in northern Norway, I realized the global waste crisis was closer than we think. That moment sparked a bold idea: could we turn plastic waste into safe, dignified homes? That question became the foundation of Othalo.
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
                  <div className="text-muted-foreground text-sm">Founder & CEO</div>
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
                The People
                <span className="w-8 h-px bg-teal" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-3">Team</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm italic">
                "A diverse group of innovators, engineers, and visionaries united by the mission to create sustainable housing solutions"
              </p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">
            {team.map((member, i) => (
              <SlotIn key={member.name} delay={i * 0.07}>
                <div className="group relative overflow-hidden rounded-sm bg-surface border border-tech-slate hover:border-teal/30 hover:shadow-lg transition-all duration-300">
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
                Our Culture
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-3">
                Our culture
              </h2>
              <p className="text-white/60 mb-10">
                What shapes our approach to work and guides us in making a positive impact on the world.
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
                  Measurable Change
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-10">
                  Impact created by Othalo
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