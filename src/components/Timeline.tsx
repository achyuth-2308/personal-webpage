import { motion } from 'framer-motion';
import { Briefcase, Award, Mic } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'ML Research Intern',
    description: 'Worked on cutting-edge LLM applications and published research on document understanding.',
    icon: Briefcase,
    type: 'work',
  },
  {
    year: '2023',
    title: 'Tech Talk Speaker',
    description: 'Delivered talks on IoT architecture and real-time systems at developer conferences.',
    icon: Mic,
    type: 'achievement',
  },
  {
    year: '2023',
    title: 'Hackathon Winner',
    description: 'First place in national hackathon for building an AI-powered accessibility tool.',
    icon: Award,
    type: 'achievement',
  },
  {
    year: '2022',
    title: 'IoT Developer',
    description: 'Led development of smart agriculture solutions using sensor networks and edge computing.',
    icon: Briefcase,
    type: 'work',
  },
  {
    year: '2021',
    title: 'Open Source Contributor',
    description: 'Started contributing to major open source projects in the Python ecosystem.',
    icon: Award,
    type: 'achievement',
  },
];

export function Timeline() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Dev <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones in my developer journey
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                <div className="bento-card">
                  <span className="text-sm font-mono text-primary">{milestone.year}</span>
                  <h3 className="text-lg font-display font-semibold mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 timeline-dot">
                <milestone.icon size={10} className="absolute inset-0 m-auto text-primary-foreground" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
