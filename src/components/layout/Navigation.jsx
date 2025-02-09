import React, { useState } from 'react';
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


const Navigation = ({ activeTab, setActiveTab }) => (
    <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                <span className="text-xl font-bold">Feather and Fur</span>
            </div>
            <div className="flex space-x-4">
                <NavButton icon={<Home size={20} />} text="Home" onClick={() => setActiveTab('home')} active={activeTab === 'home'} />
                <NavButton icon={<ShoppingCart size={20} />} text="Shop" onClick={() => setActiveTab('shop')} active={activeTab === 'shop'} />
                <NavButton icon={<ChefHat size={20} />} text="Recipes" onClick={() => setActiveTab('recipes')} active={activeTab === 'recipes'} />
                <NavButton icon={<Book size={20} />} text="Education" onClick={() => setActiveTab('education')} active={activeTab === 'education'} />
            </div>
            </div>
        </div>
    </nav>
);

export default Navigation;