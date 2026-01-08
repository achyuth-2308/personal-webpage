import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ChevronRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const categories = ['All', 'GenAI', 'IoT', 'Computer Vision', 'ML', 'Security', 'Web'];

// All public repositories from GitHub profile
const allProjects = [
  {
    title: 'IntelliRisk',
    fullName: 'IntelliRisk-AI-Powered-Risk-Evaluation-Engine',
    subtitle: 'AI-powered compliance risk evaluation engine using Google Gemini APIs, RAG and LLMs',
    category: 'GenAI',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/IntelliRisk-AI-Powered-Risk-Evaluation-Engine',
    technologies: ['Python', 'LangChain', 'Streamlit', 'FAISS', 'Gemini APIs'],
    github: 'https://github.com/achyuth-2308/IntelliRisk-AI-Powered-Risk-Evaluation-Engine'
  },
  {
    title: 'SmartSeal',
    fullName: 'SmartSeal-IoT-based-Smart-Anti-Tampering-Solution-for-Secure-Deliveries',
    subtitle: 'IoT-powered anti-tampering solution for secure e-commerce package deliveries',
    category: 'IoT',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/SmartSeal-IoT-based-Smart-Anti-Tampering-Solution-for-Secure-Deliveries',
    technologies: ['ESP32', 'GPS Tracking', 'Motion Sensors', 'Real-time Alerts'],
    github: 'https://github.com/achyuth-2308/SmartSeal-IoT-based-Smart-Anti-Tampering-Solution-for-Secure-Deliveries'
  },
  {
    title: 'GestureGenius',
    fullName: 'GestureGenius-Virtual-Cursor-Commander',
    subtitle: 'Touchless control interface using OpenCV, Mediapipe for real-time hand tracking',
    category: 'Computer Vision',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/GestureGenius-Virtual-Cursor-Commander',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    github: 'https://github.com/achyuth-2308/GestureGenius-Virtual-Cursor-Commander'
  },
  {
    title: 'EquiBot',
    fullName: 'EquiBot-Self-Balancing-Bot',
    subtitle: 'Self-balancing robot using ESP32, MPU6050 and PID control algorithms',
    category: 'IoT',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/EquiBot-Self-Balancing-Bot',
    technologies: ['ESP32', 'MPU6050', 'Arduino IDE', 'PID Control'],
    github: 'https://github.com/achyuth-2308/EquiBot-Self-Balancing-Bot'
  },
  {
    title: 'SafeStep',
    fullName: 'SafeStep-Smart-IoT-Safety-Net',
    subtitle: 'Elderly safety system with fall detection and caregiver alerts',
    category: 'IoT',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/SafeStep-Smart-IoT-Safety-Net',
    technologies: ['Motion Sensors', 'Cloud Services', 'Alert System'],
    github: 'https://github.com/achyuth-2308/SafeStep-Smart-IoT-Safety-Net'
  },
  {
    title: 'EcoSphereX',
    fullName: 'EcoSphereX-IoT-Based-Integrated-Monitoring-System-for-Environmental-Health',
    subtitle: 'IoT system for monitoring air quality, noise pollution, and soil acidity',
    category: 'IoT',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/EcoSphereX-IoT-Based-Integrated-Monitoring-System-for-Environmental-Health',
    technologies: ['NodeMCU ESP8266', 'DHT-11', 'Soil Sensor', 'MQTT'],
    github: 'https://github.com/achyuth-2308/EcoSphereX-IoT-Based-Integrated-Monitoring-System-for-Environmental-Health'
  },
  {
    title: 'PathPilot',
    fullName: 'PathPilot-Maze-Solving-Bot',
    subtitle: 'Autonomous maze-solving robot using ESP32, ultrasonic sensors and PID controller',
    category: 'IoT',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/PathPilot-Maze-Solving-Bot',
    technologies: ['ESP32', 'Ultrasonic Sensors', 'Servo Motor', 'L293D'],
    github: 'https://github.com/achyuth-2308/PathPilot-Maze-Solving-Bot'
  },
  {
    title: 'CryptographyConcepts',
    fullName: 'CryptographyConcepts',
    subtitle: 'C implementations of 15 Classical Cryptography Algorithms for academic reference',
    category: 'Security',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/CryptographyConcepts',
    technologies: ['C', 'Cryptography', 'Cipher Algorithms', 'Cybersecurity'],
    github: 'https://github.com/achyuth-2308/CryptographyConcepts'
  },
  {
    title: 'Quiz Master App',
    fullName: 'mad1-quiz-master-app-v1',
    subtitle: 'IIT Madras MAD-1 Project - Modern Application Development Quiz Platform',
    category: 'Web',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/mad1-quiz-master-app-v1',
    technologies: ['HTML', 'Flask', 'Python', 'SQLite'],
    github: 'https://github.com/achyuth-2308/mad1-quiz-master-app-v1'
  },
  {
    title: 'IIIT-DM Internship',
    fullName: 'IIIT-DM-Internship',
    subtitle: 'Research codes from IIIT-DM Kancheepuram internship on IoT and RL-based routing',
    category: 'ML',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/IIIT-DM-Internship',
    technologies: ['Python', 'Reinforcement Learning', 'IoT Networks', 'UWB'],
    github: 'https://github.com/achyuth-2308/IIIT-DM-Internship'
  },
  {
    title: 'AI Lab',
    fullName: 'CS3805-Artificial-Intelligence-Lab',
    subtitle: 'CS3805 Artificial Intelligence Lab coursework and implementations',
    category: 'ML',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/CS3805-Artificial-Intelligence-Lab',
    technologies: ['C', 'AI Algorithms', 'Search', 'Logic'],
    github: 'https://github.com/achyuth-2308/CS3805-Artificial-Intelligence-Lab'
  },
  {
    title: 'SproutSpotter',
    fullName: 'SproutSpotter-IoT-Based-Plant-Monitoring-System',
    subtitle: 'Real-time IoT-based plant monitoring with environmental alerts',
    category: 'IoT',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/SproutSpotter-IoT-Based-Plant-Monitoring-System',
    technologies: ['NodeMCU', 'DHT11', 'Soil Moisture', 'Cloud'],
    github: 'https://github.com/achyuth-2308/SproutSpotter-IoT-Based-Plant-Monitoring-System'
  },
  {
    title: 'IoT Lab Course',
    fullName: 'CS3003-Software-and-Programming-in-IoT',
    subtitle: 'CS3003 Software and Programming in IoT Lab experiments and code',
    category: 'IoT',
    image: 'https://opengraph.githubassets.com/1/achyuth-2308/CS3003-Software-and-Programming-in-IoT',
    technologies: ['C', 'Arduino', 'ESP32', 'Sensors'],
    github: 'https://github.com/achyuth-2308/CS3003-Software-and-Programming-in-IoT'
  }
];

const categoryColors: Record<string, string> = {
  'GenAI': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'IoT': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Computer Vision': 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  'ML': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Security': 'bg-red-500/10 text-red-400 border-red-500/30',
  'Web': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100 }
  }
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my work in IoT, AI/ML, and Full-Stack Development
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.fullName}
              variants={cardVariants}
              className="group rounded-2xl bg-card/80 backdrop-blur-sm border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a gradient placeholder
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, hsl(var(--primary)/0.2), hsl(var(--secondary)))';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.subtitle}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary/60 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-secondary/60 text-xs text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ChevronRight className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px -5px hsl(var(--primary))' }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
