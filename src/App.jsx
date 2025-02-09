import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomeContent from './pages/Home';
import ShopContent from './pages/Shop';
import RecipesContent from './pages/Recipes';
import EducationContent from './pages/Education';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <HomeContent />;
      case 'shop':
        return <ShopContent />;
      case 'recipes':
        return <RecipesContent />;
      case 'education':
        return <EducationContent />;
      default:
        return <Homepage />;
    }
  };

  return (

    <div className="min-h-screen flex flex-col">  {/* Add flex flex-col */}
      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8"> {/* Add flex-grow */}
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;