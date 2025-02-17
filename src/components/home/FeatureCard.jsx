import React from 'react';
import { Card, CardContent } from '../ui/card';
import { theme } from '../../styles/theme';
import { useTheme } from '../../context/ThemeContext';

const FeatureCard = ({ icon, title, description }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <Card className="transform hover:scale-105 transition-all duration-300">
      <CardContent>
        <div className="flex justify-center mb-6">
          <div className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            {React.cloneElement(icon, {
              className: `w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`
            })}
          </div>
        </div>
        <h3 className={`text-xl font-bold mb-3 ${currentTheme.text.primary}`}>
          {title}
        </h3>
        <p className={`${currentTheme.text.secondary} text-sm leading-relaxed`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
