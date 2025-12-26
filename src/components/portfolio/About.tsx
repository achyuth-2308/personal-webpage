import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Brain, Sparkles, Music, Plane, Car, Swords } from 'lucide-react';
import { about, personalInfo } from '@/data/portfolio';

const stats = [
  { value: '15+', label: 'Projects' },
  { value: '3', label: 'Publications' },
  { value: '10+', label: 'Certifications' }
];

const specializations = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern frameworks and best practices'
  },
  {
    icon: Cpu,
    title: 'IoT Systems',
    description: 'Designing smart solutions with ESP32, sensors, and embedded systems'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Developing ML models with TensorFlow, PyTorch, and scikit-learn'
  },
  {
    icon: Sparkles,
    title: 'GenAI Innovation',
    description: 'Leveraging LLMs, RAG systems, and multi-agent architectures'
  }
];

const interests = [
  { icon: '🏏', label: 'Cricket' },
  { icon: '🎹', label: 'Music' },
  { icon: '✈️', label: 'Aviation' },
  { icon: '🚗', label: 'Automobiles' },
  { icon: '🤖', label: 'IoT' },
  { icon: '🥋', label: 'Martial Arts' }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile Image Placeholder */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
              <span className="text-6xl font-bold text-primary/40">AM</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card border border-border"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Software Developer and AI Engineer currently pursuing a dual degree — <span className="text-foreground font-medium">B.Tech in Computer Science & Engineering (IoT)</span> at Shiv Nadar University Chennai and <span className="text-foreground font-medium">BS in Data Science</span> at IIT Madras.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology is driven by curiosity and a desire to build intelligent systems that solve real-world problems. From developing GenAI-powered applications to designing IoT environmental monitoring systems, I thrive at the intersection of hardware and software innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm an avid <span className="text-foreground font-medium">musician</span> (keyboardist who's performed at multiple gigs), a <span className="text-foreground font-medium">cricket enthusiast</span> (pace bowler & batsman), and an active contributor to campus leadership through MUN societies and cultural initiatives.
              </p>
            </div>

            {/* Specializations */}
            <div className="grid sm:grid-cols-2 gap-4">
              {specializations.map((spec, i) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <spec.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Beyond Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4">Beyond Code</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-foreground"
                  >
                    {interest.icon} {interest.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-sm text-muted-foreground mb-3">Languages:</h3>
              <div className="flex flex-wrap gap-2">
                {about.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
