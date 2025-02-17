import React from 'react';

const NavButton = ({ icon, text, onClick, active }) => (
    <button
        onClick={onClick}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        active ? 'bg-primary-accent text-white' : 'text-gray-300 hover:bg-gray-800'
        }`}
    >
        {icon}
        <span className="ml-2">{text}</span>
    </button>
);

export default NavButton;