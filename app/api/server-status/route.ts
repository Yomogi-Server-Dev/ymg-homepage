import { NextResponse } from "next/server";

// 実際のMinecraftサーバーと連携する場合は、
// minecraft-server-util などのライブラリを使用してください
// npm install minecraft-server-util

export async function GET() {
  try {
    // デモデータ（実際の実装では、Minecraftサーバーにクエリを送信）
    const serverData = {
      online: true,
      players: Math.floor(Math.random() * 30) + 5, // 5〜35人のランダム
      maxPlayers: 50,
      version: "PMMP v5",
      motd: "Welcome to Yomogi Server!",
      latency: Math.floor(Math.random() * 50) + 10, // 10〜60msのランダム
    };

    // 実際の実装例（コメントアウト）:
    /*
    import { status } from 'minecraft-server-util'
    
    try {
      const result = await status('ymg24.org', 19132, {
        enableSRV: true,
        timeout: 5000
      })
      
      serverData = {
        online: true,
        players: result.players.online,
        maxPlayers: result.players.max,
        version: result.version.name,
        motd: result.motd.clean,
        latency: result.roundTripLatency
      }
    } catch (error) {
      serverData = {
        online: false,
        players: 0,
        maxPlayers: 50,
        version: 'PMMP v5',
        motd: 'Server offline',
        latency: 0
      }
    }
    */

    return NextResponse.json(serverData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch server status" },
      { status: 500 },
    );
  }
}
