import teamHuddle1 from '@/assets/cricket/team-huddle-1.jpg';
import teamHuddle2 from '@/assets/cricket/team-huddle-2.jpg';
import snuTeamPortrait from '@/assets/cricket/snu-team-portrait.jpg';
import bestBatsmanTrophy from '@/assets/cricket/best-batsman-trophy.jpg';

export const cricketProfile = {
  role: 'Right-arm Medium Pace Bowler',
  battingStyle: 'Right-hand Batsman',
  baseCity: 'Chennai, India',
  cricHeroesUrl: 'https://cricheroes.com/player-profile/48875674/achyuth-mukund',
};

export type CricketTeam = {
  id: string;
  name: string;
  role: string;
  period: string;
  blurb: string;
  tint: 'primary' | 'emerald' | 'sky' | 'amber';
};

export const cricketTeams: CricketTeam[] = [
  {
    id: 'new-eagles',
    name: "New Eagles XI",
    role: 'Right-arm Medium Pacer',
    period: 'Current',
    blurb:
      'A regular bowling option for the side across league and friendly fixtures around Chennai.',
    tint: 'sky',
  },
  {
    id: 'logitech',
    name: 'Logitech Engineering & Design — Cricket Team',
    role: 'Right-arm Medium Pacer',
    period: 'Current',
    blurb:
      'Turn out frequently for Logitech E&D in corporate fixtures — the bridge between the cubicle and the crease.',
    tint: 'primary',
  },
  {
    id: 'snu',
    name: 'Shiv Nadar University Chennai — Cricket Team',
    role: 'Squad Member · Pacer',
    period: 'University',
    blurb:
      'Represented SNU Chennai in inter-collegiate fixtures, training out of the campus ground in Kalavakkam.',
    tint: 'emerald',
  },
  {
    id: 'kedars',
    name: "Kedar's Cricket Academy, Chennai",
    role: 'Trained Player · Multiple Match Appearances',
    period: '2014 — present',
    blurb:
      'The training home — formal coaching, age-group fixtures, and the foundation for everything since. Recognised as Best Batsman at the 2014—15 annual camp.',
    tint: 'amber',
  },
];

export type CricketImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
};

export const cricketGallery: CricketImage[] = [
  {
    id: 'snu-portrait',
    src: snuTeamPortrait,
    alt: 'Achyuth Mukund in Shiv Nadar University Chennai cricket whites at the campus ground',
    caption: 'Between overs · SNU Chennai cricket ground',
    aspect: 'portrait',
  },
  {
    id: 'huddle-1',
    src: teamHuddle1,
    alt: 'Post-wicket celebration with team-mates in cricket whites',
    caption: 'Wicket down · the walk back',
    aspect: 'landscape',
  },
  {
    id: 'huddle-2',
    src: teamHuddle2,
    alt: 'Handshakes between teams after the innings',
    caption: 'End of innings handshakes',
    aspect: 'landscape',
  },
  {
    id: 'best-batsman',
    src: bestBatsmanTrophy,
    alt: "Best Batsman trophy — Kedar's Cricket Academy Annual Camp 2014-2015",
    caption: "Best Batsman · Kedar's Cricket Academy · 2014—15",
    aspect: 'portrait',
  },
];
