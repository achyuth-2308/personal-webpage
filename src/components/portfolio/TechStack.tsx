import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Server, Brain, Cpu, Database, Cloud, Sparkles } from 'lucide-react';

const categories = [
  {
    icon: Code,
    title: 'Languages',
    emoji: '💻',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'C/C++', icon: '⚡' },
      { name: 'SQL', icon: '🗄️' }
    ]
  },
  {
    icon: Palette,
    title: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind', icon: '🎨' },
      { name: 'HTML/CSS', icon: '🌐' }
    ]
  },
  {
    icon: Server,
    title: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js', icon: '💚' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Flask', icon: '🌶️' }
    ]
  },
  {
    icon: Brain,
    title: 'ML & AI',
    emoji: '🤖',
    skills: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Scikit-learn', icon: '📊' },
      { name: 'OpenCV', icon: '👁️' },
      { name: 'LangChain', icon: '🔗' }
    ]
  },
  {
    icon: Cpu,
    title: 'IoT & Hardware',
    emoji: '🔌',
    skills: [
      { name: 'ESP32', icon: '📡' },
      { name: 'Arduino', icon: '🔧' },
      { name: 'Raspberry Pi', icon: '🥧' },
      { name: 'Sensors', icon: '📡' }
    ]
  },
  {
    icon: Database,
    title: 'Databases',
    emoji: '🗃️',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Firebase', icon: '🔥' }
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    emoji: '☁️',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '📚' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure', icon: '💠' }
    ]
  },
  {
    icon: Sparkles,
    title: 'GenAI Tools',
    emoji: '✨',
    skills: [
      { name: 'GPT APIs', icon: '🧠' },
      { name: 'Gemini', icon: '💎' },
      { name: 'LangGraph', icon: '📊' },
      { name: 'RAG Systems', icon: '🔍' }
    ]
  }
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="py-24 px-4 relative bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-2">Always Learning, Always Building</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From embedded systems to cloud-native applications, I'm constantly exploring new technologies 
            and pushing the boundaries of what's possible at the intersection of IoT, AI, and full-stack development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
