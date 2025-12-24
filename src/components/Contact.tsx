import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
    alert('Message sent! (Demo)');
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground">contact.sh</span>
              </div>
              <div className="terminal-body space-y-2">
                <p><span className="text-primary">$</span> echo $EMAIL</p>
                <p className="text-green-400">achyuth@example.com</p>
                <p><span className="text-primary">$</span> echo $LOCATION</p>
                <p className="text-green-400">Building the future, remotely</p>
                <p><span className="text-primary">$</span> <span className="animate-pulse">_</span></p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:achyuth@example.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all group"
              >
                <Mail className="text-primary" size={20} />
                <span className="flex-1">achyuth@example.com</span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                <MapPin className="text-accent" size={20} />
                <span>Open to remote opportunities worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full glow-button flex items-center justify-center gap-2 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
