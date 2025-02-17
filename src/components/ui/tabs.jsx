import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { theme } from '../../styles/theme';

export const TabsList = ({ children }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];
  
  return (
    <div className={`flex space-x-2 mb-6 p-1 ${currentTheme.card.base}`}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children, selected, onClick }) => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];
  
  return (
    <button
      onClick={() => onClick(value)}
      className={`px-4 py-2 rounded-md transition-colors ${
        selected ? 'bg-primary-accent text-white' : `${currentTheme.text.secondary} hover:bg-gray-700`
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, activeTab, children }) => {
  if (value !== activeTab) return null;
  return <div className="mt-4">{children}</div>;
};

export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const rendered = React.Children.map(children, child => {
    if (!child) return null;

    if (child.type === TabsList) {
      return React.cloneElement(child, {
        children: React.Children.map(child.props.children, trigger => 
          React.cloneElement(trigger, {
            selected: trigger.props.value === activeTab,
            onClick: setActiveTab
          })
        )
      });
    }

    if (child.type === TabsContent) {
      return React.cloneElement(child, {
        activeTab
      });
    }

    return child;
  });

  return <div>{rendered}</div>;
};
