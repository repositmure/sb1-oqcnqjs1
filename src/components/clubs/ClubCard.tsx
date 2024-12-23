import React from 'react';
import { Users, MapPin, Calendar, ChevronRight } from 'lucide-react';
import type { Club } from '../../types';

interface ClubCardProps {
  club: Club;
  onViewDetails: (clubId: string) => void;
}

export default function ClubCard({ club, onViewDetails }: ClubCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all">
      <div className="aspect-video relative">
        <img
          src={club.imageUrl}
          alt={club.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{club.name}</h3>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-500 text-white">
              {club.category}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{club.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 text-orange-400 mr-2" />
            {club.memberCount} members
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 text-orange-400 mr-2" />
            {club.location}
          </div>
          {club.meetingSchedule && (
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 text-orange-400 mr-2" />
              {club.meetingSchedule}
            </div>
          )}
        </div>

        <button
          onClick={() => onViewDetails(club.id)}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium 
                   text-orange-500 hover:text-orange-600 border border-orange-200 rounded-full
                   hover:bg-orange-50 transition-colors group"
        >
          View Club
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}