'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: '01',
        question: 'Do I need technical skills to create a course?',
        answer: 'No! Strongbodyal is extremely user-friendly. You can create and launch your course with simple drag-and-drop actions — no coding needed.'
    },
    {
        id: '02',
        question: 'How much does it cost to use the platform?',
        answer: 'You can pay $10/month for more courses plus a low 20% commission for payouts — one of the most affordable fees available.'
    },
    {
        id: '03',
        question: 'Can I sell my course to international students?',
        answer: 'Yes! Thanks to automatic translation tools, you can easily reach students from all over the world.'
    },
    {
        id: '04',
        question: 'How will I get paid?',
        answer: 'Payments are transferred directly to your linked bank account or via global gateways like PayPal or Stripe.'
    },
    {
        id: '05',
        question: 'Can I update my course after it\'s published?',
        answer: 'Definitely! You can add, add new content, or update your course anytime — keeping it fresh and valuable for students.'
    }
];

const CreateCourseFAQ = () => {
    const [openItem, setOpenItem] = useState<string | null>('01');

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        <span className="text-red-500">?</span> FAQ – Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqData.map((item) => (
                        <div key={item.id} className="bg-white">
                            {/* Question Item */}
                            <div
                                onClick={() => toggleItem(item.id)}
                                className={`flex items-center justify-between p-6 cursor-pointer transition-all duration-300 rounded-lg border ${openItem === item.id
                                    ? 'bg-purple-50 border-purple-200'
                                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center space-x-6">
                                    <span className="text-2xl font-bold text-gray-900 min-w-[3rem]">
                                        {item.id}
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {item.question}
                                    </h3>
                                </div>

                                <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    {openItem === item.id ? (
                                        <X className="w-5 h-5 text-gray-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    )}
                                </button>
                            </div>

                            {/* Answer */}
                            {openItem === item.id && (
                                <div className="px-6 pb-6 pt-2">
                                    <div className="flex space-x-6">
                                        <span className="text-2xl font-bold text-transparent min-w-[3rem]">
                                            {item.id}
                                        </span>
                                        <div className="flex-1">
                                            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <h4 className="text-base font-semibold text-gray-900 mb-3">
                                                            {item.question}
                                                        </h4>
                                                        <p className="text-gray-600 leading-relaxed">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={() => setOpenItem(null)}
                                                        className="ml-4 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreateCourseFAQ;
