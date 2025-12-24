import { motion } from 'framer-motion';
import { Code2, Coffee, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Terminal card */}
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground">about.md</span>
            </div>
            <div className="terminal-body space-y-2">
              <p><span className="text-primary">const</span> <span className="text-accent">developer</span> = {'{'}</p>
              <p className="pl-4"><span className="text-muted-foreground">name:</span> <span className="text-green-400">"Achyuth Mukund"</span>,</p>
              <p className="pl-4"><span className="text-muted-foreground">location:</span> <span className="text-green-400">"Building the future"</span>,</p>
              <p className="pl-4"><span className="text-muted-foreground">passion:</span> <span className="text-green-400">"Real products"</span>,</p>
              <p className="pl-4"><span className="text-muted-foreground">hobbies:</span> [<span className="text-green-400">"🎹 Keys"</span>, <span className="text-green-400">"🏏 Fast bowling"</span>]</p>
              <p>{'}'}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a software developer who builds things that work. From IoT devices to ML models,
              I love turning complex problems into elegant solutions. I write code that's clean,
              maintainable, and actually ships.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me playing piano, bowling fast in cricket,
              or experimenting with new tech. I believe in learning by doing and building in public.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: Code2, label: 'Clean Code', color: 'text-primary' },
                { icon: Zap, label: 'Fast Learner', color: 'text-accent' },
                { icon: Coffee, label: 'Caffeine Powered', color: 'text-yellow-500' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
                  <Icon size={16} className={color} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
