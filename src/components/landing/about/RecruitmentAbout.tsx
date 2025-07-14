import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import rcgroup from '@/assets/images/temp/rcgroup.png';
import ethicsIcon from '@/assets/images/icon/ethics_9077938.png';
import progressIcon from '@/assets/images/icon/progress_10227685.png';
import businessIcon from '@/assets/images/icon/business_1652001.png';

const RecruitmentAbout = () => {
    const collaborativePoints = [
        "Regular brainstorming sessions and team syncs",
        "Cross-departmental projects for broader learning",
        "Celebrating cultural and national holidays together"
    ];

    const culturePillars = [
        {
            id: 1,
            icon: ethicsIcon,
            title: "Work-Life Balance",
            description: "We prioritize wellness by offering flexible work schedules and vacation policies, ensuring our team can recharge, spend time with family, and pursue personal passions."
        },
        {
            id: 2,
            icon: progressIcon,
            title: "Professional Growth",
            description: "From skill-building workshops to mentorship programs and international exchange opportunities, we invest in your development every step of the way."
        },
        {
            id: 3,
            icon: businessIcon,
            title: "Diversity & Inclusion",
            description: "We value diverse voices and experiences. Our inclusive workplace welcomes everyone, fostering mutual respect and collaboration across cultures and identities."
        }
    ];

    return (
        <section className=" py-16 lg:py-24" style={{ backgroundColor: "#F8F8F8" }}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center text-blue-600  px-4 py-2 rounded-full text-xl font-medium mb-6">
                        Our Culture
                    </div>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                        <span className="text-red-500">Work Culture</span> in Strongbody
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience a unique blend of global standards and local traditions that make working at Strongbody special.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Image */}
                    <div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={rcgroup}
                                alt="Team celebrating success with raised hands - Collaborative Environment"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                            Collaborative Environment
                        </h3>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            At Strongbody, collaboration is more than just a buzzword—it&apos;s a way of life. We encourage open communication, cross-team synergy, and shared goals to foster creativity and innovation.
                        </p>

                        <div className="space-y-4">
                            {collaborativePoints.map((point, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-0.5">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Culture Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {culturePillars.map((pillar) => {
                        return (
                            <div
                                key={pillar.id}
                                className="p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
                                style={{ backgroundColor: "#FFFFFF" }}
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-sm"
                                        style={{ backgroundColor: "#E9EAEC" }}
                                    >
                                        <Image
                                            src={pillar.icon}
                                            alt={`${pillar.title} icon`}
                                            width={32}
                                            height={32}
                                            className="w-8 h-8"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RecruitmentAbout;
