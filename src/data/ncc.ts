// NCC journey data — Achyuth Mukund
// Sergeant & Parade Commander · D.A.V. Boys Senior Secondary School, Gopalapuram
// Affiliated to 1 (Tamil Nadu) Battalion NCC · Madras 'A' Group · TN, P & A&N Directorate
// NCC 'A' Certificate · A Grading

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
import uniformKit from '@/assets/ncc/uniform-kit.jpg';
import riflesLineup from '@/assets/ncc/rifles-lineup.jpg';
// New from collage
import withRedBeretOfficer from '@/assets/ncc/collage-officer-red-beret.jpg';
import igcTrophiesPair from '@/assets/ncc/collage-igc-trophies-pair.jpg';
import withFemaleCadets from '@/assets/ncc/collage-with-female-cadets.jpg';
import withCamoOfficer1 from '@/assets/ncc/collage-with-camo-officer-1.jpg';
import crestLarge from '@/assets/ncc/collage-crest-large.jpg';
import withCamoOfficer2 from '@/assets/ncc/collage-with-camo-officer-2.jpg';
import blazerMedal from '@/assets/ncc/collage-blazer-medal.jpg';
import rdcParade from '@/assets/ncc/collage-rdc-parade.jpg';

export const nccParadeVideo = '/ncc/ncc-parade.mp4';

export interface NccChapter {
  id: string;
  year: string;
  kicker: string;
  title: string;
  body: string[];
  pull?: string;
  bullets?: string[];
}

