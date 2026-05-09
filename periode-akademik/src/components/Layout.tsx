import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  activePage: 'akademik' | 'report';
  onNavigate: (page: 'akademik' | 'report') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar activePage={activePage} onNavigate={onNavigate} />
      <main className="min-h-screen">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Periode Akademik Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
