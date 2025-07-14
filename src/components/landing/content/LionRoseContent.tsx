import React from 'react';
import Image from 'next/image';
import doctorImage from '@/assets/images/hero/doctor.png';
import GlobalBg from '@/components/icons/landing/globalbg';
import VerifiedIcon from '@/components/icons/landing/VerifiedIcon';

export default function LionRoseContent() {
    const visionItems = [
        {
            number: '01',
            title: 'Direct Model',
            description: 'Manufacturer → Expert/Individual → Consumer'
        },
        {
            number: '02',
            title: 'Easy branding',
            description: 'Personal shop building & complete business system'
        },
        {
            number: '03',
            title: 'Superior sales system',
            description: 'P2P social commerce with secured payments'
        },
        {
            number: '04',
            title: 'Multi-platform',
            description: 'Ecosystem for business & entertainment'
        }
    ];

    return (
        <>
            <section className="relative bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        {/* Left Content - Doctor Image */}
                        <div className="relative flex justify-center lg:justify-start w-full h-full overflow-hidden">
                            <div className="relative w-full h-full">
                                <Image
                                    src={doctorImage}
                                    alt="Healthcare professional with headset"
                                    width={1000}
                                    height={800}
                                    className="w-full h-full object-contain rounded-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Content - Vision List */}
                        <div className="space-y-8">
                            {/* Main Title */}
                            <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                                Lion Rose Vision: Redefining{' '}
                                <span className="block">Global Commerce</span>
                            </h2>

                            {/* Vision Items */}
                            <div className="space-y-4">
                                {visionItems.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4 relative">
                                        {/* Verified Icon */}
                                        <div className="flex flex-col items-center flex-shrink-0 w-6 h-full">
                                            <VerifiedIcon className="w-6 h-6" />
                                            {index !== visionItems.length - 1 && (
                                                <div className="h-10 border-l-2 border-dashed border-gray-400 my-1"></div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-1">
                                            <div className="flex items-baseline space-x-2">
                                                <span className="text-lg font-bold text-gray-900">
                                                    {item.number}:
                                                </span>
                                                <span className="text-lg font-bold text-gray-900">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section with Global Background */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div >
                        <GlobalBg className="w-full h-auto max-w-6xl" />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Main Quote */}
                        <blockquote className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                            &ldquo;AI IS BRIDGING GLOBAL EXPERTS WITH THOSE WHO NEED THEM &mdash; SEAMLESSLY AND WITHOUT BORDERS.&rdquo;
                        </blockquote>

                        {/* Attribution */}
                        <cite className="text-xl lg:text-2xl text-gray-700 font-medium not-italic">
                            &mdash; Lion Rose &mdash;
                        </cite>
                    </div>
                </div>
            </section>
        </>
    );
}
