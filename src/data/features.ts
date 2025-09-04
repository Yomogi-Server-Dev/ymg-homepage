import type { Feature } from '@/types';
import { Briefcase, Gamepad2, Home, Users } from 'lucide-react';

export const features: Feature[] = [
  {
    id: 1,
    title: '会社システム',
    icon: Home,
    description: [
      '誰でも本格的な会社経営を行うことができるようになります。',
      '会社は運営に申告すれば誰でも無料で設立できますが、設立の際は一定の審査があります。'
    ],
    detailTitle: '会社システム',
    imageUrl: '/pictures/index/top/life1.png',
    status: 'active',
  },
  {
    id: 2,
    title: '仕事',
    icon: Briefcase,
    description: ['様々な職業で稼ごう'],
    detailTitle: '仕事システム',
    imageUrl: '/pictures/index/top/expo1.png',
    status: 'active',
  },
  {
    id: 3,
    title: 'ミニゲーム',
    icon: Gamepad2,
    description: ['楽しいゲームが盛りだくさん'],
    detailTitle: 'ミニゲーム',
    imageUrl: '/pictures/index/top/expo2.png',
    status: 'active',
  },
];