export const nccChapters: NccChapter[] = [
  {
    id: 'enrolment',
    year: '2017 — 18',
    kicker: 'Enrolment',
    title: 'Khaki, beret, and the start of the file.',
    body: [
      'Enrolled into the National Cadet Corps as a junior division cadet at D.A.V. Boys Senior Secondary School, Gopalapuram — a school contingent affiliated to 1 (Tamil Nadu) Battalion NCC under the Madras "A" Group of the Tamil Nadu, Puducherry and Andaman & Nicobar Directorate.',
      'The first year was foundation work — drill, turnout, ceremonial, and the discipline of standing in a line for an hour without moving an inch. The kit became muscle memory: full khakis, web belt, lanyard, beret, and the red-and-white Madras Regiment hackle.',
    ],
  },
  {
    id: 'inter-group',
    year: '2018',
    kicker: 'First Camp Wins',
    title: 'Inter Group Competitions, Coimbatore.',
    body: [
      'Selected to represent 1 (TN) Battalion NCC and Madras "A" Group at the Inter Group Competitions (IGC) Camp held at Coimbatore — the qualifying camp under the TN, P & A&N Directorate that feeds into directorate-level Republic Day selection.',
      'The contingent returned with the Best Cadet plaque (Junior Division), the Group Song winners\' plaque, and the runner-up trophy in the PM\'s Rally March Past — three results from a single camp.',
    ],
    pull: 'You learn early that a good contingent is just twenty cadets breathing in the same rhythm.',
  },
  {
    id: 'sergeant',
    year: '2019',
    kicker: 'Sergeant & Parade Commander',
    title: 'Head of the contingent. Seventy-five cadets.',
    body: [
      'Promoted to the rank of Sergeant and appointed Parade Commander (PC) of the D.A.V. Gopalapuram NCC Troop — the senior-most cadet appointment in the school unit, leading a contingent of 75 cadets across drill, ceremonial and competition.',
      'The role ran beyond the chevrons: facilitating training sessions for junior cadets, planning community-service projects with troop officers and instructors, and representing the troop at school events, parades and inter-school competitions. Alongside, attended leadership workshops and training programmes to sharpen personal and team effectiveness.',
    ],
    bullets: [
      'Parade Commander · led 75 cadets on parade and ceremonial',
      'Trained and mentored junior cadets in drill, turnout and weapon handling',
      'Co-planned community-service projects with troop officers',
      'Represented the troop at school events, parades and competitions',
      'Attended leadership and team-effectiveness workshops',
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
      'Shortlisted for and attended seven NCC Republic Day Training Camps (RDC) across cities and colleges in Tamil Nadu — including the prestigious Inter Group Competitions (IGC) Camp at Coimbatore — under the TN, P & A&N Directorate, representing 1 (TN) Battalion NCC and Madras "A" Group. Each camp ran ten days end to end: 0500 hours fall-in, drill, PT, weapon training, ceremonial rehearsal, lights out at 2200.',
      'Underwent and successfully completed weapon training on the 7.62 mm SLR (Self Loading Rifle) and the full series of 0.22 mm calibre NCC rifles, with live firing on multiple service shooting ranges across the directorate. Range work taught the part of the discipline that doesn\'t show up in photos — breathing, trigger control, holding still long enough to send a single round into a small ring 25 metres away.',
    ],
    bullets: [
      '7 Republic Day Training Camps · 10 days each',
      'IGC Camp, Coimbatore · TN, P & A&N Directorate',
      'Weapon training · 7.62 mm SLR + all 0.22 mm calibre NCC rifles',
      'Live firing across multiple service shooting ranges',
    ],
  },
  {
    id: 'a-certificate',
    year: '2020',
    kicker: "A Certificate · A Grade",
    title: "NCC 'A' Certificate — A Grading.",
    body: [
      "Completed the junior-division programme and was awarded the NCC 'A' Certificate with an A Grading — the highest grade — by the Directorate General NCC, Ministry of Defence, on the strength of attendance, drill, weapon training, written examination and overall conduct across three years.",
      "Three years, seven camps, two Best Cadet trophies, one rank of Sergeant, and one parade contingent of seventy-five cadets — all signed off with the highest grade on the certificate.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Vertical timeline — concise, parade-card style
// ─────────────────────────────────────────────────────────────
export interface NccTimelineEntry {
  year: string;
  rank: string;
  headline: string;
  detail: string;
  tag: 'enrolment' | 'camp' | 'rank' | 'award' | 'training' | 'certificate';
}

export const nccTimeline: NccTimelineEntry[] = [
  {
    year: '2017',
    rank: 'Cadet',
    headline: 'Enrolled · 1 (TN) Battalion NCC',
    detail: 'D.A.V. Boys Sr. Sec. School, Gopalapuram · Madras "A" Group · TN, P & A&N Directorate.',
    tag: 'enrolment',
  },
  {
    year: '2018',
    rank: 'Cadet',
    headline: 'IGC Camp · Coimbatore',
    detail: 'Best Cadet (Junior Div.), Group Song winners and runner-up in PM\'s Rally March Past — three results from one camp.',
    tag: 'camp',
  },
  {
    year: '2019',
    rank: 'Sergeant',
    headline: 'Promoted Sergeant · appointed Parade Commander',
    detail: 'Senior-most cadet appointment in the school unit. Led a contingent of 75 cadets across drill, ceremonial and competition.',
    tag: 'rank',
  },
  {
    year: '2019',
    rank: 'Sergeant',
    headline: 'Best NCC Cadet — Junior Division',
    detail: 'Awarded by 1 (TN) Battalion NCC and, separately, by D.A.V. Boys Gopalapuram at Annual Day 2019 — 20.',
    tag: 'award',
  },
  {
    year: '2017 — 2020',
    rank: 'Sergeant',
    headline: '7 Republic Day Training Camps',
    detail: 'Across Tamil Nadu · 10 days each · drill, PT, ceremonial, weapon training and competitions.',
    tag: 'camp',
  },
  {
    year: '2019 — 20',
    rank: 'Sergeant',
    headline: 'Weapon training — SLR + .22 calibre',
    detail: '7.62 mm SLR (Self Loading Rifle) and the full series of 0.22 mm calibre NCC rifles · live firing on multiple service ranges.',
    tag: 'training',
  },
  {
    year: '2020',
    rank: 'Sergeant',
    headline: "NCC 'A' Certificate · A Grade",
    detail: 'Highest grade · awarded by Directorate General NCC, Ministry of Defence on completion of the junior-division programme.',
    tag: 'certificate',
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
    id: 'igc-trophies-pair',
    src: igcTrophiesPair,
    alt: 'Two cadets holding the Best Cadet plaque, Group Song winners plaque and PM Rally trophy from IGC Camp Coimbatore',
    caption: 'IGC Camp, Coimbatore · Best Cadet plaque, Group Song winners and PM\'s Rally runner-up — held by the school contingent.',
    aspect: 'wide',
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
    alt: 'Award For Best NCC Cadet — Achyuth Mukund, X-A, on stage at D.A.V. Boys Gopalapuram',
    caption: 'On stage · receiving the Best NCC Cadet trophy as a Class X cadet.',
    aspect: 'landscape',
  },
  {
    id: 'inter-group',
    src: interGroup,
    alt: 'Inter Group Competition RDC 2019 trophies — Best Cadet, Group Song winners and PM\'s Rally March Past runner-up',
    caption: 'IGC trophy table · Best Cadet, Group Song and PM\'s Rally March Past plaques.',
    aspect: 'wide',
  },
  {
    id: 'rdc-parade',
    src: rdcParade,
    alt: 'NCC Republic Day contingent marching in ceremonial dress',
    caption: 'Republic Day contingent · ceremonial march past in full dress.',
    aspect: 'wide',
  },
  {
    id: 'with-red-beret-officer',
    src: withRedBeretOfficer,
    alt: 'Cadet Achyuth Mukund alongside a senior army officer in maroon beret',
    caption: 'With a visiting paratroop officer · post-camp at unit lines.',
    aspect: 'square',
  },
  {
    id: 'with-female-cadets',
    src: withFemaleCadets,
    alt: 'Three NCC cadets in full ceremonial dress with hackles and lanyards',
    caption: 'Mixed contingent · ceremonial turnout before a parade.',
    aspect: 'square',
  },
  {
    id: 'with-camo-officer-1',
    src: withCamoOfficer1,
    alt: 'Cadet Achyuth Mukund with a senior NCC instructor in combat dress',
    caption: 'With the troop instructor · battalion lines.',
    aspect: 'portrait',
  },
  {
    id: 'with-camo-officer-2',
    src: withCamoOfficer2,
    alt: 'Cadet Achyuth Mukund alongside an NCC officer in field uniform',
    caption: 'With the camp ANO · end of a Republic Day Training Camp.',
    aspect: 'portrait',
  },
  {
    id: 'blazer-medal',
    src: blazerMedal,
    alt: 'School blazer with the 1 TN P&AN Republic Day Camp 2019 contingent commander medal',
    caption: 'TN, P & A&N · Republic Day Camp 2019 contingent badge on the school blazer.',
    aspect: 'square',
  },
  {
    id: 'rifles-lineup',
    src: riflesLineup,
    alt: 'Row of 0.22 mm calibre NCC training rifles laid out on a groundsheet, stencilled 1 TN BN',
    caption: 'Armoury line · 0.22 mm calibre NCC rifles · stencilled 1 TN BN.',
    aspect: 'wide',
  },
  {
    id: 'rifle-range',
    src: rifleRange,
    alt: 'NCC cadets at the rifle range, prone position with .22 calibre rifles, beret with red hackle on the ground',
    caption: 'Range day · prone position · 0.22 mm calibre · 25-metre line.',
    aspect: 'landscape',
  },
  {
    id: 'uniform-kit',
    src: uniformKit,
    alt: 'NCC kit packed for camp — full khakis with name tape Achyuth Mukund and the NCC certificate',
    caption: 'Kit ready for camp · name tape, full khakis, certificate folder.',
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
  {
    id: 'crest-large',
    src: crestLarge,
    alt: 'NCC bullion crest — रा.कै.को / NCC with motto एकता और अनुशासन',
    caption: 'Bullion crest · रा.कै.को NCC · "एकता और अनुशासन".',
    aspect: 'square',
  },
];

export const nccFacts = [
  { value: '75', label: 'Cadets led · Parade Commander' },
  { value: '7', label: 'Republic Day Training Camps' },
  { value: '2×', label: 'Best Cadet · School + Battalion' },
  { value: 'A', label: "NCC 'A' Certificate · A Grade" },
];
