import { useRef, useState, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Quote, Crosshair, Award, Tent, Star, Shield } from 'lucide-react';
import { nccChapters, nccGallery, nccFacts } from '@/data/ncc';
import { Lightbox } from '@/components/portfolio/Lightbox';
import portrait from '@/assets/ncc/full-uniform-portrait.jpg';
import crest from '@/assets/ncc/ncc-crest.jpg';

const kickerIcon: Record<string, typeof Star> = {
  'Enrolment': Shield,
  'First Camp Wins': Award,
  'Sergeant & Parade Commander': Star,
  'Best Cadet — Twice Over': Award,
  'Camps & Weapon Training': Crosshair,
  "A Certificate · A Grade": Shield,
};

function NccHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] w-full overflow-hidden border-y border-border"
    >
      {/* Background — khaki/olive editorial wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-amber-500/[0.05] rounded-full blur-3xl" />
        {/* Diagonal grid — drill-square feel */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden>
          <defs>
            <pattern id="ncc-grid" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ncc-grid)" className="text-foreground" />
        </svg>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-emerald-500" />
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-emerald-400">
            Chapter II — The Parade Ground
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[1.05] tracking-tight pb-2">
              Sergeant.
              <br />
              <span className="inline-block bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent italic pr-2 pb-2">
                One (TN) Battalion.
              </span>
            </h1>
            <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Three years in khakis with the National Cadet Corps at{' '}
              <span className="text-foreground">D.A.V. Boys Senior Secondary School, Gopalapuram</span>{' '}
              — a school contingent affiliated to{' '}
              <span className="text-foreground">1 (Tamil Nadu) Battalion NCC</span>, under Madras "A"
              Group of the TN, P & A&N Directorate. Promoted to Sergeant and
              Parade Commander, leading 75 cadets. Awarded Best NCC Cadet by both
              the school and the battalion. Seven Republic Day Camps. Range time
              on the 7.62 mm SLR and the full series of 0.22 mm calibre rifles.
              NCC 'A' Certificate · A Grading.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {nccFacts.map((f) => (
                <div
                  key={f.label}
                  className="p-3 rounded-lg bg-background/60 border border-border backdrop-blur"
                >
                  <p className="text-2xl md:text-3xl font-bold text-foreground leading-none">
                    {f.value}
                  </p>
                  <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground leading-tight">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero image — full ceremonial portrait + cap badge inset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative mx-auto max-w-sm w-full"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-emerald-500/10">
              <img
                src={portrait}
                alt="Sergeant Achyuth Mukund in NCC ceremonial dress"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-300/90">
                  Cdt Sgt · A. Mukund
                </p>
                <p className="text-xs text-white/80 mt-1">D.A.V. Boys Gopalapuram · 1 (TN) Bn NCC</p>
              </div>
            </div>
            {/* Cap badge inset */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -6, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl shadow-amber-400/20 hidden md:block"
            >
              <img src={crest} alt="NCC cap badge" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        {/* Motto strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            एकता और अनुशासन
          </p>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            Unity & Discipline
          </p>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-emerald-400/80">
            2017 — 2020
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function NccChapterBlock({ chapter, index, onOpenImage, image }: {
  chapter: typeof nccChapters[number];
  index: number;
  onOpenImage: (id: string) => void;
  image?: typeof nccGallery[number];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = kickerIcon[chapter.kicker] ?? Tent;
  const flip = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24 border-b border-border last:border-0"
    >
      <div className="lg:col-span-2 flex lg:flex-col items-start gap-4 lg:gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Mark {String(index + 1).padStart(2, '0')}
        </span>
        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/60 ring-1 ring-emerald-400/30">
          <Icon className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-emerald-400">
            {chapter.kicker}
          </span>
        </span>
      </div>

      <div className={`lg:col-span-6 ${flip ? 'lg:order-last' : ''}`}>
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3">
          {chapter.year}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
          {chapter.title}
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed text-base max-w-2xl">
          {chapter.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {chapter.bullets && chapter.bullets.length > 0 && (
          <ul className="mt-8 space-y-2.5 max-w-2xl">
            {chapter.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] text-foreground/85 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {chapter.pull && (
          <blockquote className="mt-8 pl-5 border-l-2 border-emerald-400/60">
            <Quote className="w-4 h-4 text-emerald-400/70 mb-2" />
            <p className="text-lg md:text-xl italic text-foreground/90 leading-snug">
              {chapter.pull}
            </p>
          </blockquote>
        )}
      </div>

      <div className={`lg:col-span-4 ${flip ? 'lg:order-first' : ''}`}>
        {image && (
          <motion.button
            onClick={() => onOpenImage(image.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative w-full overflow-hidden rounded-xl border border-border bg-card cursor-zoom-in ${
              image.aspect === 'portrait' ? 'aspect-[3/4]' :
              image.aspect === 'wide' ? 'aspect-[2/1]' :
              image.aspect === 'square' ? 'aspect-square' :
              'aspect-[4/3]'
            }`}
            aria-label={image.alt}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 line-clamp-2">
                {image.caption}
              </p>
            </div>
          </motion.button>
        )}
      </div>
    </motion.article>
  );
}

export function NccSection({ withHero = true }: { withHero?: boolean } = {}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImages = useMemo(
    () => nccGallery.map((g) => ({
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
    const idx = nccGallery.findIndex((g) => g.id === id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  // Pair each chapter with a contextually relevant image
  const chapterImageMap: Record<string, string> = {
    'enrolment': 'uniform-kit',
    'inter-group': 'inter-group',
    'sergeant': 'best-cadet-close',
    'best-cadet': 'citation',
    'camps-rifles': 'rifles-lineup',
    'a-certificate': 'cert-2',
  };

  // Images NOT paired with chapters → shown in the contact-sheet gallery below
  const pairedIds = new Set(Object.values(chapterImageMap));
  const remaining = nccGallery.filter((g) => !pairedIds.has(g.id));

  return (
    <>
      {withHero && <NccHero />}

      {/* Editorial intro */}
      <section className="px-4 pt-24 pb-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-emerald-500" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-emerald-400">
                The File
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              Five marks <br />
              <span className="text-emerald-400 italic">on the parade card.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
              Read in order: enrolment, the first inter-group camp at Coimbatore,
              the Sergeant appointment, the two Best Cadet recognitions, and the
              long line of camps and range days that ran underneath all of it.
            </p>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {nccChapters.map((c, i) => (
            <NccChapterBlock
              key={c.id}
              chapter={c}
              index={i}
              onOpenImage={openImage}
              image={nccGallery.find((g) => g.id === chapterImageMap[c.id])}
            />
          ))}
        </div>
      </section>

      {/* Contact-sheet gallery — remaining images */}
      {remaining.length > 0 && (
        <section className="px-4 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-emerald-500" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-emerald-400">
                Contact Sheet
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {remaining.map((img) => (
                <motion.button
                  key={img.id}
                  onClick={() => openImage(img.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative overflow-hidden rounded-xl border border-border bg-card cursor-zoom-in ${
                    img.aspect === 'portrait' ? 'aspect-[3/4]' :
                    img.aspect === 'wide' ? 'aspect-[16/9]' :
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-2 left-2 right-2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/85 line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

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
