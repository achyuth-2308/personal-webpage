import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { projects, personalInfo } from '@/data/portfolio';

const categoryColors: Record<string, string> = {
  'GenAI': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  'Full-Stack': 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  'IoT': 'text-amber-400 bg-amber-400/10 border-amber-400/30'
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-8"
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-4xl font-display font-bold mt-2">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A collection of projects showcasing my work in GenAI, IoT, and Full-Stack development
          </p>
        </motion.div>

        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-mono text-sm text-muted-foreground mb-8"
        >
          <span className="text-primary">$</span> ls -la ./projects --featured
          <br />
          <span className="text-muted-foreground/60">Showing {featuredProjects.length} featured projects...</span>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category] || 'text-primary bg-primary/10 border-primary/30'}`}>
                    {project.category}
                  </span>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-primary">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Date */}
                <p className="text-xs text-muted-foreground/60">{project.date}</p>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
