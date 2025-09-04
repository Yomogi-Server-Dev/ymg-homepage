import type { Event, Feature, Admin } from "@/types";

export function filterEventsByStatus(events: Event[], status?: "active" | "upcoming") {
  if (!status) return events;
  return events.filter(event => event.status === status);
}

export function filterAdminsByRole(admins: Admin[], role?: string) {
  if (!role) return admins;
  return admins.filter(admin => admin.role === role);
}

export function searchFeatures(features: Feature[], query: string) {
  if (!query.trim()) return features;
  
  const lowercaseQuery = query.toLowerCase();
  return features.filter(feature =>
    feature.title.toLowerCase().includes(lowercaseQuery) ||
    feature.description.toLowerCase().includes(lowercaseQuery)
  );
}

export function sortEventsByDate(events: Event[]) {
  return [...events].sort((a, b) => {
    if (a.status === "active" && b.status === "upcoming") return -1;
    if (a.status === "upcoming" && b.status === "active") return 1;
    return a.title.localeCompare(b.title);
  });
}