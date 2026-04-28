export type MediaKind = 'image' | 'gif' | 'video';

export interface MediaItem {
  kind: MediaKind;
  src: string;
  poster?: string;
  alt?: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description?: string;
  role?: string;
  year?: string;
  tags: string[];
  media: MediaItem[];
  links?: ProjectLink[];
  featured?: boolean;
}

export interface SkillGroup {
  name: string;
  items: string[];
}
