'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 'hiring-process',
        question: 'What is the hiring process like?',
        answer: 'Our hiring process typically involves an initial application review, followed by 1-2 interviews with the hiring team and possibly a skills assessment. The entire process usually takes 2-3 weeks, and we strive to keep candidates informed at every step.'
    },
    {
        id: 'relocation',
        question: 'Do you offer relocation assistance?',
        answer: 'Yes, we provide comprehensive relocation assistance for eligible positions. This includes moving expense reimbursement, temporary housing assistance, and support with visa/work permit processes for international candidates. Our HR team will work with you to create a customized relocation plan.'
    },
    {
        id: 'working-hours',
        question: 'What are the working hours?',
        answer: 'We offer flexible working hours to support work-life balance. Our core hours are typically 9 AM to 5 PM in your local timezone, but we understand that flexibility is important. Many of our team members work hybrid or fully remote schedules that fit their personal needs and productivity patterns.'
    },
    {
        id: 'career-advancement',
        question: 'Is there opportunity for career advancement?',
        answer: 'Absolutely! We believe in promoting from within and supporting our employees\' professional growth. We offer regular performance reviews, mentorship programs, skills development opportunities, and clear career progression paths. Many of our current leaders started in entry-level positions and grew with the company.'
    }
];

const RecruitmentFAQ = () => {
    const [openItem, setOpenItem] = useState<string | null>('hiring-process');

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about working at Strongbody in [Country Name].
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3">
                        {faqData.map((item) => (
                            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
                                {/* Question Header */}
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                                        {item.question}
                                    </h3>
                                    <div className="flex-shrink-0 ml-3">
                                        {openItem === item.id ? (
                                            <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Minus className="w-3.5 h-3.5 text-white" />
                                            </div>
                                        ) : (
                                            <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Plus className="w-3.5 h-3.5 text-white" />
                                            </div>
                                        )}
                                    </div>
                                </button>

                                {/* Answer Content */}
                                {openItem === item.id && (
                                    <div className="px-4 pb-4 border-t border-gray-100">
                                        <div className="pt-3">
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecruitmentFAQ;
