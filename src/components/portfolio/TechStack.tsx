import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

// LangChain official logo component
function LangChainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#1C3C3C"/>
      <path d="M2 17l10 5 10-5" stroke="#1C3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12l10 5 10-5" stroke="#1C3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// LangGraph official logo component
function LangGraphIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="3" fill="#1C3C3C"/>
      <circle cx="5" cy="19" r="3" fill="#1C3C3C"/>
      <circle cx="19" cy="19" r="3" fill="#1C3C3C"/>
      <path d="M12 8v4M9 15l-2 2M15 15l2 2" stroke="#1C3C3C" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="14" r="2" fill="#1C3C3C"/>
    </svg>
  );
}

// Custom icons that need special handling
const customIcons: Record<string, boolean> = {
  'LangChain': true,
  'LangGraph': true,
};

// Using skillicons.dev for most icons
const getSkillIcon = (name: string) => {
  const iconMap: Record<string, string> = {
    'Python': 'python',
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'C/C++': 'cpp',
    'C': 'c',
    'SQL': 'mysql',
    'Java': 'java',
    'HTML/CSS': 'html',
    'LaTeX': 'latex',
    'React': 'react',
    'Tailwind': 'tailwind',
    'Node.js': 'nodejs',
    'FastAPI': 'fastapi',
    'Flask': 'flask',
    'TensorFlow': 'tensorflow',
    'PyTorch': 'pytorch',
    'Scikit-learn': 'sklearn',
    'OpenCV': 'opencv',
    'ESP32': 'arduino',
    'Arduino': 'arduino',
    'Raspberry Pi': 'raspberrypi',
    'MongoDB': 'mongodb',
    'PostgreSQL': 'postgresql',
    'Firebase': 'firebase',
    'MySQL': 'mysql',
    'Docker': 'docker',
    'Git': 'git',
    'GitHub': 'github',
    'AWS': 'aws',
    'Azure': 'azure',
    'Linux': 'linux',
    'VS Code': 'vscode',
    'Postman': 'postman',
    'Jupyter': 'py'
  };
  return iconMap[name] || 'python';
};

const categories = [
  {
    title: 'Languages',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/50',
    skills: ['Python', 'JavaScript', 'C/C++', 'Java', 'SQL', 'LaTeX']
  },
  {
    title: 'Frontend',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/50',
    skills: ['React', 'Tailwind', 'HTML/CSS']
  },
  {
    title: 'Backend',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'hover:border-green-500/50',
    skills: ['Node.js', 'FastAPI', 'Flask']
  },
  {
    title: 'ML & AI',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'hover:border-orange-500/50',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'LangChain']
  },
  {
    title: 'IoT & Hardware',
    color: 'from-teal-500/20 to-cyan-500/20',
    borderColor: 'hover:border-teal-500/50',
    skills: ['ESP32', 'Arduino', 'Raspberry Pi']
  },
  {
    title: 'Databases',
    color: 'from-indigo-500/20 to-blue-500/20',
    borderColor: 'hover:border-indigo-500/50',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL']
  },
  {
    title: 'DevOps & Cloud',
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'hover:border-amber-500/50',
    skills: ['Docker', 'Git', 'AWS', 'Azure', 'Linux']
  },
  {
    title: 'GenAI Tools',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'hover:border-violet-500/50',
    skills: ['LangChain', 'LangGraph']
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const skillVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120
    }
  }
};

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Subtle animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      
      {/* Floating orbs */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            Technologies
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`relative p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border ${category.borderColor} transition-all duration-300 group overflow-hidden`}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-4 flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills with SkillIcons */}
                <motion.div 
                  className="space-y-2"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary/30 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all cursor-default group/skill"
                      whileHover={{ 
                        x: 4,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      {customIcons[skill] ? (
                        <motion.div
                          className="w-6 h-6 flex items-center justify-center"
                          initial={{ rotate: 0 }}
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.15,
                            transition: { duration: 0.4 }
                          }}
                        >
                          {skill === 'LangChain' && <LangChainIcon className="w-6 h-6" />}
                          {skill === 'LangGraph' && <LangGraphIcon className="w-6 h-6" />}
                        </motion.div>
                      ) : (
                        <motion.img 
                          src={`https://skillicons.dev/icons?i=${getSkillIcon(skill)}&theme=dark`}
                          alt={skill}
                          className="w-6 h-6"
                          loading="lazy"
                          initial={{ rotate: 0 }}
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.15,
                            transition: { duration: 0.4 }
                          }}
                        />
                      )}
                      <span className="group-hover/skill:text-primary transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 border border-border backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-muted-foreground">Always learning, always building</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
