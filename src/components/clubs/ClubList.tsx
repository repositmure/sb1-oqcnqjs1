import React from 'react';
import ClubCard from './ClubCard';
import type { Club } from '../../types';

interface ClubListProps {
  clubs: Club[];
  onViewClub: (clubId: string) => void;
}

export default function ClubList({ clubs, onViewClub }: ClubListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.map(club => (
        <ClubCard
          key={club.id}
          club={club}
          onViewDetails={onViewClub}
        />
      ))}
    </div>
  );
}