import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  icon?: LucideIcon;
}

export default function NavLink({ href, children, active, icon: Icon }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
        active
          ? 'bg-orange-100 text-orange-600'
          : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </a>
  );
}