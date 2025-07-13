import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Header = ({ auth, setAuth, theme, setTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const closeMenu = () => setIsMenuOpen(false);

    const handleLogout = () => {
        setAuth({ isAuthenticated: false, user: null });
        closeMenu();
        navigate('/');
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-red-500">DRIVOXE.</Link>
                
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    <NavLink to="/" className={({ isActive }) => `text-lg md:text-sm font-medium ${isActive ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'} hover:text-red-500 dark:hover:text-red-400 transition-colors`}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `text-lg md:text-sm font-medium ${isActive ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'} hover:text-red-500 dark:hover:text-red-400 transition-colors`}>About</NavLink>
                    <NavLink to="/cars" className={({ isActive }) => `text-lg md:text-sm font-medium ${isActive ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'} hover:text-red-500 dark:hover:text-red-400 transition-colors`}>Cars</NavLink>
                    <NavLink to="/faqs" className={({ isActive }) => `text-lg md:text-sm font-medium ${isActive ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'} hover:text-red-500 dark:hover:text-red-400 transition-colors`}>FAQs</NavLink>
                </nav>
                
                <div className="hidden md:flex items-center space-x-2">
                    <ThemeToggle theme={theme} setTheme={setTheme} />
                    {auth.isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Welcome, {auth.user.name}</span>
                            <Button onClick={handleLogout}>Logout</Button>
                        </div>
                    ) : (
                        <div className="space-x-2">
                            <Button onClick={() => navigate('/login')} className="bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Login</Button>
                            <Button onClick={() => navigate('/register')}>Register</Button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    {/* ThemeToggle is now correctly placed here for mobile view */}
                    <ThemeToggle theme={theme} setTheme={setTheme} />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center">
                    <button onClick={closeMenu} className="absolute top-5 right-5 text-gray-800 dark:text-gray-200">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org.g/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <nav className="flex flex-col items-center space-y-6">
                        <Link to="/" onClick={closeMenu} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-500">Home</Link>
                        <Link to="/about" onClick={closeMenu} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-500">About</Link>
                        <Link to="/cars" onClick={closeMenu} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-500">Cars</Link>
                        <Link to="/faqs" onClick={closeMenu} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-500">FAQs</Link>
                    </nav>
                    <div className="mt-8">
                        {auth.isAuthenticated ? (
                            <div className="flex flex-col items-center space-y-4">
                                <span className="font-semibold text-gray-800 dark:text-gray-200">Welcome, {auth.user.name}</span>
                                <Button onClick={handleLogout}>Logout</Button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-4">
                                <Button onClick={() => { navigate('/login'); closeMenu(); }} className="bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600">Login</Button>
                                <Button onClick={() => { navigate('/register'); closeMenu(); }}>Register</Button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;