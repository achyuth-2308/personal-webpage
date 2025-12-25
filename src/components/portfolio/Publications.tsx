import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, BookOpen, FileText, Building2 } from 'lucide-react';
import { publications } from '@/data/portfolio';

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
          className="mb-8"
        >
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-4xl font-display font-bold mt-2">Publications</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Research work published in international journals and conferences
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group relative"
            >
              <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                {/* Number */}
                <div className="hidden sm:flex items-start">
                  <span className="text-4xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {pub.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {pub.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {pub.venue}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {pub.publisher}
                    </span>
                  </div>

                  {pub.doi && (
                    <p className="text-xs text-muted-foreground/60">
                      DOI: {pub.doi}
                    </p>
                  )}
                </div>

                {/* Year & Link */}
                <div className="flex flex-col items-end justify-between">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {pub.year}
                  </span>
                  {pub.link && (
                    <motion.a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mt-12"
        >
          {[
            { value: '3', label: 'Publications' },
            { value: '2025', label: 'Latest Year' },
            { value: '3+', label: 'Publishers' }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
              <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
