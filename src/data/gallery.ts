export const serverGalleryItems = [
    {
        image: '/pictures/index/gallery/server1.png',
        alt: 'カラフルなステージに集まるよもぎサーバーのプレイヤーたち',
        eyebrow: 'EVENT',
        title: 'ステージに集合！',
        description: 'みんなで集まれば、いつもの夜がちょっと特別なイベントに。',
        bubble: 'はじまるよー！',
        bubblePosition: 'bottom-right',
        bubbleColor: 'bg-[#ffda68] text-[#533d0c]',
    },
    {
        image: '/pictures/index/gallery/server3.png',
        alt: '街の中で一緒に遊ぶよもぎサーバーのプレイヤーたち',
        eyebrow: 'TOWN',
        title: '街角で、ばったり。',
        description:
            '歩いているだけでも誰かに会える。寄り道から遊びが始まります。',
        bubble: 'どこ行く？',
        bubblePosition: 'bottom-left',
        bubbleColor: 'bg-[#bcecff] text-[#24495a]',
    },
    {
        image: '/pictures/index/gallery/server4.png',
        alt: 'レンガ造りのお店で交流するよもぎサーバーのプレイヤーたち',
        eyebrow: 'SHOP',
        title: 'お店も、自分たちで。',
        description:
            '建てて、並べて、お客さんを待つ。暮らし方はプレイヤー次第。',
        bubble: 'いらっしゃいませ！',
        bubblePosition: 'bottom-right',
        bubbleColor: 'bg-[#b9ec8d] text-[#294b22]',
    },
    {
        image: '/pictures/index/gallery/server5.jpeg',
        alt: 'カラフルなステージで記念撮影をするよもぎサーバーの仲間たち',
        eyebrow: 'MEMORY',
        title: '最後は、みんなで一枚。',
        description:
            'つくったものも、笑った時間も、スクリーンショットに残ります。',
        bubble: 'はい、チーズ！',
        bubblePosition: 'bottom-left',
        bubbleColor: 'bg-[#ffb1a4] text-[#612e27]',
    },
    {
        image: '/pictures/index/gallery/server2.png',
        alt: '街の広場に思い思いのスキンで集まるよもぎサーバーのプレイヤーたち',
        eyebrow: 'FRIENDS',
        title: '広場に、全員集合。',
        description:
            'いつもの広場も、みんなが集まれば遊び場に。にぎやかな一枚です。',
        bubble: '今日は何する？',
        bubblePosition: 'top-left',
        bubbleColor: 'bg-[#d9c9ff] text-[#413264]',
    },
    {
        image: '/pictures/index/gallery/server6.jpeg',
        alt: '水に囲まれたステージで記念撮影するよもぎサーバーのプレイヤーたち',
        eyebrow: 'ADVENTURE',
        title: '水のステージで、ぱしゃり。',
        description:
            '冒険の途中で立ち止まって、仲間と記念撮影。こんな一枚も思い出に。',
        bubble: 'はい、並んで〜！',
        bubblePosition: 'top-right',
        bubbleColor: 'bg-[#a9ece4] text-[#24504b]',
    },
    {
        image: '/pictures/index/gallery/server7.webp',
        alt: '色とりどりの屋台が並ぶよもぎサーバーの夜祭り',
        eyebrow: 'FESTIVAL',
        title: '屋台が、ずらり。',
        description:
            '赤、緑、オレンジ。みんなでつくった屋台を巡る、にぎやかな夜です。',
        bubble: 'どれにする？',
        bubblePosition: 'top-left',
        bubbleColor: 'bg-[#ffda68] text-[#533d0c]',
    },
    {
        image: '/pictures/index/gallery/server8.webp',
        alt: 'プレイヤーでにぎわうよもぎサーバーの夜祭り会場',
        eyebrow: 'FESTIVAL',
        title: '夜のお祭りへ。',
        description:
            '屋台の明かりとプレイヤーの声。集まるだけで楽しい景色が生まれます。',
        bubble: 'にぎやか！',
        bubblePosition: 'bottom-right',
        bubbleColor: 'bg-[#ffb1a4] text-[#612e27]',
    },
    {
        image: '/pictures/index/gallery/server9.webp',
        alt: '空から見渡したカラフルな屋台街',
        eyebrow: 'MARKET',
        title: '空から見る、屋台街。',
        description:
            '色ごとに並んだお店も、上から見るとひとつの大きな作品みたい。',
        bubble: 'こんなに広い！',
        bubblePosition: 'top-right',
        bubbleColor: 'bg-[#bcecff] text-[#24495a]',
    },
    {
        image: '/pictures/index/gallery/server10.webp',
        alt: '白い建物の前に停めた黒い車とプレイヤー',
        eyebrow: 'DRIVE',
        title: 'かっこいい愛車と！',
        description:
            '数十種類の車・バイクがあります。もちろん運転することもできます。',
        bubble: '乗ってく？',
        bubblePosition: 'bottom-left',
        bubbleColor: 'bg-[#c8d5e8] text-[#304052]',
    },
    {
        image: '/pictures/index/gallery/server11.webp',
        alt: 'モダンな建物のテラスでくつろぐプレイヤーたち',
        eyebrow: 'HANGOUT',
        title: '今日はここで、ひと休み。',
        description:
            '建築を眺めながら、友だちとゆっくり。何もしない時間も遊びのひとつです。',
        bubble: 'ちょっと休憩！',
        bubblePosition: 'top-left',
        bubbleColor: 'bg-[#b9ec8d] text-[#294b22]',
    },
] as const;

export const featuredServerGalleryItems = [
    serverGalleryItems[7],
    serverGalleryItems[9],
    serverGalleryItems[10],
    serverGalleryItems[0],
    serverGalleryItems[2],
    serverGalleryItems[5],
] as const;
