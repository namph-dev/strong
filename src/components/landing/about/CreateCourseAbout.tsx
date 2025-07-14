import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import aboutImage1 from '@/assets/images/about/4608.png';
import aboutImage2 from '@/assets/images/about/21546.png';

const CreateCourseAbout = () => {
    const benefits = [
        "Competitive salary and benefits",
        "Flexible work hours and the option to work remotely",
        "Ongoing professional development and learning opportunities",
        "A diverse, inclusive, and innovative team environment"
    ];

    return (
        <section className="bg-white py-12 lg:py-16">
            <div className="container mx-auto px-4">
                {/* About Us Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs font-medium mb-6">
                            About us
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Who We Are
                        </h2>

                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                            At StrongBody, we are driven by a mission to create innovative solutions and deliver excellent products to our global customers. Our vision is to foster a diverse and inclusive workplace where employees feel valued and empowered to reach their full potential
                        </p>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-50">
                            <Image
                                src={aboutImage1}
                                alt="Team meeting with presentation - StrongBody About Us"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Work Culture Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-50">
                            <Image
                                src={aboutImage2}
                                alt="Team collaboration - StrongBody Work Culture"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs font-medium mb-6">
                            Why Work With Us?
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Our Work Culture
                        </h2>

                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                            At StrongBody, we prioritize flexibility, creativity, and professional growth. We encourage a collaborative environment where every team member has the opportunity to make a significant impact. Whether you are working from home or in the office, we ensure that all our employees feel supported, valued, and inspired to do their best work.
                        </p>

                        <div className="mb-4">
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                                Benefits of Joining Us:
                            </h3>
                        </div>

                        <div className="space-y-2">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-2.5 mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateCourseAbout;
