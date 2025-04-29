import React from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => (
  <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
    <div className="flex items-center space-x-3">
      <Logo className="h-8 w-auto" />
      <span className="text-2xl font-bold">MosaicNotes</span>
    </div>
    <div className="flex items-center space-x-6">
      <a href="#" className="hover:text-blue-600 transition">Home</a>
      <a href="#" className="hover:text-blue-600 transition">Explore</a>
      <a href="#" className="hover:text-blue-600 transition">Write</a>
      <ThemeToggle />
    </div>
  </nav>
);

export default Navbar;
