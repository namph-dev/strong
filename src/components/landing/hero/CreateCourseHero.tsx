import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import heroImage from '@/assets/images/hero/4169.png';
import PatternSVG from '@/components/icons/landing/pattern';

const CreateCourseHero = () => {
    return (
        <section className="bg-white pt-20 lg:pt-24 pb-12 lg:pb-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 mt-5">
                        Create Your Own Course With
                        <br />
                        <span className="text-gray-800">Strongbodyai</span>
                        <Copy className="inline-block ml-2 w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
                    </h1>
                    <p className="text-lg lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Global Knowledge Selling Platform – Low Fees – Professional
                    </p>
                    <Button
                        size="default"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium cursor-pointer"
                    >
                        Get Started Now
                    </Button>
                </div>

                {/* Hero Image */}
                <div className="relative max-w-8xl mx-auto">
                    {/* Pattern Top Left */}
                    <div className="absolute -top-10 -left-10 z-10">
                        <PatternSVG className="w-32 h-32 lg:w-40 lg:h-40" />
                    </div>

                    {/* Pattern Bottom Right */}
                    <div className="absolute -bottom-10 -right-10 z-10">
                        <PatternSVG className="w-32 h-32 lg:w-40 lg:h-40" />
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-xl relative z-20">
                        <Image
                            src={heroImage}
                            alt="Create Your Own Course - Team presentation with analytics dashboard"
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateCourseHero;
