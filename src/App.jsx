import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import HomeContent from './pages/Home';
import ShopContent from './pages/Shop';
import RecipesContent from './pages/Recipes';
import EducationContent from './pages/Education';
import Footer from './components/layout/Footer';
import { theme } from './styles/theme';
import './App.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import AdminContent from './pages/Admin';
import { ContentProvider } from './context/ContentContext';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/auth/AuthModal';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeContent />;
      case 'shop':
        return <ShopContent />;
      case 'recipes':
        return <RecipesContent />;
      case 'education':
        return <EducationContent />;
      case 'admin':
        return <AdminContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className={`min-h-screen w-full ${currentTheme.background.dark}`}>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <AuthModal />
      <main className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 mb-24 ${currentTheme.text.primary}`}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ContentProvider>
          <ErrorBoundary>
            <AppContent />
          </ErrorBoundary>
        </ContentProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;