import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { about } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Education() {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey in Computer Science, IoT, and Data Science
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {about.education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all ${
                  index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                }`}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 ${
                  index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                }`}>
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="clear-both">
                  {/* Degree */}
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  
                  {/* Specialization */}
                  <p className="text-primary font-medium mb-3">
                    Specialization: {edu.specialization}
                  </p>

                  {/* Institution */}
                  <div className={`flex items-center gap-2 text-muted-foreground mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{edu.institution}</span>
                  </div>

                  {/* Duration */}
                  <div className={`flex items-center gap-2 text-muted-foreground mb-3 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>

                  {/* Grade */}
                  <div className={`flex items-center gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <Award className="w-3.5 h-3.5" />
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Focus Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Academic Focus</h3>
          <p className="text-muted-foreground leading-relaxed">
            My academic path combines a strong foundation in Computer Science with specialized expertise in 
            <span className="text-primary font-medium"> Internet of Things (IoT)</span> and 
            <span className="text-primary font-medium"> Data Science</span>. At Shiv Nadar University Chennai, 
            I focus on embedded systems, sensor networks, and intelligent IoT solutions. My concurrent BS at 
            IIT Madras deepens my understanding of statistical modeling, machine learning, and data-driven 
            decision making — creating a unique blend of hardware-software innovation and analytical rigor.
          </p>
        </motion.div>

        {/* Languages Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 p-6 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {about.languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
