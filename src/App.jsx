import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Page Components
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import FAQs from './pages/FAQs';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';

export default function App() {
    // State management remains here
    const [selectedCar, setSelectedCar] = useState(null);
    const [auth, setAuth] = useState({ isAuthenticated: false, user: null });
    const [bookingDetails, setBookingDetails] = useState({ pickupDate: '', dropoffDate: '' });
    
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                return 'dark';
            }
        }
        return 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const showHeaderFooter = !['/login', '/register'].includes(location.pathname);

    return (
        <div className="font-sans bg-white dark:bg-gray-900">
            {showHeaderFooter && <Header auth={auth} setAuth={setAuth} theme={theme} setTheme={setTheme} />}
            
            <main>
                <Routes>
                    <Route path="/" element={<Home setSelectedCar={setSelectedCar} auth={auth} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cars" element={<Cars setSelectedCar={setSelectedCar} auth={auth} />} />
                    <Route path="/cars/:carId" element={<CarDetail setSelectedCar={setSelectedCar} auth={auth} />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/login" element={<Login setAuth={setAuth} />} />
                    <Route path="/register" element={<Register setAuth={setAuth} />} />
                    <Route path="/booking" element={<Booking car={selectedCar} bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />} />
                    <Route path="/booking-confirmation" element={<BookingConfirmation car={selectedCar} bookingDetails={bookingDetails} />} />
                </Routes>
            </main>
            
            {showHeaderFooter && <Footer />}
        </div>
    );
}
