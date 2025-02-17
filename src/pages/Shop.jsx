import React from 'react';
import ProductCard from '../components/shop/prodcard';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../styles/theme';
import { useContent } from '../context/ContentContext';

const ShopContent = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];
  const parallax = useParallax(0.3);
  const { products } = useContent();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
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
        <motion.h2 variants={itemVariants} className={`text-4xl font-bold mb-6 ${currentTheme.text.primary}`}>
          Our Rabbits
        </motion.h2>
      </motion.section>

      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 auto-rows-fr">
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-full"
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ShopContent;