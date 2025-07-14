'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Upload } from 'lucide-react';
import businessrc from '@/assets/images/temp/businessrc.png';

const RecruitmentGetInfo = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        areaOfSpecialty: '',
        workPreference: 'remote'
    });
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

            if (validTypes.includes(file.type)) {
                setUploadedFile(file);
            } else {
                alert('Please upload PDF or DOCX files only.');
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        console.log('Uploaded File:', uploadedFile);
    };

    return (
        <section className="py-8 lg:py-12" style={{ backgroundColor: '#F5F7FA' }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
                    {/* Left Side - Form */}
                    <div>
                        <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md mx-auto lg:mx-0">
                            <div className="mb-6">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                    Turn Ambition into Action
                                </h2>
                                <h3 className="text-lg lg:text-xl font-bold text-red-500 mb-3">
                                    — Join Strongbody
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Get notified about roles that match your goals. Submit your resume
                                    and we&apos;ll contact you when the right opportunity comes along.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Full Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                {/* Area of Specialty */}
                                <div>
                                    <input
                                        type="text"
                                        name="areaOfSpecialty"
                                        placeholder="Area of Specialty"
                                        value={formData.areaOfSpecialty}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Upload Resume (PDF, DOCX)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept=".pdf,.docx"
                                            onChange={handleFileSelect}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                                            {uploadedFile ? (
                                                <div className="space-y-1">
                                                    <div className="text-green-500 mx-auto w-6 h-6">
                                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                                                </div>
                                            ) : (
                                                <div className="space-y-1">
                                                    <Upload className="mx-auto w-6 h-6 text-blue-500" />
                                                    <p className="text-blue-500 font-medium text-sm">Upload File</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Work Preference */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Work Preference
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        {[
                                            { value: 'remote', label: 'Remote' },
                                            { value: 'in-office', label: 'In-Office' },
                                            { value: 'freelance', label: 'Freelance' },
                                            { value: 'hybrid', label: 'Hybrid' }
                                        ].map((option) => (
                                            <label key={option.value} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="workPreference"
                                                    value={option.value}
                                                    checked={formData.workPreference === option.value}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-red-500 text-white py-2.5 px-6 rounded-lg font-semibold text-base hover:bg-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Join Now
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            <Image
                                src={businessrc}
                                alt="Professional woman pointing - Join Strongbody team"
                                width={600}
                                height={600}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecruitmentGetInfo;
