"use client";

import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { admins, roleColors } from "@/data/admins";

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
          <Badge className={`${roleColors[admin.role]} text-white mb-2`}>
            {admin.role}
          </Badge>
          <p className="text-sm text-gray-600">{admin.description}</p>
        </Card>
      ))}
    </div>
  );
}
