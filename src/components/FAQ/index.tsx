import { getListFAQ } from "@/api/faq";
import FaqItem from "./FaqItem";
import type { FAQ, FAQResponse, FAQProps } from "@/types/faq";

export default async function FAQ({
    title = "Frequently Asked Questions",
    description = "Find answers to common questions about working at Strongbody in [Country Name].",
    categoryId,
    limit = 10,
    className = "",
    keyword
}: FAQProps) {
    try {
        // Fetch FAQ data using server side rendering
        const params: any = {
            limit,
            order_by: "order",
            order_dir: "asc" as const
        };

        // Add category filter if provided
        if (categoryId) {
            params.category_id = categoryId;
        }

        // Add keyword filter if provided
        if (keyword) {
            params.keyword = keyword;
        }

        const faqData: FAQResponse = await getListFAQ(params);

        if (!faqData || !faqData.data || !Array.isArray(faqData.data)) {
            console.warn("FAQ data is not in expected format:", faqData);
            return (
                <section className={`py-16 bg-white ${className}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                <span className="text-red-500">?</span> {title}
                            </h2>
                            {description && (
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    {description}
                                </p>
                            )}
                            {keyword && (
                                <p className="text-sm text-gray-500 mt-2">
                                    Searching for: &quot;{keyword}&quot;
                                </p>
                            )}
                        </div>
                        <div className="text-center text-gray-500">
                            No frequently asked questions available at the moment.
                        </div>
                    </div>
                </section>
            );
        }

        // Filter only active FAQs
        const activeFAQs = faqData.data.filter(faq => faq.is_active);

        if (activeFAQs.length === 0) {
            return (
                <section className={`py-16 bg-white ${className}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                <span className="text-red-500">?</span> {title}
                            </h2>
                            {description && (
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    {description}
                                </p>
                            )}
                            {keyword && (
                                <p className="text-sm text-gray-500 mt-2">
                                    Searching for: &quot;{keyword}&quot;
                                </p>
                            )}
                        </div>
                        <div className="text-center text-gray-500">
                            {keyword
                                ? `No frequently asked questions found for "${keyword}".`
                                : "No frequently asked questions available at the moment."
                            }
                        </div>
                    </div>
                </section>
            );
        }

        return (
            <section className={`py-16 bg-white ${className}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            <span className="text-red-500">?</span> {title}
                        </h2>
                        {description && (
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                {description}
                            </p>
                        )}
                        {keyword && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">
                                    Searching for: &quot;{keyword}&quot;
                                </p>
                                <p className="text-sm text-blue-600 font-medium">
                                    Found {activeFAQs.length} result{activeFAQs.length !== 1 ? 's' : ''}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        {activeFAQs.map((faq, index) => (
                            <FaqItem
                                key={faq.id}
                                id={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                value={faq.slug}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Error in FAQ component:", error);

        return (
            <section className={`py-16 bg-white ${className}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            <span className="text-red-500">?</span> {title}
                        </h2>
                        {description && (
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                {description}
                            </p>
                        )}
                        {keyword && (
                            <p className="text-sm text-gray-500 mt-2">
                                Searching for: &quot;{keyword}&quot;
                            </p>
                        )}
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-red-600 font-medium">
                            Failed to load FAQ data. Please try again later.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
