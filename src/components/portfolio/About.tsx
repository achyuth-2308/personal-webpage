import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Globe, Award, BookOpen } from 'lucide-react';
import { about, skills, certifications } from '@/data/portfolio';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-4xl font-display font-bold mt-2">About Me</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl"
          >
            {about.bio}
          </motion.p>

          {/* Education Cards */}
          <motion.div variants={itemVariants}>
            <h3 className="flex items-center gap-2 text-xl font-display font-semibold mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {about.education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-sm text-primary mb-2">{edu.specialization}</p>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="text-primary">{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants}>
            <h3 className="flex items-center gap-2 text-xl font-display font-semibold mb-6">
              <Globe className="w-5 h-5 text-primary" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {about.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="flex items-center gap-2 text-xl font-display font-semibold mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="flex items-center gap-2 text-xl font-display font-semibold mb-6">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <p className="font-medium text-foreground text-sm mb-1">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
