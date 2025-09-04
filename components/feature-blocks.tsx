"use client";

import { Briefcase, Gamepad2, Home, Users } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const features = [
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

export function FeatureBlocks() {
  const [selectedFeature, setSelectedFeature] = useState<
    (typeof features)[0] | null
  >(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.id}
              className="p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-xl border-2 hover:border-primary"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <Dialog
        open={!!selectedFeature}
        onOpenChange={() => setSelectedFeature(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedFeature && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <selectedFeature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl">
                    {selectedFeature.detailTitle}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <DialogDescription className="whitespace-pre-line text-base mt-4 text-gray-700">
                {selectedFeature.detailContent}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
