"use client";

import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const admins = [
  {
    id: 1,
    name: "Admin1",
    role: "Owner",
    avatar: "/img.png",
    description: "サーバーオーナー",
  },
  {
    id: 2,
    name: "Admin2",
    role: "Admin",
    avatar: "/img.png",
    description: "管理者",
  },
  {
    id: 3,
    name: "Moderator1",
    role: "Moderator",
    avatar: "/img.png",
    description: "モデレーター",
  },
  {
    id: 4,
    name: "Moderator2",
    role: "Moderator",
    avatar: "/img.png",
    description: "モデレーター",
  },
  {
    id: 5,
    name: "Builder1",
    role: "Builder",
    avatar: "/img.png",
    description: "ビルダー",
  },
  {
    id: 6,
    name: "Builder2",
    role: "Builder",
    avatar: "/img.png",
    description: "ビルダー",
  },
];

const roleColors = {
  Owner: "bg-red-500",
  Admin: "bg-orange-500",
  Moderator: "bg-blue-500",
  Builder: "bg-green-500",
};

export function AdminList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {admins.map((admin) => (
        <Card
          key={admin.id}
          className="p-4 text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <User className="w-10 h-10 text-gray-500" />
          </div>
          <h3 className="font-bold text-lg mb-1">{admin.name}</h3>
          <Badge
            className={`${roleColors[admin.role as keyof typeof roleColors]} text-white mb-2`}
          >
            {admin.role}
          </Badge>
          <p className="text-sm text-gray-600">{admin.description}</p>
        </Card>
      ))}
    </div>
  );
}
