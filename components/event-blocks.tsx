"use client";

import { Calendar, Clock, Star, Trophy } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const events = [
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

export function EventBlocks() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(
    null,
  );

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => {
          const Icon = event.icon;
          return (
            <Card
              key={event.id}
              className="p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden"
              onClick={() => setSelectedEvent(event)}
            >
              {event.status === "upcoming" && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs rounded-bl-lg">
                  Coming Soon
                </div>
              )}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <Badge variant="outline" className="mb-2">
                  {event.schedule}
                </Badge>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <selectedEvent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    {selectedEvent.title}
                    {selectedEvent.status === "upcoming" && (
                      <Badge className="bg-primary text-white">
                        Coming Soon
                      </Badge>
                    )}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <DialogDescription className="whitespace-pre-line text-base mt-4 text-gray-700">
                {selectedEvent.detailContent}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
