import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cars, addDefaultSrc } from '../data/cars';
import CarCard from '../components/CarCard';
import Button from '../components/Button';

const Home = ({ setSelectedCar, auth }) => {
    const navigate = useNavigate();

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
            {/* Hero Section */}
            <div className="relative bg-gray-800 text-center py-20 text-white">
                 <div className="absolute inset-0">
                     <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200" className="w-full h-full object-cover opacity-50" alt="Man driving a car" onError={addDefaultSrc}/>
                 </div>
                 <div className="relative container mx-auto px-4 bg-black/30 backdrop-blur-sm py-10 rounded-lg">
                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Journey, Your Car, Your Way</h1>
                     <p className="text-lg text-gray-200 mb-8">Choose from a wide range of premium cars and enjoy a seamless rental experience.</p>
                     <Button onClick={() => navigate('/cars')}>Explore Cars</Button>
                 </div>
             </div>

            {/* Impressive Fleet Section */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Our Impressive Fleet</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cars.filter(c => c.popular).map(car => (
                            <CarCard key={car.id} car={car} onBook={handleBookNow} />
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Button onClick={() => navigate('/cars')}>View All Cars</Button>
                    </div>
                </div>
            </div>

            {/* Why Choose Drivoxe Section */}
            <div className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Drivoxe?</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">We provide an unparalleled car rental experience with a focus on quality, affordability, and customer satisfaction.</p>
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start"><span className="text-red-500 mr-2">✔</span> Quality & Variety</li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">✔</span> Easy Booking</li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">✔</span> Affordable Rates</li>
                                <li className="flex items-start"><span className="text-red-500 mr-2">✔</span> Customer Satisfaction</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800" alt="Red Sports Car" className="rounded-lg shadow-xl" onError={addDefaultSrc}/>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Testimonial Section */}
            <div className="py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <p className="text-xl italic text-gray-700 dark:text-gray-300">"My Drivoxe experience was nothing short of incredible. The amazing cars and impeccable service made my trip unforgettable. I'll be back for more."</p>
                    <p className="mt-4 font-semibold text-gray-800 dark:text-gray-200">- Alex Johnson</p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Go?</h2>
                    <p className="mb-8">Reserve your dream car today and feel the best experience.</p>
                    <Button onClick={() => navigate('/cars')}>Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
