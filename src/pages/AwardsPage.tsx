import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Award as AwardIcon, Trophy, Medal, Crown, Flame, Sparkles,
  ExternalLink, ArrowUpRight,
} from 'lucide-react';
import { awards, type Award, type AwardCategory } from '@/data/awards';
import awardsHero from '@/assets/awards-hero.jpg';
import { Footer } from '@/components/portfolio/Footer';

const categoryStyle: Record<AwardCategory, { icon: typeof Trophy; tint: string; ring: string }> = {
  'World Record': { icon: Crown, tint: 'text-amber-400', ring: 'ring-amber-400/40' },
  Research:      { icon: Sparkles, tint: 'text-primary', ring: 'ring-primary/40' },
  Academic:      { icon: Medal, tint: 'text-primary', ring: 'ring-primary/30' },
  Leadership:    { icon: Flame, tint: 'text-rose-400', ring: 'ring-rose-400/30' },
  Cultural:      { icon: Sparkles, tint: 'text-violet-400', ring: 'ring-violet-400/30' },
  Sports:        { icon: Trophy, tint: 'text-emerald-400', ring: 'ring-emerald-400/30' },
  Community:     { icon: AwardIcon, tint: 'text-sky-400', ring: 'ring-sky-400/30' },
};

const categories: ('All' | AwardCategory)[] = [
  'All', 'World Record', 'Research', 'Leadership', 'Cultural', 'Sports', 'Community',
];

function FeaturedAward({ award }: { award: Award }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const Icon = categoryStyle[award.category].icon;

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] w-full overflow-hidden border-y border-border"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={awardsHero}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-amber-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-amber-400">
              Featured Honour
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.02] tracking-tight mb-6">
            Largest Keyboard <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent italic">
              Ensemble — 2014.
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {award.description}
          </p>

          {award.highlights && (
            <ul className="space-y-2 mb-8">
              {award.highlights.map(h => (
                <li key={h} className="text-sm md:text-base text-foreground/90 flex items-start gap-3">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono uppercase tracking-[0.2em]">
              <Icon className="w-3.5 h-3.5" />
              {award.category}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur border border-border text-muted-foreground text-xs font-mono uppercase tracking-[0.2em]">
              {award.issuer} · {award.year}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute inset-8 rounded-full border border-amber-400/30 ring-1 ring-amber-400/10" />
            <div className="absolute inset-16 rounded-full border border-amber-400/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Crown className="w-20 h-20 text-amber-400 mx-auto mb-4 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]" />
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-300/80">
                  Guinness · World · Record
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AwardCard({ award, index }: { award: Award; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const style = categoryStyle[award.category];
  const Icon = style.icon;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className={`group relative p-6 md:p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden`}
    >
      {/* Number watermark */}
      <span className="absolute -top-2 -right-2 text-[80px] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative">
        <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/60 ring-1 ${style.ring} mb-5`}>
          <Icon className={`w-3.5 h-3.5 ${style.tint}`} />
          <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${style.tint}`}>
            {award.category}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
          {award.title}
        </h3>

        <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-4">
          {award.issuer} · {award.year}
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {award.description}
        </p>

        {award.highlights && award.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {award.highlights.map(h => (
              <li key={h} className="text-xs text-foreground/80 flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {award.link && (
          <a
            href={award.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {award.link.label}
          </a>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </motion.article>
  );
}

export function AwardsSection({ withFeatured = true }: { withFeatured?: boolean } = {}) {
  const [filter, setFilter] = useState<'All' | AwardCategory>('All');
  const featured = awards.find(a => a.featured) ?? awards[0];
  const rest = awards.filter(a => a.id !== featured.id);
  const filtered = filter === 'All' ? rest : rest.filter(a => a.category === filter);

  return (
    <>
      {withFeatured && <FeaturedAward award={featured} />}

      {/* Editorial header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary">
                The Shelf
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              Recognitions, <br />
              <span className="text-primary italic">earned.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
              A growing shelf of awards, grants, leadership roles and community
              recognitions — across research, sport, culture and craft.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border transition-all ${
                    filter === c
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background/60 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((a, i) => (
            <AwardCard key={a.id} award={a} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="max-w-7xl mx-auto text-center py-16 text-muted-foreground text-sm">
            No awards in this category yet — more on the way.
          </div>
        )}
      </section>
    </>
  );
}

export default function AwardsPage() {
  return (
    <>
      <AwardsSection />
      <Footer />
    </>
  );
}

