import { NextResponse } from "next/server";

// mcstatus.io APIの型定義
interface MCStatusResponse {
  online: boolean;
  host: string;
  port: number;
  ip_address: string;
  version?: {
    name: string;
    protocol: number;
  };
  players?: {
    online: number;
    max: number;
    list?: Array<{
      name_clean: string;
    }>;
  };
  motd?: {
    clean: string;
    html: string;
  };
  gamemode?: string;
  software?: string;
}

export async function GET() {
  try {
    // mcstatus.io APIを使用してサーバー状態を取得
    const response = await fetch(
      "https://api.mcstatus.io/v2/status/bedrock/ymg24.org",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        // キャッシュを60秒に設定
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data: MCStatusResponse = await response.json();

    // クライアント用のデータ形式に変換
    const serverData = {
      online: data.online || false,
      players: data.players?.online || 0,
      maxPlayers: data.players?.max || 50,
      version: data.version?.name || "Unknown",
      motd: data.motd?.clean || "よもぎサーバー",
      latency: 0, // mcstatus.io APIではレイテンシは提供されない
      playersList: data.players?.list?.map((player) => player.name_clean) || [],
      software: data.software || "PocketMine-MP",
      gamemode: data.gamemode || "Survival",
    };

    return NextResponse.json(serverData);
  } catch (error) {
    console.error("Failed to fetch server status:", error);

    // エラー時のフォールバックデータ
    return NextResponse.json({
      online: false,
      players: 0,
      maxPlayers: 50,
      version: "v1.21.100",
      motd: "[生活鯖]よもぎサーバー",
      latency: 0,
      playersList: [],
      software: "PocketMine-MP",
      gamemode: "Survival",
    });
  }
}
