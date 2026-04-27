import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research & Publications', href: '/research' },
  { label: 'Off the Clock', href: '/off-the-clock' },
  { label: 'Contact', href: '/contact' },
];

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Keyboard accessibility - Escape key to close
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[80vw] bg-background border-r border-border shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link to="/" onClick={onClose}>
                <div className="flex items-center gap-1 text-foreground font-bold text-xl">
                  <span className="text-primary">&lt;</span>
                  <span className="text-primary">AM</span>
                  <span className="text-primary">/&gt;</span>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary border-l-2 border-primary'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                © 2025 Achyuth Mukund
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
