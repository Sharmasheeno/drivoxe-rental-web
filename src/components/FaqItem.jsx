import React, { useState } from 'react';

const FaqItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b dark:border-gray-700">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 px-2 flex justify-between items-center text-gray-800 dark:text-gray-200">
                <span className="font-semibold">{q}</span>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isOpen && <div className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">{a}</div>}
        </div>
    );
}

export default FaqItem;