"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Star, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import doublebookImage from '@/assets/images/hero/doublebook.png';

export default function LionRoseGetInfo() {
    const [activeTab, setActiveTab] = useState('buyer');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        occupation: '',
        country: '',
        email: '',
        password: ''
    });

    const benefits = [
        'Discover the strategies behind building a global, scalable platform from the ground up.',
        'Gain insights into real-world challenges and solutions in digital transformation.',
        'Learn how to optimize technology, branding, and community engagement for long-term success.',
        'Exclusive access to expert case studies, tips, and growth hacks.'
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section className="relative py-16 lg:py-24" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Content - Book Information */}
                    <div className="space-y-6">
                        {/* Book Image */}
                        <div className="flex justify-center lg:justify-start">
                            <Image
                                src={doublebookImage}
                                alt="How I Build Global Platform - Book"
                                width={300}
                                height={250}
                                className="w-auto h-auto max-w-sm"
                                priority
                            />
                        </div>

                        {/* Book Title */}
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                            How I Build Global Platform
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-2 text-sm font-medium text-gray-900">4.8</span>
                            </div>
                            <span className="text-sm text-gray-600">(32,547 ratings)</span>
                        </div>

                        {/* Price */}
                        <div className="text-lg font-semibold text-gray-900">
                            Try for $0.00
                        </div>

                        {/* Description */}
                        <p className="text-gray-600">
                            Sign up now and receive a $3! gift. A digital guide to help you understand Lion Rose and StrongBody better and maximize your success on the platform.
                        </p>

                        {/* Countdown */}
                        <div className="bg-gray-700 text-white px-4 py-2 rounded-lg inline-block">
                            <span className="text-sm font-medium">Ends in 2 days - 2 hours - 30 minutes</span>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Registration Form */}
                    <div>
                        {/* Header */}
                        <div className="text-center mb-6">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                Sign Up To Get Free Book
                            </h2>
                            <p className="text-gray-600">
                                This is just the beginning. If you&apos;re ready to explore, learn, and transform your well-being, I invite you to be part of our journey.
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex mb-6 border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab('buyer')}
                                className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'buyer'
                                    ? 'border-red-500 text-red-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Register as Buyer
                            </button>
                            <button
                                onClick={() => setActiveTab('seller')}
                                className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'seller'
                                    ? 'border-red-500 text-red-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Register as Seller
                            </button>
                        </div>

                        {/* Content based on active tab */}
                        {activeTab === 'buyer' ? (
                            /* Buyer Registration - Social Login Options */
                            <div className="space-y-4">
                                {/* Google Login */}
                                <Button
                                    variant="outline"
                                    className="w-full py-3 text-sm font-medium border-gray-300 hover:bg-gray-50"
                                >
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Continue with Google
                                </Button>

                                {/* Apple Login */}
                                <Button
                                    variant="outline"
                                    className="w-full py-3 text-sm font-medium border-gray-300 hover:bg-gray-50"
                                >
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    Continue with Apple
                                </Button>

                                {/* Facebook Login */}
                                <Button
                                    variant="outline"
                                    className="w-full py-3 text-sm font-medium border-gray-300 hover:bg-gray-50"
                                >
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="#1877F2">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    Continue with Facebook
                                </Button>

                                {/* OR Divider */}
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">OR</span>
                                    </div>
                                </div>

                                {/* Continue with Email */}
                                <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-sm font-medium">
                                    Continue with Email
                                </Button>

                                {/* Login Link */}
                                <p className="text-center text-sm text-gray-600 mt-4">
                                    Already have an account?{' '}
                                    <a href="#" className="text-gray-900 font-medium hover:underline">
                                        Log in
                                    </a>
                                </p>
                            </div>
                        ) : (
                            /* Seller Registration - Form */
                            <form className="space-y-4">
                                {/* Username */}
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Public username"
                                        value={formData.username}
                                        onChange={(e) => handleInputChange('username', e.target.value)}
                                        className="w-full"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        You can&apos;t change your username, so choose wisely
                                    </p>
                                </div>

                                {/* Occupation and Country */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Enter Occupation"
                                            value={formData.occupation}
                                            onChange={(e) => handleInputChange('occupation', e.target.value)}
                                            className="w-full"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            You&apos;ll see why soon. You can change it later
                                        </p>
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Enter your country"
                                            value={formData.country}
                                            onChange={(e) => handleInputChange('country', e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Enter email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter password"
                                            value={formData.password}
                                            onChange={(e) => handleInputChange('password', e.target.value)}
                                            className="w-full pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Min 8 characters, 1 uppercase, 1 lowercase, 1 number
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-sm font-medium mt-6">
                                    Sign Up to Become a User
                                </Button>

                                {/* Login Link */}
                                <p className="text-center text-sm text-gray-600 mt-4">
                                    Already have an account?{' '}
                                    <a href="#" className="text-gray-900 font-medium hover:underline">
                                        Log in
                                    </a>
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
