// Music journey data — Achyuth Mukund
// A keyboardist's lineage, milestones and stages.

import gwrCertificate from '@/assets/music/gwr-certificate.jpg';
import gwrFolder from '@/assets/music/gwr-folder.jpg';
import samarpanPoster from '@/assets/music/samarpan-poster.jpg';
import otsocLogo from '@/assets/music/otsoc-logo.jpg';
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
    title: 'Where the first scale was learned',
    subtitle: 'Harish Raghavendra School of Music',
    guru: 'Shri Raghavendra Udayakumar',
    body: [
      "Every keyboardist remembers the first room they sat in — the smell of foam, the buzz of an old amplifier, the patient guru tapping out a beat on the side of the instrument. Mine was at the Harish Raghavendra School of Music, under the tutelage of Shri Raghavendra Udayakumar.",
      "The lessons were strict, the practice non-negotiable, and the affection unmistakable. Sa, ri, ga, ma — long before they became chords, they were a discipline.",
    ],
    pull: 'Before it was a craft, it was a habit.',
  },
  {
    id: 'samarpan-gwr',
    era: 'World Record',
    year: '16 Jan 2014',
    title: 'Samarpan — Music for World Peace',
    subtitle: '“Mellifluous Melodies on Keyboard” · Star Performer',
    guru: 'Isaimaamani M. S. Martin',
    venue: 'Chennai Trade Centre, Nandambakkam',
    body: [
      "On 16 January 2014, 229 keyboardists assembled at the Chennai Trade Centre under Isaimaamani M. S. Martin to play together as one ensemble — and entered the Guinness Book of World Records as the largest keyboard ensemble ever assembled.",
      "I was one of those 229 — billed as a Star Performer of Samarpan: Music for World Peace, conducted by Mellifluous Melodies on Keyboard. The certificate, the plaque and the memory still sit on the same shelf.",
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
      "On the Streets of Chennai is the city's open-mic, busking-meets-living-room music collective — a space where Carnatic riffs sit next to film classics and singer-songwriter sets.",
      "I came on board as a keyboardist, and the residency quickly spilled outward — a steady run of gigs across Chennai's café circuit and a string of corporate showcases. Different rooms, different crowds, the same instrument.",
    ],
    pull: 'A keyboard, a wire, and whoever showed up that evening.',
  },
  {
    id: 'keyboard-sathya-kbsi',
    era: 'Discipleship',
    year: 'Currently',
    title: 'Studying under Keyboard Sathya',
    subtitle: 'Disciple · KBSI — KBS Inculcation',
    guru: 'Kalaimaamani Shri Sathyanarayanan ("Keyboard Sathya")',
    body: [
      "Today I train under Kalaimaamani Shri Sathyanarayanan — globally known as Keyboard Sathya — a musician who reformed and adapted the keyboard for Indian Classical Music, and the founder of KBS Inculcation (KBSI).",
      "KBSI is less a class and more a school of thought: how to make a Western instrument speak fluent Carnatic, how to phrase a gamaka with weighted keys, how to listen before you play. It is, by some distance, the most demanding chapter of this journey — and the one I am most grateful for.",
    ],
    link: {
      label: 'keyboardsathya.in',
      url: 'https://www.keyboardsathya.in/',
    },
    pull: 'Carnatic on keyboard — note, gamaka, breath.',
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
    caption: 'Guinness World Records — Certificate of Participation · Largest keyboard ensemble (229 participants).',
    chapter: 'samarpan-gwr',
    aspect: 'portrait',
  },
  {
    id: 'gwr-folder',
    src: gwrFolder,
    alt: 'Guinness World Records — Record Holder presentation folder',
    caption: 'Guinness World Records · “Record Holder” presentation folder.',
    chapter: 'samarpan-gwr',
    aspect: 'portrait',
  },
  {
    id: 'otsoc-performance',
    src: otsocPerformance,
    alt: 'Achyuth Mukund performing on keyboard at On the Streets of Chennai',
    caption: 'On the Streets of Chennai · live set — Yamaha PSR-S970, vocals shared with the crowd.',
    chapter: 'on-the-streets-of-chennai',
    aspect: 'square',
  },
  {
    id: 'otsoc-logo',
    src: otsocLogo,
    alt: 'On the Streets of Chennai — collective logo',
    caption: 'On the Streets of Chennai — the collective.',
    chapter: 'on-the-streets-of-chennai',
    aspect: 'square',
  },
];
