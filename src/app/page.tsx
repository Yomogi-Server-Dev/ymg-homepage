"use client";

import { Camera, Car } from "lucide-react";
import Image from "next/image";
import { AdminList } from "@/components/features/admin-list";
import { EventBlocks } from "@/components/features/event-blocks";
import { FeatureBlocks } from "@/components/features/feature-blocks";
import { HeroCarousel } from "@/components/features/hero-carousel";
import { ServerStatus } from "@/components/features/server-status";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
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

      <Footer />
    </div>
  );
}
