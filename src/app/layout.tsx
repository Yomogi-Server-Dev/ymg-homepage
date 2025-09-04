import type { Metadata } from "next";
import "../styles/globals.css";
import type React from "react";
import { Geist, Geist_Mono } from "next/dist/compiled/@next/font/dist/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
