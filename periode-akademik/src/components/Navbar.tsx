import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  activePage: 'akademik' | 'report';
  onNavigate: (page: 'akademik' | 'report') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Periode Akademik', page: 'akademik' as const },
    { label: 'Report', page: 'report' as const },
  ];

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl">UNIV LOGO</div>

          <div className="hidden md:flex space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => onNavigate(item.page)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activePage === item.page
                    ? 'bg-white text-blue-700'
                    : 'text-white hover:bg-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  onNavigate(item.page);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activePage === item.page
                    ? 'bg-white text-blue-700'
                    : 'text-white hover:bg-blue-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
