import type { MediaItem } from "@/types";

export const carFeatureImages: MediaItem[] = [
  {
    id: "car-image-1",
    type: "image",
    src: "/pictures/index/でかい表示.png",
    alt: "車の機能1",
  },
  {
    id: "car-image-2",
    type: "image",
    src: "/pictures/index/でかい表示.png",
    alt: "車の機能2",
  },
];

export const carFeatureVideo: MediaItem = {
  id: "car-youtube",
  type: "youtube",
  src: "",
  youtubeId: "MRHCyJt8GU4", // プレースホルダー - 実際のYouTube動画IDに変更してください
  title: "車の機能紹介動画",
};

export const serverGalleryImages: MediaItem[] = [
  {
    id: "server-1",
    type: "image",
    src: "/pictures/index/でかい表示.png",
    alt: "サーバーの様子1",
  },
  {
    id: "server-2",
    type: "image",
    src: "/pictures/index/でかい表示.png",
    alt: "サーバーの様子2",
  },
  {
    id: "server-3",
    type: "image",
    src: "/pictures/index/でかい表示.png",
    alt: "サーバーの様子3",
  },
  {
    id: "server-4",
    type: "image",
    src: "/pictures/index/でかい表示.png",
    alt: "サーバーの様子4",
  },
];

export const serverGalleryVideo: MediaItem = {
  id: "server-youtube",
  type: "youtube",
  src: "",
  youtubeId: "6JiTUEuUrck", // プレースホルダー - 実際のYouTube動画IDに変更してください
  title: "サーバーの様子紹介動画",
};
