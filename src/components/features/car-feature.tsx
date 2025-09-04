"use client";

import { Car } from "lucide-react";
import Image from "next/image";
import { carFeatureMedia } from "@/data/media";

export function CarFeature() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <Car className="w-8 h-8 text-primary" />
        車も乗れます！
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {carFeatureMedia.map((media) => (
          <div key={media.id} className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 relative">
            {media.type === "image" ? (
              <Image
                src={media.src}
                alt={media.alt || "車の機能"}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={media.src}
                controls
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              >
                お使いのブラウザは動画をサポートしていません。
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
