import React from 'react';
import { Users, Flame, Calendar, Building2 } from 'lucide-react';

interface FilterChipProps {
  active: string;
  onChange: (filter: string) => void;
}

export default function FilterChips({ active, onChange }: FilterChipProps) {
  const filters = [
    { id: 'your-events', label: 'Your Events', icon: Calendar, count: 5 },
    { id: 'trending', label: 'Trending', icon: Flame, count: 12 },
    { id: 'all-events', label: 'All Events', icon: Users, count: 45 },
    { id: 'clubs', label: 'Clubs', icon: Building2, count: 28 },
  ];

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
      {filters.map(({ id, label, icon: Icon, count }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap
            ${active === id 
              ? 'bg-orange-50 border-orange-200 text-orange-600' 
              : 'border-gray-200 text-gray-600 hover:border-orange-200 hover:bg-orange-50'
            }`}
        >
          <Icon className="h-4 w-4" />
          <span className="font-medium">{label}</span>
          <span className={`inline-flex items-center justify-center h-5 w-5 text-xs font-medium rounded-full
            ${active === id ? 'bg-orange-100' : 'bg-gray-100'}`}>
            {count}
          </span>
        </button>
      ))}
    </div>
  );
}