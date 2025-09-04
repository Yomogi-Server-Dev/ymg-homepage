import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yomogi Server - MCBEサバイバルサーバー",
  description:
    "みんなで楽しく生活できるMinecraft BEサバイバルサーバー。車に乗ったり、イベントに参加したり、自由に建築を楽しめます！",
  keywords: "Minecraft, MCBE, サーバー, サバイバル, Yomogi Server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
