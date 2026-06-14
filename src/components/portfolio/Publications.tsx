import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, BookOpen, FileText, Linkedin, ChevronDown, ChevronUp, MapPin, Calendar, Newspaper, Sparkles, Plane } from 'lucide-react';
import { publications, researchPhilosophy, researchProfiles } from '@/data/portfolio';
import researchHero from '@/assets/research-hero.png';
import researchGateLogo from '@/assets/icons/researchgate-logo.png';

// Import publication images
import iccidsPresentation from '@/assets/publications/iccids-presentation.png';
import iccidsCertificate from '@/assets/publications/iccids-certificate.png';
import igiGlobalWearable from '@/assets/publications/igi-global-wearable.png';
import websci1 from '@/assets/publications/websci/websci-presenting-1.jpg';
import websci2 from '@/assets/publications/websci/websci-presenting-2.jpg';
import websci3 from '@/assets/publications/websci/websci-presenting-3.jpg';

const imageMap: Record<string, string> = {
  'publications/iccids-presentation.png': iccidsPresentation,
  'publications/iccids-certificate.png': iccidsCertificate,
  'publications/igi-global-wearable.png': igiGlobalWearable,
  'publications/websci/websci-presenting-1.jpg': websci1,
  'publications/websci/websci-presenting-2.jpg': websci2,
  'publications/websci/websci-presenting-3.jpg': websci3,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Official Google Scholar icon
function GoogleScholarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
    </svg>
  );
}

// Official ResearchGate icon using the actual logo
function ResearchGateIcon({ className }: { className?: string }) {
  return (
    <img src={researchGateLogo} alt="ResearchGate" className={className} />
  );
}

// Official ORCID icon
function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.684 3.18h1.359v11.08H6.685zm3.642 0h3.68c3.659 0 5.441 2.594 5.441 5.549 0 3.138-2.046 5.53-5.565 5.53h-3.556zm1.359 1.159v8.762h2.245c2.969 0 4.189-2.05 4.189-4.381 0-2.5-1.509-4.381-4.189-4.381z"/>
    </svg>
  );
}

const profileLinks = [
  {
    name: "Google Scholar",
    url: researchProfiles.googleScholar,
    Icon: GoogleScholarIcon,
    color: "text-blue-600 hover:text-blue-700",
    bgColor: "bg-blue-500/10 hover:bg-blue-500/20"
  },
  {
    name: "ResearchGate",
    url: researchProfiles.researchGate,
    Icon: ResearchGateIcon,
    color: "text-teal-600 hover:text-teal-700",
    bgColor: "bg-teal-500/10 hover:bg-teal-500/20"
  },
  {
    name: "ORCID",
    url: researchProfiles.orcid,
    Icon: OrcidIcon,
    color: "text-green-600 hover:text-green-700",
    bgColor: "bg-green-500/10 hover:bg-green-500/20"
  }
];

function highlightAuthor(authors: string): JSX.Element {
  const parts = authors.split(/(Achyuth Mukund)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "Achyuth Mukund" ? (
          <strong key={i} className="text-primary font-semibold">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'published':
      return (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
          ✓ Published
        </span>
      );
    case 'accepted':
      return (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-500 border border-violet-500/20 animate-pulse">
          🎉 Accepted
        </span>
      );
    case 'in-press':
      return (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
          📖 In Press
        </span>
      );
    case 'under-review':
      return (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
          🔍 Under Review
        </span>
      );
    default:
      return null;
  }
}

// Medium icon component
function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );
}

interface PublicationData {
  number: string;
  title: string;
  authors: string;
  year: string;
  venue: string;
  publisher: string | null;
  doi: string | null;
  arxiv?: string | null;
  linkedinPost: string | null;
  mediumPost?: string | null;
  newsArticle?: string | null;
  status: string;
  featured?: boolean;
  images?: string[];
  abstract: string;
  conferenceDate?: string;
  conferenceLocation?: string;
  sessionInfo?: string;
}

