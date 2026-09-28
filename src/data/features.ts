import type { Feature } from '@/types';

export const features: Feature[] = [
    {
        id: 1,
        title: '会社システム',
        description: '会社をつくって、お店や仕事を楽しもう。',
        details:
            '仲間と会社を立ち上げて、商品を売ったり仕事を分担したり。街の中に、自分たちだけの活動拠点をつくれます。',
        highlights: ['会社に参加', 'お店を経営', '仲間と共同作業'],
        imageUrl: '/pictures/index/features/company1.png',
        imageAlt: 'よもぎサーバーの会社システムのゲーム画面',
        accentColor: '#c9efa3',
    },
    {
        id: 2,
        title: 'レベルシステム',
        description: 'あそぶほどレベルアップ。ランキングにも挑戦！',
        details:
            '採掘などの活動で経験値がたまり、遊び方ごとにレベルアップ。日々のプレイが数字で見えて、次の目標が見つかります。',
        highlights: ['遊んで経験値獲得', '進み具合を確認', 'ランキングに挑戦'],
        imageUrl: '/pictures/index/features/level1.png',
        imageAlt: 'よもぎサーバーのレベルシステムのゲーム画面',
        accentColor: '#ffe28a',
    },
    {
        id: 3,
        title: 'アスレチック',
        description: '10種類以上のコースを走りぬけよう。',
        details:
            '気軽に遊べるコースから、何度も挑戦したくなる高難度コースまで用意。友だちとタイムを競うのもおすすめです。',
        highlights: ['10種類以上', 'ひとりでも遊べる', '友だちとタイム勝負'],
        imageUrl: '/pictures/index/features/athletic1.png',
        imageAlt: 'よもぎサーバーのアスレチックのゲーム画面',
        accentColor: '#bfe9ff',
    },
    {
        id: 4,
        title: 'ガチャ',
        description: '何が出るかは開けてから。集める楽しさも！',
        details:
            'サーバーで遊んで手に入れたお金などを使って、さまざまなガチャに挑戦できます。目当てのアイテムが出る瞬間は格別です。',
        highlights: ['大量のガチャ限定アイテム', 'コレクション', '運試しを楽しむ'],
        imageUrl: '/pictures/index/features/gacha.webp',
        imageAlt: 'よもぎサーバーのガチャからアイテムが出る様子',
        accentColor: '#f8c8e8',
    },
    {
        id: 5,
        title: '車',
        description: 'お気に入りの一台で、街をドライブしよう。',
        details:
            '車を手に入れたら、建物が並ぶ街を自由にドライブ。友だちと出かけたり、愛車と一緒に記念撮影したりできます。',
        highlights: ['車を所有', '街をドライブ', '愛車と記念撮影'],
        imageUrl: '/pictures/index/car/car1.jpeg',
        imageAlt: 'よもぎサーバーで所有できる車',
        accentColor: '#c8d5e8',
        galleryImages: [
            {
                imageUrl: '/pictures/index/car/carbyakko.webp',
                imageAlt: '街の建物の前で黒い車と記念撮影するプレイヤー',
                caption: '愛車と一緒に、街のお気に入りスポットで一枚。',
            },
        ],
    },
    {
        id: 6,
        title: '料理',
        description: '食材を集めて、いろんな料理を作ってみよう。',
        details:
            '野菜や果物、調味料などを集めて、餃子やラーメンなど43種類の料理を作れます。食べると特別な効果が付き、作った料理は図鑑に記録。飲食店を開いて販売する楽しみもあります。',
        highlights: ['様々な調理方法！', '食べると特別な効果', '図鑑を埋める'],
        imageUrl: '/pictures/index/features/cooking.webp',
        imageAlt: 'よもぎサーバーのキッチンで料理を楽しむ様子',
        accentColor: '#ffd0a8',
        galleryImages: [
            {
                imageUrl: '/pictures/index/features/cook-example.webp',
                imageAlt: '額縁に並べて飾られた料理やドリンクの一例',
                caption: '続々追加予定！',
            },
        ],
    },
];
