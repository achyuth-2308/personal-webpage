import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Palette, Music, Calendar, Trophy } from 'lucide-react';
import { achievements } from '@/data/portfolio';

const leadershipRoles = [
  {
    icon: Users,
    category: 'Model United Nations',
    title: 'MUN Society Leadership',
    description: "Led campus MUN society, organizing 5+ conferences with 500+ participants. Mentored 50+ students in debate and diplomacy.",
    impact: '📈 Increased participation by 200%'
  },
  {
    icon: Palette,
    category: 'Design & Art',
    title: 'Art/Design Club PoC',
    description: 'Founded and led Art/Design Club, organizing creative workshops and exhibitions. Promoted design thinking across campus.',
    impact: '📈 10+ events, 300+ attendees'
  },
  {
    icon: Music,
    category: 'Music Performance',
    title: 'Keyboardist & Performer',
    description: 'Performed at multiple college gigs and cultural fests. Active member of campus music band with regular performances.',
    impact: '📈 15+ live performances'
  },
  {
    icon: Calendar,
    category: 'Cultural Leadership',
    title: 'Cultural Fest Coordinator',
    description: 'Coordinated major cultural festivals, managing logistics, sponsorships, and event execution for 1000+ attendees.',
    impact: '📈 Successfully led 3 major fests'
  }
];

const awards = [
  { icon: '🏆', title: 'Guinness World Record', description: 'Participated in world record attempt for largest music ensemble', year: '2024' },
  { icon: '🏎️', title: 'F1 in Schools Nationals 2023', description: 'Team Nova - National Winners representing Uttar Pradesh', year: '2023' },
  { icon: '🎖️', title: 'Best MUN Delegate', description: 'Outstanding performance in multiple MUN conferences', year: '2023' },
  { icon: '💻', title: 'Hackathon Winner', description: 'First place in IoT & AI hackathon', year: '2024' }
];

const interests = [
  { icon: '🏏', label: 'Cricket' },
  { icon: '🎹', label: 'Music' },
  { icon: '✈️', label: 'Aviation' },
  { icon: '🏎️', label: 'Automobiles' },
  { icon: '🥋', label: 'Martial Arts' }
];

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 px-4 relative bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Leadership & Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building communities and leading initiatives beyond code
          </p>
        </motion.div>

        {/* Leadership Roles */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {leadershipRoles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              whileHover={{ y: -4 }}
            >
              <span className="text-xs text-primary font-medium">{role.category}</span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{role.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
              <p className="text-sm text-primary font-medium">{role.impact}</p>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <Trophy className="w-5 h-5 text-primary" />
            🏆 Awards & Recognition
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-all"
              >
                <span className="text-3xl mb-3 block">{award.icon}</span>
                <h4 className="font-semibold text-foreground text-sm mb-1">{award.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{award.description}</p>
                <span className="text-xs text-primary">{award.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beyond Technology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="p-8 rounded-2xl bg-card border border-border text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Beyond Technology</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            When I'm not coding, you'll find me on the cricket field as a pace bowler, performing on the keyboard at gigs, 
            exploring aviation and automobiles, or practicing martial arts. I believe in a holistic approach to personal growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest) => (
              <span
                key={interest.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary text-foreground font-medium"
              >
                {interest.icon} {interest.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