// ============================================================
// FEATURED SPOTLIGHT — for the WebSci '26 Germany presentation
// ============================================================
function FeaturedPublicationSpotlight({ pub }: { pub: PublicationData }) {
  const imgs = (pub.images ?? []).map(p => imageMap[p]).filter(Boolean);
  const [hero, side1, side2] = [imgs[0], imgs[1], imgs[2]];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mb-16 relative"
    >
      {/* Marquee label */}
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold tracking-[0.2em] uppercase shadow-md">
          <Sparkles className="w-3 h-3" />
          Featured · International Presentation
        </span>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
          <Plane className="w-3 h-3" /> Chennai → Braunschweig
        </span>
      </div>

      <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl shadow-primary/10">
        {/* Image collage */}
        {hero && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-1.5 p-1.5 bg-border/40">
            <div className="md:col-span-3 relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden rounded-2xl group">
              <img
                src={hero}
                alt="Achyuth Mukund presenting at ACM WebSci 2026, Technische Universität Braunschweig, Germany"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-xs font-semibold text-foreground border border-border">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Technische Universität Braunschweig, Germany
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-xs font-medium text-muted-foreground border border-border">
                  <Calendar className="w-3.5 h-3.5" />
                  {pub.conferenceDate}
                </span>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-rows-2 gap-1.5">
              {side1 && (
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-2xl group">
                  <img src={side1} alt="At the WebSci '26 podium" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
              )}
              {side2 && (
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-2xl group">
                  <img src={side2} alt="Presenting alongside co-author at WebSci '26" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Body */}
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-1 rounded">#{pub.number}</span>
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              ✓ Published in WebSci '26 Proceedings
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/20">
              ACM · 20 Years of Web Science
            </span>
          </div>

          <h3 className="text-2xl md:text-[28px] lg:text-3xl font-bold text-foreground leading-[1.15] tracking-tight mb-4">
            {pub.title}
          </h3>

          <p className="text-sm md:text-base text-muted-foreground mb-3">
            {highlightAuthor(pub.authors)}
          </p>

          {pub.sessionInfo && (
            <p className="text-xs md:text-sm text-muted-foreground/90 italic mb-5 border-l-2 border-primary/40 pl-3">
              {pub.sessionInfo}
            </p>
          )}

          <p className="text-sm md:text-base text-foreground/85 leading-relaxed mb-6">
            {pub.abstract}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {pub.doi && (
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/15 px-4 py-2 rounded-full transition-colors border border-primary/20">
                <BookOpen className="w-3.5 h-3.5" />
                ACM DOI · {pub.doi}
              </a>
            )}
            {pub.newsArticle && (
              <a href={pub.newsArticle} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 hover:bg-amber-500/15 px-4 py-2 rounded-full transition-colors border border-amber-500/20">
                <Newspaper className="w-3.5 h-3.5" />
                Featured by SNU Chennai
              </a>
            )}
            {pub.linkedinPost && (
              <a href={pub.linkedinPost} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 bg-blue-500/10 hover:bg-blue-500/15 px-4 py-2 rounded-full transition-colors border border-blue-500/20">
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn Story
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

interface PublicationCardProps {
  pub: PublicationData;
  index: number;
}

function PublicationCard({ pub, index }: PublicationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const abstractPreview = pub.abstract?.slice(0, 150);
  const hasMoreContent = pub.abstract && pub.abstract.length > 150;
  const pubImages = pub.images;
  const mediumPost = pub.mediumPost;

  return (
    <motion.article
      variants={itemVariants}
      className="group"
    >
      {/* Publication Images - Outside card, full width */}
      {pubImages && pubImages.length > 0 && (
        <div className={`mb-6 grid gap-4 ${pubImages.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
          {pubImages.map((imgPath, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-xl border border-border/50 hover:border-primary/30 transition-all group/img"
            >
              <img
                src={imageMap[imgPath]}
                alt={`${pub.title} - Image ${idx + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Conference Acceptance Banner */}
      {pub.status === 'accepted' && pub.conferenceDate && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-violet-500/10 via-primary/10 to-amber-500/10 border border-violet-500/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-amber-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏛️</span>
              <div>
                <p className="text-xs font-semibold text-violet-500 uppercase tracking-wider">Accepted at</p>
                <p className="text-sm font-bold text-foreground">{pub.venue}</p>
              </div>
            </div>
            <div className="sm:ml-auto flex flex-wrap gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 border border-border text-muted-foreground">
                📅 {pub.conferenceDate}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 border border-border text-muted-foreground">
                📍 {pub.conferenceLocation}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Publication Card */}
      <div className={`p-6 rounded-2xl bg-card border transition-all hover:shadow-xl hover:shadow-primary/5 ${pub.status === 'accepted' ? 'border-violet-500/30 hover:border-violet-500/50 ring-1 ring-violet-500/10' : 'border-border hover:border-primary/30'}`}>
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded shrink-0">
            #{pub.number}
          </span>
          {getStatusBadge(pub.status)}
        </div>
        
        {/* Title - No italics, better font */}
        <h4 className="font-bold text-foreground mb-3 leading-tight text-lg md:text-xl tracking-tight group-hover:text-primary transition-colors">
          {pub.title}
        </h4>
        
        <p className="text-sm text-muted-foreground mb-3">
          {highlightAuthor(pub.authors)}
        </p>
        
        <div className="flex flex-wrap gap-2 text-xs mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {pub.venue}
          </span>
          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
            {pub.year}
          </span>
          {pub.publisher && (
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
              {pub.publisher}
            </span>
          )}
        </div>

        {/* Abstract */}
        {pub.abstract && (
          <div className="mb-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isExpanded ? pub.abstract : `${abstractPreview}${hasMoreContent ? '...' : ''}`}
            </p>
            {hasMoreContent && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                {isExpanded ? (
                  <>Show less <ChevronUp className="w-3 h-3" /></>
                ) : (
                  <>Read more <ChevronDown className="w-3 h-3" /></>
                )}
              </button>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {pub.doi && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              DOI: {pub.doi}
            </a>
          )}
          {pub.arxiv && (
            <a
              href={pub.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline bg-amber-500/5 px-3 py-1.5 rounded-full hover:bg-amber-500/10 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              arXiv
            </a>
          )}
          {pub.linkedinPost && (
            <a
              href={pub.linkedinPost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-500 hover:underline bg-blue-500/5 px-3 py-1.5 rounded-full hover:bg-blue-500/10 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              View Post
            </a>
          )}
          {mediumPost && (
            <a
              href={mediumPost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:underline bg-foreground/5 px-3 py-1.5 rounded-full hover:bg-foreground/10 transition-colors"
            >
              <MediumIcon className="w-3.5 h-3.5" />
              View Story on Medium
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="min-h-screen py-24 px-4 pt-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative px-2">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary">
                Chapter 03 — Published Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
              Research, <br />
              <span className="text-primary italic">in print.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
              A growing body of peer-reviewed work at the intersection of
              privacy-preserving ML, generative AI and human-centred systems.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <div className="relative rounded-2xl overflow-hidden border border-border h-full min-h-[180px]">
              <img
                src={researchHero}
                alt="Neural network visualization representing AI research"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/90">
                <span className="px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border">Privacy-Preserving ML</span>
                <span className="px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border">GenAI · LLMs</span>
                <span className="px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border">IoT</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {profileLinks.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-full ${profile.bgColor} border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10`}
            >
              <profile.Icon className={`w-5 h-5 ${profile.color} transition-colors`} />
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {profile.name}
              </span>
              <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Research Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-16 p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">My Research Philosophy</h3>
              <div className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-4">
                {researchPhilosophy.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-8">
            <FileText className="w-5 h-5 text-primary" />
            Publications
          </h3>

          {/* Featured spotlight (WebSci '26) */}
          {(publications as PublicationData[])
            .filter(p => p.featured)
            .map(pub => (
              <FeaturedPublicationSpotlight key={pub.title} pub={pub} />
            ))}

          <div className="space-y-10">
            {(publications as PublicationData[])
              .filter(p => !p.featured)
              .map((pub, i) => (
                <PublicationCard key={pub.title} pub={pub} index={i} />
              ))}
          </div>
        </motion.div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
        >
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">📊</span>
            Research Impact
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl bg-background/50">
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-xs text-muted-foreground">Publications</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-background/50">
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-xs text-muted-foreground">Published</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-background/50">
              <p className="text-2xl font-bold text-primary">1</p>
              <p className="text-xs text-muted-foreground">In Press</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-background/50">
              <p className="text-2xl font-bold text-primary">1</p>
              <p className="text-xs text-muted-foreground">Int'l Conference</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
