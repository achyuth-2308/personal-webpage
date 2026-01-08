import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const categories = ['All', 'GenAI', 'IoT', 'Computer Vision'];

const allProjects = [
  {
    title: 'IntelliRisk',
    subtitle: 'AI Powered Risk Evaluation Engine for Engineering Product Compliance',
    category: 'GenAI',
    image: 'https://via.placeholder.com/600x400/14b8a6/ffffff?text=IntelliRisk',
    technologies: ['Python', 'LangChain', 'Streamlit', 'FAISS', 'Gemini APIs', 'Pandas'],
    github: 'https://github.com/achyuth-2308/IntelliRisk-AI-Powered-Risk-Evaluation-Engine',
    demo: null
  },
  {
    title: 'SmartSeal',
    subtitle: 'IoT-based Smart Anti-Tampering Solution for Secure Deliveries',
    category: 'IoT',
    image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=SmartSeal',
    technologies: ['Arduino', 'ESP32', 'IoT Sensors', 'MQTT', 'React'],
    github: 'https://github.com/achyuth-2308/SmartSeal-IoT-based-Smart-Anti-Tampering-Solution-for-Secure-Deliveries',
    demo: null
  },
  {
    title: 'GestureGenius',
    subtitle: 'Virtual Cursor Commander - Hand Gesture Controlled Mouse',
    category: 'Computer Vision',
    image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=GestureGenius',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    github: 'https://github.com/achyuth-2308/GestureGenius-Virtual-Cursor-Commander',
    demo: null
  },
  {
    title: 'EquiBot',
    subtitle: 'Self-Balancing Bot with PID Control',
    category: 'IoT',
    image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=EquiBot',
    technologies: ['Arduino', 'MPU6050', 'DC Motors', 'PID Control'],
    github: 'https://github.com/achyuth-2308/EquiBot-Self-Balancing-Bot',
    demo: null
  },
  {
    title: 'SafeStep',
    subtitle: 'Smart IoT Safety Net for Elderly Fall Detection',
    category: 'IoT',
    image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=SafeStep',
    technologies: ['ESP32', 'Accelerometer', 'Firebase', 'React Native'],
    github: 'https://github.com/achyuth-2308/SafeStep-Smart-IoT-Safety-Net',
    demo: null
  },
  {
    title: 'EcoSphereX',
    subtitle: 'IoT-Based Integrated Monitoring System for Environmental Health',
    category: 'IoT',
    image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=EcoSphereX',
    technologies: ['Arduino IDE', 'NodeMCU ESP8266', 'DHT-11', 'MQTT Protocol'],
    github: 'https://github.com/achyuth-2308/EcoSphereX-IoT-Based-Integrated-Monitoring-System-for-Environmental-Health',
    demo: null
  }
];

const categoryColors: Record<string, string> = {
  'GenAI': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  'IoT': 'bg-amber-500/10 text-amber-500 border-amber-500/30',
  'Computer Vision': 'bg-violet-500/10 text-violet-500 border-violet-500/30'
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
                <p className="text-sm text-muted-foreground mb-4">
                  {project.subtitle}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px -5px hsl(var(--primary))' }}
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
