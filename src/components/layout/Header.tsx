import React, { useState } from 'react';
import { Bell, User, Menu, Users2, Home, Calendar } from 'lucide-react';
import Logo from './Logo';
import NavLink from './NavLink';
import SearchBar from '../ui/SearchBar';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  const navItems = [
    { href: '/', label: 'Vibes', icon: Home },
    { href: '/events', label: 'Events', icon: Calendar },
    { href: '/clubs', label: 'Squads', icon: Users2 },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden -ml-2 p-2 rounded-lg text-gray-500 hover:bg-orange-50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Logo />
          </div>
          
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map(({ href, label, icon }) => (
              <NavLink 
                key={href} 
                href={href} 
                active={currentPath === href}
                icon={icon}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <SearchBar />
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              className="relative p-2 rounded-full text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-orange-500 ring-2 ring-white" />
            </button>
            
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-colors">
              <User className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">Profile</span>
            </button>
            
            <button 
              className="sm:hidden p-2 rounded-full text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-colors"
              aria-label="Profile"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <SearchBar />
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navItems={navItems}
        currentPath={currentPath}
      />
    </header>
  );
}