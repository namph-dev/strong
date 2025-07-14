import React from 'react';
import Image from 'next/image';
import groupmobile from '@/components/icons/landing/groupmobile.svg';
import shopbg from '@/components/icons/landing/bg/shopbg.png';

const CreateShopContent = () => {
    return (
        <section
            className="relative py-12 lg:py-16 overflow-hidden"
            style={{
                backgroundImage: `url(${shopbg.src})`,
                backgroundPosition: 'bottom left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
                backgroundColor: '#FAFAFA'
            }}

        >
            <div className="absolute inset-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12">
                    {/* Left Content - Mobile Mockup with User Avatars */}
                    <div className="w-full lg:w-1/2 lg:flex-shrink-0">
                        <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
                            <Image
                                src={groupmobile}
                                alt="Mobile app interface with user profiles"
                                className="w-full h-auto object-contain"
                                priority
                                sizes="(max-width: 768px) 320px, 400px"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-gray-900 mb-4">
                            Connecting Customers from 194 Countries
                        </h2>

                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                            You are building a brand with global reach. We provide you with a powerful
                            platform that helps expand your professional services beyond geographical
                            boundaries, reaching customers anywhere in the world.
                        </p>
                    </div>
                </div>

                {/* Three Features Section */}
                <div className="container mx-auto px-4 mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                                Automated international payments
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We support most popular global payment gateways such as Stripe, PayPal, credit cards,
                                and many local methods.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                                Multilingual interface, personalized experience
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The smart platform auto-displays content in the visitor&apos;s language, boosting
                                trust and conversions.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                                Comprehensive integration for global services
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Local timezone scheduling, automated email system, along with live chat functionality,
                                reminders, post-sale care, and upselling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateShopContent;
