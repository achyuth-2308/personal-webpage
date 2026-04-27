// NCC journey data — Achyuth Mukund
// Sergeant · D.A.V. Boys Senior Secondary School, Gopalapuram
// Affiliated to 1 (Tamil Nadu) Battalion NCC · Madras 'A' Group · TN, P & A&N Directorate

import crest from '@/assets/ncc/ncc-crest.jpg';
import portrait from '@/assets/ncc/full-uniform-portrait.jpg';
import bestCadetWide from '@/assets/ncc/best-cadet-stage-wide.jpg';
import bestCadetClose from '@/assets/ncc/best-cadet-stage-close.jpg';
import citation from '@/assets/ncc/citation-text.jpg';
import interGroup from '@/assets/ncc/inter-group-trophies.jpg';
import certCeremony1 from '@/assets/ncc/certificate-ceremony-1.jpg';
import certCeremony2 from '@/assets/ncc/certificate-ceremony-2.jpg';
import officer from '@/assets/ncc/officer-portrait.jpg';
import rifleRange from '@/assets/ncc/rifle-range.jpg';

export interface NccChapter {
  id: string;
  year: string;
  kicker: string;
  title: string;
  body: string[];
  pull?: string;
}

export const nccChapters: NccChapter[] = [
  {
    id: 'enrolment',
    year: '2017 — 18',
    kicker: 'Enrolment',
    title: 'Khaki, beret, and the start of the file.',
    body: [
      'Enrolled into the National Cadet Corps as a junior division cadet at D.A.V. Boys Senior Secondary School, Gopalapuram — a school contingent affiliated to 1 (Tamil Nadu) Battalion NCC, under the Madras "A" Group of the Tamil Nadu, Puducherry and Andaman & Nicobar Directorate.',
      'The first year was foundation work — drill, turnout, ceremonial, the discipline of standing in a line for an hour without moving an inch. The kit became muscle memory: full khakis, web belt, lanyard, beret, the red-and-white Madras Regiment hackle.',
    ],
  },
  {
    id: 'inter-group',
    year: '2018',
    kicker: 'First Camp Wins',
    title: 'Inter Group Competitions, Coimbatore.',
    body: [
      'Selected to represent 1 (TN) Battalion NCC and Madras "A" Group at the Inter Group Competitions Camp held at Coimbatore — the qualifying camp that feeds into the directorate-level Republic Day selection.',
      'The contingent came back with the Best Cadet plaque (Junior Division), the Group Song winners\' plaque, and the runner-up trophy in the PM\'s Rally March Past — three results from one camp.',
    ],
    pull: 'You learn early that a good contingent is just twenty cadets breathing in the same rhythm.',
  },
  {
    id: 'sergeant',
    year: '2019',
    kicker: 'Sergeant',
    title: 'Head of the contingent.',
    body: [
      'Promoted to the rank of Sergeant and given charge of the D.A.V. Gopalapuram NCC contingent — the senior-most cadet appointment in the school unit. The role was less about the chevrons and more about being the first one in uniform on parade morning and the last one to leave the quartermaster store.',
      'Responsibilities ran from squad drill instruction and turnout inspections for junior cadets, to running the contingent at school functions, Republic Day and Independence Day parades, the annual NCC Day, and inter-school ceremonial events.',
    ],
  },
  {
    id: 'best-cadet',
    year: '2019',
    kicker: 'Best Cadet — Twice Over',
    title: 'Best NCC Cadet — Junior Division.',
    body: [
      'Recognised as the Best NCC Cadet (Junior Division) by 1 (Tamil Nadu) Battalion NCC at the unit-level inter-group competition, and separately awarded the Best NCC Cadet trophy at the D.A.V. Boys Gopalapuram Annual Day 2019 — 20 by the school.',
      'The unit citation read: "Sergeant Achyuth Mukund of XA was selected as the Best Cadet in the (Junior Division) of the Unit-1 Battalion NCC. He attended seven camps including the Republic Day Camp and participated in state-level Inter Group Competitions and has undergone Weapon Training in all the 0.22 mm calibre rifles in NCC."',
    ],
    pull: 'Two trophies, the same training — one from the school, one from the battalion.',
  },
  {
    id: 'camps-rifles',
    year: '2017 — 2020',
    kicker: 'Camps & Weapon Training',
    title: 'Seven camps. Several rifles. One rhythm.',
    body: [
      'Attended seven Republic Day Training Camps (RDC) at locations across Tamil Nadu — ten days each, end to end: 0500 hours fall-in, drill, PT, weapon training, ceremonial rehearsal, lights out at 2200.',
      'Weapon training covered the 7.62 mm SLR rifle and the full series of 0.22 mm calibre NCC rifles, with live firing on multiple service shooting ranges across the directorate. Range work taught the part of the discipline that doesn\'t show up in photos — breathing, trigger control, holding still long enough to send a single round into a small ring 25 metres away.',
    ],
  },
];

