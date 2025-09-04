"use client";

import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { admins, roleColors } from "@/data/admins";

export function AdminList() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {admins.map((admin) => (
        <Card key={admin.id} className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2 py-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <h3 className="font-bold text-base truncate">{admin.name}</h3>
              <Badge
                className={`${roleColors[admin.role]} text-white text-xs flex-shrink-0`}
              >
                {admin.role}
              </Badge>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {admin.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
