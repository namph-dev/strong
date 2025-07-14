"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { FAQItemProps } from "@/types/faq";

interface ExtendedFAQItemProps extends FAQItemProps {
    index: number;
}

export default function FaqItem({ id, question, answer, value, index }: ExtendedFAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleItem = () => {
        setIsOpen(!isOpen);
    };

    const displayIndex = String(index + 1).padStart(2, '0');

    return (
        <div className="bg-white mb-4">
            {/* Question Item */}
            <div
                onClick={toggleItem}
                className={`flex items-center justify-between p-6 cursor-pointer transition-all duration-300 rounded-lg border ${isOpen
                    ? 'bg-purple-50 border-purple-200'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
            >
                <div className="flex items-center space-x-6">
                    <span className="text-2xl font-bold text-gray-900 min-w-[3rem]">
                        {displayIndex}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {question}
                    </h3>
                </div>

                <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {isOpen ? (
                        <X className="w-5 h-5 text-gray-600" />
                    ) : (
                        <Plus className="w-5 h-5 text-gray-600" />
                    )}
                </button>
            </div>

            {/* Answer */}
            {isOpen && (
                <div className="px-6 pb-6 pt-2">
                    <div className="flex space-x-6">
                        <span className="text-2xl font-bold text-transparent min-w-[3rem]">
                            {displayIndex}
                        </span>
                        <div className="flex-1">
                            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div
                                            dangerouslySetInnerHTML={{ __html: answer }}
                                            className="text-gray-600 leading-relaxed prose prose-sm max-w-none prose-p:mb-3 prose-a:text-blue-500 prose-a:hover:text-blue-600 prose-strong:text-gray-700"
                                        />
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsOpen(false);
                                        }}
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
    );
}
