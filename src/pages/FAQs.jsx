import React from 'react';
import { faqs } from '../data/faqs';
import FaqItem from '../components/FaqItem';
import Button from '../components/Button';

const FAQs = () => (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="bg-gray-100 dark:bg-gray-800 py-12">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                <p className="text-gray-600 dark:text-gray-400">Home / FAQs</p>
            </div>
        </div>
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                    <h2 className="text-xl font-bold mb-4">Booking and Reservations</h2>
                    {faqs.slice(0, 4).map(faq => <FaqItem key={faq.q} {...faq} />)}
                </div>
                 <div>
                    <h2 className="text-xl font-bold mb-4">Car Pickup and Return</h2>
                    {faqs.slice(4, 8).map(faq => <FaqItem key={faq.q} {...faq} />)}
                </div>
            </div>
            <div className="mt-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us for assistance.</p>
                <Button>Contact Us</Button>
            </div>
        </div>
    </div>
);

export default FAQs;
