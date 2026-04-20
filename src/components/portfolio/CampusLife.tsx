import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Coffee, FlaskConical, Users, Sparkles, Trophy, Megaphone, Palette, HeartHandshake,
  X, ArrowUpRight, Calendar,
  type LucideIcon
} from 'lucide-react';
import snuLogo from '@/assets/snu-chennai-logo.png';
import centralPerk from '@/assets/central-perk-cafe.jpg';
import munVP from '@/assets/snu-mun-vp.jpg';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

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
  tag?: string;
  year?: string;
  story?: string;
  highlights?: string[];
}

interface CampusLifeProps {
  activities: Activity[];
  coursework: string[];
  institution: string;
  embedded?: boolean;
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

export function CampusLife({ activities, coursework, institution, embedded = false }: CampusLifeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? activities[activeIndex] : null;
  const activeImage = active ? activityImages[active.title] : undefined;
  const ActiveIcon = active ? (iconMap[active.icon] ?? Sparkles) : null;

  const groups = courseworkGroups
    .map(g => ({ ...g, items: g.items.filter(i => coursework.includes(i)) }))
    .filter(g => g.items.length > 0);

  const wrapperClass = embedded
    ? 'relative w-full overflow-hidden'
    : 'relative w-full py-24 overflow-hidden border-y border-border bg-gradient-to-b from-background via-secondary/20 to-background';

  const innerClass = embedded
    ? 'w-full'
    : 'px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto';

  return (
    <section
      ref={ref}
      className={wrapperClass}
      aria-label={`Campus life at ${institution}`}
    >
      {!embedded && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className={innerClass}>
        {/* Editorial header — only when standalone */}
        {!embedded && (
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
                className="h-14 md:h-16 w-auto mb-5"
                loading="lazy"
              />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At <span className="text-foreground font-medium">Shiv Nadar University Chennai</span>, my education extended far beyond lectures —
                into <span className="text-foreground font-medium">cafés, conferences, cricket pitches, design studios,</span> and
                service hours. Here's the chapter list.
              </p>
            </div>
          </motion.div>
        )}

        {/* Embedded compact header — sits inside the SNU education card */}
        {embedded && (
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary">
              Beyond the Classroom
            </span>
          </div>
        )}

        {/* Bento mosaic — full width activities */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4 ${embedded ? 'mb-12' : 'mb-24'}`}>
          {activities.map((act, i) => {
            const Icon = iconMap[act.icon] ?? Sparkles;
            const isFeatured = i === 0;
            const image = activityImages[act.title];
            const hasPhoto = Boolean(image);

            // Photo tiles: image dominates the top, content sits in a clean caption strip below.
            if (hasPhoto) {
              return (
                <motion.button
                  key={act.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                  whileHover={{ y: -4 }}
                  aria-label={`Read more about ${act.title}`}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card text-left hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${bentoSpans[i] ?? ''}`}
                >
                  {/* Full image, no heavy overlay — photo is the hero */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={image}
                      alt={act.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                    />
                    {/* Gradient only at the bottom, where caption sits */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/85 to-transparent" />
                  </div>

                  {/* Top-right meta chip */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                    {act.tag && (
                      <span className="px-2.5 py-1 rounded-full bg-background/85 backdrop-blur-md border border-border/60 text-[10px] font-semibold tracking-[0.15em] uppercase text-primary">
                        {act.tag}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-foreground/70 tracking-wider bg-background/70 backdrop-blur-md px-2 py-1 rounded-md">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Caption strip pinned to bottom */}
                  <div className={`relative h-full flex flex-col justify-end ${isFeatured ? 'p-6 md:p-7' : 'p-5'}`}>
                    <div className="flex items-end gap-3">
                      <div className={`rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 ${isFeatured ? 'w-11 h-11' : 'w-9 h-9'}`}>
                        <Icon className={`text-primary-foreground ${isFeatured ? 'w-5 h-5' : 'w-4 h-4'}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={`font-bold text-foreground leading-tight ${isFeatured ? 'text-xl md:text-2xl' : 'text-base'}`}>
                          {act.title}
                        </h3>
                        <p className={`text-muted-foreground leading-snug mt-1 ${isFeatured ? 'text-sm line-clamp-2' : 'text-xs line-clamp-1'}`}>
                          {act.description}
                        </p>
                      </div>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                      Read the story <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </motion.button>
              );
            }

            // Text tiles: original treatment with cleaner icon placement
            return (
              <motion.button
                key={act.title}
                type="button"
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                whileHover={{ y: -4 }}
                aria-label={`Read more about ${act.title}`}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card text-left hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${bentoSpans[i] ?? ''}`}
              >
                <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
                <span className="absolute top-4 right-5 text-[11px] font-mono text-muted-foreground/70 tracking-wider z-10">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative h-full flex flex-col p-5 justify-between">
                  <div className="rounded-xl bg-primary/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-110 transition-all w-11 h-11">
                    <Icon className="text-primary w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground mb-2 leading-tight text-base">
                      {act.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xs">
                      {act.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-primary/0 group-hover:text-primary transition-colors">
                      Read more <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.button>
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
                  {embedded ? 'Relevant Coursework' : 'Chapter 02'}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
                The technical <span className="text-primary italic">spine.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
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

      {/* Activity detail dialog */}
      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden border-border bg-card">
          {active && ActiveIcon && (
            <div>
              {activeImage ? (
                <div className="relative h-72 md:h-80 w-full overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background">
                  <img
                    src={activeImage}
                    alt={active.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {active.tag && (
                      <span className="px-2.5 py-1 rounded-full bg-background/85 backdrop-blur border border-border/60 text-[10px] font-semibold tracking-wider uppercase text-primary">
                        {active.tag}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ActiveIcon className="w-16 h-16 text-primary/40" />
                  </div>
                  {active.tag && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-[10px] font-semibold tracking-wider uppercase text-primary">
                      {active.tag}
                    </span>
                  )}
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ActiveIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <DialogTitle className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {active.title}
                    </DialogTitle>
                    {active.year && (
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {active.year}
                      </div>
                    )}
                  </div>
                </div>

                <DialogDescription className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {active.story ?? active.description}
                </DialogDescription>

                {active.highlights && active.highlights.length > 0 && (
                  <div className="border-t border-border pt-5">
                    <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {active.highlights.map(h => (
                        <li key={h} className="text-sm text-foreground/90 flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
