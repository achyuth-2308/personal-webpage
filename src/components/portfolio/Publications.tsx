import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, FileText, BookOpen, Award } from 'lucide-react';
import { publications, certifications } from '@/data/portfolio';

export function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Publications & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research contributions and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <FileText className="w-5 h-5 text-primary" />
              📝 Research Publications
            </h3>
            
            <div className="space-y-4">
              {publications.map((pub, i) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <h4 className="font-semibold text-foreground mb-2 leading-tight">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary">{pub.venue}</span>
                    <span className="px-2 py-1 rounded bg-secondary">{pub.year}</span>
                    <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-500">
                      {pub.doi === 'Publishing in Progress' ? 'Under Review' : 'Published'}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    {pub.doi && pub.doi !== 'Publishing in Progress' && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <BookOpen className="w-3 h-3" />
                        DOI
                      </a>
                    )}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        PDF
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              <Award className="w-5 h-5 text-primary" />
              🏆 Certifications
            </h3>
            
            <div className="grid gap-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <span className="text-2xl">🎓</span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
