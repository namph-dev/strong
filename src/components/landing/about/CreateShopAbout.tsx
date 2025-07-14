import React from 'react';
import Image from 'next/image';
import shopphone from '@/assets/images/temp/shopphone.png';

const CreateShopAbout = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content - Phone Image */}
                    <div className="relative flex-shrink-0">
                        <div className="relative max-w-md">
                            <Image
                                src={shopphone}
                                alt="StrongBodyAI mobile app with money and stethoscope"
                                width={400}
                                height={500}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                            What Can You Do With StrongBodyAI?
                        </h2>

                        {/* Features List */}
                        <div className="space-y-6">
                            {/* Feature 1 - Global Connection */}
                            <div className="border-l-4 border-red-500 pl-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Global Connection
                                </h3>
                                <div className="space-y-2 text-gray-600">
                                    <p className="text-sm">
                                        With StrongBodyAI, you can seamlessly connect with clients from around the world.
                                    </p>
                                    <p className="text-sm">
                                        • 1:1 Communication: Engage in real-time, one-on-one conversations with
                                        customers across the globe, allowing you to build personalized connections
                                        regardless of location.
                                    </p>
                                    <p className="text-sm">
                                        • Community Building: Establish and nurture your own international client
                                        community, fostering a sense of belonging and loyalty among your audience.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 - All-In-One Platform */}
                            <div className="border-l-4 border-gray-400 pl-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    All-In-One Platform
                                </h3>
                            </div>

                            {/* Feature 3 - Reasonable Pricing */}
                            <div className="border-l-4 border-gray-400 pl-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Reasonable Pricing
                                </h3>
                            </div>

                            {/* Feature 4 - Social Media Integration */}
                            <div className="border-l-4 border-gray-400 pl-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Social Media Integration
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateShopAbout;
