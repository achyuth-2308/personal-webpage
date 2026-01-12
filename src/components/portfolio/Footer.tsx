import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Link } from 'react-router-dom';

// Custom YouTube icon component
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Custom Instagram icon
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

// Custom Medium icon
const MediumIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const socialLinks = [
  { icon: Github, href: 'https://github.com/achyuth-2308', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/achyuth-mukund/', label: 'LinkedIn' },
  { icon: YouTubeIcon, href: 'https://www.youtube.com/@AchyuthMukund', label: 'YouTube' },
  { icon: InstagramIcon, href: 'https://instagram.com/achyuth_2308', label: 'Instagram' },
  { icon: MediumIcon, href: 'https://medium.com/@achyuth_2308', label: 'Medium' },
  { icon: Mail, href: 'mailto:achyuth2004@gmail.com', label: 'Email' }
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research & Publications', href: '/research' },
  { label: 'Contact', href: '/contact' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 text-2xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">AM</span>
              <span className="text-primary">/&gt;</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Building intelligent systems at the intersection of IoT, ML, and GenAI.
            </p>
            <a 
              href="mailto:achyuth2004@gmail.com"
              className="text-sm text-primary hover:underline"
            >
              achyuth2004@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2.5 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <item.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              © {currentYear} Achyuth Mukund • Built with 
              <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" /> 
              in Chennai
            </p>

            {/* Extra Links */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a 
                href="https://www.researchgate.net/profile/Achyuth-Mukund"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                ResearchGate
              </a>
              <span className="text-border">•</span>
              <a 
                href="https://orcid.org/0009-0002-5798-0858"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                ORCID
              </a>
              <span className="text-border">•</span>
              <a 
                href="https://linktr.ee/achyuth.mukund"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Linktree
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
