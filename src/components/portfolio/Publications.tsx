import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, BookOpen, Award, GraduationCap, FileText, Linkedin } from 'lucide-react';
import { publications, certifications, researchIntro, researchProfiles } from '@/data/portfolio';
import researchHero from '@/assets/research-hero.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const profileLinks = [
  {
    name: "Google Scholar",
    url: researchProfiles.googleScholar,
    icon: "📚",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "ResearchGate",
    url: researchProfiles.researchGate,
    icon: "🔬",
    color: "from-teal-500 to-teal-600"
  },
  {
    name: "ORCID",
    url: researchProfiles.orcid,
    icon: "🆔",
    color: "from-green-500 to-green-600"
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
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
          ✓ Published
        </span>
      );
    case 'in-press':
      return (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
          📖 In Press
        </span>
      );
    case 'under-review':
      return (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
          🔍 Under Review
        </span>
      );
    default:
      return null;
  }
}

export function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
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
          className="flex flex-wrap gap-3 mb-8"
        >
          {profileLinks.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="text-lg">{profile.icon}</span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {profile.name}
              </span>
              <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Research Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-16 p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">My Research Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {researchIntro}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Publications - Takes 3 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <FileText className="w-5 h-5 text-primary" />
              Publications
            </h3>
            
            <div className="space-y-6">
              {publications.map((pub, i) => (
                <motion.article
                  key={pub.title}
                  variants={itemVariants}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      #{pub.number}
                    </span>
                    {getStatusBadge(pub.status)}
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2 leading-tight text-lg group-hover:text-primary transition-colors">
                    <em>{pub.title}</em>
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
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Certifications - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            
            <div className="grid gap-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 text-primary shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm truncate group-hover:text-primary transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
            >
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-xl">📊</span>
                Research Impact
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-xl bg-background/50">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-xs text-muted-foreground">Publications</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-background/50">
                  <p className="text-2xl font-bold text-primary">2</p>
                  <p className="text-xs text-muted-foreground">Published</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-background/50">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-xs text-muted-foreground">In Press</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-background/50">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-xs text-muted-foreground">Under Review</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
