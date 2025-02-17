// src/styles/theme.jsx
export const theme = {
    colors: {
        // Main colors - using standard Tailwind colors
        primary: 'bg-green-600',  // Instead of sage-600
        secondary: 'bg-stone-200',
        accent: 'bg-orange-400',
        
        // Text colors
        text: {
          primary: 'text-gray-800',
          secondary: 'text-gray-600',
          light: 'text-gray-400'
        },
        
        // Background variations
        background: {
          light: 'bg-stone-50',
          default: 'bg-white',
          dark: 'bg-stone-100'
        }
    },
    containers: {
        page: 'max-w-7xl mx-auto px-4 py-8',
        section: 'w-full py-12'
    },
    card: {
        base: 'bg-white rounded-lg shadow',
        hover: 'transform transition-all hover:scale-105'
    }
};