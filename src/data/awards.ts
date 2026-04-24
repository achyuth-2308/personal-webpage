// Awards & Honors data — Achyuth Mukund

export type AwardCategory =
  | 'World Record'
  | 'Research'
  | 'Academic'
  | 'Leadership'
  | 'Cultural'
  | 'Sports'
  | 'Community';

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: AwardCategory;
  description: string;
  highlights?: string[];
  link?: { label: string; url: string };
  featured?: boolean;
}

export const awards: Award[] = [
  {
    id: 'guinness-keyboard',
    title: 'Guinness World Record — Largest Keyboard Ensemble',
    issuer: 'Guinness World Records',
    year: '2014',
    category: 'World Record',
    featured: true,
    description:
      'Star Performer in Samarpan — Music for World Peace, an ensemble of 229 keyboardists conducted by Isaimaamani M. S. Martin and organised by Mellifluous Melodies on Keyboard at the Chennai Trade Centre on 16 January 2014. The ensemble was officially recognised by Guinness World Records as the largest keyboard ensemble.',
    highlights: [
      '229-member keyboard ensemble · Chennai Trade Centre, Nandambakkam',
      'Conducted by Isaimaamani M. S. Martin',
      'Officially adjudicated and certified by Guinness World Records',
    ],
  },
  {
    id: 'stirs-grant',
    title: 'STIRS Research Grant — EcoSphereX',
    issuer: 'Shiv Nadar University Chennai',
    year: '2023 — 24',
    category: 'Research',
    description:
      'Awarded a competitive ₹10,000 research grant under the STIRS programme to build EcoSphereX, an IoT-based integrated environmental health monitoring system.',
    highlights: [
      'Project ID: STIR2023_IIMSEH',
      'Sensor stack: ESP8266, MQTT, multi-parameter air & water sensors',
      'Mentored end-to-end from proposal to working prototype',
    ],
    link: {
      label: 'EcoSphereX on GitHub',
      url: 'https://github.com/achyuth-2308/EcoSphereX-IoT-Based-Integrated-Monitoring-System-for-Environmental-Health',
    },
  },
  {
    id: 'airss-iitm',
    title: "Presenter — All India Research Scholars' Summit",
    issuer: 'IIT Madras',
    year: '2025',
    category: 'Research',
    description:
      "Selected to present EcoSphereX (OP106) at AIRSS 2025 — IIT Madras' flagship research summit, alongside scholars from across the country.",
  },
  {
    id: 'central-perk',
    title: 'Founder — Central Perk Café',
    issuer: 'Shiv Nadar University Chennai',
    year: '2023 — Present',
    category: 'Leadership',
    description:
      "Kickstarted the university's first ever student-run entrepreneurial venture on campus — from concept and branding to operations.",
  },
  {
    id: 'mun-vp',
    title: 'Vice President — SNUC MUN Society',
    issuer: 'Shiv Nadar University Chennai',
    year: '2024 — 25',
    category: 'Leadership',
    description:
      'Led conference operations, delegate experience and inter-college outreach as VP of the MUN Society.',
  },
  {
    id: 'cultural-coord',
    title: 'Overall Cultural & Club Coordinator',
    issuer: 'Shiv Nadar University Chennai',
    year: '2024 — 25',
    category: 'Cultural',
    description:
      "Coordinated cultural programming and inter-club activities across the university's student body.",
  },
  {
    id: 'cricket',
    title: "University Cricket Team",
    issuer: 'Shiv Nadar University Chennai',
    year: '2022 — Present',
    category: 'Sports',
    description:
      "Selected to represent the university's prestigious cricket team in inter-collegiate fixtures.",
  },
  {
    id: 'ambassador',
    title: 'Student Ambassador',
    issuer: 'Shiv Nadar University Chennai',
    year: '2023 — Present',
    category: 'Leadership',
    description:
      'Represented the university to prospective students, parents and visiting delegations.',
  },
  {
    id: 'nso',
    title: '70+ Volunteer Hours — NSO',
    issuer: 'National Sports Organization, SNUC',
    year: '2022 — 24',
    category: 'Community',
    description:
      "Logged 70+ hours volunteering with the university's NSO wing across sports events and outreach.",
  },
];
