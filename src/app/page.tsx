"use client";

import Image from "next/image";
import { AdminList } from "@/components/features/admin-list";
import { CarFeature } from "@/components/features/car-feature";
import { EventBlocks } from "@/components/features/event-blocks";
import { FeatureBlocks } from "@/components/features/feature-blocks";
import { HeroCarousel } from "@/components/features/hero-carousel";
import { ServerGallery } from "@/components/features/server-gallery";
import { ServerStatus } from "@/components/features/server-status";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="relative">
          <HeroCarousel />
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Yomogi Serverへようこそ！
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              みんなで楽しく生活できるサバイバルサーバーです。
              車に乗ったり、イベントに参加したり、自由に建築を楽しめます！
            </p>
          </div>

          <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/pictures/index/でかい表示.png"
              alt="Yomogi Server"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>

        <Separator className="container mx-auto" />

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            何ができるの？
          </h2>
          <FeatureBlocks />
        </section>

        <Separator className="container mx-auto" />

        <section className="container mx-auto px-4 py-16 gradient-primary rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            イベントが盛りだくさん！
          </h2>
          <EventBlocks />
        </section>

        <Separator className="container mx-auto" />

        <CarFeature />

        <Separator className="container mx-auto" />

        <ServerGallery />

        <Separator className="container mx-auto" />

        <ServerStatus />

        <Separator className="container mx-auto" />

        <section className="container mx-auto px-4 py-16 gradient-primary rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">運営一覧</h2>
          <AdminList />
        </section>
      </main>

      <Footer />
    </div>
  );
}
