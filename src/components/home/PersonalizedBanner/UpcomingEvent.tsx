import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import type { Event } from '../../../types';

interface UpcomingEventProps {
  event: Event;
}

export default function UpcomingEvent({ event }: UpcomingEventProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
      <div className="text-sm font-medium text-orange-600 mb-2">Next Up</div>
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-lg bg-orange-100 flex flex-col items-center justify-center">
          <Calendar className="h-6 w-6 text-orange-500" />
          <div className="text-xs font-medium text-orange-600 mt-1">Today</div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{event.title}</h4>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Clock className="h-4 w-4 mr-1" />
            {event.date}
          </div>
        </div>
      </div>
    </div>
  );
}