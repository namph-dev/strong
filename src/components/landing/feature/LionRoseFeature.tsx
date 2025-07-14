import React from 'react';
import ThreeLineIcon from '@/components/icons/landing/threeline';

export default function LionRoseFeature() {
    return (
        <section className="relative py-16 lg:py-24" style={{ backgroundColor: '#E4F4FF' }}>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content - Title */}
                    <div className="space-y-6">
                        {/* Decorative Icon */}
                        <div className="mb-2">
                            <ThreeLineIcon className="w-16 h-20" />
                        </div>

                        {/* Main Title */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            The Future of Health: Why Online Services Are{' '}
                            <span className="text-red-500">the Next Big Thing.</span>
                        </h2>
                    </div>

                    {/* Right Content - Statistics */}
                    <div className="space-y-8">
                        {/* Statistic 1 */}
                        <div className="border-b border-gray-300 pb-6">
                            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                75% of healthcare visits
                            </div>
                            <div className="text-gray-600 text-base">
                                Expected to be virtual by 2030
                            </div>
                        </div>

                        {/* Statistic 2 */}
                        <div className="border-b border-gray-300 pb-6">
                            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                $559.52 billion
                            </div>
                            <div className="text-gray-600 text-base">
                                Global Telehealth Market Expected to Reach 2027
                            </div>
                        </div>

                        {/* Statistic 3 */}
                        <div className="pb-2">
                            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                38% faster
                            </div>
                            <div className="text-gray-600 text-base">
                                Patients using digital healthcare services have faster recovery rates
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
