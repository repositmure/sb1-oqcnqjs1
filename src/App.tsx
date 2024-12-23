import React, { useState } from 'react';
import Header from './components/layout/Header';
import PersonalizedBanner from './components/home/PersonalizedBanner';
import FilterChips from './components/home/FilterChips';
import EventCard from './components/events/EventCard';
import ClubList from './components/clubs/ClubList';
import CreateEventButton from './components/events/CreateEventButton';
import EventForm from './components/events/forms/EventForm';
import type { Event, Club, EventFormData } from './types';

const sampleClubs: Club[] = [
  {
    id: '1',
    name: 'Tech Innovators',
    description: 'A community of tech enthusiasts pushing boundaries.',
    category: 'Technology',
    memberCount: 234,
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    location: 'Innovation Hub',
    tags: ['tech', 'innovation', 'coding'],
    foundedYear: 2020,
    meetingSchedule: 'Every Tuesday at 5 PM'
  },
  // Add more sample clubs...
];

const featuredEvents: Event[] = [
  {
    id: '1',
    title: 'Spring Music Festival',
    description: 'Join us for an evening of live performances.',
    date: 'Mar 15, 2024 • 7:00 PM',
    location: 'Campus Amphitheater',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    attendees: 156,
    category: 'Music',
    status: 'upcoming',
    visibility: 'public'
  },
  // Add more sample events...
];

function App() {
  const [activeFilter, setActiveFilter] = useState('your-events');
  const [showEventForm, setShowEventForm] = useState(false);

  const handleCreateEvent = (data: EventFormData) => {
    console.log('New event:', data);
    setShowEventForm(false);
    // TODO: Implement event creation logic
  };

  const handleViewClub = (clubId: string) => {
    console.log('Viewing club:', clubId);
    // TODO: Implement club navigation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <PersonalizedBanner />
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <FilterChips active={activeFilter} onChange={setActiveFilter} />
          <CreateEventButton onClick={() => setShowEventForm(true)} />
        </div>

        {showEventForm ? (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Event</h2>
            <EventForm onSubmit={handleCreateEvent} />
          </div>
        ) : activeFilter === 'clubs' ? (
          <ClubList clubs={sampleClubs} onViewClub={handleViewClub} />
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;