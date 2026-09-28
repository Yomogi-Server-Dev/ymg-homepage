import { Coins, Compass, House, Smartphone } from 'lucide-react';

export const tutorialGuides = {
    join: 'https://docs.ymg24.org/docs/living/how-to-join',
    phone: 'https://docs.ymg24.org/docs/living/commands/custom-items',
    warps: 'https://docs.ymg24.org/docs/living/commands/warps',
    money: 'https://docs.ymg24.org/docs/living/commands/money',
    land: 'https://docs.ymg24.org/docs/living/commands/land-protection',
} as const;

// 本文・目次・構造化データは、この手順から生成します。
export const tutorialSteps = [
    {
        id: 'phone',
        label: '端末を開く',
        title: 'まずは、よもぎ端末。',
        description:
            'サーバーに入ったら「よもぎ端末」を受け取ろう。役職を選んだり、ミッションを見たりできる、ゲーム内の便利なメニューです。',
        action: '端末を手に持ってタップ。PCなら右クリックで開けるよ。',
        commands: [{ value: '/phone', label: 'よもぎ端末を受け取る' }],
        image: '/pictures/index/top/lobby1.png',
        imageAlt: 'よもぎサーバーのロビーの風景',
        icon: Smartphone,
        guide: tutorialGuides.phone,
        guideLabel: '端末の使い方を見る',
        color: 'bg-[#dff5ff]',
        marker: 'bg-[#86d7f2] text-[#153e4b]',
    },
    {
        id: 'explore',
        label: '街へ出かける',
        title: '街を見に行こう。',
        description:
            'よもぎには、街のある生活ワールドや、素材を集める資源ワールドがあります。まずは移動メニューから生活ワールドへ。みんなの建物やお店を見て回ろう。',
        action: '帰り道がわからなくなっても、コマンドでロビーに戻れます。',
        commands: [
            { value: '/warps', label: '移動先のメニューを開く' },
            { value: '/warp lobby', label: 'ロビーに戻る' },
        ],
        image: '/pictures/index/top/life1.png',
        imageAlt: 'プレイヤーの建物が並ぶよもぎサーバーの街',
        icon: Compass,
        guide: tutorialGuides.warps,
        guideLabel: 'ワールドと移動方法を見る',
        color: 'bg-[#f0fae8]',
        marker: 'bg-[#afe17e] text-[#29471f]',
    },
    {
        id: 'earn',
        label: 'お金をためる',
        title: '最初のお金をためよう。',
        description:
            '端末で採掘や農業に合う「役職」を選び、移動メニューから採掘・農業のワールドへ。役職に合うブロックを壊すと、お金をためられます。',
        action: 'お金の単位は「YG」。土地やアイテムを買うときに使うよ。',
        commands: [{ value: '/mymoney', label: '今の所持金を確認する' }],
        image: '/pictures/index/features/level1.png',
        imageAlt: 'よもぎサーバーで採掘レベルを確認するゲーム画面',
        imageFit: 'contain',
        icon: Coins,
        guide: tutorialGuides.money,
        guideLabel: 'お金の集め方を見る',
        color: 'bg-[#fff4c9]',
        marker: 'bg-[#ffda68] text-[#523e0d]',
    },
    {
        id: 'build',
        label: '家をつくる',
        title: '自分の家をつくろう。',
        description:
            'お金がたまったら、生活ワールドで土地を買おう。家を建てるのは、土地を買ってから。小さな家や畑から、少しずつ自分の場所をつくってみてね。',
        action: '土地の範囲を選び、値段を確認してから購入します。詳しい手順は下のガイドへ。',
        commands: [{ value: '/guards', label: '土地保護のメニューを開く' }],
        image: '/pictures/index/gallery/server4.png',
        imageAlt: 'よもぎサーバーの街に建てられたレンガ造りのお店',
        icon: House,
        guide: tutorialGuides.land,
        guideLabel: '土地の買い方を見る',
        color: 'bg-[#ffe9df]',
        marker: 'bg-[#ffad93] text-[#57271d]',
    },
];
