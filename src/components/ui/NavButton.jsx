import React from 'react';

const NavButton = ({ icon, text, onClick, active }) => (
    <button
        onClick={onClick}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
        }`}
    >
        {icon}
        <span className="ml-2">{text}</span>
    </button>
);

export default NavButton;