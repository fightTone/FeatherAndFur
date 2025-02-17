import React from 'react';
import { Card, CardContent } from '../ui/card';
import { theme } from '../../styles/theme';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <Card className="h-full">
      <CardContent className="flex flex-col h-full justify-between">
        <div className="flex-1 flex flex-col items-center">
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              {React.cloneElement(icon, {
                className: `w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`
              })}
            </div>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-xl font-bold mb-4 ${currentTheme.text.primary}`}
          >
            {title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`${currentTheme.text.secondary} text-sm leading-relaxed`}
          >
            {description}
          </motion.p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
