import React from 'react';
import Image from 'next/image';
import vectorBg from '@/assets/images/temp/Vector.png';

const CreateShopGetInfo = () => {
    return (
        <section className="py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#1F2C43' }}>
            {/* Background Vector */}
            <div className="absolute bottom-0 left-0 pointer-events-none">
                <Image
                    src={vectorBg}
                    alt="Background vector"
                    width={600}
                    height={660}
                    className="w-auto h-auto max-w-lg lg:max-w-xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-xl mx-auto">
                    {/* Form Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Create Your StrongBody Shop Account
                        </h2>

                        <form className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Username Field */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Public username"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    You can&apos;t change your username, so choose wisely
                                </p>
                            </div>

                            {/* Occupation and Country Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Occupation"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500">
                                        <option value="">Your country</option>
                                        <option value="us">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ca">Canada</option>
                                        <option value="au">Australia</option>
                                        <option value="de">Germany</option>
                                        <option value="fr">France</option>
                                        <option value="jp">Japan</option>
                                        <option value="vn">Vietnam</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    Min 6 characters, 1 uppercase, 1 lowercase, 1 number
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateShopGetInfo;
