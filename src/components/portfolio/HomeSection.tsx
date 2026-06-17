import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Code2, Cpu, Brain, Sparkles, MapPin, Cloud, GitBranch, CircuitBoard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from '@/data/portfolio';
import profileImage from '@/assets/achyuth-photo.jpg';

// Custom YouTube icon component
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Custom Instagram icon component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const stats = [
  { label: 'Projects', value: '15+' },
  { label: 'Publications', value: '4' },
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

const roleTags = ['Software Developer', 'IoT Engineer', 'ML Researcher', 'GenAI Builder'];

export function HomeSection() {
  const navigate = useNavigate();

  const socials = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: YouTubeIcon, href: personalInfo.social.youtube, label: 'YouTube' },
    { icon: InstagramIcon, href: personalInfo.social.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section — editorial split layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        {/* Soft ambient backdrop (hero-only theme accent) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 18% 30%, hsl(var(--primary) / 0.10), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 75%, hsl(var(--accent) / 0.08), transparent 65%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left column — text */}
            <div className="text-left">
              {/* Kicker */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6"
              >
                <span className="h-px w-8 bg-border" />
                <span>Portfolio · 2026</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground/80">
                  <MapPin className="w-3 h-3" />
                  Chennai, India
                </span>
              </motion.div>

              {/* Name — single color, generous tracking */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-display font-semibold text-foreground leading-[0.95] tracking-tight text-[clamp(2.75rem,7.2vw,5.75rem)]"
              >
                Achyuth Mukund
              </motion.h1>

              {/* Subtitle line */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-5 text-lg sm:text-xl text-foreground/80 max-w-xl"
              >
                Engineer, researcher and occasional keyboardist —
                building systems where hardware, data and language models actually have to work together.
              </motion.p>

              {/* Role pills */}
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {roleTags.map((role) => (
                  <li
                    key={role}
                    className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground"
                  >
                    {role}
                  </li>
                ))}
              </motion.ul>

              {/* Education line — quieter, no rainbow highlights */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed border-l-2 border-border pl-4"
              >
                Currently pursuing a <span className="text-foreground">B. Tech in Computer Science &amp; Engineering (IoT)</span>{' '}
                at Shiv Nadar University Chennai, alongside a <span className="text-foreground">B.S. in Data Science &amp; Applications</span>{' '}
                from IIT Madras.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <button
                  onClick={() => navigate('/projects')}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-border text-foreground hover:bg-secondary/60 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  Get in touch →
                </button>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex items-center gap-5 text-muted-foreground"
              >
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="hover:text-foreground transition-colors"
                  >
                    <item.icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right column — portrait card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] w-full max-w-sm ml-auto">
                {/* Frame offset */}
                <div className="absolute -inset-3 rounded-[28px] border border-border" />
                <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-card">
                  <img
                    src={profileImage}
                    alt="Achyuth Mukund"
                    className="h-full w-full object-cover"
                  />
                  {/* Caption strip */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-background/90 via-background/60 to-transparent">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-foreground/80">
                      <span>Est. Chennai</span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* About Section (Merged) */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate <span className="text-primary font-medium">Software Developer</span> and{' '}
                <span className="text-primary font-medium">AI Engineer</span> currently pursuing a dual degree —{' '}
                <span className="text-foreground font-semibold">B. Tech (Bachelor of Technology) in Computer Science and Engineering (Internet of Things)</span>{' '}
                at Shiv Nadar University Chennai and{' '}
                <span className="text-foreground font-semibold">B.S. (Bachelor of Science) in Data Science and Applications</span> at Indian Institute of Technology (IIT), Madras.
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          >
            {specializations.map((spec, i) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
    </div>
  );
}
