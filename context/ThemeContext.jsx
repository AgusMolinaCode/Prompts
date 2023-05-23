'use client'

import React, { useState, useEffect, createContext } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (newTheme) => {
    const root = window.document.documentElement;
    const isDark = newTheme === 'dark';

    
    root.style.transition = 'background-color 0.5s, color 0.5s';

    
    setTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);

    
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(newTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: rawSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
