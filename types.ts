
export interface VideoData {
  id: string;
  title: string;
  category: 'long' | 'motion' | 'short';
  url: string;
}

export interface Skill {
  name: string;
  level: number;
}
