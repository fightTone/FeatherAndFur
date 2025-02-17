import React from 'react';
import FeatureCard from '../components/home/FeatureCard';
import { Camera, ChefHat, Book } from 'lucide-react';
import { theme } from '../styles/theme';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const HomeContent = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];
  const parallax = useParallax(0.3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center space-y-12 max-w-6xl mx-auto"
    >
      <motion.section
        style={parallax.style}
        className="text-center w-full max-w-3xl mx-auto px-4"
      >
        <motion.h1 
          variants={itemVariants}
          className={`text-5xl font-bold mb-6 ${currentTheme.text.primary}`}
        >
          Welcome to Feather and Fur
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className={`text-xl ${currentTheme.text.secondary} leading-relaxed`}
        >
          Quality rabbit farming, delicious recipes, and expert guidance for your culinary journey
        </motion.p>
      </motion.section>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 auto-rows-fr"
      >
        {[
          {
            icon: <Camera className="w-8 h-8" />,
            title: "Fresh Farm Updates",
            description: "Daily photos and videos of our rabbits and farm operations"
          },
          {
            icon: <ChefHat className="w-8 h-8" />,
            title: "Cooking Guides",
            description: "Explore our collection of traditional and modern rabbit recipes"
          },
          {
            icon: <Book className="w-8 h-8" />,
            title: "Learn Rabbit Farming",
            description: "Educational resources for aspiring rabbit farmers"
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-full"
          >
            <FeatureCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomeContent;