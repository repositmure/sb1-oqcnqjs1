import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { getCurrentTimeGreeting } from '../../../utils/dateUtils';
import UserStats from './UserStats';
import UpcomingEvent from './UpcomingEvent';
import WeatherMood from './WeatherMood';

const sampleUpcomingEvent = {
  id: '1',
  title: 'Tech Innovators Meetup',
  date: '2:30 PM',
  description: 'Weekly meetup for tech enthusiasts',
  location: 'Innovation Hub',
  imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  attendees: 45,
  category: 'Technology'
};

export default function PersonalizedBanner() {
  const { user } = useUser();
  const greeting = getCurrentTimeGreeting();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
      
      <div className="relative px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6">
        {/* Greeting Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {greeting}, <span className="text-orange-100">{user?.name}</span> 👋
            </h1>
            <p className="mt-1 text-orange-100">Ready to make today awesome?</p>
          </div>
          <div className="hidden sm:block">
            <WeatherMood 
              weather="Sunny"
              temperature={72}
              mood="Feeling Energetic"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <UserStats 
          eventCount={5}
          clubCount={3}
          streak={12}
          points={1250}
        />

        {/* Upcoming Event - Mobile Optimized */}
        <div className="sm:w-72">
          <UpcomingEvent event={sampleUpcomingEvent} />
        </div>
      </div>
    </div>
  );
}