import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars, addDefaultSrc } from '../data/cars';
import Button from '../components/Button';
import CarCard from '../components/CarCard';


const CarDetail = ({ setSelectedCar, auth }) => {
    const { carId } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        const foundCar = cars.find(c => c.id === parseInt(carId));
        if (foundCar) {
            setCar(foundCar);
            setMainImage(foundCar.images[0]);
        }
    }, [carId]);
    
    const handleBookNow = (car) => {
        if (!auth.isAuthenticated) {
            alert("Please log in to book a car.");
            navigate('/login');
        } else {
            setSelectedCar(car);
            navigate('/booking');
        }
    };


    if (!car) {
        return (
            <div className="bg-white dark:bg-gray-900 container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Car not found.</h2>
                <Button onClick={() => navigate('/cars')}>Back to Cars</Button>
            </div>
        );
    }
    
    const relatedCars = cars.filter(c => c.category === car.category && c.id !== car.id).slice(0, 4);

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold">Car Details</h1>
                    <p className="text-gray-300">  <p onClick={() => navigate('/')}>Home</p>/ Cars / {car.name}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <img src={mainImage} alt={car.name} className="w-full h-96 object-cover rounded-lg shadow-lg mb-4" onError={addDefaultSrc} />
                        <div className="grid grid-cols-4 gap-4">
                           {car.images.map((img, index) => (
                               <img 
                                key={index}
                                src={img} 
                                alt={`${car.name} thumbnail ${index + 1}`} 
                                className={`rounded-md cursor-pointer border-2 h-24 w-full object-cover ${mainImage === img ? 'border-red-500' : 'border-transparent'}`}
                                onClick={() => setMainImage(img)}
                                onError={addDefaultSrc}
                                />
                           ))}
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-bold">{car.name}</h2>
                        <p className="text-2xl text-red-500 font-semibold my-4">Starting at ${car.price}/day</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">Experience the thrill of the open road with the {car.name}. This car combines stunning design with exhilarating performance, making it the perfect choice for a memorable journey.</p>
                        <div className="flex items-center space-x-4 mb-6">
                            <Button onClick={() => handleBookNow(car)}>Book Now</Button>
                        </div>
                        <div className="border-t dark:border-gray-700 pt-6">
                            <h4 className="font-bold text-lg mb-4">Specifications:</h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li><strong>Transmission:</strong> Automatic</li>
                                <li><strong>Seats:</strong> 4</li>
                                <li><strong>Fuel:</strong> Petrol</li>
                                <li><strong>Color:</strong> Red</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="py-16">
                    <h3 className="text-2xl font-bold mb-6">Car Features</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-4">
                            <h4 className="font-semibold">CONVERTIBLE TOP</h4>
                            <p className="text-gray-600 dark:text-gray-300">Enjoy the open air with an easy-to-operate convertible top.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold">SPORT MODE</h4>
                            <p className="text-gray-600 dark:text-gray-300">Unleash the full power of the V8 engine for an exhilarating drive.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold">INFOTAINMENT SYSTEM</h4>
                            <p className="text-gray-600 dark:text-gray-300">Stay connected with a modern and intuitive infotainment system.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold">ADVANCED SAFETY</h4>
                            <p className="text-gray-600 dark:text-gray-300">Drive with peace of mind with the latest safety features.</p>
                        </div>
                    </div>
                </div>

                <div className="py-16 border-t dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-center mb-10">You may also like</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                         {relatedCars.map(relatedCar => (
                             <CarCard key={relatedCar.id} car={relatedCar} onBook={handleBookNow} />
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
