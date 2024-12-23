import React from 'react';
import { useUser } from '../../hooks/useUser';
import { getCurrentTimeGreeting } from '../../utils/dateUtils';

export default function WelcomeHeader() {
  const { user } = useUser();
  const greeting = getCurrentTimeGreeting();

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-gray-900">
        {greeting}, <span className="text-orange-500">{user?.name || 'Friend'}</span> 👋
      </h1>
      <p className="mt-2 text-gray-600">Ready to discover something exciting today?</p>
    </div>
  );
}