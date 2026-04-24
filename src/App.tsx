import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from '@/components/portfolio/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

// Pages
import HomePage from '@/pages/HomePage';
import ResearchPage from '@/pages/ResearchPage';
import EducationPage from '@/pages/EducationPage';
import ExperiencePage from '@/pages/ExperiencePage';
import ProjectsPage from '@/pages/ProjectsPage';
import SkillsPage from '@/pages/SkillsPage';
import ContactPage from '@/pages/ContactPage';
import AwardsPage from '@/pages/AwardsPage';
import MusicPage from '@/pages/MusicPage';

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
}

// Page transition wrapper
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTopOnNavigate />
          <Toaster />
          <Sonner />
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                  <Route path="/research" element={<PageWrapper><ResearchPage /></PageWrapper>} />
                  <Route path="/education" element={<PageWrapper><EducationPage /></PageWrapper>} />
                  <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
                  <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
                  <Route path="/skills" element={<PageWrapper><SkillsPage /></PageWrapper>} />
                  <Route path="/awards" element={<PageWrapper><AwardsPage /></PageWrapper>} />
                  <Route path="/music" element={<PageWrapper><MusicPage /></PageWrapper>} />
                  <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
