import React, { useState } from 'react';
import { Users, MapPin, Calendar, Instagram, Twitter, Globe, ChevronDown } from 'lucide-react';
import type { Club, Event } from '../../types';
import EventCard from '../events/EventCard';

interface ClubProfileProps {
  club: Club;
  upcomingEvents: Event[];
}

export default function ClubProfile({ club, upcomingEvents }: ClubProfileProps) {
  const [showAllEvents, setShowAllEvents] = useState(false);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96">
        <img
          src={club.imageUrl}
          alt={club.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white mb-4">
              {club.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{club.name}</h1>
            <p className="text-lg text-gray-200 max-w-2xl">{club.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Club Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Club Details</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 text-orange-400 mr-3" />
                  <span>{club.memberCount} members</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 text-orange-400 mr-3" />
                  <span>{club.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 text-orange-400 mr-3" />
                  <span>{club.meetingSchedule}</span>
                </div>
              </div>

              {/* Social Links */}
              {club.socialLinks && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Connect with us</h4>
                  <div className="flex gap-4">
                    {club.socialLinks.instagram && (
                      <a href={club.socialLinks.instagram} className="text-gray-400 hover:text-orange-500">
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    {club.socialLinks.twitter && (
                      <a href={club.socialLinks.twitter} className="text-gray-400 hover:text-orange-500">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {club.socialLinks.website && (
                      <a href={club.socialLinks.website} className="text-gray-400 hover:text-orange-500">
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <button className="w-full mt-6 px-4 py-2 rounded-full bg-orange-500 text-white font-medium
                             hover:bg-orange-600 transition-colors">
                Join Club
              </button>
            </div>
          </div>

          {/* Right Column - Events */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents
                .slice(0, showAllEvents ? undefined : 4)
                .map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
            </div>
            
            {upcomingEvents.length > 4 && (
              <button
                onClick={() => setShowAllEvents(!showAllEvents)}
                className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-sm font-medium 
                         text-gray-500 hover:text-orange-500 transition-colors"
              >
                {showAllEvents ? 'Show Less' : 'Show More Events'}
                <ChevronDown className={`h-4 w-4 transition-transform ${showAllEvents ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}