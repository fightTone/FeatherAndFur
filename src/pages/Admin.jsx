import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../styles/theme';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import ProductForm from '../components/admin/ProductForm';
import RecipeForm from '../components/admin/RecipeForm';
import ContentManager from '../components/admin/ContentManager';
import { motion } from 'framer-motion';

const AdminContent = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className={`text-3xl font-bold mb-8 ${currentTheme.text.primary}`}>
        Admin Dashboard
      </h1>
      
      <Tabs defaultValue="products" className="w-full">
        <TabsList>
          <TabsTrigger value="products">Manage Products</TabsTrigger>
          <TabsTrigger value="recipes">Manage Recipes</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <ProductForm />
          <ContentManager type="products" />
        </TabsContent>
        <TabsContent value="recipes">
          <RecipeForm />
          <ContentManager type="recipes" />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default AdminContent;
