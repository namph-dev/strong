'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, MoreHorizontal } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import promoImage from '@/assets/images/temp/image1.png';
import avatar1 from '@/assets/images/temp/Ellipse12.png';
import avatar2 from '@/assets/images/temp/Ellipse13.png';
import avatar3 from '@/assets/images/temp/Ellipse15.png';

const CreateCourseContent = () => {
    const brainstormingCards = [
        {
            id: 1,
            title: "Brainstorming",
            description: "Brainstorming is a group problem-solving technique that involves the spontaneous contribution of ideas from all members of the group conducted several brainstorming sessions.",
            avatars: [avatar1, avatar2, avatar3],
            comments: 12
        },
        {
            id: 2,
            title: "Brainstorming",
            description: "Brainstorming is a group problem-solving technique that involves the spontaneous contribution of ideas from all members of the group conducted several brainstorming sessions.",
            avatars: [avatar1, avatar2, avatar3],
            comments: 12
        },
        {
            id: 3,
            title: "Brainstorming",
            description: "Brainstorming is a group problem-solving technique that involves the spontaneous contribution of ideas from all members of the group conducted several brainstorming sessions.",
            avatars: [avatar1, avatar2, avatar3],
            comments: 12
        },
        {
            id: 4,
            title: "Brainstorming",
            description: "Brainstorming is a group problem-solving technique that involves the spontaneous contribution of ideas from all members of the group conducted several brainstorming sessions.",
            avatars: [avatar1, avatar2, avatar3],
            comments: 12
        }
    ];

    const steps = [
        {
            number: "1",
            title: "Register an Account",
            description: "Sign up quickly with just your email address. No complicated installations or technical knowledge required — simply create your account and you're ready to start building your course empire."
        },
        {
            number: "2",
            title: "Set Up Your Course",
            description: "Easily upload your video lessons, study materials, and interactive content. Our platform gives you full control to organize, customize, and brand your course to match your vision perfectly."
        },
        {
            number: "3",
            title: "Personalization",
            description: "Launch your course to a global audience with just one click. Set your pricing, manage enrollments, and watch your earnings grow as students around the world join your educational journey."
        }
    ];

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Create Your Course In Just 3<br />
                        Simple Steps
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        At StrongBody, we believe in fostering a work environment where
                        collaboration and innovation thrive
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="relative"
                        >
                            {/* Step Card */}
                            <div
                                className="rounded-2xl p-8 h-full relative shadow-2xl border border-gray-100"
                                style={{ backgroundColor: '#0062FF33' }}
                            >
                                {/* Step Number */}
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                                    <div
                                        className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl"
                                        style={{ backgroundColor: '#0062FF' }}
                                    >
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-8">
                                    <h3
                                        className="text-xl font-semibold mb-4"
                                        style={{ color: '#0062FF' }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Promotional Banner */}
            <div className="mt-16">
                <div
                    className="relative rounded-xl overflow-hidden max-w-7xl mx-auto"
                    style={{ backgroundColor: '#DA1F27' }}
                >
                    <div className="relative flex items-center min-h-[360px]">
                        {/* Left Content */}
                        <div className="flex-1 p-8 lg:p-12 text-white relative z-10">
                            <h3 className="text-2xl lg:text-4xl font-bold mb-4">
                                Suitable for professionals
                            </h3>
                            <p className="text-lg lg:text-xl mb-6 opacity-90">
                                Starting at just $15/month
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-2 mb-6">
                                {[
                                    "Already have a strong social media presence",
                                    "Easily create new offers and upsell opportunities",
                                    "No complexity, simple and easy to use",
                                    "Just sign up to get started",
                                    "Stay connected and maintain engagement with your students"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-4 h-4 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                                            <Check className="w-2.5 h-2.5 text-red-600" />
                                        </div>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Button
                                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg text-sm"
                            >
                                BUY NOW
                            </Button>
                        </div>

                        {/* Right Image - Floating */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5">
                            <div className="relative h-full">
                                <Image
                                    src={promoImage}
                                    alt="Happy woman with yellow card - Professional course creator"
                                    fill
                                    className="object-contain object-bottom"
                                    sizes="(max-width: 1024px) 50vw, 40vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brainstorming Cards Section */}
            <div className="mt-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        What Others Are Saying about us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join the Hundreds of Happy Customers Who need to buy 2hand products
                    </p>
                </div>

                {/* First Row */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={3000}
                    loop={true}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="brainstorming-swiper mb-8"
                >
                    {brainstormingCards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="bg-white rounded-lg shadow-xl p-6 h-full border border-gray-100">
                                {/* Card Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {card.title}
                                    </h3>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Card Content */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {card.description}
                                </p>

                                {/* Card Footer */}
                                <div className="flex items-center justify-between">
                                    {/* Avatars */}
                                    <div className="flex -space-x-2">
                                        {card.avatars.map((avatar, index) => (
                                            <div
                                                key={index}
                                                className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                                            >
                                                <Image
                                                    src={avatar}
                                                    alt={`Avatar ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Comments */}
                                    <div className="flex items-center text-gray-500">
                                        <MessageCircle className="w-4 h-4 mr-1" />
                                        <span className="text-sm">{card.comments} Comments</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Second Row */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                        pauseOnMouseEnter: false,
                    }}
                    speed={3000}
                    loop={true}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="brainstorming-swiper-2"
                >
                    {brainstormingCards.map((card) => (
                        <SwiperSlide key={`row2-${card.id}`}>
                            <div className="bg-white rounded-lg shadow-xl p-6 h-full border border-gray-100">
                                {/* Card Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {card.title}
                                    </h3>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Card Content */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {card.description}
                                </p>

                                {/* Card Footer */}
                                <div className="flex items-center justify-between">
                                    {/* Avatars */}
                                    <div className="flex -space-x-2">
                                        {card.avatars.map((avatar, index) => (
                                            <div
                                                key={index}
                                                className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                                            >
                                                <Image
                                                    src={avatar}
                                                    alt={`Avatar ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Comments */}
                                    <div className="flex items-center text-gray-500">
                                        <MessageCircle className="w-4 h-4 mr-1" />
                                        <span className="text-sm">{card.comments} Comments</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Swiper Styles */}
                <style jsx global>{`
                    .brainstorming-swiper .swiper-pagination,
                    .brainstorming-swiper-2 .swiper-pagination {
                        bottom: -40px !important;
                    }
                    .brainstorming-swiper .swiper-pagination-bullet,
                    .brainstorming-swiper-2 .swiper-pagination-bullet {
                        background: #d1d5db;
                        width: 8px;
                        height: 8px;
                        opacity: 1;
                    }
                    .brainstorming-swiper .swiper-pagination-bullet-active,
                    .brainstorming-swiper-2 .swiper-pagination-bullet-active {
                        background: #6366f1;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default CreateCourseContent;
