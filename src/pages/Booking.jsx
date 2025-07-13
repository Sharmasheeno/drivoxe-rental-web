import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { addDefaultSrc } from '../data/cars';

const Booking = ({ car, bookingDetails, setBookingDetails }) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [days, setDays] = useState(1);

    useEffect(() => {
        if (bookingDetails.pickupDate && bookingDetails.dropoffDate) {
            const pickup = new Date(bookingDetails.pickupDate);
            const dropoff = new Date(bookingDetails.dropoffDate);
            if (dropoff > pickup) {
                const diffTime = Math.abs(dropoff - pickup);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                setDays(diffDays);
            } else {
                setDays(1);
            }
        }
    }, [bookingDetails.pickupDate, bookingDetails.dropoffDate]);


    const calculateTotal = () => {
        return car.price * days;
    };

    const validate = () => {
        const newErrors = {};
        if (!bookingDetails.pickupDate) newErrors.pickupDate = "Pickup date is required.";
        if (!bookingDetails.dropoffDate) newErrors.dropoffDate = "Dropoff date is required.";
        if (bookingDetails.pickupDate && bookingDetails.dropoffDate) {
            const pickup = new Date(bookingDetails.pickupDate);
            const dropoff = new Date(bookingDetails.dropoffDate);
            if (dropoff <= pickup) {
                newErrors.dropoffDate = "Dropoff date must be after pickup date.";
            }
        }
        return newErrors;
    };

    const handleBooking = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        navigate('/booking-confirmation');
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails(prev => ({ ...prev, [name]: value }));
    };

    if (!car) {
        return (
            <div className="container mx-auto py-16 text-center">
                <h2 className="text-2xl">Please select a car first.</h2>
                <Button onClick={() => navigate('/cars')}>View Cars</Button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
             <div className="bg-gray-100 dark:bg-gray-800 py-12">
                 <div className="container mx-auto px-4 text-center">
                     <h1 className="text-4xl font-bold">Book Your Car</h1>
                     <p className="text-gray-600 dark:text-gray-400">Complete the form below to reserve your vehicle.</p>
                 </div>
             </div>
             <div className="container mx-auto px-4 py-16">
                 <div className="flex flex-col lg:flex-row gap-12">
                     {/* Booking Form */}
                     <div className="lg:w-2/3">
                         <form onSubmit={handleBooking} noValidate>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div>
                                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pickup Date</label>
                                     <input type="date" name="pickupDate" value={bookingDetails.pickupDate} onChange={handleInputChange} className={`w-full mt-1 p-2 border rounded-md bg-white dark:bg-gray-700 ${errors.pickupDate ? 'border-red-500' : 'dark:border-gray-600'}`} />
                                     {errors.pickupDate && <p className="text-red-500 text-xs mt-1">{errors.pickupDate}</p>}
                                 </div>
                                 <div>
                                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Drop-off Date</label>
                                     <input type="date" name="dropoffDate" value={bookingDetails.dropoffDate} onChange={handleInputChange} className={`w-full mt-1 p-2 border rounded-md bg-white dark:bg-gray-700 ${errors.dropoffDate ? 'border-red-500' : 'dark:border-gray-600'}`} />
                                     {errors.dropoffDate && <p className="text-red-500 text-xs mt-1">{errors.dropoffDate}</p>}
                                 </div>
                             </div>
                             <div className="mt-8">
                                 <Button type="submit">Confirm Booking</Button>
                             </div>
                         </form>
                     </div>
                     {/* Car Summary */}
                     <div className="lg:w-1/3 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                         <h3 className="text-xl font-bold mb-4">Reservation Summary</h3>
                         <img src={car.images[0]} alt={car.name} className="w-full rounded-md mb-4" onError={addDefaultSrc}/>
                         <h4 className="font-semibold text-lg">{car.name}</h4>
                         <p className="text-gray-600 dark:text-gray-400">{car.category}</p>
                         <div className="border-t dark:border-gray-700 my-4"></div>
                         <div className="flex justify-between">
                             <span>Price per day</span>
                             <span>${car.price}</span>
                         </div>
                          <div className="flex justify-between">
                             <span>Number of days</span>
                             <span>{days}</span>
                         </div>
                         <div className="border-t dark:border-gray-700 my-4"></div>
                         <div className="flex justify-between font-bold text-lg">
                             <span>Total</span>
                             <span>${calculateTotal()}</span>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Booking;