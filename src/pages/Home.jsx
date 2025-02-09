import React from 'react';
import FeatureCard from '../components/home/home_featurecard';
import { Camera, ChefHat, Book } from 'lucide-react';

// Use default export instead of named export
const HomeContent = () => (
  <div className="space-y-6">
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Feather and Fur</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Quality rabbit farming, delicious recipes, and expert guidance for your culinary journey
      </p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        icon={<Camera className="w-8 h-8 text-blue-500" />}
        title="Fresh Farm Updates"
        description="Daily photos and videos of our rabbits and farm operations"
      />
      <FeatureCard
        icon={<ChefHat className="w-8 h-8 text-green-500" />}
        title="Cooking Guides"
        description="Explore our collection of traditional and modern rabbit recipes"
      />
      <FeatureCard
        icon={<Book className="w-8 h-8 text-purple-500" />}
        title="Learn Rabbit Farming"
        description="Educational resources for aspiring rabbit farmers"
      />
    </div>
  </div>
);

export default HomeContent;