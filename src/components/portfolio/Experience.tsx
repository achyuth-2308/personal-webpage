import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';
import { experience } from '@/data/portfolio';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-8"
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-4xl font-display font-bold mt-2">Experience</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Internships and research roles where I've built real-world systems
          </p>
        </motion.div>

        {/* Experience Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-[250px_1fr] gap-8"
        >
          {/* Sidebar */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {experience.map((exp, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveExp(i)}
                className={`px-4 py-3 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all ${
                  activeExp === i
                    ? 'bg-primary/10 border border-primary/30 text-primary'
                    : 'bg-card border border-border/50 text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ x: 4 }}
              >
                <p className="font-medium text-sm">{exp.company}</p>
                <p className="text-xs opacity-70">{exp.role}</p>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeExp}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {experience[activeExp].role}
                </h3>
                <p className="text-primary">
                  @ {experience[activeExp].company}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {experience[activeExp].type}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {experience[activeExp].duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience[activeExp].location}
              </span>
            </div>

            {experience[activeExp].highlights.length > 0 && (
              <ul className="space-y-3 mb-6">
                {experience[activeExp].highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {experience[activeExp].technologies.length > 0 && (
              <div>
                <p className="text-xs text-muted-foreground mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {experience[activeExp].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
