import type { LucideIcon } from "lucide-react";

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt?: string;
  title?: string;
}

export type AdminRole = "Owner" | "Admin" | "Moderator" | "Builder";

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
  status: "active" | "upcoming";
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

export interface RoleColors {
  [key: string]: string;
}

export interface ServerStatusData {
  isOnline: boolean;
  playerCount: number;
  maxPlayers: number;
  version: string;
  lastUpdated: string;
}

export interface CarouselConfig {
  autoPlayInterval: number;
  showArrows: boolean;
  showIndicators: boolean;
  pauseOnHover: boolean;
}

export interface SectionConfig {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  showSeparator?: boolean;
}