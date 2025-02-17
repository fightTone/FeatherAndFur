import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Clock, BarChart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { theme } from '../../styles/theme';

const RecipeCard = ({ title, difficulty, time, description, image }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <Card className="h-full">
      <CardContent className="flex flex-col h-full p-0">
        <div className="w-full h-56 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col p-6">
          <h3 className={`text-xl font-bold mb-4 ${currentTheme.text.primary}`}>
            {title}
          </h3>
          <p className={`${currentTheme.text.secondary} text-sm leading-relaxed mb-4 flex-grow`}>
            {description}
          </p>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center">
              <BarChart className="w-4 h-4 mr-2 text-green-500" />
              <span className={`text-sm ${currentTheme.text.secondary}`}>{difficulty}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-500" />
              <span className={`text-sm ${currentTheme.text.secondary}`}>{time}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;