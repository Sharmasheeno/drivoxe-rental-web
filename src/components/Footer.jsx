import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-red-500">DRIVOXE.</h3>
                    <p className="text-gray-400">Don't miss a thing. Subscribe to our newsletter for exclusive deals and updates.</p>
                    <div className="mt-4 flex">
                        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-l-md text-gray-800" />
                        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-r-md font-semibold">Subscribe</button>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Quick Link</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-white">About us</Link></li>
                        <li><Link to="/cars" className="hover:text-white">How it works</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">The Cars</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/cars" className="hover:text-white">Our Fleet</Link></li>
                        <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Social Media</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                        <li><a href="#" className="hover:text-white">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Drivoxe. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
