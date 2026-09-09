import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Cpu, Brain, MapPin, Cloud, CircuitBoard, Radio, Waves, Binary } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from '@/data/portfolio';
import profileImage from '@/assets/achyuth-photo.jpg';
import { Button } from '@/components/ui/button';

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
    icon: Binary,
    title: 'Embedded Software',
    description: 'Deterministic C and C++ for resource-constrained systems'
  },
  {
    icon: Radio,
    title: 'Connected Devices',
    description: 'Reliable protocols, sensor networks, and low-power IoT'
  },
  {
    icon: Waves,
    title: 'Test Automation',
    description: 'Making hardware behaviour observable, repeatable, and measurable'
  },
  {
    icon: Brain,
    title: 'Applied AI',
    description: 'ML and LLM research grounded in useful engineering workflows'
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

const roleTags = ['Firmware Engineer', 'Software Developer', 'IoT Engineer', 'ML Researcher', 'GenAI Builder', 'DevOps', 'Cloud Computing'];

const expertiseGroups = [
  {
    icon: Cpu,
    label: 'Firmware Engineering',
    items: ['Embedded C / C++', 'RTOS · Bare-metal', 'Driver & Protocol Design'],
  },
  {
    icon: Radio,
    label: 'Hardware & IoT',
    items: ['IoT Systems', 'ESP32 / Embedded', 'Sensor Networks'],
  },
  {
    icon: Brain,
    label: 'AI & Research',
    items: ['Machine Learning', 'GenAI / LLMs', 'Applied Research'],
  },
  {
    icon: Cloud,
    label: 'Cloud & DevOps',
    items: ['Cloud Computing', 'DevOps', 'CI/CD Pipelines'],
  },
];

const platforms = ['Nordic nRF', 'STM32', 'ESP32'];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function CircuitBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full text-primary opacity-[0.12] dark:opacity-[0.16]" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="pcb-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" stroke="currentColor" strokeOpacity=".22" />
          </pattern>
          <linearGradient id="trace-fade" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset=".5" stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#pcb-grid)" />
        <g stroke="currentColor" strokeWidth="1.5">
          <path d="M0 176H230L278 224H470" />
          <path d="M1440 130H1200L1138 192H930" />
          <path d="M1440 660H1210L1160 610H974" />
          <path d="M0 720H210L296 634H455" />
          <path d="M720 0V112L668 164V250" />
        </g>
        <g fill="currentColor">
          <circle cx="278" cy="224" r="4" /><circle cx="1138" cy="192" r="4" />
          <circle cx="1160" cy="610" r="4" /><circle cx="296" cy="634" r="4" />
        </g>
        <motion.path d="M0 176H230L278 224H470" stroke="url(#trace-fade)" strokeWidth="3" strokeDasharray="80 390" animate={{ strokeDashoffset: [470, -470] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} />
        <motion.path d="M1440 660H1210L1160 610H974" stroke="url(#trace-fade)" strokeWidth="3" strokeDasharray="70 390" animate={{ strokeDashoffset: [-460, 460] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 0.7 }} />
      </svg>
    </div>
  );
}

function MicrocontrollerPanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.94, rotateY: -8 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md lg:ml-auto"
    >
      <div className="absolute inset-8 border border-primary/20 bg-primary/5 blur-2xl" />
      <div className="relative border border-border bg-card/90 p-3 shadow-bento backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-border px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />System / online</span>
          <span>AM-FW-01</span>
        </div>

        <div className="relative m-3 aspect-[4/3] overflow-hidden border border-border bg-background/80">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:24px_24px]" />
          {[18, 32, 46, 60, 74, 88].map((top, index) => (
            <motion.span key={top} className="absolute left-0 h-px bg-primary/60" style={{ top: `${top}%`, width: index % 2 ? '26%' : '18%' }} animate={{ opacity: [0.25, 0.9, 0.25] }} transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.18 }} />
          ))}
          {[18, 32, 46, 60, 74, 88].map((top, index) => (
            <motion.span key={`r-${top}`} className="absolute right-0 h-px bg-primary/60" style={{ top: `${top}%`, width: index % 2 ? '18%' : '26%' }} animate={{ opacity: [0.9, 0.25, 0.9] }} transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.18 }} />
          ))}
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-[20%] flex flex-col items-center justify-center border border-primary/40 bg-card shadow-inner-glow">
            <CircuitBoard className="mb-3 h-9 w-9 text-primary" />
            <span className="font-mono text-xs font-semibold text-foreground">EMBEDDED CORE</span>
            <span className="mt-1 font-mono text-[9px] text-muted-foreground">FIRMWARE · AUTOMATION</span>
          </motion.div>
          <motion.div className="absolute bottom-3 left-3 right-3 h-px origin-left bg-primary" animate={{ scaleX: [0.05, 1, 0.05], opacity: [0.25, 0.85, 0.25] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }} />
        </div>

        <div className="grid grid-cols-3 gap-px border border-border bg-border">
          {platforms.map((platform) => <div key={platform} className="bg-card px-2 py-3 text-center font-mono text-[10px] text-foreground">{platform}</div>)}
        </div>
      </div>
    </motion.aside>
  );
}

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
      <section className="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-28 pb-16 lg:pt-24">
        <CircuitBackdrop />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/55" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
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
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  Chennai, India
                </span>
              </motion.div>

              {/* Name — single color, generous tracking */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-display font-semibold text-foreground leading-[0.95] text-[clamp(2.75rem,7.2vw,5.75rem)]"
              >
                Achyuth Mukund
              </motion.h1>

              {/* Primary role headline — Firmware Engineer emphasis */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg"
              >
                <span className="text-foreground font-medium">Firmware Engineer</span>
                <span className="text-muted-foreground/50">/</span>
                <span className="text-muted-foreground">IoT &amp; Embedded Systems</span>
                <span className="text-muted-foreground/50">/</span>
                <span className="text-muted-foreground">Applied ML Researcher</span>
              </motion.p>

              {/* Intro — natural voice, generous spacing */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="mt-7 relative max-w-2xl"
              >
                <span
                  aria-hidden
                  className="absolute -left-4 sm:-left-5 top-1 bottom-1 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
                />
                <p className="text-base sm:text-lg text-foreground/85 leading-[1.75]">
                  I work across firmware, automation, and AI, building the systems that make products reliable and engineering workflows smarter. I'm particularly interested in the space where software meets hardware — and in solving the problems that don't always make it to the surface.
                </p>
                <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-[1.75]">
                  My interests span embedded systems, AI, machine learning, and research on LLMs. When I'm not building something, I'm probably playing cricket, playing keyboard, or finding an excuse to learn and talk more about aviation and automobiles.
                </p>
                <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-[1.75]">
                  Curiosity has always been the common thread: understand how something works, figure out how to make it better, and then build it.
                </p>
              </motion.div>

              {/* Education line — quieter, no rainbow highlights */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed border-l-2 border-border pl-4"
              >
                Currently a <span className="text-foreground">Firmware Engineer at Logitech</span>.
                Completed my <span className="text-foreground">B. Tech (Bachelor of Technology) in Computer Science and Engineering (Internet of Things)</span> at Shiv Nadar University Chennai (2022–2026),
                and currently pursuing a <span className="text-foreground">B.S. (Bachelor of Science) in Data Science and Applications</span> at Indian Institute of Technology (IIT), Madras.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Button onClick={() => navigate('/projects')} className="group rounded-sm bg-foreground px-5 text-background hover:bg-foreground/90">
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button asChild variant="outline" className="rounded-sm">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><Download className="w-4 h-4" />Resume</a>
                </Button>
                <Button variant="link" onClick={() => navigate('/contact')} className="px-2 text-muted-foreground hover:text-foreground">
                  Get in touch →
                </Button>
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

            <MicrocontrollerPanel />
          </div>
        </div>

        {/* Scroll prompt — subtle, unobtrusive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent"
          />
        </motion.div>
      </section>


      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-12 flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase text-primary">01 / Profile snapshot</p>
              <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">Engineering from silicon to system.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">A firmware-first practice, strengthened by automation, connected systems, and applied research.</p>
          </motion.div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            {/* Profile Image with Stats */}
            <motion.div
              variants={reveal} custom={0.08} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col border border-border bg-card"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={profileImage}
                  alt="Achyuth Mukund"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>
              <div className="grid grid-cols-3 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-r border-border p-3 text-center last:border-r-0 sm:p-4">
                    <div className="font-mono text-xl font-semibold text-primary sm:text-2xl">{stat.value}</div>
                    <div className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={reveal} custom={0.16} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="grid border border-border bg-card sm:grid-cols-2"
            >
              {expertiseGroups.map((group, index) => (
                <div key={group.label} className={`p-6 sm:p-7 ${index % 2 === 0 ? 'sm:border-r' : ''} ${index < 2 ? 'border-b' : index === 2 ? 'border-b sm:border-b-0' : ''} border-border`}>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center border border-border bg-secondary text-primary"><group.icon className="h-4 w-4" /></span>
                    <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{group.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.items.join(' · ')}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Specialization Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
          >
            {specializations.map((spec, i) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="bg-card p-6 transition-colors hover:bg-secondary/50"
              >
                <spec.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{spec.title}</h3>
                <p className="text-sm text-muted-foreground">{spec.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 grid border border-border bg-card md:grid-cols-[0.7fr_1.3fr]"
          >
            <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
              <p className="font-mono text-[10px] uppercase text-primary">Off the clock</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">Still curious. Just elsewhere.</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest.label}
                  className="border border-border bg-secondary px-3 py-2 text-sm font-medium text-foreground"
                >
                  {interest.emoji} {interest.label}
                </span>
              ))}
              </div>
            
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:gap-4">
              <span className="text-sm text-muted-foreground">Languages:</span>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="font-mono text-xs text-primary"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
