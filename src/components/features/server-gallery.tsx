"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { serverGalleryMedia } from "@/data/media";

export function ServerGallery() {
  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <Camera className="w-8 h-8 text-primary" />
        サーバーの様子
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {serverGalleryMedia.map((media) => (
          <div key={media.id} className="rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 relative">
            {media.type === "image" ? (
              <Image
                src={media.src}
                alt={media.alt || "サーバーの様子"}
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
