import { ThemeProvider } from 'next-themes';
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

/**
 * Main Portfolio page - Single page portfolio website
 * Matching the reference site design exactly
 */
export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Publications />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
