import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light'|'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light'|'dark'|null;
    if (saved) {
      setTheme(saved);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
