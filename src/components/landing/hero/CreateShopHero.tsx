import React from 'react';
import Image from 'next/image';
import shopman from '@/assets/images/hero/shopman.png';

const CreateShopHero = () => {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#F7F6F4' }}>
            <div className="container mx-auto px-4 py-16 lg:py-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 lg:pr-8">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            <span className="block whitespace-nowrap">
                                Turn Your <span className="text-red-500">Expertise</span>
                            </span>
                            <span className="block whitespace-nowrap">
                                into a Global Business
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                            Create a Personal Shop - Custom Design for Professionals
                        </p>

                        <div className="pt-4">
                            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                                Create a shop now
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:h-[500px] xl:h-[600px] hidden lg:flex justify-center lg:justify-end items-end">
                        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                            <Image
                                src={shopman}
                                alt="Professional man with stethoscope"
                                width={500}
                                height={600}
                                className="object-bottom object-contain w-full h-auto scale-110 lg:scale-125"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateShopHero;
