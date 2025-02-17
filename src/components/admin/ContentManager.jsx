import React from 'react';
import { useContent } from '../../context/ContentContext';
import { useTheme } from '../../context/ThemeContext';
import { theme } from '../../styles/theme';
import { Trash2 } from 'lucide-react';

const ContentManager = ({ type }) => {
  const { products, recipes, deleteProduct, deleteRecipe } = useContent();
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

  const items = type === 'products' ? products : recipes;
  const deleteItem = type === 'products' ? deleteProduct : deleteRecipe;

  return (
    <div className="mt-8">
      <h3 className={`text-xl font-semibold mb-4 ${currentTheme.text.primary}`}>
        Manage Existing {type === 'products' ? 'Products' : 'Recipes'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`${currentTheme.card.base} p-4 flex justify-between items-center`}
          >
            <div className="flex items-center space-x-4">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <div>
                <h4 className={`font-medium ${currentTheme.text.primary}`}>{item.title}</h4>
                <p className={`text-sm ${currentTheme.text.secondary}`}>
                  {type === 'products' ? item.price : `${item.difficulty} • ${item.time}`}
                </p>
              </div>
            </div>
            <button
              onClick={() => deleteItem(item.id)}
              className="p-2 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentManager;
