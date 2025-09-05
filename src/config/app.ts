import type { CarouselConfig } from '@/types';

export const APP_CONFIG = {
    name: 'Yomogi Server',
    description: '建てて、遊んで、暮らしを紡ぐMCBE生活サーバー',
    version: '1.0.0',
    author: 'Yomogi Server Team',
} as const;

export const CAROUSEL_CONFIG: CarouselConfig = {
    autoPlay: true,
    autoPlayInterval: 5000,
    showArrows: true,
    showIndicators: true,
    pauseOnHover: false,
};
