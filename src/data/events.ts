import { Calendar, Clock, type LucideIcon, Star, Trophy } from "lucide-react";

export type Event = {
  id: number;
  title: string;
  icon: LucideIcon;
  status: "active" | "upcoming";
  schedule: string;
  description: string;
  detailContent: string;
};

export const events: Event[] = [
  {
    id: 1,
    title: "建築コンテスト",
    icon: Trophy,
    status: "active",
    schedule: "毎月第1土曜日",
    description: "テーマに沿った建築で競い合おう！",
    detailContent: `月に一度開催される大人気イベント！

【イベント詳細】
• 開催日：毎月第1土曜日 20:00～
• 参加資格：全プレイヤー
• テーマ：毎月変更（前月末に発表）

【報酬】
🥇 1位：ダイヤモンド×64 + 特別称号
🥈 2位：ダイヤモンド×32
🥉 3位：ダイヤモンド×16

参加者全員に参加賞もあります！`,
  },
  {
    id: 2,
    title: "PvP大会",
    icon: Star,
    status: "active",
    schedule: "毎週日曜日",
    description: "最強のプレイヤーを決めよう！",
    detailContent: `白熱のバトルで頂点を目指せ！

【イベント詳細】
• 開催日：毎週日曜日 19:00～
• 形式：トーナメント戦
• 装備：イベント専用装備を支給

【ルール】
• 全員同じ装備でフェアな戦い
• 1vs1のシングルバトル
• 制限時間5分

優勝者には豪華報酬があります！`,
  },
  {
    id: 3,
    title: "ハロウィンイベント",
    icon: Calendar,
    status: "upcoming",
    schedule: "10月31日",
    description: "特別なハロウィンイベント！",
    detailContent: `Coming Soon...

特別なハロウィンイベントを準備中です！
詳細は後日発表しますのでお楽しみに！`,
  },
  {
    id: 4,
    title: "宝探しイベント",
    icon: Clock,
    status: "upcoming",
    schedule: "不定期開催",
    description: "隠された宝を見つけよう！",
    detailContent: `Coming Soon...

サーバー全体を使った大規模な宝探しイベント！
詳細は後日発表します。`,
  },
];
