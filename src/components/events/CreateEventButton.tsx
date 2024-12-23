import React from 'react';
import { Plus } from 'lucide-react';

interface CreateEventButtonProps {
  onClick: () => void;
}

export default function CreateEventButton({ onClick }: CreateEventButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-6 py-3 bg-orange-500 
                 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors
                 sm:static sm:shadow-none"
    >
      <Plus className="h-5 w-5" />
      <span className="font-medium">Create Event</span>
    </button>
  );
}