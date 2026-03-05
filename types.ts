
export interface CareerStat {
  year: string;
  club: string;
  goals: number;
  apps: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface Quote {
  text: string;
  context: string;
}

export interface Achievement {
  year: string;
  award: string;
  org: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  caption: string;
  category: 'Celebration' | 'Foundation' | 'International' | 'Training';
}

export enum NavSection {
  HOME = 'home',
  PITCH = 'pitch',
  ACHIEVEMENTS = 'achievements',
  JOURNEY = 'journey',
  MASK = 'mask',
  GALLERY = 'gallery',
  FOUNDATION = 'foundation'
}
