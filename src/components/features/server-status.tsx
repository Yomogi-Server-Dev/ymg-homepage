"use client";

import { Activity, Server, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ServerData {
  online: boolean;
  players: number;
  maxPlayers: number;
  version: string;
  motd: string;
  latency: number;
  playersList: string[];
  software: string;
  gamemode: string;
}

export function ServerStatus() {
  const [serverData, setServerData] = useState<ServerData>({
    online: false,
    players: 0,
    maxPlayers: 50,
    version: "Unknown",
    motd: "よもぎサーバー",
    latency: 0,
    playersList: [],
    software: "PocketMine-MP",
    gamemode: "Survival",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch("/api/server-status");
        const data = await response.json();
        setServerData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch server status:", error);
        // エラー時は既存のデータを保持
        console.log("Using fallback data");
        setLoading(false);
      }
    };

    fetchServerStatus();
    // 30秒ごとに更新
    const interval = setInterval(fetchServerStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {/* サーバー状態 */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Server className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">サーバー状態</p>
            <div className="flex items-center gap-2">
              <Activity
                className={`w-4 h-4 ${serverData.online ? "text-green-500" : "text-red-500"}`}
              />
              <Badge variant={serverData.online ? "default" : "destructive"}>
                {loading
                  ? "Loading..."
                  : serverData.online
                    ? "Online"
                    : "Offline"}
              </Badge>
            </div>
          </div>
        </div>

        {/* プレイヤー数 */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">現在のプレイヤー数</p>
            <p className="text-2xl font-bold text-primary">
              {loading
                ? "..."
                : `${serverData.players} / ${serverData.maxPlayers}`}
              <span className="text-base font-normal text-gray-600 ml-1">
                人
              </span>
            </p>
          </div>
        </div>

        {/* バージョン */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Server className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">バージョン</p>
            <p className="text-lg font-semibold">{serverData.version}</p>
            <p className="text-xs text-gray-500">{serverData.software}</p>
          </div>
        </div>
      </div>

      {/* 接続情報 */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">サーバーアドレス</p>
        <div className="flex items-center gap-2 flex-wrap">
          <code className="text-lg font-mono bg-white px-3 py-1 rounded border">
            ymg24.org
          </code>
          <span className="text-gray-500">:</span>
          <code className="text-lg font-mono bg-white px-3 py-1 rounded border">
            19132
          </code>
        </div>
      </div>
    </Card>
  );
}
