'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, Bell, MessageSquare, ChevronRight } from 'lucide-react';
import logoSvg from '@/assets/images/resources/logo.svg';
import changeLgIcon from '@/components/icons/landing/changelg.svg';

const CreateShopHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={logoSvg}
                                alt="StrongBody Logo"
                                width={132}
                                height={35}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Post request today?"
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors">
                            <Image src={changeLgIcon} alt="Change Language" width={20} height={20} />
                        </button>


                        {/* Login/Signup */}
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
                            Log In | Sign Up
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default CreateShopHeader; 