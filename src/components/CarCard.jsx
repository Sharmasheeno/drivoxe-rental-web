import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { addDefaultSrc } from '../data/cars';

const CarCard = ({ car, onBook }) => {
    const navigate = useNavigate();

    const handleViewCar = () => {
        navigate(`/cars/${car.id}`);
    };

    return (
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-4 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
            <img 
                src={car.images[0]} 
                alt={car.name} 
                className="w-full h-40 object-cover rounded-md mb-4 cursor-pointer" 
                onClick={handleViewCar}
                onError={addDefaultSrc}
            />
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{car.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-2">${car.price}/day</p>
            <div className="flex space-x-2">
                <Button onClick={handleViewCar} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm px-4 py-2">View Car</Button>
                <Button onClick={() => onBook(car)} className="text-sm px-4 py-2 bg-red-700">Book Now</Button>
            </div>
        </div>
    );
};

export default CarCard;