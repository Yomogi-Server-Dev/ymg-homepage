import type { Admin, AdminRole } from "@/types";

export const admins: Admin[] = [
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

export const roleColors: Record<AdminRole, string> = {
  Owner: "bg-red-500",
  Admin: "bg-orange-500",
  Moderator: "bg-blue-500",
  Builder: "bg-green-500",
};
