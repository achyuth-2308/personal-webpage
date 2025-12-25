import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">
              <span className="text-primary">$</span> {personalInfo.email}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: personalInfo.social.github },
              { icon: Linkedin, href: personalInfo.social.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                <item.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Achyuth Mukund
          </p>
        </div>
      </div>
    </footer>
  );
}
