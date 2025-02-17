import React from 'react';
import { 
    Home, 
    ShoppingCart, 
    ChefHat, 
    Book, 
    Facebook, 
    Youtube, 
    MessageCircle,
    Camera
} from 'lucide-react';
import NavButton from '../ui/NavButton';
import ThemeToggle from '../ui/ThemeToggle';
import { theme } from '../../styles/theme';
import { useTheme } from '../../context/ThemeContext';

const Navigation = ({ activeTab, setActiveTab }) => {
    const { isDarkMode } = useTheme();
    const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];

    return (
        <nav className={`${currentTheme.primary} shadow-lg fixed top-0 left-0 right-0 z-50`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <span className={`text-xl font-bold ${currentTheme.text.primary}`}>Feather and Fur</span>
                </div>
                <div className="flex space-x-4 items-center">
                    <NavButton icon={<Home size={20} />} text="Home" onClick={() => setActiveTab('home')} active={activeTab === 'home'} />
                    <NavButton icon={<ShoppingCart size={20} />} text="Shop" onClick={() => setActiveTab('shop')} active={activeTab === 'shop'} />
                    <NavButton icon={<ChefHat size={20} />} text="Recipes" onClick={() => setActiveTab('recipes')} active={activeTab === 'recipes'} />
                    <NavButton icon={<Book size={20} />} text="Education" onClick={() => setActiveTab('education')} active={activeTab === 'education'} />
                    <ThemeToggle />
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;