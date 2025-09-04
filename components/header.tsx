"use client";

import { Menu, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            Yomogi Server
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() =>
              window.open("https://discord.gg/yourserver", "_blank")
            }
          >
            <MessageCircle className="w-4 h-4" />
            Discordはこちら
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
