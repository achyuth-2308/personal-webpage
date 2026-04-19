import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  GraduationCap, Calendar, MapPin, Award, BookOpen, Languages,
} from 'lucide-react';
import { about, certifications } from '@/data/portfolio';
import { CampusLife } from './CampusLife';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Official logo URLs/icons for certification issuers
const issuerLogos: Record<string, string> = {
  'Postman': 'https://voyager.postman.com/logo/postman-logo-icon-orange.svg',
  'Coursera': 'https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-v2-194x194.png',
  'IBM': 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'IIT Kharagpur - NPTEL': 'https://nptel.ac.in/content/nptelfavicon.png',
  'HP Foundation': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
  'CyberTEA - IIIT Sri City': 'https://www.iiits.ac.in/wp-content/uploads/2019/08/IIITS-logo-1.png',
  'IIT Delhi - NPTEL': 'https://nptel.ac.in/content/nptelfavicon.png',
};

interface CertificationCardProps {
  name: string;
  issuer: string;
  index: number;
}

function CertificationCard({ name, issuer, index }: CertificationCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const logoUrl = issuerLogos[issuer];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Background Logo Watermark */}
      {logoUrl && (
        <div className="absolute top-3 right-3 w-10 h-10 opacity-10 group-hover:opacity-20 transition-opacity">
          <img
            src={logoUrl}
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      )}

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
          <Award className="w-4 h-4 text-primary" />
        </div>

        {/* Content */}
        <h4 className="font-semibold text-foreground text-sm mb-2 pr-10 leading-tight">
          {name}
        </h4>
        
        <div className="flex items-center gap-2">
          {logoUrl && (
            <img
              src={logoUrl}
              alt={issuer}
              className="w-3.5 h-3.5 object-contain"
              loading="lazy"
            />
          )}
          <span className="text-xs text-muted-foreground">{issuer}</span>
        </div>
      </div>

      {/* Hover indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-b-xl"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="min-h-screen py-24 px-4 pt-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in Computer Science, IoT, and Data Science
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-3xl mx-auto mb-20"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {about.education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex gap-6 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex w-16 flex-shrink-0 justify-center">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />
              </div>

              {/* Card */}
              <div className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {edu.specialization}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {edu.institution}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      <Award className="w-4 h-4" />
                      {edu.grade}
                    </div>

                    {/* Activities & Coursework — only when present */}
                    {(edu.activities?.length || edu.coursework?.length) && (
                      <div className="mt-6 space-y-6">
                        {edu.activities?.length ? (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
                                Activities & Societies
                              </span>
                              <span className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {edu.activities.map((act) => {
                                const Icon = activityIconMap[act.icon] ?? Sparkles;
                                return (
                                  <motion.div
                                    key={act.title}
                                    whileHover={{ y: -2 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="group/act relative p-4 rounded-xl bg-background/60 border border-border hover:border-primary/40 hover:bg-background transition-all overflow-hidden"
                                  >
                                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary/5 group-hover/act:bg-primary/10 transition-colors" />
                                    <div className="relative flex items-start gap-3">
                                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/act:bg-primary/20 transition-colors">
                                        <Icon className="w-4 h-4 text-primary" />
                                      </div>
                                      <div className="min-w-0">
                                        <h4 className="text-sm font-semibold text-foreground leading-snug mb-1">
                                          {act.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                          {act.description}
                                        </p>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        ) : null}

                        {edu.coursework?.length ? (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
                                Relevant Coursework
                              </span>
                              <span className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course) => (
                                <span
                                  key={course}
                                  className="px-3 py-1.5 rounded-full bg-secondary/70 text-foreground text-xs font-medium border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Focus & Languages Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20"
        >
          {/* Academic Focus */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Academic Focus</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Generative AI & Large Language Models</li>
              <li>• Privacy-Preserving Machine Learning</li>
              <li>• Internet of Things (IoT)</li>
              <li>• Data Science & Analytics</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {about.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Professional Development
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Certifications
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Industry-recognized certifications in cloud computing, AI/ML, API development, and software engineering
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.name}
                name={cert.name}
                issuer={cert.issuer}
                index={index}
              />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{certifications.length}+</div>
              <div className="text-xs text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-xs text-muted-foreground">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-xs text-muted-foreground">Domains</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}