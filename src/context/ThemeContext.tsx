import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  primaryColor: string;
  setTheme: (theme: Theme) => void;
  setPrimaryColor: (color: string) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from localStorage or default
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  );
  
  const [primaryColor, setPrimaryColor] = useState<string>(
    () => localStorage.getItem('primaryColor') || '#3B82F6' // Default Blue
  );

  // Apply theme class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply primary color as CSS variable
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Convert hex to RGB for Tailwind opacity support
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result 
        ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` 
        : '59 130 246'; // Default fallback
    };

    root.style.setProperty('--primary', hexToRgb(primaryColor));
    localStorage.setItem('primaryColor', primaryColor);
  }, [primaryColor]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, primaryColor, setTheme, setPrimaryColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
