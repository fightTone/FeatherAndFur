import React from 'react';
import FeatureCard from '../components/home/FeatureCard';
import { Camera, ChefHat, Book } from 'lucide-react';
import { theme } from '../styles/theme';
import { useTheme } from '../context/ThemeContext';

const HomeContent = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <div className="flex flex-col items-center space-y-12 max-w-6xl mx-auto">
      <section className="text-center w-full max-w-3xl mx-auto px-4">
        <h1 className={`text-5xl font-bold mb-6 ${currentTheme.text.primary}`}>
          Welcome to Feather and Fur
        </h1>
        <p className={`text-xl ${currentTheme.text.secondary} leading-relaxed`}>
          Quality rabbit farming, delicious recipes, and expert guidance for your culinary journey
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
        <FeatureCard
          icon={<Camera className="w-8 h-8 text-primary-accent" />}
          title="Fresh Farm Updates"
          description="Daily photos and videos of our rabbits and farm operations"
        />
        <FeatureCard
          icon={<ChefHat className="w-8 h-8 text-primary-accent" />}
          title="Cooking Guides"
          description="Explore our collection of traditional and modern rabbit recipes"
        />
        <FeatureCard
          icon={<Book className="w-8 h-8 text-primary-accent" />}
          title="Learn Rabbit Farming"
          description="Educational resources for aspiring rabbit farmers"
        />
      </div>
    </div>
  );
};

export default HomeContent;