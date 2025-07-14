import React from 'react';
import Image from 'next/image';
import { Heart, Clock, Calendar, User, FileText, Clipboard } from 'lucide-react';
import handsrc from '@/assets/images/temp/handsrc.png';
import rectangle from '@/assets/images/temp/Rectangle.png';
import icon66 from '@/assets/images/icon/66.png';

const RecruitmentContent = () => {
    const benefits = [
        {
            id: 1,
            icon: Heart,
            title: "Comprehensive Healthcare",
            description: "Medical, dental, and vision insurance for you and your dependents, tailored to [Country Name]'s healthcare system."
        },
        {
            id: 2,
            icon: Clock,
            title: "Flexible Work Arrangements",
            description: "Choose to work remotely, in-office, or a hybrid approach based on your role and preferences."
        },
        {
            id: 3,
            icon: Calendar,
            title: "Generous Time Off",
            description: "Paid vacation days, local holidays, and personal days to ensure you stay refreshed and balanced."
        },
        {
            id: 4,
            icon: User,
            title: "Learning & Development",
            description: "Professional development budgets, training programs, and opportunities to learn new skills."
        },
        {
            id: 5,
            icon: FileText,
            title: "Retirement Plans",
            description: "Competitive retirement savings plans with company matching contributions in accordance with local regulations."
        },
        {
            id: 6,
            icon: Clipboard,
            title: "Wellness Programs",
            description: "Access to fitness memberships, wellness resources, and mental health support tailored to your location."
        }
    ];

    return (
        <>
            {/* Benefits & Perks Section with Background Image */}
            <section className="relative py-12 lg:py-16">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src={handsrc}
                        alt="Team hands coming together - Benefits and Perks background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4">
                            Benefits & Perks
                        </h2>
                        <p className="text-base lg:text-lg text-white/90 max-w-3xl mx-auto">
                            See what makes working at Strongbody in [Country Name] special.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {benefits.map((benefit) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div
                                    key={benefit.id}
                                    className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    {/* Icon */}
                                    <div className="mb-4 flex justify-center">
                                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                            <IconComponent className="w-6 h-6 text-gray-700 flex-shrink-0" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 text-center">
                                        {benefit.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed text-center text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Meet Your Future Teammates Section - Separate White Background */}
            <section className="bg-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                            Meet Your Future <span className="text-red-500">Teammates</span>
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from our employees about their experiences working at Strongbody in [Country Name].
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Testimonial 1 - Sarah Chen */}
                        <div className="relative bg-gray-50 rounded-2xl p-8 pt-12 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={icon66}
                                        alt="Quote icon"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 leading-relaxed mb-8 italic">
                                &ldquo;Working at Strongbody has been an incredible journey. The company truly values work-life balance and provides amazing opportunities for growth.&rdquo;
                            </p>

                            {/* Employee Info */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                    <Image
                                        src={rectangle}
                                        alt="Sarah Chen profile picture"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Sarah Chen</h4>
                                    <p className="text-sm text-gray-600">Senior Product Manager, 3 years</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 - Marcus Johnson */}
                        <div className="relative bg-gray-50 rounded-2xl p-8 pt-12 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={icon66}
                                        alt="Quote icon"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 leading-relaxed mb-8 italic">
                                &ldquo;As a remote employee, I&apos;ve never felt disconnected from the team. Strongbody has created a collaborative culture that transcends physical boundaries.&rdquo;
                            </p>

                            {/* Employee Info */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                    <Image
                                        src={rectangle}
                                        alt="Marcus Johnson profile picture"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Marcus Johnson</h4>
                                    <p className="text-sm text-gray-600">Software Engineer, 2 years</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 - Elena Rodriguez */}
                        <div className="relative bg-gray-50 rounded-2xl p-8 pt-12 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={icon66}
                                        alt="Quote icon"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 leading-relaxed mb-8 italic">
                                &ldquo;I started as a freelancer and was eventually hired full-time. Strongbody values talent and provides clear paths for career advancement regardless of your work arrangement.&rdquo;
                            </p>

                            {/* Employee Info */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                    <Image
                                        src={rectangle}
                                        alt="Elena Rodriguez profile picture"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Elena Rodriguez</h4>
                                    <p className="text-sm text-gray-600">UX Designer, 4 years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecruitmentContent;
