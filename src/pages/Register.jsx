import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';

const Register = ({ setAuth }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Full name is required.';
        if (!email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!password) {
            newErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Password confirmation is required.';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }
        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Registering with:', { name, email, password });
            setAuth({ isAuthenticated: true, user: { name, email } });
            navigate('/Login');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                        <label className={`block text-sm font-medium ${errors.name ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 dark:text-white ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-red-500'}`} required />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
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
                    <div>
                        <label className={`block text-sm font-medium ${errors.confirmPassword ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 dark:text-white ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-red-500'}`} required />
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>
                    <Button type="submit" className="w-full bg-red-700">Register</Button>
                </form>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Already have an account? <Link to="/login" className="font-medium text-red-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
