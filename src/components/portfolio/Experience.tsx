import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '@/data/portfolio';

// Import company logos
import prodaptLogo from '@/assets/logos/prodapt-logo.png';
import iiitdmLogo from '@/assets/logos/iiitdm-logo.png';
import suvidhaLogo from '@/assets/logos/suvidha-logo.png';
import logitechLogo from '@/assets/logos/logitech-logo.png';

// Map company names to logos
const companyLogos: Record<string, string> = {
  'Logitech': logitechLogo,
  'Prodapt Solutions Pvt. Ltd.': prodaptLogo,
  'Indian Institute of Information Technology, Design and Manufacturing (IIIT-D&M), Kancheepuram': iiitdmLogo,
  'Suvidha Foundation': suvidhaLogo,
};

// Get short company name for display
const getShortCompanyName = (company: string) => {
  if (company.includes('Prodapt')) return 'Prodapt';
  if (company.includes('IIIT')) return 'IIIT-D&M';
  if (company.includes('Suvidha')) return 'Suvidha Foundation';
  return company.split(',')[0];
};

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
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internships and research roles where I've built real-world systems
          </p>
        </motion.div>

        {/* Career Ladder Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Career Timeline Ladder */}
          <div className="lg:w-[380px] relative">
            {/* Vertical ladder line */}
            <div className="absolute left-[28px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden lg:block" />
            
            <div className="space-y-4">
              {experience.map((exp, i) => {
                const isSelected = selectedIndex === i;
                const logo = companyLogos[exp.company];
                
                return (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    onClick={() => setSelectedIndex(i)}
                    className={`w-full text-left group relative ${isSelected ? 'z-10' : ''}`}
                  >
                    {/* Timeline node */}
                    <div className="flex items-center gap-4">
                      {/* Logo circle node */}
                      <motion.div 
                        className={`relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
                          isSelected 
                            ? 'bg-background ring-4 ring-primary shadow-lg shadow-primary/30' 
                            : 'bg-card ring-2 ring-border group-hover:ring-primary/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {logo ? (
                          <img 
                            src={logo} 
                            alt={exp.company} 
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <span className="text-lg font-bold text-primary">
                            {exp.company.charAt(0)}
                          </span>
                        )}
                        {/* Pulse animation for selected */}
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary/20"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>

                      {/* Company info card */}
                      <div className={`flex-1 p-4 rounded-xl border transition-all duration-300 ${
                        isSelected
                          ? 'bg-card border-primary/50 shadow-lg shadow-primary/10'
                          : 'bg-card/50 border-border group-hover:border-primary/30 group-hover:bg-card'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="min-w-0">
                            <h3 className={`font-semibold truncate transition-colors ${
                              isSelected ? 'text-foreground' : 'text-foreground/80'
                            }`}>
                              {getShortCompanyName(exp.company)}
                            </h3>
                            <p className={`text-sm transition-colors ${
                              isSelected ? 'text-primary' : 'text-muted-foreground'
                            }`}>
                              {exp.role}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {exp.duration}
                            </p>
                          </div>
                          <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-all ${
                            isSelected 
                              ? 'text-primary translate-x-1' 
                              : 'text-muted-foreground group-hover:text-primary'
                          }`} />
                        </div>
                      </div>
                    </div>

                    {/* Connector line between nodes (mobile hidden) */}
                    {i < experience.length - 1 && (
                      <div className="hidden lg:block absolute left-[27px] top-[56px] w-0.5 h-4 bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right - Experience Details */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border h-full overflow-hidden"
              >
                {/* Background logo watermark */}
                {companyLogos[selectedExp.company] && (
                  <div className="absolute right-4 top-4 w-24 h-24 opacity-10 pointer-events-none">
                    <img 
                      src={companyLogos[selectedExp.company]} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 relative">
                  <div className="flex items-start gap-4">
                    {/* Company logo */}
                    {companyLogos[selectedExp.company] && (
                      <div className="w-16 h-16 rounded-xl bg-background border border-border p-2 flex items-center justify-center shadow-md">
                        <img 
                          src={companyLogos[selectedExp.company]} 
                          alt={selectedExp.company}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{selectedExp.role}</h3>
                      <p className="text-primary font-medium">{getShortCompanyName(selectedExp.company)}</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground bg-secondary/50">
                    {selectedExp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {selectedExp.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {selectedExp.location}
                  </span>
                </div>

                {/* Highlights */}
                {selectedExp.highlights.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                      Key Contributions
                    </h4>
                    <ul className="space-y-4">
                      {selectedExp.highlights.map((highlight, j) => (
                        <motion.li 
                          key={j} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.1 }}
                          className="flex gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </motion.li>
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
                      {selectedExp.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium"
                        >
                          {tech}
                        </motion.span>
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
