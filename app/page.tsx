import { Camera, Car, Menu, MessageCircle } from "lucide-react";
import Image from "next/image";
import { AdminList } from "@/components/admin-list";
import { EventBlocks } from "@/components/event-blocks";
import { FeatureBlocks } from "@/components/feature-blocks";
import { HeroCarousel } from "@/components/hero-carousel";
import { ServerStatus } from "@/components/server-status";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Yomogi Server</h1>
          <nav className="flex items-center gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() =>
                window.open("https://discord.gg/yourserver", "_blank")
              }
            >
              <MessageCircle className="w-4 h-4" />
              Discordはこちら
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* ヒーローセクション - 画像カルーセル */}
        <section className="relative">
          <HeroCarousel />
        </section>

        {/* サーバー状態セクション */}
        <section className="container mx-auto px-4 py-16">
          <ServerStatus />

          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Yomogi Serverへようこそ！
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              みんなで楽しく生活できるサバイバルサーバーです。
              車に乗ったり、イベントに参加したり、自由に建築を楽しめます！
            </p>
          </div>

          {/* メイン画像 */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/img.png"
              alt="Yomogi Server"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* 機能紹介セクション */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            何ができるの？
          </h2>
          <FeatureBlocks />
        </section>

        <Separator className="container mx-auto" />

        {/* イベントセクション */}
        <section className="container mx-auto px-4 py-16 gradient-primary">
          <h2 className="text-3xl font-bold text-center mb-12">
            イベントが盛りだくさん！
          </h2>
          <EventBlocks />
        </section>

        <Separator className="container mx-auto" />

        {/* 車機能セクション */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Car className="w-8 h-8 text-primary" />
            車が使えるよ！
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">車の写真をここに配置</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">車の動画をここに配置</p>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* サーバーの様子 */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Camera className="w-8 h-8 text-primary" />
            サーバーの様子
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">写真1をここに配置</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">写真2をここに配置</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">写真3をここに配置</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">動画をここに配置</p>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* 運営一覧 */}
        <section className="container mx-auto px-4 py-16 gradient-primary">
          <h2 className="text-3xl font-bold text-center mb-12">運営一覧</h2>
          <AdminList />
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">
                Yomogi Server
              </h3>
              <p className="text-gray-400">
                MCBE サバイバルサーバー
                <br />
                ymg24.org:19132
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">リンク</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">コミュニティ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Yomogi Server. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
