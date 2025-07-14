import React from 'react';
import Image from 'next/image';
import recruitmentImage from '@/assets/images/hero/recruitment.png';

const RecruitmentHero = () => {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 lg:pr-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="block">
                                    Join <span className="text-red-500">Strongbody</span>&apos;s
                                </span>
                                <span className="block">
                                    Global Team
                                </span>
                            </h1>

                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md">
                                Flexible online, offline, freelance job opportunities...
                                Develop your career with one of the fastest growing
                                communities in the world.
                            </p>

                            <div className="pt-4">
                                <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                                    Apply now
                                </button>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center lg:text-left pr-6 border-r border-gray-200">
                                <div className="text-2xl lg:text-3xl font-bold text-gray-800">24/7</div>
                                <div className="text-sm text-gray-600 mt-1">
                                    Work flexibly anytime, anywhere
                                    to fit your personal schedule.
                                </div>
                            </div>
                            <div className="text-center lg:text-left px-6 border-r border-gray-200">
                                <div className="text-2xl lg:text-3xl font-bold text-gray-800">100+</div>
                                <div className="text-sm text-gray-600 mt-1">
                                    Over 100 positions,
                                    multi-field.
                                </div>
                            </div>
                            <div className="text-center lg:text-left pl-6">
                                <div className="text-2xl lg:text-3xl font-bold text-gray-800">98%</div>
                                <div className="text-sm text-gray-600 mt-1">
                                    Members are satisfied
                                    with their career path.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with overlay */}
                    <div className="relative lg:h-[500px] xl:h-[600px] flex justify-center lg:justify-end items-center">
                        <div className="relative">


                            {/* Main image container */}
                            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full overflow-hidden">
                                <Image
                                    src={recruitmentImage}
                                    alt="Woman working on laptop - Join our global team"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>

                            {/* Job count badge */}
                            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 xl:bottom-10 xl:right-10 bg-white rounded-lg shadow-lg p-4 lg:p-5 border border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="text-xs lg:text-sm text-gray-500">Every</div>
                                        <div className="text-sm lg:text-base font-bold text-gray-800">100+ Jobs</div>
                                    </div>
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-500 rounded flex items-center justify-center">
                                        <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-sm flex items-center justify-center">
                                            <span className="text-red-500 text-sm lg:text-base font-bold">S</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecruitmentHero;
