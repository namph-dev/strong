import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import GlobalIcon from '@/components/icons/landing/global';
import LionIcon from '@/components/icons/landing/lion';

export default function LionRoseHero() {
    return (
        <>
            <section className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden">
                {/* Background Global Icon */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute right-0 sm:-right-1/3 lg:-right-1/7 xl:-right-1/20 top-1/2 -translate-y-1/2 w-[50vw] sm:w-[120vw] lg:w-[100vw] xl:w-[65vw] max-w-none">
                        <GlobalIcon className="w-full h-auto" />
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex items-center min-h-[calc(100vh-4rem)] sm:min-h-[80vh]">
                        {/* Content */}
                        <div className="w-2/3 lg:w-1/2 xl:w-2/5 space-y-6 sm:space-y-8 pb-8 sm:pb-12 lg:pb-25">
                            {/* Subtitle */}
                            <div className="flex items-center space-x-3">
                                <span className="text-gray-600 text-sm sm:text-base lg:text-lg">
                                    A Holistic Journey to a Better You
                                </span>
                            </div>

                            {/* Main Title */}
                            <div className="space-y-3 sm:space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                                    Lion Rose
                                </h1>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed">
                                    <span className="text-gray-400 font-bold">&ldquo;Going global is{' '}</span>
                                    <span className="font-bold text-gray-900">not difficult.&rdquo;</span>
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="flex items-start space-x-4">
                                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-full lg:max-w-md">
                                    We are the leading global Healthcare agency, building
                                    enterprise content platforms and providing digital
                                    consultancy since 2011.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-2 sm:pt-4">
                                <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal text-base sm:text-lg transition-all duration-300 group w-full sm:w-auto">
                                    Get in touch
                                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-pink-100 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
            </section>

            {/* New Section - Lion Rose Introduction */}
            <section className="relative bg-white py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                        {/* Left Content - Lion Character */}
                        <div className="relative flex justify-center lg:justify-start order-first lg:order-first">
                            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
                                <LionIcon className="w-full h-auto" />
                            </div>
                        </div>

                        {/* Right Content - Text */}
                        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                            {/* Main Title */}
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                                Lion Rose here, Founder of{' '}
                                <span className="text-red-600">StrongBody.ai</span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-4 sm:space-y-6">
                                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                                    I&apos;m building borderless healthcare for tomorrow, connecting 400+ partners
                                    and 100,000+ experts across 167 countries. Your expertise deserves a global
                                    audience – and we make it simple. Launch your worldwide practice instantly,
                                    serve clients in 100+ languages, right from where you are. All you need is your
                                    expertise – we handle everything else. Want to learn more? Grab my book
                                    &ldquo;The Global Healthcare Revolution&rdquo; or simply sign up today for a free digital
                                    copy. Let&apos;s go global together
                                </p>
                            </div>

                            {/* CTA Link */}
                            <div className="pt-2 sm:pt-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center lg:justify-start text-gray-900 hover:text-red-600 font-medium text-base sm:text-lg transition-colors duration-300 group"
                                >
                                    See if we are in network with your issue
                                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
