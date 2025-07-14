import React from 'react';
import Image from 'next/image';
import shopgirl from '@/assets/images/temp/shopgirl.png';
import circleshop from '@/assets/images/temp/circleshop.png';

const CreateShopFeature = () => {
    return (
        <>
            <section className="bg-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-2">
                        {/* Left Image */}
                        <div className="relative order-2 lg:order-1" style={{ maxWidth: '350px' }}>
                            {/* Gradient overlay block - positioned at top left */}
                            <div
                                className="absolute w-24 h-24 lg:w-28 lg:h-28 rounded-2xl z-10 opacity-60"
                                style={{
                                    top: '-30px',
                                    left: '-30px',
                                    background: `radial-gradient(121.27% 123.79% at 19.26% 98.79%, #0099FF 0%, #A033FF 60.98%, #FF5280 93.48%, #FF7061 100%)`
                                }}
                            />

                            {/* Main image */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={shopgirl}
                                    alt="Professional woman working on laptop"
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-6 lg:pl-3 order-1 lg:order-2 mb-8 lg:mb-0">
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
                                Are You Missing a System to Convert Your Followers into Paying Clients?
                            </h2>

                            <div className="space-y-4 text-gray-600">
                                <p className="text-lg leading-relaxed">
                                    As an expert sharing valuable content on social media, you need more than just
                                    engagement - you need sales.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    StrongBodyAI gives you a professional shop profile where you can list your services,
                                    showcase expertise, and turn your knowledge into income.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sell Services and Products Section */}
            <section className=" py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
                                Sell Services and Products Smartly
                            </h2>

                            <div className="space-y-4 text-gray-600">
                                <p className="text-lg leading-relaxed">
                                    In the digital age, customers are not just looking for products - they are
                                    seeking experiences, personalization, and long-term value.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    With this foundation, you can seamlessly combine professional services and
                                    digital products to create comprehensive solutions that help customers
                                    achieve real results while also increasing sustainable revenue for yourself.
                                </p>
                            </div>

                            <div className="pt-4">
                                <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                                    Create a shop now
                                </button>
                            </div>
                        </div>

                        {/* Right Services Grid */}
                        <div className="relative">
                            {/* Top Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Service Card 1 */}
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <div className="mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={circleshop}
                                                alt="Service icon"
                                                fill
                                                className="object-cover"
                                                sizes="48px"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Create a Personalized Treatment Plan for Each Client
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Build a weekly/monthly roadmap tailored to each target group
                                    </p>
                                </div>

                                {/* Service Card 2 */}
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 md:mt-8">
                                    <div className="mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={circleshop}
                                                alt="Service icon"
                                                fill
                                                className="object-cover"
                                                sizes="48px"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Sell Online Courses with One-on-One Live Consultation
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Increase value by including a personal consultation.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Service Card 3 */}
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 md:ml-8">
                                    <div className="mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={circleshop}
                                                alt="Service icon"
                                                fill
                                                className="object-cover"
                                                sizes="48px"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Combine Digital Products with Accompanying Services
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Plan templates (meal plan, workout plan, business roadmap)
                                    </p>
                                </div>

                                {/* Service Card 4 */}
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <div className="mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={circleshop}
                                                alt="Service icon"
                                                fill
                                                className="object-cover"
                                                sizes="48px"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Offer Flexible Service Options: One-Time, Monthly, or Therapy Packages.
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Boost professionalism and foster long-term client retention.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CreateShopFeature;
