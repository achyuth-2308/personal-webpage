import { useRef, useState, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Music2, ExternalLink, Quote, Disc3, Crown, Sparkles } from 'lucide-react';
import { musicChapters, musicGallery, type MusicChapter } from '@/data/music';
import { Lightbox } from '@/components/portfolio/Lightbox';
import { Footer } from '@/components/portfolio/Footer';
import gwrCertificate from '@/assets/music/gwr-certificate.jpg';

const eraStyle: Record<MusicChapter['era'], { tint: string; ring: string; icon: typeof Disc3 }> = {
  Foundations:    { tint: 'text-primary',     ring: 'ring-primary/30',     icon: Disc3 },
  Stage:          { tint: 'text-rose-400',    ring: 'ring-rose-400/30',    icon: Music2 },
  'World Record': { tint: 'text-amber-400',   ring: 'ring-amber-400/40',   icon: Crown },
  Discipleship:   { tint: 'text-violet-400',  ring: 'ring-violet-400/30',  icon: Sparkles },
};

// ──────────────────────────────────────────────────────────────────────────────
// HERO — keyboard-key motif + the GWR moment as the marquee story
// ──────────────────────────────────────────────────────────────────────────────
function MusicHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] w-full overflow-hidden border-b border-border"
    >
      {/* Keyboard-key motif background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.07]">
          <KeyboardStrip />
        </div>
        <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-amber-400" />
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-amber-400">
            Side B — The Keyboard
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
              Twelve notes,
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-rose-300 bg-clip-text text-transparent italic">
                a lifetime
              </span>{' '}
              of phrasing.
            </h1>
            <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              The story behind the engineer — a keyboardist's lineage that runs
              from a school of music in Chennai, through a Guinness-record
              ensemble of 229 players, into the café and corporate stages of
              the city, and lands today at the feet of{' '}
              <a
                href="https://www.keyboardsathya.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-amber-400/60 underline-offset-4 hover:decoration-amber-400 transition-colors"
              >
                Keyboard Sathya
              </a>{' '}
              and KBS Inculcation.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              <Pill tint="amber">Guinness World Record · 2014</Pill>
              <Pill tint="rose">On the Streets of Chennai</Pill>
              <Pill tint="violet">KBSI · Disciple</Pill>
            </div>
          </motion.div>

          {/* Polaroid-style hero card — the GWR certificate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="lg:col-span-5 relative mx-auto"
          >
            <div className="relative bg-card border border-border rounded-sm p-3 pb-12 shadow-2xl shadow-amber-400/10 max-w-sm">
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-amber-400/5 via-transparent to-transparent pointer-events-none" />
              <img
                src={gwrCertificate}
                alt="Guinness World Records certificate — Achyuth Mukund"
                className="w-full h-auto rounded-sm"
                loading="eager"
              />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                  Officially · Amazing · 2014
                </p>
              </div>
              {/* Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-amber-200/30 backdrop-blur rotate-2 rounded-sm border border-amber-200/20" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function KeyboardStrip() {
  // Decorative SVG of a stylised piano keyboard — purely visual
  return (
    <svg
      viewBox="0 0 1600 220"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      {Array.from({ length: 28 }).map((_, i) => (
        <rect
          key={`w${i}`}
          x={i * 57}
          y={0}
          width={56}
          height={220}
          fill="hsl(var(--foreground))"
          opacity={0.9}
        />
      ))}
      {Array.from({ length: 28 }).map((_, i) => {
        // black keys are skipped after every 3rd and 7th white key in the octave
        const inOctave = i % 7;
        if (inOctave === 2 || inOctave === 6) return null;
        return (
          <rect
            key={`b${i}`}
            x={i * 57 + 38}
            y={0}
            width={36}
            height={130}
            fill="hsl(var(--background))"
          />
        );
      })}
    </svg>
  );
}

function Pill({ children, tint }: { children: React.ReactNode; tint: 'amber' | 'rose' | 'violet' | 'primary' }) {
  const map = {
    amber:  'bg-amber-400/10 border-amber-400/30 text-amber-300',
    rose:   'bg-rose-400/10 border-rose-400/30 text-rose-300',
    violet: 'bg-violet-400/10 border-violet-400/30 text-violet-300',
    primary:'bg-primary/10 border-primary/30 text-primary',
  } as const;
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-mono uppercase tracking-[0.2em] ${map[tint]}`}>
      {children}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// CHAPTER — alternating editorial layout, with optional pull-quote
// ──────────────────────────────────────────────────────────────────────────────
function Chapter({ chapter, index, onOpenImage }: {
  chapter: MusicChapter;
  index: number;
  onOpenImage: (id: string) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const style = eraStyle[chapter.era];
  const Icon = style.icon;
  const flip = index % 2 === 1;

  // Pull images for this chapter (max 2 inline)
  const chapterImages = useMemo(
    () => musicGallery.filter((g) => g.chapter === chapter.id),
    [chapter.id]
  );

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24 border-b border-border last:border-0"
    >
      {/* Track number */}
      <div className="lg:col-span-2 flex lg:flex-col items-start gap-4 lg:gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Track {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/60 ring-1 ${style.ring}`}>
          <Icon className={`w-3.5 h-3.5 ${style.tint}`} />
          <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${style.tint}`}>
            {chapter.era}
          </span>
        </span>
      </div>

      {/* Body */}
      <div className={`lg:col-span-6 ${flip ? 'lg:order-last' : ''}`}>
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3">
          {chapter.year}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] tracking-tight mb-3">
          {chapter.title}
        </h2>
        {chapter.subtitle && (
          <p className={`text-base md:text-lg font-medium mb-6 ${style.tint}`}>
            {chapter.subtitle}
          </p>
        )}

        {(chapter.guru || chapter.venue) && (
          <dl className="grid sm:grid-cols-2 gap-3 mb-6 text-sm">
            {chapter.guru && (
              <div className="flex flex-col gap-1 p-3 rounded-lg bg-background/60 border border-border">
                <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Under</dt>
                <dd className="text-foreground/90">{chapter.guru}</dd>
              </div>
            )}
            {chapter.venue && (
              <div className="flex flex-col gap-1 p-3 rounded-lg bg-background/60 border border-border">
                <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Stage</dt>
                <dd className="text-foreground/90">{chapter.venue}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="space-y-4 text-muted-foreground leading-relaxed text-base max-w-2xl">
          {chapter.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {chapter.pull && (
          <blockquote className="mt-8 pl-5 border-l-2 border-amber-400/60">
            <Quote className="w-4 h-4 text-amber-400/70 mb-2" />
            <p className="text-lg md:text-xl italic text-foreground/90 leading-snug">
              {chapter.pull}
            </p>
          </blockquote>
        )}

        {chapter.link && (
          <a
            href={chapter.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-amber-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {chapter.link.label}
          </a>
        )}
      </div>

      {/* Image stack */}
      <div className={`lg:col-span-4 ${flip ? 'lg:order-first' : ''} flex flex-col gap-4`}>
        {chapterImages.length === 0 && (
          <div className="aspect-[4/5] rounded-2xl border border-dashed border-border bg-background/40 flex items-center justify-center">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
              No image · yet
            </p>
          </div>
        )}
        {chapterImages.map((img, i) => (
          <motion.button
            key={img.id}
            onClick={() => onOpenImage(img.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative w-full overflow-hidden rounded-xl border border-border bg-card cursor-zoom-in ${
              img.aspect === 'portrait' ? 'aspect-[3/4]' :
              img.aspect === 'wide' ? 'aspect-[2/1]' :
              img.aspect === 'square' ? 'aspect-square' :
              'aspect-[4/3]'
            }`}
            aria-label={img.alt}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 line-clamp-2">
                {img.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.article>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────────
export default function MusicPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImages = useMemo(
    () => musicGallery.map((g) => ({ id: g.id, src: g.src, alt: g.alt, caption: g.caption })),
    []
  );

  const openImage = (id: string) => {
    const idx = musicGallery.findIndex((g) => g.id === id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  return (
    <>
      <MusicHero />

      {/* Editorial intro to chapters */}
      <section className="px-4 pt-24 pb-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary">
                The Lineage
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              Four chapters, <br />
              <span className="text-primary italic">one instrument.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
              A keyboardist isn't made in a year — they are pieced together by
              the gurus they sit under, the stages they show up to, and the
              records they get caught up in along the way. These are mine.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {musicChapters.map((chapter, i) => (
            <Chapter
              key={chapter.id}
              chapter={chapter}
              index={i}
              onOpenImage={openImage}
            />
          ))}
        </div>
      </section>

      {/* Closing — credits ribbon */}
      <section className="px-4 py-20 border-t border-border bg-gradient-to-b from-background to-amber-400/[0.02]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-amber-400/70 mb-4">
            With gratitude
          </p>
          <p className="text-lg md:text-2xl text-foreground/90 leading-relaxed font-light italic">
            Shri Raghavendra Udayakumar · Isaimaamani M. S. Martin ·
            Kalaimaamani Shri Sathyanarayanan — and every room that ever
            stayed silent for the first note.
          </p>
        </div>
      </section>

      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
