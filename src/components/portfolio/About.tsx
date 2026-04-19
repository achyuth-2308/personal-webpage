import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Brain, Sparkles } from 'lucide-react';
import profileImage from '@/assets/achyuth-photo.jpg';

const stats = [
  { label: 'Projects', value: '15+' },
  { label: 'Publications', value: '3' },
  { label: 'Certifications', value: '10+' }
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
  { emoji: '🏏', label: 'Cricket' },
  { emoji: '🎹', label: 'Music' },
  { emoji: '✈️', label: 'Aviation' },
  { emoji: '🚗', label: 'Automobiles' },
  { emoji: '🤖', label: 'IoT' },
  { emoji: '🥋', label: 'Martial Arts' }
];

const languages = ['English', 'Tamil', 'Hindi', 'Sanskrit'];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        {/* Main Content - Image Left, Text Right */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
          {/* Profile Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src={profileImage}
                alt="Achyuth Mukund"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats below image */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate <span className="text-primary font-medium">Software Developer</span> and{' '}
              <span className="text-primary font-medium">AI Engineer</span> currently pursuing a dual degree —{' '}
              <span className="text-foreground font-semibold">B.Tech in Computer Science & Engineering (IoT)</span>{' '}
              at Shiv Nadar University Chennai and{' '}
              <span className="text-foreground font-semibold">B.S. in Data Science and Applications</span> at IIT Madras.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in technology is driven by curiosity and a desire to build intelligent systems that solve real-world problems. From developing{' '}
              <span className="text-primary font-medium">GenAI-powered applications</span> to designing{' '}
              <span className="text-primary font-medium">IoT environmental monitoring systems</span>, I thrive at the intersection of hardware and software innovation.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond coding, I'm an avid <span className="text-foreground font-semibold">musician</span>{' '}
              (keyboardist who's performed at multiple gigs), a{' '}
              <span className="text-foreground font-semibold">cricket enthusiast</span>{' '}
              (right arm - medium pace bowler and batsman), and an active contributor to campus leadership through MUN societies and cultural initiatives. I believe in building technology with purpose and creativity.
            </p>
          </motion.div>
        </div>

        {/* Specialization Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {specializations.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <spec.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{spec.title}</h3>
              <p className="text-sm text-muted-foreground">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Beyond Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Beyond Code</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {interests.map((interest) => (
              <span
                key={interest.label}
                className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium"
              >
                {interest.emoji} {interest.label}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Languages:</span>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
