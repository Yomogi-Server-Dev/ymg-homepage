import type { Feature } from '@/types';
import { Briefcase, Gamepad2, Home } from 'lucide-react';

export const features: Feature[] = [
  {
    id: 1,
    title: '会社システム',
    icon: Home,
    description: [
      '誰でも本格的な会社経営を行うことができるようになります。',
      '会社は運営に申告すれば誰でも無料で設立できますが、設立の際は一定の審査があります。',
    ],
    detailTitle: '会社システム',
    imageUrl: '/pictures/index/features/company1.png',
    status: 'active',
  },
  {
    id: 2,
    title: 'レベルシステム',
    icon: Briefcase,
    description: [
      '農業、採掘レベルを上げることが可能！',
      'Ranking要素やレベルアップボーナスなどもあります！',
    ],
    detailTitle: 'レベルシステム',
      imageUrl: '/pictures/index/features/level1.png',
    status: 'active',
  },
  {
    id: 3,
    title: 'アスレチック',
    icon: Gamepad2,
    description: [
      '10種類を超える多種多様なアスレチック',
      'クリアすると称号がもらえるぞ！',
    ],
    detailTitle: 'アスレチック',
      imageUrl: '/pictures/index/features/athletic1.png',
    status: 'upcoming',
  },
];
