// Music journey data — Achyuth Mukund
// A keyboardist's training, milestones and the stages he plays on.

import gwrCertificate from '@/assets/music/gwr-certificate.jpg';
import gwrFolder from '@/assets/music/gwr-folder.jpg';
import samarpanPoster from '@/assets/music/samarpan-poster.jpg';
import otsocPerformance from '@/assets/music/otsoc-performance.jpg';

export type MusicEra =
  | 'Foundations'
  | 'Stage'
  | 'World Record'
  | 'Discipleship';

export interface MusicChapter {
  id: string;
  era: MusicEra;
  year: string;
  title: string;
  subtitle?: string;
  guru?: string;
  venue?: string;
  body: string[];
  pull?: string; // a pull-quote / italic line
  link?: { label: string; url: string };
}

export const musicChapters: MusicChapter[] = [
  {
    id: 'harish-raghavendra',
    era: 'Foundations',
    year: 'Early years',
    title: 'Where the first swara was learned',
    subtitle: 'Harish Raghavendra School of Music',
    guru: 'Shri Raghavendra Udayakumar',
    body: [
      'My training on the keyboard began at the Harish Raghavendra School of Music in Chennai, under Shri Raghavendra Udayakumar.',
      'The early years were spent on the fundamentals — sarali, jantai and dhatu varisais, the seven basic swaras and, in time, the sixteen swarasthanas that South Indian Carnatic music actually uses. Those years built the ear and the hand discipline that everything since has rested on.',
    ],
    pull: 'Sa, Ri, Ga, Ma — first as a discipline, then as a language.',
  },
  {
    id: 'samarpan-gwr',
    era: 'World Record',
    year: '16 January 2014',
    title: 'Samarpan — Music for World Peace',
    subtitle: '“Mellifluous Melodies on Keyboard” · Star Performer',
    guru: 'Conducted by Isaimaamani M. S. Martin',
    venue: 'Chennai Trade Centre, Nandambakkam',
    body: [
      'On 16 January 2014, 229 keyboardists assembled at the Chennai Trade Centre under Isaimaamani M. S. Martin and performed together as a single ensemble — entering the Guinness Book of World Records for the largest keyboard ensemble.',
      'I was one of the 229, billed as a Star Performer of Samarpan: Music for World Peace, organised by Mellifluous Melodies on Keyboard. The certificate of participation, the record-holder folder and the memory of that hall sit on the same shelf at home.',
    ],
    pull: 'One ensemble. 229 keyboards. One world record.',
  },
  {
    id: 'on-the-streets-of-chennai',
    era: 'Stage',
    year: '2022 — Present',
    title: 'On the Streets of Chennai',
    subtitle: 'Keyboardist · Café & Corporate Circuit',
    body: [
      'On the Streets of Chennai is a city-based music collective that runs gigs across cafés, public spaces and private events — an open, genre-agnostic stage where Carnatic-leaning keyboard work sits alongside film and contemporary music.',
      'I joined the collective as a keyboardist, and the residency has since extended into a regular run of café shows and corporate engagements across Chennai. Different rooms, different audiences, the same instrument.',
    ],
    pull: 'A keyboard, a wire, and whoever the room turned out to be.',
  },
  {
    id: 'keyboard-sathya-kbsi',
    era: 'Discipleship',
    year: 'Currently',
    title: 'Studying under Keyboard Sathya',
    subtitle: 'Disciple · KBSI — KBS Inculcation',
    guru: 'Kalaimaamani Shri Sathyanarayanan ("Keyboard Sathya")',
    body: [
      'I currently train under Kalaimaamani Shri Sathyanarayanan — known across the field as "Keyboard Sathya" — the musician most widely credited with adapting the electronic keyboard for South Indian Carnatic music, and the founder of KBS Inculcation (KBSI).',
      'KBSI works on a specific problem: making a fixed-pitch Western instrument speak fluent Carnatic — the sixteen swarasthanas, the gamaka inflections that carry a raga, the alapana, niraval and kalpanaswara phrasing of a kutcheri. It is the most demanding part of this journey, and the part I am most grateful to be in.',
      'As part of this training, our Carnatic instrumental troupe continues to perform every evening through Navarathri at sabhas, temples and private gatherings across Chennai — a nine-night season that remains one of the steadiest commitments of the year.',
    ],
    link: {
      label: 'keyboardsathya.in',
      url: 'https://www.keyboardsathya.in/',
    },
    pull: 'Carnatic on keyboard — swara, gamaka, sruti, breath.',
  },
];

export interface MusicImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  chapter: string; // matches MusicChapter.id
  aspect?: 'portrait' | 'landscape' | 'square' | 'wide';
}

export const musicGallery: MusicImage[] = [
  {
    id: 'samarpan-poster',
    src: samarpanPoster,
    alt: 'Samarpan — Music for World Peace, Star Performer card for Achyuth Mukund',
    caption: "Star Performer card · Samarpan, M. S. Martin's “Mellifluous Melodies on Keyboard” · Chennai Trade Centre, 16 Jan 2014.",
    chapter: 'samarpan-gwr',
    aspect: 'wide',
  },
  {
    id: 'gwr-certificate',
    src: gwrCertificate,
    alt: 'Guinness World Records certificate of participation — Achyuth Mukund',
    caption: 'Guinness World Records · Certificate of Participation — largest keyboard ensemble (229 participants).',
    chapter: 'samarpan-gwr',
    aspect: 'portrait',
  },
  {
    id: 'gwr-folder',
    src: gwrFolder,
    alt: 'Guinness World Records — Record Holder presentation folder',
    caption: 'Guinness World Records · "Record Holder" presentation folder.',
    chapter: 'samarpan-gwr',
    aspect: 'portrait',
  },
  {
    id: 'otsoc-performance',
    src: otsocPerformance,
    alt: 'Achyuth Mukund performing on keyboard at On the Streets of Chennai',
    caption: 'On the Streets of Chennai · live set on Yamaha PSR-S970.',
    chapter: 'on-the-streets-of-chennai',
    aspect: 'landscape',
  },
];
