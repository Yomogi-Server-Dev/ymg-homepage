import type { CarouselConfig } from '@/types';

export const APP_CONFIG = {
    name: 'Yomogi Server',
    description: 'みんなで楽しむMCBEサバイバルサーバー',
    version: '1.0.0',
    author: 'Yomogi Server Team',
} as const;

export const CAROUSEL_CONFIG: CarouselConfig = {
    autoPlayInterval: 5000,
    showArrows: true,
    showIndicators: true,
    pauseOnHover: true,
};
