
import { CareerStat, TimelineEvent, Quote, Achievement, GalleryImage } from './types';

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
  { year: '2024', club: 'Galatasaray', goals: 37, apps: 42 },
  { year: '2025', club: 'PSG', goals: 12, apps: 22 },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1998',
    title: 'Origins',
    location: 'Lagos, Nigeria',
    description: 'Born in Olusosun, Victor scavenged for boots and sold water in the streets, fueling a fire that would light up the world. The son of a police officer, raised in Lagos — the megacity that forged his hunger.',
    image: '/images/timeline_lagos_origins_1772708277927.png'
  },
  {
    year: '2015',
    title: 'The Breakthrough',
    location: 'Chile — FIFA U-17 World Cup',
    description: 'Golden Boot winner at the FIFA U-17 World Cup with a record-breaking 10 goals in just 6 matches. The world stopped and took notice of a star being born.',
    image: '/images/timeline_u17_worldcup_1772708330184.png'
  },
  {
    year: '2020',
    title: 'The Partenopei King',
    location: 'Naples, Italy',
    description: 'Signed for SSC Napoli in a club-record €70 million deal — the most expensive African footballer ever. Became a symbol of hope and electricity for a city that breathes football.',
    image: '/images/timeline_napoli_era_1772708540610.png'
  },
  {
    year: '2023',
    title: 'Scudetto Sovereignty',
    location: 'Italy — Serie A',
    description: 'Led Napoli to their first Serie A title in 33 years. Capocannoniere with 26 league goals. Named African Footballer of the Year. An immortal chapter written in gold.',
    image: '/images/timeline_scudetto_glory_1772708591157.png'
  },
  {
    year: '2024',
    title: 'The Bosphorus Chapter',
    location: 'Istanbul, Turkey — Galatasaray',
    description: '37 goals in 42 appearances — a historic record-breaking season with Galatasaray. Euro\'s top-scoring striker of the year. The continent of Africa roared with pride as Victor dominated Turkey.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80'
  },
  {
    year: '2025',
    title: 'The Paris Chapter',
    location: 'Paris, France — PSG',
    description: 'Joined Paris Saint-Germain on loan — the next frontier. A new stadium, new ambitions, and the same relentless hunger that started on Lagos streets.',
    image: 'https://images.unsplash.com/photo-1551854838-212c9a5f3ad0?w=1200&q=80'
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { year: '2015', award: 'U-17 World Cup Golden Boot', org: 'FIFA', icon: '🥇' },
  { year: '2015', award: 'U-17 World Cup Golden Ball', org: 'FIFA', icon: '⚽' },
  { year: '2023', award: 'Serie A Capocannoniere', org: 'Lega Serie A', icon: '🏆' },
  { year: '2023', award: 'African Footballer of the Year', org: 'CAF', icon: '🌍' },
  { year: '2023', award: 'Serie A Champion (Scudetto)', org: 'SSC Napoli', icon: '🥇' },
  { year: '2023', award: 'Serie A Best Striker', org: 'Lega Serie A', icon: '⚡' },
  { year: '2024', award: 'Turkish Süper Lig Top Scorer', org: 'Galatasaray', icon: '🎯' },
  { year: '2024', award: 'Super Eagles All-Time Top Scorer', org: 'Nigeria NFF', icon: '🦅' },
  { year: '2024', award: 'AFCON Golden Boot', org: 'CAF', icon: '🌟' },
  { year: '2025', award: 'Champions League Competitor', org: 'PSG / UEFA', icon: '⭐' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/hero_background_1772708175592.png',
    caption: 'The moment that defines a generation — a Victor Osimhen celebration',
    category: 'Celebration'
  },
  {
    src: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80',
    caption: 'Representing the Super Eagles — flying the green-white-green',
    category: 'International'
  },
  {
    src: '/images/timeline_scudetto_glory_1772708591157.png',
    caption: 'Lifting the Scudetto — 33 years in the making for Naples',
    category: 'Celebration'
  },
  {
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
    caption: 'Relentless in training — where champions are forged',
    category: 'Training'
  },
  {
    src: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&q=80',
    caption: 'Giving back to the youth — VOF Foundation outreach in Lagos',
    category: 'Foundation'
  },
  {
    src: '/images/timeline_napoli_era_1772708540610.png',
    caption: 'The Stadio Diego Armando Maradona — his cathedral',
    category: 'Celebration'
  },
];

export const QUOTES: Quote[] = [
  { text: "Faith. Fight. Focus.", context: "Life Philosophy" },
  { text: "I don't play for myself. I play for every child in Olusosun who has ever dared to dream.", context: "Motivation" },
  { text: "Every goal began with belief. The crowd never gave me what I already had inside.", context: "Mentality" },
  { text: "I wore the mask so the world would see that nothing — not injury, not poverty, not doubt — can stop me.", context: "On The Mask" },
  { text: "Africa has always produced kings. We just need the world to see it.", context: "Vision" },
  { text: "I want to be the reason some kid in Lagos doesn't give up. That is my mission.", context: "Legacy" },
];
