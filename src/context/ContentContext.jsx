import React, { createContext, useContext, useState } from 'react';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, id: Date.now() }]);
  };

  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <ContentContext.Provider value={{
      products,
      recipes,
      addProduct,
      deleteProduct,
      addRecipe,
      deleteRecipe
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
