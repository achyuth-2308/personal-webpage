import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, Building2 } from 'lucide-react';
import { timeline, achievements } from '@/data/portfolio';

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-4xl font-display font-bold mt-2">Journey & Achievements</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A timeline of my academic and professional milestones
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="flex items-center gap-2 text-xl font-display font-semibold mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              Timeline
            </h3>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
              
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Dot */}
                    <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    </div>
                    
                    <div className="flex-1 pb-2">
                      <span className="text-xs text-primary font-mono">{item.year}</span>
                      <p className="text-foreground group-hover:text-primary transition-colors">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="flex items-center gap-2 text-xl font-display font-semibold mb-6">
              <Award className="w-5 h-5 text-primary" />
              Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground">{ach.title}</h4>
                    <span className="text-xs text-primary font-mono">{ach.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{ach.description}</p>
                  <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    {ach.organization}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
