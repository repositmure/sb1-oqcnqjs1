import React from 'react';
import { X, Calendar, MapPin, Users, Link as LinkIcon, Share2, Building } from 'lucide-react';
import type { Event } from '../../types';

interface EventRegistrationSlideProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventRegistrationSlide({ event, isOpen, onClose }: EventRegistrationSlideProps) {
  const hostingClub = {
    name: "Tech Innovators Club",
    description: "A community of tech enthusiasts pushing the boundaries of innovation.",
    memberCount: 234,
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform transition-all ease-in-out duration-500 sm:duration-700">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="relative flex-1">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-600 hover:text-gray-900 backdrop-blur-sm"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Event Image */}
              <div className="relative h-72">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-sm font-medium text-orange-700">
                    {event.category}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-white">{event.title}</h2>
                </div>
              </div>

              {/* Event Details */}
              <div className="px-4 py-6 sm:px-6">
                <div className="space-y-6">
                  {/* Quick Info */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="mr-2 h-5 w-5 text-orange-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="mr-2 h-5 w-5 text-orange-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="mr-2 h-5 w-5 text-orange-500" />
                      {event.attendees} people going
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">About this event</h3>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>

                  {/* Hosting Club */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900">Hosted by</h3>
                    <div className="mt-3 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={hostingClub.imageUrl}
                          alt={hostingClub.name}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">{hostingClub.name}</h4>
                        <p className="mt-1 text-sm text-gray-500">{hostingClub.description}</p>
                        <p className="mt-1 text-sm text-gray-500">
                          <Users className="inline-block h-4 w-4 mr-1" />
                          {hostingClub.memberCount} members
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Registration Link */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900">Registration Link</h3>
                    <a
                      href="#"
                      className="mt-2 inline-flex items-center text-sm text-orange-600 hover:text-orange-700"
                    >
                      <LinkIcon className="mr-1.5 h-4 w-4" />
                      https://forms.university.edu/event-registration
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-shrink-0 justify-between px-4 py-4 border-t border-gray-200">
              <button
                type="button"
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <Share2 className="mr-1.5 h-4 w-4" />
                Share Event
              </button>
              <button
                type="button"
                className="rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}