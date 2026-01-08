import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Using skillicons.dev for all icons
const getSkillIcon = (name: string) => {
  const iconMap: Record<string, string> = {
    'Python': 'python',
    'JavaScript': 'javascript',
    'C/C++': 'cpp',
    'SQL': 'mysql',
    'Java': 'java',
    'React': 'react',
    'Tailwind': 'tailwind',
    'HTML/CSS': 'html',
    'Node.js': 'nodejs',
    'FastAPI': 'fastapi',
    'Flask': 'flask',
    'TensorFlow': 'tensorflow',
    'PyTorch': 'pytorch',
    'Scikit-learn': 'sklearn',
    'OpenCV': 'opencv',
    'LangChain': 'python', // No specific icon, using python
    'ESP32': 'arduino',
    'Arduino': 'arduino',
    'Raspberry Pi': 'raspberrypi',
    'Sensors': 'arduino',
    'MongoDB': 'mongodb',
    'PostgreSQL': 'postgresql',
    'Firebase': 'firebase',
    'Docker': 'docker',
    'Git': 'git',
    'AWS': 'aws',
    'Azure': 'azure',
    'GPT APIs': 'python',
    'Gemini': 'python',
    'LangGraph': 'python',
    'RAG Systems': 'python',
    'MySQL': 'mysql',
    'Linux': 'linux',
    'VS Code': 'vscode',
    'Postman': 'postman'
  };
  return iconMap[name] || 'python';
};

const categories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'C/C++', 'Java', 'SQL']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind', 'HTML/CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'FastAPI', 'Flask']
  },
  {
    title: 'ML & AI',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'LangChain']
  },
  {
    title: 'IoT & Hardware',
    skills: ['ESP32', 'Arduino', 'Raspberry Pi']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL']
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Git', 'AWS', 'Azure', 'Linux']
  },
  {
    title: 'GenAI Tools',
    skills: ['LangChain', 'LangGraph', 'Gemini']
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
              <div className="mb-4">
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills with SkillIcons */}
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary/50 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    <img 
                      src={`https://skillicons.dev/icons?i=${getSkillIcon(skill)}&theme=dark`}
                      alt={skill}
                      className="w-6 h-6"
                      loading="lazy"
                    />
                    <span>{skill}</span>
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
