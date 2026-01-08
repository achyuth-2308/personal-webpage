import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

// Custom YouTube icon component
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

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
              { icon: YouTubeIcon, href: personalInfo.social.youtube },
              { icon: Mail, href: 'mailto:achyuth2004@gmail.com' }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
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
            © {currentYear} • Built with <Heart className="w-3 h-3 text-red-500" /> by Achyuth Mukund
          </p>
        </div>
      </div>
    </footer>
  );
}
