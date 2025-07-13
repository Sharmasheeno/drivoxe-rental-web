import React from 'react';

const Button = ({ children, onClick, className = 'bg-red-500 hover:bg-red-600 text-white', type = 'button', disabled = false }) => (
    <button onClick={onClick} type={type} disabled={disabled} className={`px-6 py-3 rounded-md font-semibold transition-colors ${className} ${disabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}>
        {children}
    </button>
);

export default Button;