import { Briefcase, Gamepad2, Home, Users } from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: 1,
    title: "生活",
    icon: Home,
    description: "自由に家を建てて暮らそう",
    detailTitle: "生活システム",
    detailContent: `Yomogi Serverでは、自由に建築を楽しめます。

• 広大な土地で自分だけの家を建築
• 農業や牧畜で食料を確保
• 友達と一緒に街づくり
• 保護システムで大切な建築物を守る

初心者でも安心して楽しめるよう、スタートキットも用意しています！`,
  },
  {
    id: 2,
    title: "仕事",
    icon: Briefcase,
    description: "様々な職業で稼ごう",
    detailTitle: "仕事システム",
    detailContent: `多彩な職業システムで経済活動を楽しもう！

• 農家：作物を育てて販売
• 鉱夫：貴重な鉱石を採掘
• 建築家：他のプレイヤーの建築を請け負う
• 商人：アイテムの売買で利益を得る

稼いだお金でレアアイテムや土地を購入できます。`,
  },
  {
    id: 3,
    title: "ミニゲーム",
    icon: Gamepad2,
    description: "楽しいゲームが盛りだくさん",
    detailTitle: "ミニゲーム",
    detailContent: `飽きることのない様々なミニゲーム！

• PvPアリーナ：スキルを競い合おう
• パルクール：タイムアタックに挑戦
• 宝探し：隠されたアイテムを見つけよう
• イベント限定ゲーム：期間限定の特別なゲーム

ランキング上位者には豪華報酬もあります！`,
  },
  {
    id: 4,
    title: "コミュニティ",
    icon: Users,
    description: "みんなで楽しく交流",
    detailTitle: "コミュニティ機能",
    detailContent: `活発なコミュニティで新しい友達を作ろう！

• ギルドシステム：仲間と協力してギルドを発展
• チャット機能：グローバル/ローカルチャット対応
• イベント参加：定期的な community イベント
• Discord連携：ゲーム外でも交流可能

初心者も大歓迎！優しいプレイヤーがサポートします。`,
  },
];
