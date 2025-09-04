import type { LucideIcon } from 'lucide-react';

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'youtube';
  src: string;
  alt?: string;
  title?: string;
  youtubeId?: string;
}

export type AdminRole = 'Owner' | 'Admin' | 'Moderator' | 'Builder';

export interface Admin {
  id: number;
  name: string;
  role: AdminRole;
  avatar: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  icon: LucideIcon;
  status: 'active' | 'upcoming';
  schedule: string;
  description: string;
  detailContent: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  detailTitle: string;
  detailContent: string;
  icon: LucideIcon;
}

export interface CarouselConfig {
  autoPlayInterval: number;
  showArrows: boolean;
  showIndicators: boolean;
  pauseOnHover: boolean;
}
