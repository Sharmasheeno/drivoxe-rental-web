import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cars, addDefaultSrc } from '../data/cars';
import CarCard from '../components/CarCard';

const Cars = ({ setSelectedCar, auth }) => {
    const [filteredCars, setFilteredCars] = useState(cars);
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', ...new Set(cars.map(car => car.category))];
    const navigate = useNavigate();

    const filterCars = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredCars(cars);
        } else {
            setFilteredCars(cars.filter(car => car.category === category));
        }
    };

    const handleBookNow = (car) => {
        if (!auth.isAuthenticated) {
            alert("Please log in to book a car.");
            navigate('/login');
        } else {
            setSelectedCar(car);
            navigate('/booking');
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="relative bg-gray-800 text-white py-12">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200" className="w-full h-full object-cover opacity-40" alt="Red sports car driving fast" onError={addDefaultSrc}/>
                </div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Our Impressive Fleet</h1>
                    <p className="text-gray-300">Home / Cars</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Main Content */}
                    <div className="w-full md:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCars.map(car => (
                                <CarCard key={car.id} car={car} onBook={handleBookNow} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full md:w-1/4">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Categories</h3>
                            <ul className="space-y-2">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <a href="#" onClick={(e) => { e.preventDefault(); filterCars(cat); }} className={`block ${activeCategory === cat ? 'text-red-500 font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-red-500'}`}>
                                            {cat}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm mt-8">
                            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Popular Cars</h3>
                             <ul className="space-y-4">
                                 {cars.filter(c => c.popular).slice(0, 3).map(car => (
                                     <li key={car.id} className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate(`/cars/${car.id}`)}>
                                         <img src={car.images[0]} alt={car.name} className="w-16 h-12 object-cover rounded" onError={addDefaultSrc}/>
                                         <div>
                                             <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">{car.name}</p>
                                             <p className="text-xs text-gray-500 dark:text-gray-400">${car.price}/day</p>
                                         </div>
                                     </li>
                                 ))}
                             </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Cars;

