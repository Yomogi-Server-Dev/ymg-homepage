"use client";

import { Car } from "lucide-react";
import Image from "next/image";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { carFeatureImages, carFeatureVideo } from "@/data/media";

export function CarFeature() {
  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <Car className="w-8 h-8 text-primary" />
        車も乗れます！
      </h2>

      {/* 画像ブロック群 */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {carFeatureImages.map((image) => (
          <div
            key={image.id}
            className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 relative"
          >
            <Image
              src={image.src}
              alt={image.alt || "車の機能"}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* YouTube動画 */}
      {carFeatureVideo.youtubeId && (
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed
            videoId={carFeatureVideo.youtubeId}
            title={carFeatureVideo.title}
          />
        </div>
      )}
    </section>
  );
}
