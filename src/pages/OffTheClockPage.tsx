import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music2, Shield, Award as AwardIcon } from 'lucide-react';
import { Footer } from '@/components/portfolio/Footer';
import { MusicSection } from './MusicPage';
import { NccSection } from './NccSection';
import { AwardsSection } from './AwardsPage';

const chapters = [
  { id: 'music', label: 'Music', sub: 'Carnatic on keyboard', icon: Music2, tint: 'text-amber-400', ring: 'ring-amber-400/40' },
  { id: 'ncc',   label: 'NCC',   sub: 'Sergeant · 1 (TN) Bn',  icon: Shield, tint: 'text-emerald-400', ring: 'ring-emerald-400/40' },
  { id: 'awards',label: 'Honours', sub: 'World record & shelf', icon: AwardIcon, tint: 'text-primary', ring: 'ring-primary/40' },
];

function OffTheClockHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.2]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative min-h-[88vh] w-full overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-amber-400/[0.05] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-emerald-400/[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[40rem] bg-primary/[0.04] rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-foreground" />
          <span className="text-[11px] font-semibold tracking-[0.4em] uppercase text-foreground">
            Off the Clock
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-bold text-foreground leading-[0.95] tracking-tight max-w-5xl"
        >
          The hours that <br />
          <span className="italic bg-gradient-to-r from-amber-300 via-emerald-300 to-primary bg-clip-text text-transparent">
            don't show up on the CV.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl"
        >
          Three threads have run in parallel to the engineering work — South
          Indian Carnatic music on the keyboard, three years in khakis with the
          National Cadet Corps, and a quiet shelf of awards picked up along the
          way. Each one is its own chapter below.
        </motion.p>

        {/* Chapter navigator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 grid sm:grid-cols-3 gap-3 max-w-4xl"
        >
          {chapters.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className={`group relative text-left p-5 rounded-2xl bg-card/60 backdrop-blur border border-border hover:border-foreground/30 hover:bg-card transition-all duration-300 ring-1 ${c.ring}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-6 h-6 ${c.tint}`} />
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-xl font-bold text-foreground group-hover:translate-x-0.5 transition-transform">
                  {c.label}
                </p>
                <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  {c.sub}
                </p>
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-current ${c.tint} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />
              </button>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ChapterDivider({ number, label, tint }: { number: string; label: string; tint: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="flex items-center gap-4">
        <span className={`font-mono text-xs tracking-[0.3em] uppercase ${tint}`}>
          Chapter {number}
        </span>
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
        <ChapterDivider number="01" label="The Keyboard" tint="text-amber-400" />
        <MusicSection withHero={false} />
      </div>

      {/* Chapter 02 — NCC */}
      <div id="ncc" className="scroll-mt-16">
        <ChapterDivider number="02" label="The Parade Ground" tint="text-emerald-400" />
        <NccSection withHero={true} />
      </div>

      {/* Chapter 03 — Awards / Honours */}
      <div id="awards" className="scroll-mt-16">
        <ChapterDivider number="03" label="The Shelf" tint="text-primary" />
        <AwardsSection withFeatured={false} />
      </div>

      <Footer />
    </>
  );
}
