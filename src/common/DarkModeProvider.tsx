'use client';

import { useState, useEffect, ReactNode } from 'react';
import { DarkModeContext, DarkModeContextType } from '@/hooks/useDarkMode';

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // 기본값 다크모드

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      setIsDarkMode(stored === 'true');
    } else {
      // localStorage에 값이 없으면 기본값(다크모드)을 저장
      localStorage.setItem('darkMode', 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  const value: DarkModeContextType = {
    isDarkMode,
    toggleDarkMode
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider };