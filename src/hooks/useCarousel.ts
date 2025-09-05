import type { CarouselConfig, CarouselImage } from '@/types';
import { useCallback, useEffect, useState } from 'react';

interface UseCarouselProps {
    images: CarouselImage[];
    config?: Partial<CarouselConfig>;
}

export function useCarousel({ images, config }: UseCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const defaultConfig: CarouselConfig = {
        autoPlay: true,
        autoPlayInterval: 5000,
        showArrows: true,
        showIndicators: true,
        pauseOnHover: true,
    };

    const mergedConfig = { ...defaultConfig, ...config };
    const [isPlaying, setIsPlaying] = useState(mergedConfig.autoPlay);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    }, [images.length]);

    const goToSlide = useCallback(
        (index: number) => {
            if (index >= 0 && index < images.length) {
                setCurrentIndex(index);
            }
        },
        [images.length],
    );

    const play = useCallback(() => setIsPlaying(true), []);
    const pause = useCallback(() => setIsPlaying(false), []);

    useEffect(() => {
        if (!isPlaying || !mergedConfig.autoPlay) return;

        const interval = setInterval(() => {
            goToNext();
        }, mergedConfig.autoPlayInterval);

        return () => clearInterval(interval);
    }, [
        goToNext,
        isPlaying,
        mergedConfig.autoPlay,
        mergedConfig.autoPlayInterval,
    ]);

    return {
        currentIndex,
        isPlaying,
        goToPrevious,
        goToNext,
        goToSlide,
        play,
        pause,
        config: mergedConfig,
    };
}
