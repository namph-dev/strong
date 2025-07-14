import React from 'react';
import { Globe, DollarSign, Award } from 'lucide-react';

const CreateCourseFeature = () => {
    const features = [
        {
            id: 1,
            icon: Globe,
            title: "Global customers",
            description: "A platform that helps you sell knowledge across borders through a global translation tool",
            isHighlighted: false
        },
        {
            id: 2,
            icon: DollarSign,
            title: "Low cost",
            description: "Very cheap 20% connection fee, only $15 when creating 2 or more courses/ month",
            isHighlighted: true
        },
        {
            id: 3,
            icon: Award,
            title: "Professional",
            description: "For professionals who want to create a course and have an existing course elsewhere",
            isHighlighted: false
        }
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className={`p-8 rounded-lg transition-all duration-300 cursor-pointer ${feature.isHighlighted
                                    ? 'bg-blue-500 text-white shadow-xl'
                                    : 'bg-white text-gray-900 shadow-md hover:shadow-lg'
                                    }`}
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div
                                        className={`w-14 h-14 rounded-lg flex items-center justify-center ${feature.isHighlighted
                                            ? 'bg-white/20'
                                            : 'bg-blue-500'
                                            }`}
                                    >
                                        <IconComponent
                                            className={`w-7 h-7 ${feature.isHighlighted ? 'text-white' : 'text-white'
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-4">
                                    {feature.title}
                                </h3>

                                {/* Divider */}
                                <div
                                    className={`w-12 h-0.5 mb-4 ${feature.isHighlighted ? 'bg-white/30' : 'bg-red-400'
                                        }`}
                                />

                                {/* Description */}
                                <p
                                    className={`text-sm leading-relaxed ${feature.isHighlighted ? 'text-white/90' : 'text-gray-600'
                                        }`}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CreateCourseFeature;
