import React, { useState } from 'react';
import { Calendar, MapPin, Users, Heart } from 'lucide-react';
import type { Event } from '../../types';
import EventRegistrationSlide from './EventRegistrationSlide';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-xl">
        <div className="relative">
          <img
            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
            src={event.imageUrl}
            alt={event.title}
          />
          <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm 
                          hover:bg-orange-50 text-gray-500 hover:text-orange-500 transition-all">
            <Heart className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">{event.description}</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700">
              {event.category}
            </span>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0 text-orange-400" />
              {event.date}
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="mr-1.5 h-4 w-4 flex-shrink-0 text-orange-400" />
              {event.location}
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <Users className="mr-1.5 h-4 w-4 flex-shrink-0 text-orange-400" />
              {event.attendees} going
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className="flex-1 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white 
                       shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Count me in!
            </button>
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className="text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              deets →
            </button>
          </div>
        </div>
      </div>

      <EventRegistrationSlide
        event={event}
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </>
  );
}