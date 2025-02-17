import React from 'react';
import { theme } from '../../styles/theme';
import { useTheme } from '../../context/ThemeContext';

export const Card = ({ children, className = '', hover = true }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <div className={`
      ${currentTheme.card.base}
      ${hover ? currentTheme.card.hover : ''}
      backdrop-blur-sm bg-opacity-90
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <div className={`p-6 ${className} ${currentTheme.text.primary}`}>
      {children}
    </div>
  );
};