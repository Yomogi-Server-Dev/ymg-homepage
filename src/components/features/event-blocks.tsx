"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Event } from "@/types";
import { events } from "@/data/events";

export function EventBlocks() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => {
          const Icon = event.icon;
          return (
            <Card
              key={event.id}
              className="p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden"
              onClick={() => setSelectedEvent(event)}
            >
              {event.status === "upcoming" && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs rounded-bl-lg">
                  Coming Soon
                </div>
              )}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <Badge variant="outline" className="mb-2">
                  {event.schedule}
                </Badge>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent className="max-w-2xl" forceMount>
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <selectedEvent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    {selectedEvent.title}
                    {selectedEvent.status === "upcoming" && (
                      <Badge className="bg-primary text-white">
                        Coming Soon
                      </Badge>
                    )}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <DialogDescription className="whitespace-pre-line text-base mt-4 text-gray-700">
                {selectedEvent.detailContent}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
