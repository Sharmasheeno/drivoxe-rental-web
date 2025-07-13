import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!password) {
            newErrors.password = 'Password is required.';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Logging in with:', { email, password });
            // Mock successful login
            setAuth({ isAuthenticated: true, user: { name: email.split('@')[0], email } });
            navigate('/');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login to Drivoxe</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                        <label className={`block text-sm font-medium ${errors.email ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 dark:text-white ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-red-500'}`} required />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className={`block text-sm font-medium ${errors.password ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 dark:text-white ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-red-500'}`} required />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    <Button type="submit" className="w-full bg-red-700">Login</Button>
                </form>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Don't have an account? <Link to="/register" className="font-medium text-red-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;