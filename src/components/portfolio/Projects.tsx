import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { projects, personalInfo } from '@/data/portfolio';

const categories = ['All', 'GenAI', 'IoT', 'Full-Stack', 'Computer Vision', 'MLOps'];

const allProjects = [
  {
    title: 'IntelliRisk PoC',
    subtitle: 'AI-powered risk evaluation system using multi-agent architecture',
    category: 'GenAI',
    image: 'https://via.placeholder.com/600x400/14b8a6/ffffff?text=IntelliRisk',
    technologies: ['Python', 'LangChain', 'LangGraph', 'Gemini API', 'FastAPI', 'React'],
    github: 'https://github.com/achyuth-2308/intellirisk',
    demo: '#'
  },
  {
    title: 'EcoSphereX',
    subtitle: 'Environmental monitoring system with real-time IoT sensors',
    category: 'IoT',
    image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=EcoSphereX',
    technologies: ['ESP32', 'Arduino', 'Python', 'MQTT', 'MongoDB', 'React Dashboard'],
    github: 'https://github.com/achyuth-2308/ecospherex',
    demo: '#'
  },
  {
    title: 'Quiz Master V1',
    subtitle: 'Multi-user quiz platform with admin dashboard',
    category: 'Full-Stack',
    image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Quiz+Master',
    technologies: ['Flask', 'PostgreSQL', 'JavaScript', 'Bootstrap', 'Socket.IO'],
    github: 'https://github.com/achyuth-2308/quiz-master',
    demo: '#'
  },
  {
    title: 'Virtual Mouse',
    subtitle: 'Hand gesture-controlled mouse using OpenCV',
    category: 'Computer Vision',
    image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Virtual+Mouse',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    github: 'https://github.com/achyuth-2308/virtual-mouse',
    demo: null
  },
  {
    title: 'Smart Home Automation',
    subtitle: 'ESP32-based home automation with voice control',
    category: 'IoT',
    image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Smart+Home',
    technologies: ['ESP32', 'MQTT', 'Node.js', 'React Native', 'Firebase'],
    github: 'https://github.com/achyuth-2308/smart-home',
    demo: null
  },
  {
    title: 'ML Model Deployment Pipeline',
    subtitle: 'Automated ML model training and deployment system',
    category: 'MLOps',
    image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=ML+Pipeline',
    technologies: ['Python', 'Docker', 'MLflow', 'FastAPI', 'GitHub Actions', 'AWS'],
    github: 'https://github.com/achyuth-2308/ml-pipeline',
    demo: null
  }
];

const categoryColors: Record<string, string> = {
  'GenAI': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  'IoT': 'bg-amber-500/10 text-amber-500 border-amber-500/30',
  'Full-Stack': 'bg-blue-500/10 text-blue-500 border-blue-500/30',
  'Computer Vision': 'bg-violet-500/10 text-violet-500 border-violet-500/30',
  'MLOps': 'bg-pink-500/10 text-pink-500 border-pink-500/30'
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
