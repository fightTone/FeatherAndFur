import React from 'react';
import { Card, CardContent } from '../ui/card';
import { useTheme } from '../../context/ThemeContext';
import { theme } from '../../styles/theme';

const ProductCard = ({ title, price, description, image }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <Card className="h-full">
      <CardContent className="flex flex-col h-full p-0">
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-between p-6">
          <div className="text-center space-y-4 mb-6">
            <h3 className={`text-xl font-bold ${currentTheme.text.primary}`}>
              {title}
            </h3>
            <p className={`${currentTheme.text.secondary} text-sm leading-relaxed min-h-[3rem]`}>
              {description}
            </p>
          </div>
          <div className={`mt-auto pt-4 font-semibold ${currentTheme.text.primary}`}>
            {price}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;