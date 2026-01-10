import { Projects } from '@/components/portfolio/Projects';
import { Footer } from '@/components/portfolio/Footer';

export default function ProjectsPage() {
  return (
    <>
      <div className="min-h-screen pt-16">
        <Projects />
      </div>
      <Footer />
    </>
  );
}
