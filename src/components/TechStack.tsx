import { motion } from 'framer-motion';

const techStack = [
  { name: 'Python', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'TensorFlow', category: 'ml' },
  { name: 'PyTorch', category: 'ml' },
  { name: 'LLMs', category: 'ml' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'Arduino', category: 'iot' },
  { name: 'Raspberry Pi', category: 'iot' },
  { name: 'MQTT', category: 'iot' },
  { name: 'Git', category: 'tools' },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24 md:py-32 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="tech-badge cursor-default"
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
