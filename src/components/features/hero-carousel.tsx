"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { APP_CONFIG, CAROUSEL_CONFIG } from "@/config";
import { carouselImages } from "@/data/carousel";
import { useCarousel } from "@/hooks";

export function HeroCarousel() {
  const {
    currentIndex,
    goToPrevious,
    goToNext,
    goToSlide,
    pause,
    play,
    config,
  } = useCarousel({
    images: carouselImages,
    config: CAROUSEL_CONFIG,
  });

  return (
    <ErrorBoundary>
      <div
        className="relative w-full h-[500px] overflow-hidden bg-gray-100"
        onMouseEnter={config.pauseOnHover ? pause : undefined}
        onMouseLeave={config.pauseOnHover ? play : undefined}
        role="region"
        aria-label="Image carousel"
      >
        <div className="relative w-full h-full">
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
              {APP_CONFIG.name}
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg animate-fade-in">
              {APP_CONFIG.description}
            </p>
            <div className="mt-8 space-x-4 animate-fade-in">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold"
              >
                今すぐ参加
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30"
                onClick={() => {
                  const element = document.getElementById("features");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.scrollY - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                詳しく見る
              </Button>
            </div>
          </div>
        </div>

        {config.showArrows && (
          <>
            <Button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              size="icon"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              size="icon"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {config.showIndicators && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
