import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full text-sm bg-gray-50 
                 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
                 transition-all hover:bg-white"
        placeholder="Search anything..."
      />
    </div>
  );
}