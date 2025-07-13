import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { addDefaultSrc } from '../data/cars';


const About = () => {
    const navigate = useNavigate();
    return (
     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
         <div className="bg-gray-100 dark:bg-gray-800 py-12">
             <div className="container mx-auto px-4 text-center">
                 <h1 className="text-4xl font-bold">Who We Are</h1>
             </div>
         </div>
 
         <div className="py-16">
             <div className="container mx-auto px-4">
                 <div className="flex flex-col md:flex-row items-center gap-12">
                     <div className="md:w-1/2">
                         <h3 className="text-red-500 font-semibold mb-2">OUR STORY</h3>
                         <h2 className="text-3xl font-bold mb-4">Pioneering Premium Car Rentals</h2>
                         <p className="text-gray-600 dark:text-gray-300">Founded with a passion for cars and a commitment to service, Drivoxe has been a leader in the premium car rental industry for over a decade. We believe that renting a car should be an experience, not just a transaction. Our mission is to provide our customers with top-of-the-line vehicles and a seamless rental process from start to finish.</p>
                     </div>
                     <div className="md:w-1/2">
                         <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800" alt="Red Sports Car" className="rounded-lg shadow-xl" onError={addDefaultSrc}/>
                     </div>
                 </div>
             </div>
         </div>
 
         <div className="bg-gray-50 dark:bg-gray-800 py-16">
             <div className="container mx-auto px-4">
                 <h2 className="text-3xl font-bold text-center mb-10">Why Choose Drivoxe?</h2>
                 <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                     <div className="p-6">
                         <h4 className="font-bold text-xl mb-2">Quality & Variety</h4>
                         <p className="text-gray-600 dark:text-gray-300">Our fleet consists of the latest models from top brands, ensuring you find the perfect car for your needs.</p>
                     </div>
                     <div className="p-6">
                         <h4 className="font-bold text-xl mb-2">Affordable Rates</h4>
                         <p className="text-gray-600 dark:text-gray-300">We offer competitive pricing without compromising on quality or service.</p>
                     </div>
                      <div className="p-6">
                         <h4 className="font-bold text-xl mb-2">Easy Booking</h4>
                         <p className="text-gray-600 dark:text-gray-300">Our user-friendly website and mobile app make booking your car a breeze.</p>
                     </div>
                     <div className="p-6">
                         <h4 className="font-bold text-xl mb-2">Customer Satisfaction</h4>
                         <p className="text-gray-600 dark:text-gray-300">Our dedicated team is here to assist you 24/7, ensuring a smooth and enjoyable rental experience.</p>
                     </div>
                 </div>
             </div>
         </div>
         
         <div className="py-16">
              <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl font-bold mb-10">Simple Steps to Get the Car</h2>
                 <div className="relative max-w-2xl mx-auto">
                     <div className="border-t-2 border-dashed border-red-300 absolute w-2/3 left-1/2 -translate-x-1/2 top-10"></div>
                     <div className="flex justify-between items-start relative">
                         <div className="flex flex-col items-center text-center w-1/3">
                             <div className="bg-white dark:bg-gray-800 border-2 border-red-500 rounded-full w-20 h-20 flex items-center justify-center text-3xl mb-2">🚗</div>
                             <h4 className="font-semibold">Select</h4>
                         </div>
                          <div className="flex flex-col items-center text-center w-1/3">
                             <div className="bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mb-2 shadow-lg">📅</div>
                             <h4 className="font-semibold">Book</h4>
                         </div>
                          <div className="flex flex-col items-center text-center w-1/3">
                             <div className="bg-white dark:bg-gray-800 border-2 border-red-500 rounded-full w-20 h-20 flex items-center justify-center text-3xl mb-2">➡️</div>
                             <h4 className="font-semibold">Drive</h4>
                         </div>
                     </div>
                 </div>
              </div>
         </div>
 
         <div className="bg-gray-900 text-white py-16">
             <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl font-bold mb-4">Reserve Your Dream Car Today</h2>
                 <p className="mb-8">Feel the best experience travel.</p>
                 <Button onClick={() => navigate('/cars')}>Book Now</Button>
             </div>
         </div>
     </div>
    );
 };

export default About;

