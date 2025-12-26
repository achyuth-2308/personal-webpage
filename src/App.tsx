import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { TechStack } from '@/components/portfolio/TechStack';
import { Projects } from '@/components/portfolio/Projects';
import { Experience } from '@/components/portfolio/Experience';
import { Publications } from '@/components/portfolio/Publications';
import { Leadership } from '@/components/portfolio/Leadership';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <Publications />
            <Leadership />
            <Contact />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
