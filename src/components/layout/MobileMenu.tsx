import React from 'react';
import { X, LucideIcon } from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, navItems, currentPath }: MobileMenuProps) {
  return (
    <div 
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-600/75 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div 
        className={`fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-lg text-gray-500 hover:bg-orange-50 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6" role="navigation">
          <ul className="space-y-2">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = currentPath === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      isActive
                        ? 'bg-orange-100 text-orange-600'
                        : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                    }`}
                    onClick={onClose}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}