'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import logoSvg from '@/assets/images/resources/logo.svg';


const RecruitmentHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={logoSvg}
                                alt="Strongbody Logo"
                                width={140}
                                height={40}
                                className="h-8 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-6">
                        {/* Language Selector */}
                        <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                            <Globe className="w-5 h-5" />
                        </button>

                        {/* Apply Now Button */}
                        <Button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default RecruitmentHeader;
