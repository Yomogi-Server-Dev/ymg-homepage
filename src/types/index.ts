import type {LucideIcon} from 'lucide-react';

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

export type AdminRole = 'Admin' | 'Builder';

export interface Admin {
    id: number;
    name: string;
    gamerTag: string;
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
    description: string[];
    detailTitle: string;
    imageUrl: string;
}

export interface Feature {
    id: number;
    title: string;
    description: string[];
    detailTitle: string;
    imageUrl: string;
    icon: LucideIcon;
    status?: 'active' | 'upcoming';
}

export interface ContentItem {
    id: number;
    title: string;
    description: string[];
    detailTitle: string;
    imageUrl: string;
    icon: LucideIcon;
    status?: 'active' | 'upcoming';
    schedule?: string;
}

export interface CarouselConfig {
    autoPlayInterval: number;
    showArrows: boolean;
    showIndicators: boolean;
    pauseOnHover: boolean;
}
