import { useState, useEffect } from 'react';
import type { User } from '../types';

export function useUser() {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Alex',
    email: 'alex@university.edu',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    joinedClubs: ['1', '2'],
    savedEvents: ['1', '3']
  });

  return { user, setUser };
}