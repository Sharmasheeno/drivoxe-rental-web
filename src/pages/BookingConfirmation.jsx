import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const BookingConfirmation = ({ car, bookingDetails }) => {
    const navigate = useNavigate();
    
    if (!car) {
        // Redirect if there's no car data, which means booking wasn't completed properly
        return (
            <div className="container mx-auto py-16 text-center">
                <h2 className="text-2xl">Booking details not found.</h2>
                <Button onClick={() => navigate('/')}>Back to Home</Button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Thank you for your reservation. A confirmation email has been sent. Please see the details of your booking below.</p>
                    <div className="text-left bg-white dark:bg-gray-700 p-6 rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Reservation Details</h2>
                        <p><strong>Car:</strong> {car.name}</p>
                        <p><strong>Pickup Date:</strong> {bookingDetails.pickupDate}</p>
                        <p><strong>Drop-off Date:</strong> {bookingDetails.dropoffDate}</p>
                    </div>
                    <Button onClick={() => navigate('/')} className="mt-8 bg-red-700">Back to Home</Button>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;
