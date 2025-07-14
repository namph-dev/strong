'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Bell, Mail, ChevronRight, Menu } from 'lucide-react';
import { useState } from 'react';
import logoSvg from '@/assets/images/resources/logo.svg';

const LionRoseHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const categories = [
        'All',
        'Medical',
        'Nutrition',
        'Fitness',
        'Mental',
        'Pharmacy',
        'Beauty',
        'Massage',
        'Baby'
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={logoSvg}
                                alt="Strong Body"
                                width={140}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-8 hidden md:block">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="What service are you looking for today?"
                                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition-colors">
                                <Search className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Icons */}
                        <div className="hidden md:flex items-center space-x-3">
                            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                                <Bell className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Login Button */}
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
                            Log In | Sign Up
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                </div>

                {/* Categories Navigation */}
                <div className="hidden md:flex items-center justify-between py-3 border-t border-gray-100">
                    <div className="flex items-center space-x-8">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${category === 'All'
                                    ? 'bg-red-600 text-white'
                                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <button className="text-gray-600 hover:text-red-600 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 bg-white">
                        {/* Mobile Search */}
                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="What service are you looking for today?"
                                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-md">
                                    <Search className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Categories */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${category === 'All'
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-600 hover:text-red-600 hover:bg-red-50 border border-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Icons */}
                        <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
                            <button className="flex flex-col items-center text-gray-600 hover:text-red-600 transition-colors">
                                <MessageSquare className="w-5 h-5 mb-1" />
                                <span className="text-xs">Messages</span>
                            </button>
                            <button className="flex flex-col items-center text-gray-600 hover:text-red-600 transition-colors">
                                <Bell className="w-5 h-5 mb-1" />
                                <span className="text-xs">Notifications</span>
                            </button>
                            <button className="flex flex-col items-center text-gray-600 hover:text-red-600 transition-colors">
                                <Mail className="w-5 h-5 mb-1" />
                                <span className="text-xs">Mail</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default LionRoseHeader;
