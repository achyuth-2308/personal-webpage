import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Music2, Shield, Award as AwardIcon, ArrowDown } from 'lucide-react';
import { Footer } from '@/components/portfolio/Footer';
import { MusicSection } from './MusicPage';
import { NccSection } from './NccSection';
import { AwardsSection } from './AwardsPage';

const chapters = [
  {
    id: 'music',
    no: '01',
    label: 'Music',
    sub: 'Carnatic on keyboard',
    long: 'The Keyboard',
    icon: Music2,
    tint: 'text-amber-400',
    accent: 'amber',
    glow: 'bg-amber-400/[0.08]',
    line: 'bg-amber-400',
  },
  {
    id: 'ncc',
    no: '02',
    label: 'NCC',
    sub: 'Sergeant · 1 (TN) Bn',
    long: 'The Parade Ground',
    icon: Shield,
    tint: 'text-emerald-400',
    accent: 'emerald',
    glow: 'bg-emerald-400/[0.08]',
    line: 'bg-emerald-400',
  },
  {
    id: 'awards',
    no: '03',
    label: 'Honours',
    sub: 'World record & shelf',
    long: 'The Shelf',
    icon: AwardIcon,
    tint: 'text-primary',
    accent: 'primary',
    glow: 'bg-primary/[0.08]',
    line: 'bg-primary',
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Hero — editorial broadsheet: a three-column "contact sheet" of the chapters,
// fixed cropping, "don't show up on the CV." on a single line at every size.
// ─────────────────────────────────────────────────────────────────────────────
function OffTheClockHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] w-full overflow-hidden border-b border-border"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute -top-20 left-[10%] w-[36rem] h-[36rem] bg-amber-400/[0.06] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-[8%] w-[34rem] h-[34rem] bg-emerald-400/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[44rem] h-[36rem] bg-primary/[0.05] rounded-full blur-3xl" />

        {/* Soft grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-10 pt-28 md:pt-36 pb-16"
      >
        {/* Top meta bar — like a magazine masthead */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between gap-4 pb-6 mb-10 border-b border-border/70"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-foreground" />
            <span className="text-[11px] font-semibold tracking-[0.4em] uppercase text-foreground">
              Off the Clock
            </span>
          </div>
          <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Vol. III · Music · Service · Honours
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Three Chapters
          </span>
        </motion.div>

        {/* Headline — sized so "don't show up on the CV." stays on one line */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-foreground tracking-tight leading-[1.02]"
            >
              <span className="block text-[clamp(2.4rem,6.4vw,5.75rem)]">
                The hours that
              </span>
              {/* Italic line — clamp keeps it one line; pr/pb prevent italic clipping */}
              <span
                className="block whitespace-nowrap italic bg-gradient-to-r from-amber-300 via-emerald-300 to-primary bg-clip-text text-transparent pb-2 pr-3"
                style={{ fontSize: 'clamp(1.45rem, 4.45vw, 4rem)' }}
              >
                don&rsquo;t show up on the CV.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Three threads have run in parallel to the engineering work — South
              Indian Carnatic music on the keyboard, three years in khakis with
              the National Cadet Corps, and a quiet shelf of awards picked up
              along the way. Each one is its own chapter below.
            </motion.p>
          </div>

          {/* Index card — at-a-glance table, magazine style */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-5 shadow-2xl shadow-foreground/[0.04]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Index
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Pg. 1 — 3
                </span>
              </div>
              <ul className="space-y-3">
                {chapters.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.id}>
                      <button
                        onClick={() => scrollTo(c.id)}
                        className="group w-full flex items-center gap-3 text-left py-1.5 -mx-1 px-1 rounded-md hover:bg-foreground/[0.03] transition-colors"
                      >
                        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground w-6 shrink-0">
                          {c.no}
                        </span>
                        <Icon className={`w-4 h-4 ${c.tint} shrink-0`} />
                        <span className="text-sm font-semibold text-foreground group-hover:translate-x-0.5 transition-transform truncate">
                          {c.long}
                        </span>
                        <span className="ml-auto hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap">
                          {c.sub}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.aside>
        </div>

        {/* Three-column "contact sheet" — innovative chapter cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {chapters.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group relative text-left rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-foreground/30 transition-colors duration-300 overflow-hidden"
              >
                {/* Tint glow */}
                <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl ${c.glow}`} />

                {/* Header strip */}
                <div className="relative flex items-center justify-between px-5 pt-5">
                  <span className={`font-mono text-[10px] tracking-[0.3em] uppercase ${c.tint}`}>
                    Chapter {c.no}
                  </span>
                  <Icon className={`w-5 h-5 ${c.tint}`} />
                </div>

                {/* Body */}
                <div className="relative px-5 pt-6 pb-6">
                  <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight">
                    {c.long}
                  </p>
                  <p className="mt-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    {c.sub}
                  </p>

                  {/* Footer line + CTA */}
                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                      Read chapter
                    </span>
                    <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-y-0.5 transition-all" />
                  </div>
                </div>

                {/* Bottom accent — animates on hover */}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] w-full ${c.line} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />

                {/* Page-corner fold */}
                <span
                  aria-hidden
                  className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-foreground/[0.06] to-transparent"
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                />

                {/* Order index, ghosted */}
                <span className="pointer-events-none absolute -bottom-4 -left-1 text-[6rem] font-bold leading-none text-foreground/[0.04] select-none">
                  {c.no}
                </span>

                {/* Stagger-in line */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                  className={`absolute top-0 left-0 h-px w-full ${c.line} origin-left opacity-60`}
                />
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Chapter divider — simple editorial rule
// ─────────────────────────────────────────────────────────────────────────────
function ChapterDivider({
  number,
  label,
  tint,
  line,
}: {
  number: string;
  label: string;
  tint: string;
  line: string;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="flex items-center gap-4">
        <span className={`font-mono text-xs tracking-[0.3em] uppercase ${tint}`}>
          Chapter {number}
        </span>
        <span className={`h-px w-10 ${line} opacity-70`} />
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function OffTheClockPage() {
  return (
    <>
      <OffTheClockHero />

      {/* Chapter 01 — Music */}
      <div id="music" className="scroll-mt-16">
        <ChapterDivider number="01" label="The Keyboard" tint="text-amber-400" line="bg-amber-400" />
        <MusicSection withHero={false} />
      </div>

      {/* Chapter 02 — NCC */}
      <div id="ncc" className="scroll-mt-16">
        <ChapterDivider number="02" label="The Parade Ground" tint="text-emerald-400" line="bg-emerald-400" />
        <NccSection withHero={true} />
      </div>

      {/* Chapter 03 — Awards / Honours */}
      <div id="awards" className="scroll-mt-16">
        <ChapterDivider number="03" label="The Shelf" tint="text-primary" line="bg-primary" />
        <AwardsSection withFeatured={false} />
      </div>

      <Footer />
    </>
  );
}
