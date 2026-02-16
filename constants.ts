
import { CareerStat, TimelineEvent, Quote } from './types';

export const BRAND_COLORS = {
  deepBlue: '#0A1128',
  gold: '#D4AF37',
  black: '#050505',
  white: '#FFFFFF',
};

export const CAREER_STATS: CareerStat[] = [
  { year: '2017', club: 'Wolfsburg', goals: 0, apps: 16 },
  { year: '2018', club: 'Charleroi', goals: 20, apps: 36 },
  { year: '2019', club: 'Lille', goals: 18, apps: 38 },
  { year: '2020', club: 'Napoli', goals: 10, apps: 30 },
  { year: '2021', club: 'Napoli', goals: 18, apps: 32 },
  { year: '2022', club: 'Napoli', goals: 31, apps: 39 },
  { year: '2023', club: 'Napoli', goals: 17, apps: 32 },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1998',
    title: 'Origins',
    location: 'Lagos, Nigeria',
    description: 'Born in Olusosun, Victor scavenged for boots and sold water in the streets, fueling a fire that would light up the world.',
    image: 'https://picsum.photos/seed/lagos/1200/800'
  },
  {
    year: '2015',
    title: 'The Breakthrough',
    location: 'Chile',
    description: 'Golden Boot winner at the U-17 World Cup with a record-breaking 10 goals. The world took notice.',
    image: 'https://picsum.photos/seed/u17/1200/800'
  },
  {
    year: '2020',
    title: 'The Partenopei King',
    location: 'Naples, Italy',
    description: 'Signed for Napoli in a record deal. Becoming a symbol of hope for a city that breathes football.',
    image: 'https://picsum.photos/seed/napoli/1200/800'
  },
  {
    year: '2023',
    title: 'Scudetto Sovereignty',
    location: 'Italy',
    description: 'Led Napoli to their first Serie A title in 33 years. Capocannoniere. African Footballer of the Year.',
    image: 'https://picsum.photos/seed/glory/1200/800'
  }
];

export const QUOTES: Quote[] = [
  { text: "Faith. Fight. Focus.", context: "Life Philosophy" },
  { text: "I don't play for myself, I play for every kid in Olusosun.", context: "Motivation" },
  { text: "Every goal began with belief.", context: "The Pitch" }
];
