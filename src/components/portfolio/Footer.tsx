import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-1 text-lg font-bold">
            <span className="text-primary">&lt;</span>
            <span className="text-primary">AM</span>
            <span className="text-primary">/&gt;</span>
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
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="w-3 h-3 text-red-500" /> by Achyuth Mukund
          </p>
        </div>
      </div>
    </footer>
  );
}
