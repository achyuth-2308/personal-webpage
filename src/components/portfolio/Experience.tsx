import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Calendar, Building2, ChevronRight } from 'lucide-react';
import { experience } from '@/data/portfolio';

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExp = experience[selectedIndex];

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">02.</span>
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internships and research roles where I've built real-world systems
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left - Company List */}
          <div className="lg:w-[400px] space-y-3">
            {experience.map((exp, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedIndex(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  selectedIndex === i
                    ? 'bg-card border-primary/50 shadow-lg shadow-primary/5'
                    : 'bg-card/50 border-border hover:border-primary/30 hover:bg-card'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    selectedIndex === i ? 'bg-primary/20' : 'bg-secondary'
                  }`}>
                    <Building2 className={`w-5 h-5 ${selectedIndex === i ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold truncate ${selectedIndex === i ? 'text-foreground' : 'text-foreground/80'}`}>
                      {exp.company.split(',')[0]}
                    </h3>
                    <p className={`text-sm ${selectedIndex === i ? 'text-primary' : 'text-muted-foreground'}`}>
                      {exp.role}
                    </p>
                  </div>
                  {selectedIndex === i && (
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right - Experience Details */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border h-full"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{selectedExp.role}</h3>
                    <p className="text-primary font-medium">@ {selectedExp.company}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground">
                    {selectedExp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedExp.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedExp.location}
                  </span>
                </div>

                {/* Highlights */}
                {selectedExp.highlights.length > 0 && (
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {selectedExp.highlights.map((highlight, j) => (
                        <li key={j} className="flex gap-3 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {selectedExp.technologies.length > 0 && (
                  <div className="pt-6 border-t border-border/50">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}