export interface NccImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
}

export const nccGallery: NccImage[] = [
  {
    id: 'portrait',
    src: portrait,
    alt: 'Sergeant Achyuth Mukund in full NCC ceremonial dress',
    caption: 'Full ceremonial turnout · Sergeant chevrons, Madras Regiment hackle, RDC sash.',
    aspect: 'portrait',
  },
  {
    id: 'best-cadet-wide',
    src: bestCadetWide,
    alt: 'Best NCC Cadet award presentation at D.A.V. Boys Gopalapuram Annual Day 2019-20',
    caption: 'Best NCC Cadet · D.A.V. Boys Sr. Sec. School Annual Day 2019 — 20.',
    aspect: 'wide',
  },
  {
    id: 'best-cadet-close',
    src: bestCadetClose,
    alt: 'Award For Best NCC Cadet — close-up at the school annual day',
    caption: 'On stage · "Award for Best NCC Cadet" · Achyuth Mukund, X-A.',
    aspect: 'landscape',
  },
  {
    id: 'inter-group',
    src: interGroup,
    alt: 'Inter Group Competition RDC 2019 — Best Cadet, Group Song winners and PM\'s Rally March Past runner-up trophies',
    caption: 'Inter Group Competition (RDC 2019) · Best Cadet, Group Song & PM\'s Rally March Past.',
    aspect: 'wide',
  },
  {
    id: 'rifle-range',
    src: rifleRange,
    alt: 'NCC cadets at the rifle firing range, prone position with .22 calibre rifles',
    caption: 'Range day · prone position · 0.22 mm calibre, single rounds, 25-metre line.',
    aspect: 'landscape',
  },
  {
    id: 'cert-1',
    src: certCeremony1,
    alt: 'Achyuth Mukund receiving an NCC certificate at a battalion ceremony',
    caption: 'Certificate of merit · 1 (TN) Battalion NCC ceremony.',
    aspect: 'landscape',
  },
  {
    id: 'cert-2',
    src: certCeremony2,
    alt: 'Achyuth Mukund receiving an NCC award from a senior army officer',
    caption: 'Awarded by the Reviewing Officer · battalion ceremonial.',
    aspect: 'landscape',
  },
  {
    id: 'officer',
    src: officer,
    alt: 'Achyuth Mukund alongside a senior NCC officer',
    caption: 'With the Commanding Officer · post-camp at unit lines.',
    aspect: 'portrait',
  },
  {
    id: 'citation',
    src: citation,
    alt: 'Best Cadet citation — Sergeant Achyuth Mukund, 1 (TN) Battalion NCC',
    caption: 'The citation, verbatim · 1 (TN) Battalion NCC.',
    aspect: 'wide',
  },
  {
    id: 'crest',
    src: crest,
    alt: 'NCC cap badge — एकता और अनुशासन (Unity and Discipline)',
    caption: 'NCC cap badge · "एकता और अनुशासन" — Unity and Discipline.',
    aspect: 'square',
  },
];

export const nccFacts = [
  { value: '7', label: 'Republic Day Training Camps' },
  { value: 'Sgt', label: 'Rank · Senior-most school appointment' },
  { value: '2×', label: 'Best NCC Cadet — School + Battalion' },
  { value: '1 (TN)', label: 'Battalion NCC · Madras "A" Group' },
];
