import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, BookOpen, FileText, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { publications, researchPhilosophy, researchProfiles } from '@/data/portfolio';
import researchHero from '@/assets/research-hero.png';

// Import publication images
import iccidsPresentation from '@/assets/publications/iccids-presentation.png';
import iccidsCertificate from '@/assets/publications/iccids-certificate.png';
import igiGlobalWearable from '@/assets/publications/igi-global-wearable.png';

const imageMap: Record<string, string> = {
  'publications/iccids-presentation.png': iccidsPresentation,
  'publications/iccids-certificate.png': iccidsCertificate,
  'publications/igi-global-wearable.png': igiGlobalWearable,
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

// Official ResearchGate icon
function ResearchGateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.5-.67-.9a3.75 3.75 0 0 1-.135-.452 6.507 6.507 0 0 1-.075-.507 6.93 6.93 0 0 1-.035-.503 31.6 31.6 0 0 1 0-1.54c.009-.17.02-.336.036-.503.015-.167.04-.34.074-.507.036-.167.08-.32.136-.453.153-.4.363-.697.67-.9.308-.202.664-.352 1.21-.352.476 0 .873.092 1.137.238.264.145.46.34.595.558.134.218.22.42.26.604.038.183.057.308.057.376.047.093.093.14.14.14h1.228c.094 0 .14-.047.14-.14-.013-.18-.08-.455-.2-.825-.12-.37-.31-.756-.57-1.156-.26-.4-.614-.754-1.062-1.06-.448-.307-1.016-.51-1.714-.565zM4.078 7.9v9.138c0 .94.093 1.96.276 2.823.182.862.56 1.593 1.13 2.187.57.593 1.385.888 2.442.888.995 0 1.892-.306 2.563-.887.668-.582 1.105-1.318 1.348-2.103a6.2 6.2 0 0 0 .236-1.202c.03-.338.047-.574.047-.71v-.133c0-.094-.046-.14-.14-.14h-1.23c-.092 0-.14.046-.14.14v.102c0 .14-.01.343-.028.604-.02.26-.065.538-.14.832-.074.295-.195.556-.36.783-.166.226-.38.407-.644.542-.263.135-.59.203-.98.203-.432 0-.76-.09-.987-.27a1.51 1.51 0 0 1-.524-.643 3.04 3.04 0 0 1-.2-.827 6.2 6.2 0 0 1-.047-.766v-9.55c0-.094-.046-.14-.14-.14H4.22c-.093 0-.14.046-.14.14z"/>
    </svg>
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
  linkedinPost: string | null;
  mediumPost?: string | null;
  status: string;
  images?: string[];
  abstract: string;
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

      {/* Publication Card */}
      <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
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
      
      <div className="max-w-5xl mx-auto relative">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mb-12 rounded-2xl overflow-hidden"
        >
          <img
            src={researchHero}
            alt="Neural network visualization representing AI research"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Research & Publications
            </motion.h2>
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
          
          <div className="space-y-10">
            {publications.map((pub, i) => (
              <PublicationCard key={pub.title} pub={pub as PublicationData} index={i} />
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
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-xs text-muted-foreground">Published</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-background/50">
              <p className="text-2xl font-bold text-primary">1</p>
              <p className="text-xs text-muted-foreground">In Press</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-background/50">
              <p className="text-2xl font-bold text-primary">1</p>
              <p className="text-xs text-muted-foreground">Under Review</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
