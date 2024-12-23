import React from 'react';
import { Flame } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Flame className="h-8 w-8 text-orange-500" />
      <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
        flare
      </span>
    </div>
  );
}