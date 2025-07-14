import React from 'react';
import { Flag, Heart, Eye } from 'lucide-react';

const RecruitmentFeature = () => {
    const values = [
        {
            id: 1,
            icon: Flag,
            title: "Our Mission",
            description: "Building a flexible, innovative and human-centric digital health ecosystem. Promoting individual holistic development through flexible working environments and sustainable health values."
        },
        {
            id: 2,
            icon: Heart,
            title: "Our Values",
            description: "Commitment to accompany - Flexible adaptation - Unlimited creativity - Fair and transparent - Respect for human values."
        },
        {
            id: 3,
            icon: Eye,
            title: "Our Vision",
            description: "Leading the way in connecting health and technology for a sustainable world. To become a global icon for flexible and innovative health solutions."
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                        Mission - <span className="text-red-500">Core Values</span> - Vision
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                        Learn about our mission, values, and what makes us a great place to work.
                    </p>
                </div>

                {/* Values Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {values.map((value) => {
                        const IconComponent = value.icon;
                        return (
                            <div
                                key={value.id}
                                className="p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
                                style={{
                                    backgroundColor: "#F8F8F8",
                                }}
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-sm"
                                        style={{ backgroundColor: "#E9EAEC" }}
                                    >
                                        <IconComponent className="w-8 h-8 text-gray-700" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RecruitmentFeature;
