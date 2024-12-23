import React from 'react';
import { Calendar, MapPin, Users, Image as ImageIcon, Tag, Ticket } from 'lucide-react';
import { EventFormData } from '../../../types';
import ImageUpload from './ImageUpload';
import CategorySelect from './CategorySelect';

interface EventFormProps {
  onSubmit: (data: EventFormData) => void;
  initialData?: Partial<EventFormData>;
}

export default function EventForm({ onSubmit, initialData = {} }: EventFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: EventFormData = {
      title: formData.get('title') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      location: formData.get('location') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      imageUrl: formData.get('imageUrl') as string,
      ticketPrice: formData.get('ticketPrice') ? Number(formData.get('ticketPrice')) : undefined,
      capacity: formData.get('capacity') ? Number(formData.get('capacity')) : undefined,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={initialData.title}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              defaultValue={initialData.date}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              defaultValue={initialData.time}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            <MapPin className="inline-block w-4 h-4 mr-2" />
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            defaultValue={initialData.location}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        {/* Category */}
        <CategorySelect defaultValue={initialData.category} />

        {/* Image Upload */}
        <ImageUpload defaultValue={initialData.imageUrl} />

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            defaultValue={initialData.description}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        {/* Ticket Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ticketPrice" className="block text-sm font-medium text-gray-700">
              <Ticket className="inline-block w-4 h-4 mr-2" />
              Ticket Price ($)
            </label>
            <input
              type="number"
              id="ticketPrice"
              name="ticketPrice"
              min="0"
              step="0.01"
              defaultValue={initialData.ticketPrice}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
              <Users className="inline-block w-4 h-4 mr-2" />
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              min="1"
              defaultValue={initialData.capacity}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600"
        >
          Create Event
        </button>
      </div>
    </form>
  );
}