import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code2, Cpu, Cog } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const roles = [
  "Building Intelligent Systems",
  "Crafting GenAI Solutions", 
  "Engineering IoT Platforms",
  "Developing ML Models"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, roleIndex]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,180,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,180,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground font-mono mb-8"
        >
          <span className="text-primary">~</span>
          {personalInfo.location}
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight mb-4"
        >
          <span className="text-foreground">Achyuth </span>
          <span className="text-primary">Mukund</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-muted-foreground font-mono mb-6 h-8"
        >
          <span className="text-primary">&gt;</span>{' '}
          <span>{displayText}</span>
          <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Software developer crafting intelligent systems at the intersection of{' '}
          <span className="text-primary font-medium">GenAI</span>,{' '}
          <span className="text-primary font-medium">IoT</span>, and{' '}
          <span className="text-primary font-medium">ML</span>. Shipping clean code that solves real problems.
        </motion.p>

        {/* Domain Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex justify-center gap-4 mb-8"
        >
          {[
            { icon: Code2, label: 'GenAI' },
            { icon: Cpu, label: 'IoT' },
            { icon: Cog, label: 'ML' }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <item.icon className="w-5 h-5" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px -10px hsl(var(--primary))' }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="px-8 py-3 bg-transparent border border-border text-foreground rounded-xl font-medium hover:bg-secondary/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: Github, href: personalInfo.social.github },
            { icon: Linkedin, href: personalInfo.social.linkedin },
            { icon: Mail, href: `mailto:${personalInfo.email}` }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/30 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <item.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
