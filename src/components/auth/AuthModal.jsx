import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { theme } from '../../styles/theme';
import { X } from 'lucide-react';

const AuthModal = () => {
  const { showAuthModal, setShowAuthModal, login } = useAuth();
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!showAuthModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      login(password);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${currentTheme.card.base} p-6 rounded-lg w-96 relative`}>
        <button
          onClick={() => setShowAuthModal(false)}
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <h2 className={`text-xl font-bold mb-4 ${currentTheme.text.primary}`}>
          Authentication Required
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`w-full p-2 rounded-md ${currentTheme.card.base} border border-gray-600`}
          />
          
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          <button
            type="submit"
            className="w-full p-2 bg-primary-accent text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
