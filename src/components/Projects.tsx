import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'IoT Smart Home Hub',
    description: 'A centralized control system for smart home devices with real-time monitoring.',
    longDescription: 'Built a comprehensive IoT platform that connects and manages multiple smart devices. Features include real-time sensor data visualization, automated routines, and voice control integration.',
    tech: ['Python', 'MQTT', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'ML Document Analyzer',
    description: 'AI-powered document analysis using LLMs for intelligent information extraction.',
    longDescription: 'Developed a machine learning pipeline that processes documents, extracts key information, and provides intelligent summaries using state-of-the-art language models.',
    tech: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'DevOps Pipeline Toolkit',
    description: 'Automated CI/CD pipelines with monitoring and deployment automation.',
    longDescription: 'Created a suite of tools for automating software deployment, including custom GitHub Actions, Kubernetes operators, and monitoring dashboards.',
    tech: ['Go', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Real-time Collab Editor',
    description: 'Collaborative code editor with live cursors and instant synchronization.',
    longDescription: 'A real-time collaborative editor supporting multiple users, syntax highlighting, and WebSocket-based synchronization for seamless team coding.',
    tech: ['TypeScript', 'React', 'WebSocket', 'Y.js', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built with passion and precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="bento-card cursor-pointer group"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-video bg-muted">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-muted-foreground mb-4">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
