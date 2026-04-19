import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Coffee, FlaskConical, Users, Sparkles, Trophy, Megaphone, Palette, HeartHandshake,
  type LucideIcon
} from 'lucide-react';
import snuLogo from '@/assets/snu-chennai-logo.png';
import centralPerk from '@/assets/central-perk-cafe.jpg';
import munVP from '@/assets/snu-mun-vp.jpg';

const iconMap: Record<string, LucideIcon> = {
  Coffee, FlaskConical, Users, Sparkles, Trophy, Megaphone, Palette, HeartHandshake
};

// Map activity titles to feature images (only certain tiles get photos)
const activityImages: Record<string, string> = {
  'Founder — Central Perk Café': centralPerk,
  'Vice President — SNUC MUN Society': munVP,
};

interface Activity {
  icon: string;
  title: string;
  description: string;
}

interface CampusLifeProps {
  activities: Activity[];
  coursework: string[];
  institution: string;
}

// Bento-style spans for visual rhythm across the full width
const bentoSpans = [
  'lg:col-span-2 lg:row-span-2', // Featured — Central Perk
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
];

const courseworkGroups = [
  {
    label: 'Core CS',
    items: ['Data Structures', 'Design and Analysis of Algorithms', 'Operating Systems', 'Computer Networks']
  },
  {
    label: 'AI / ML',
    items: ['Artificial Intelligence', 'Machine Learning Technologies and Algorithms']
  },
  {
    label: 'Systems & IoT',
    items: ['Sensor Technologies', 'Internet of Things', 'Web Technologies']
  },
  {
    label: 'Security',
    items: ['Cryptography', 'Blockchain Development']
  }
];

export function CampusLife({ activities, coursework, institution }: CampusLifeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Filter the predefined groups to only include items present in coursework
  const groups = courseworkGroups
    .map(g => ({ ...g, items: g.items.filter(i => coursework.includes(i)) }))
    .filter(g => g.items.length > 0);

  return (
    <section
      ref={ref}
      className="relative w-full py-24 overflow-hidden border-y border-border bg-gradient-to-b from-background via-secondary/20 to-background"
      aria-label={`Campus life at ${institution}`}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 mb-16 items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary">
                Chapter 01 · Beyond the Classroom
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              Four years of <span className="text-primary italic">building, leading,</span><br />
              and showing up.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l border-border relative">
            <img
              src={snuLogo}
              alt="Shiv Nadar University Chennai"
              className="h-14 md:h-16 w-auto mb-5 opacity-90 dark:invert dark:brightness-200"
              loading="lazy"
            />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At <span className="text-foreground font-medium">Shiv Nadar University Chennai</span>, my education extended far beyond lectures —
              into <span className="text-foreground font-medium">cafés, conferences, cricket pitches, design studios,</span> and
              service hours. Here's the chapter list.
            </p>
          </div>
        </motion.div>

        {/* Bento mosaic — full width activities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[180px] gap-4 mb-24">
          {activities.map((act, i) => {
            const Icon = iconMap[act.icon] ?? Sparkles;
            const isFeatured = i === 0;
            return (
              <motion.article
                key={act.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all ${bentoSpans[i] ?? ''}`}
              >
                {/* Decorative number — editorial */}
                <span className="absolute top-4 right-5 text-[11px] font-mono text-muted-foreground/50 tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Glow blob */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />

                <div className={`relative h-full flex flex-col ${isFeatured ? 'p-7 justify-between' : 'p-5 justify-between'}`}>
                  <div className={`rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all ${isFeatured ? 'w-14 h-14' : 'w-11 h-11'}`}>
                    <Icon className={`text-primary ${isFeatured ? 'w-7 h-7' : 'w-5 h-5'}`} />
                  </div>

                  <div>
                    <h3 className={`font-bold text-foreground mb-2 leading-tight ${isFeatured ? 'text-2xl md:text-3xl' : 'text-base'}`}>
                      {act.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${isFeatured ? 'text-sm md:text-base max-w-md' : 'text-xs'}`}>
                      {act.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.article>
            );
          })}
        </div>

        {/* Coursework — editorial split */}
        {groups.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12"
          >
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary">
                  Chapter 02
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                The technical <span className="text-primary italic">spine.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Coursework that shaped how I think about systems, intelligence, and trust —
                grouped by the questions they taught me to ask.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {groups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + gi * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <h4 className="font-semibold text-foreground tracking-tight">
                      {group.label}
                    </h4>
                    <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                      {String(gi + 1).padStart(2, '0')} / {String(groups.length).padStart(2, '0')}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map(item => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-start gap-2"
                      >
                        <span className="text-primary/60 mt-1 text-xs">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
