import React from 'react';
import Image from 'next/image';
import platformPowerImage from '@/assets/images/hero/platformpower.png';

export default function LionRoseAbout() {
    return (
        <section className="relative bg-white py-16 lg:py-24">
            <div className="container mx-auto px-7">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content - Platform Power Graphic */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative">
                            <Image
                                src={platformPowerImage}
                                alt="Platform Power"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Content - Platform Features */}
                    <div className="space-y-8">
                        {/* Main Title */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            StrongBody.ai:{' '}
                            <span className="block">Platform Power</span>
                        </h2>

                        {/* For Business Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900">
                                For Business
                            </h3>
                            <ul className="space-y-1">
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Instant Personal Shop</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Business Management Suite</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Young Creator Training System</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Publisher Network</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Global Logistics Integration</span>
                                </li>
                            </ul>
                        </div>

                        {/* For Users Section */}
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-gray-900">
                                For Users
                            </h3>
                            <ul className="space-y-1">
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Secure Shopping Experience</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Social Entertainment Features</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Multimedia Platform</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-lg">Reward System</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
