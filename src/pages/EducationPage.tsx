import { Education, EducationCertifications } from '@/components/portfolio/Education';
import { CampusLife } from '@/components/portfolio/CampusLife';
import { Footer } from '@/components/portfolio/Footer';
import { about } from '@/data/portfolio';

export default function EducationPage() {
  const snu = about.education.find(e => e.activities?.length || e.coursework?.length);

  return (
    <>
      <Education />
      {snu && (
        <CampusLife
          activities={snu.activities ?? []}
          coursework={snu.coursework ?? []}
          institution={snu.institution}
        />
      )}
      <EducationCertifications />
      <Footer />
    </>
  );
}
