
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

export enum NavSection {
  HOME = 'home',
  PITCH = 'pitch',
  MASK = 'mask',
  FOUNDATION = 'foundation'
}
