'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQSection {
    id: string;
    title: string;
    items: FAQItem[];
}

const faqSections: FAQSection[] = [
    {
        id: 'registration',
        title: 'Registration & Store Setup',
        items: [
            {
                id: 'registration-1',
                question: 'How do I become a seller on the platform?',
                answer: 'You need to register an account, verify your personal/business information, and submit an approval request. Once approved, you can set up your store and list products.'
            },
            {
                id: 'registration-2',
                question: 'Is there a fee to register as a seller?',
                answer: 'Currently, seller account registration is free. However, the platform charges a service fee (commission) on successful transactions.'
            },
            {
                id: 'registration-3',
                question: 'What documents are required for verification?',
                answer: 'Individuals: ID card/citizen ID, bank account details.'
            }
        ]
    },
    {
        id: 'product',
        title: 'Product & Order Management',
        items: [
            {
                id: 'product-1',
                question: 'How do I add products to my store?',
                answer: 'Once your seller account is approved, you can add products through your seller dashboard. Upload product images, descriptions, pricing, and inventory details.'
            },
            {
                id: 'product-2',
                question: 'Can I manage multiple product categories?',
                answer: 'Yes, you can list products across multiple categories and manage them all from your seller dashboard.'
            },
            {
                id: 'product-3',
                question: 'How do I track orders and inventory?',
                answer: 'Our platform provides real-time order tracking and inventory management tools in your seller dashboard.'
            }
        ]
    },
    {
        id: 'fees',
        title: 'Fees & Payments',
        items: [
            {
                id: 'fees-1',
                question: 'What commission does the platform charge?',
                answer: 'The platform charges a competitive commission rate on successful sales. Detailed fee structure is available in your seller agreement.'
            },
            {
                id: 'fees-2',
                question: 'When and how do I receive payments?',
                answer: 'Payments are processed and transferred to your registered bank account according to the payment schedule outlined in your seller agreement.'
            },
            {
                id: 'fees-3',
                question: 'Are there any additional fees?',
                answer: 'Apart from commission, there may be payment processing fees depending on the payment method used by customers.'
            }
        ]
    },
    {
        id: 'shipping',
        title: 'Shipping & Support',
        items: [
            {
                id: 'shipping-1',
                question: 'Who handles shipping and delivery?',
                answer: 'Sellers are responsible for shipping their products. You can choose your preferred shipping partners or use our recommended logistics providers.'
            },
            {
                id: 'shipping-2',
                question: 'What support is available for sellers?',
                answer: 'We provide 24/7 seller support, including help with account setup, product listing, order management, and technical issues.'
            },
            {
                id: 'shipping-3',
                question: 'How do I handle returns and refunds?',
                answer: 'Returns and refunds are handled according to your store policy and platform guidelines. We provide tools to manage these processes efficiently.'
            }
        ]
    },
    {
        id: 'policies',
        title: 'Other Policies',
        items: [
            {
                id: 'policies-1',
                question: 'What are the platform\'s selling policies?',
                answer: 'All sellers must comply with our community guidelines, product quality standards, and legal requirements. Detailed policies are available in your seller handbook.'
            },
            {
                id: 'policies-2',
                question: 'Can my account be suspended?',
                answer: 'Accounts may be suspended for violations of platform policies, poor performance metrics, or customer complaints. We provide warnings and guidance before any suspension.'
            },
            {
                id: 'policies-3',
                question: 'How do I appeal account decisions?',
                answer: 'You can submit an appeal through your seller dashboard or contact our support team directly with relevant documentation.'
            }
        ]
    },
    {
        id: 'payment-methods',
        title: 'Payment Methods & Stripe Integration',
        items: [
            {
                id: 'payment-1',
                question: 'What payment methods are supported?',
                answer: 'We support major credit cards, debit cards, PayPal, and other digital payment methods through our Stripe integration.'
            },
            {
                id: 'payment-2',
                question: 'How secure are the payment transactions?',
                answer: 'All payments are processed through Stripe, which provides bank-level security and PCI compliance for all transactions.'
            },
            {
                id: 'payment-3',
                question: 'Can customers pay in different currencies?',
                answer: 'Yes, our platform supports multiple currencies and automatic currency conversion for international customers.'
            }
        ]
    }
];

const CreateShopFAQ = () => {
    const [openSection, setOpenSection] = useState<string | null>('registration');
    const [openItem, setOpenItem] = useState<string | null>('registration-1');

    const toggleSection = (sectionId: string) => {
        if (openSection === sectionId) {
            setOpenSection(null);
            setOpenItem(null);
        } else {
            setOpenSection(sectionId);
            // Open first item of the section by default
            const section = faqSections.find(s => s.id === sectionId);
            if (section && section.items.length > 0) {
                setOpenItem(section.items[0].id);
            }
        }
    };

    const toggleItem = (itemId: string) => {
        setOpenItem(openItem === itemId ? null : itemId);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        FAQ – Frequently Asked Questions<span className="text-red-500">?</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqSections.map((section) => (
                        <div key={section.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            {/* Section Header */}
                            <div
                                onClick={() => toggleSection(section.id)}
                                className={`flex items-center justify-between p-6 cursor-pointer transition-all duration-300 ${openSection === section.id
                                    ? 'bg-gray-50 border-b border-gray-200'
                                    : 'hover:bg-gray-50'
                                    }`}
                            >
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {section.title}
                                </h3>
                                <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    {openSection === section.id ? (
                                        <X className="w-5 h-5 text-gray-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    )}
                                </button>
                            </div>

                            {/* Section Content */}
                            {openSection === section.id && (
                                <div className="bg-white">
                                    {section.items.map((item, index) => (
                                        <div key={item.id} className={`${index !== 0 ? 'border-t border-gray-100' : ''}`}>
                                            {/* Question */}
                                            <div
                                                onClick={() => toggleItem(item.id)}
                                                className={`flex items-center justify-between p-4 pl-8 cursor-pointer transition-all duration-300 ${openItem === item.id
                                                    ? 'bg-blue-50'
                                                    : 'hover:bg-gray-50'
                                                    }`}
                                            >
                                                <h4 className="text-base font-medium text-gray-800">
                                                    {item.question}
                                                </h4>
                                                <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                                    {openItem === item.id ? (
                                                        <X className="w-4 h-4 text-gray-600" />
                                                    ) : (
                                                        <Plus className="w-4 h-4 text-gray-600" />
                                                    )}
                                                </button>
                                            </div>

                                            {/* Answer */}
                                            {openItem === item.id && (
                                                <div className="px-8 pb-4">
                                                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                                                        <p className="text-gray-600 leading-relaxed">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreateShopFAQ;
