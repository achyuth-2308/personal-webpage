import { useRef, useState, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Activity, ExternalLink, Target, Trophy, Users } from 'lucide-react';
import { cricketProfile, cricketTeams, cricketGallery, type CricketTeam } from '@/data/cricket';
import { Lightbox } from '@/components/portfolio/Lightbox';
import snuPortrait from '@/assets/cricket/snu-team-portrait.jpg';

const tintMap: Record<CricketTeam['tint'], { text: string; ring: string; bg: string; line: string }> = {
  primary: { text: 'text-primary',     ring: 'ring-primary/30',     bg: 'bg-primary/[0.06]',     line: 'bg-primary' },
  emerald: { text: 'text-emerald-400', ring: 'ring-emerald-400/30', bg: 'bg-emerald-400/[0.07]', line: 'bg-emerald-400' },
  sky:     { text: 'text-sky-400',     ring: 'ring-sky-400/30',     bg: 'bg-sky-400/[0.07]',     line: 'bg-sky-400' },
  amber:   { text: 'text-amber-400',   ring: 'ring-amber-400/30',   bg: 'bg-amber-400/[0.07]',   line: 'bg-amber-400' },
};

// ─────────────────────────────────────────────────────────────────────────────
// HERO — pitch & scoreboard motif. Used only when the chapter renders standalone.
// ─────────────────────────────────────────────────────────────────────────────
function CricketHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-[88vh] w-full overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute top-1/3 right-0 w-[36rem] h-[36rem] bg-emerald-500/[0.08] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-sky-400/[0.06] rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-emerald-400" />
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-emerald-400">
            Side C — The Pitch
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.98] tracking-tight">
              Twenty-two yards,
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-sky-300 bg-clip-text text-transparent italic">
                a red ball, and a long run-up.
              </span>
            </h1>
            <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              The other practice — right-arm medium pace bowling. Trained at{' '}
              <span className="text-foreground">Kedar&rsquo;s Cricket Academy, Chennai</span> and
              played for <span className="text-foreground">Shiv Nadar University Chennai</span> at
              university level. Today the whites come out most weekends for{' '}
              <span className="text-foreground">New Eagles XI</span> and the{' '}
              <span className="text-foreground">Logitech Engineering &amp; Design</span> side.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              <Pill tint="emerald">Right-arm Medium Pace</Pill>
              <Pill tint="sky">New Eagles XI</Pill>
              <Pill tint="primary">Logitech E&amp;D</Pill>
              <Pill tint="amber">Kedar&rsquo;s Academy · Trained</Pill>
            </div>

            <a
              href={cricketProfile.cricHeroesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-emerald-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View full CricHeroes player profile
            </a>
          </motion.div>

          {/* Scorecard-style hero card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-5 shadow-2xl shadow-emerald-400/[0.06]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-400">
                  Player Card
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  AM · #—
                </span>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-border mb-4">
                <img
                  src={snuPortrait}
                  alt="Achyuth Mukund in Shiv Nadar University Chennai cricket whites"
                  className="w-full h-64 object-cover object-center"
                  loading="eager"
                />
              </div>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-background/60 border border-border">
                  <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Bowling</dt>
                  <dd className="text-foreground/90 mt-1">Right-arm Medium</dd>
                </div>
                <div className="p-3 rounded-lg bg-background/60 border border-border">
                  <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Batting</dt>
                  <dd className="text-foreground/90 mt-1">Right-hand</dd>
                </div>
                <div className="p-3 rounded-lg bg-background/60 border border-border col-span-2">
                  <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Base</dt>
                  <dd className="text-foreground/90 mt-1">{cricketProfile.baseCity}</dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}

function Pill({ children, tint }: { children: React.ReactNode; tint: CricketTeam['tint'] }) {
  const map: Record<CricketTeam['tint'], string> = {
    primary: 'bg-primary/10 border-primary/30 text-primary',
    emerald: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-300',
    sky:     'bg-sky-400/10 border-sky-400/30 text-sky-300',
    amber:   'bg-amber-400/10 border-amber-400/30 text-amber-300',
  };
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-mono uppercase tracking-[0.2em] ${map[tint]}`}>
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Teams — a roster grid
// ─────────────────────────────────────────────────────────────────────────────
function TeamsRoster() {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-emerald-400" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-emerald-400">
                The Roster
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
              Four sides, <span className="text-emerald-400 italic">one bowling action.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
              From an academy net in Chennai to corporate league fixtures — the
              teams that have shaped, and still call up, a right-arm medium pacer.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {cricketTeams.map((team, i) => {
            const t = tintMap[team.tint];
            return (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-5 md:p-6 overflow-hidden hover:border-foreground/30 transition-colors"
              >
                <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl ${t.bg}`} />
                <div className="relative flex items-start justify-between gap-3 mb-3">
                  <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/60 ring-1 ${t.ring}`}>
                    <Users className={`w-3.5 h-3.5 ${t.text}`} />
                    <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${t.text}`}>
                      {team.period}
                    </span>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="relative text-lg md:text-xl font-semibold text-foreground leading-snug">
                  {team.name}
                </h3>
                <p className={`relative mt-1 text-sm font-medium ${t.text}`}>{team.role}</p>
                <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
                  {team.blurb}
                </p>
                <span className={`absolute left-0 bottom-0 h-[3px] w-full ${t.line} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stat strip + gallery + CricHeroes CTA
// ─────────────────────────────────────────────────────────────────────────────
function StatStrip() {
  const items = [
    { icon: Target,   label: 'Discipline', value: 'Right-arm Medium Pace' },
    { icon: Activity, label: 'Frequency',  value: 'Weekend fixtures · year-round' },
    { icon: Trophy,   label: 'Honours',    value: "Best Batsman · Kedar's Academy '14—15" },
  ];
  return (
    <section className="px-4 py-12 border-t border-border bg-gradient-to-b from-background to-emerald-500/[0.02]">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/40">
            <Icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                {label}
              </p>
              <p className="text-sm md:text-base text-foreground mt-1">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FromTheField({ onOpenImage }: { onOpenImage: (id: string) => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section ref={ref} className="px-4 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-12 bg-emerald-400" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-emerald-400">
            From the Field
          </span>
        </div>

        {/* Asymmetric photo grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {cricketGallery.map((img, i) => {
            const span =
              i === 0 ? 'col-span-12 md:col-span-5 row-span-2 aspect-[3/4]' :
              i === 1 ? 'col-span-12 sm:col-span-6 md:col-span-7 aspect-[16/10]' :
              i === 2 ? 'col-span-12 sm:col-span-6 md:col-span-4 aspect-[4/3]' :
                        'col-span-12 sm:col-span-12 md:col-span-3 aspect-[3/4]';
            return (
              <motion.button
                key={img.id}
                onClick={() => onOpenImage(img.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                whileHover={{ scale: 1.01 }}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card cursor-zoom-in ${span}`}
                aria-label={img.alt}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 line-clamp-2">
                    {img.caption}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CricHeroesCTA() {
  return (
    <section className="px-4 py-16 border-t border-border">
      <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400 mb-2">
            Live scorecards
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
            Match-by-match stats on CricHeroes
          </h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            Wickets, overs bowled and batting figures — kept current across every
            fixture for New Eagles XI and Logitech E&amp;D.
          </p>
        </div>
        <a
          href={cricketProfile.cricHeroesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-400/40 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/15 transition-colors text-sm font-medium whitespace-nowrap"
        >
          Open Profile <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION — exported for use inside OffTheClockPage
// ─────────────────────────────────────────────────────────────────────────────
export function CricketSection({ withHero = true }: { withHero?: boolean } = {}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImages = useMemo(
    () => cricketGallery.map((g) => ({
      id: g.id,
      src: g.src,
      alt: g.alt,
      caption: g.caption,
      aspectRatio: (g.aspect === 'portrait'
        ? 'portrait'
        : g.aspect === 'square'
        ? 'square'
        : 'landscape') as 'portrait' | 'landscape' | 'square',
    })),
    []
  );

  const openImage = (id: string) => {
    const idx = cricketGallery.findIndex((g) => g.id === id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  return (
    <>
      {withHero && <CricketHero />}
      <TeamsRoster />
      <StatStrip />
      <FromTheField onOpenImage={openImage} />
      <CricHeroesCTA />
      {lightboxIndex !== null && (
        <Lightbox
          isOpen={lightboxIndex !== null}
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}

export default function CricketPage() {
  return <CricketSection withHero={true} />;
}
