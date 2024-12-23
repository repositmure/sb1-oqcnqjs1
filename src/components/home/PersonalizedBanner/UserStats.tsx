import React from 'react';
import { Calendar, Users, Star, Trophy } from 'lucide-react';

interface UserStatsProps {
  eventCount: number;
  clubCount: number;
  streak: number;
  points: number;
}

export default function UserStats({ eventCount, clubCount, streak, points }: UserStatsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {[
        { icon: Calendar, label: 'Events', value: eventCount },
        { icon: Users, label: 'Clubs', value: clubCount },
        { icon: Star, label: 'Streak', value: streak },
        { icon: Trophy, label: 'Points', value: points.toLocaleString() },
      ].map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 text-center">
          <Icon className="h-5 w-5 mx-auto text-orange-500 mb-1" />
          <div className="text-lg sm:text-xl font-bold text-gray-900">{value}</div>
          <div className="text-xs text-gray-600">{label}</div>
        </div>
      ))}
    </div>
  );
}