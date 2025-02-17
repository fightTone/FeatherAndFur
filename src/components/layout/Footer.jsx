import React from "react";
import { Facebook, Youtube, MessageCircle } from "lucide-react";
import { theme } from '../../styles/theme';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <footer className={`${currentTheme.primary} shadow-lg fixed bottom-0 left-0 right-0 z-50`}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className={`text-sm ${currentTheme.text.secondary}`}>
            © 2025 Your Farm Name. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 text-primary-accent hover:text-blue-400 cursor-pointer transition-colors" />
            <Youtube className="w-6 h-6 text-primary-accent hover:text-red-400 cursor-pointer transition-colors" />
            <MessageCircle className="w-6 h-6 text-primary-accent hover:text-green-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;