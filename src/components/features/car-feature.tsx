"use client";

import { Car } from "lucide-react";
import Image from "next/image";

export function CarFeature() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <Car className="w-8 h-8 text-primary" />
        車も乗れます！
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 relative">
          <Image
            src="/pictures/index/でかい表示.png"
            alt="車の機能"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 relative">
          <video
            src="/pictures/index/movie.mp4"
            controls
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            お使いのブラウザは動画をサポートしていません。
          </video>
        </div>
      </div>
    </section>
  );
}
