'use client';

import React, { useState } from 'react';

const CreateCourseGetInfo = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        position: '',
        description: ''
    });
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (isValidFile(file)) {
                setUploadedFile(file);
            }
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (isValidFile(file)) {
                setUploadedFile(file);
            }
        }
    };

    const isValidFile = (file: File) => {
        const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (!validTypes.includes(file.type)) {
            alert('Please upload PDF, DOCX, or TXT files only.');
            return false;
        }

        if (file.size > maxSize) {
            alert('File size must be less than 10MB.');
            return false;
        }

        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form Data:', formData);
        console.log('Uploaded File:', uploadedFile);
    };

    return (
        <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        Create your own course
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        Simply fill out the application form below, and make sure to upload your resume and any
                        relevant portfolio work (if applicable). Our team will review your application
                        and reach out to you within [timeframe] for an interview.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    {/* Form Fields */}
                    <div className="space-y-4 mb-6">
                        <div>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Fullname"
                                value={formData.fullname}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="position"
                                placeholder="Position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>

                        <div>
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                required
                            />
                        </div>
                    </div>

                    {/* File Upload Section */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload files
                        </label>

                        <div
                            className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all ${dragActive
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                                }`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                accept=".pdf,.docx,.txt"
                                onChange={handleFileSelect}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />

                            {uploadedFile ? (
                                <div className="space-y-1">
                                    <div className="w-10 h-10 mx-auto mb-3 text-green-500">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                                    <p className="text-xs text-gray-500">
                                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <div className="w-10 h-10 mx-auto mb-3 text-blue-500">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                    </div>
                                    <p className="text-blue-600 font-medium text-sm">Click to upload</p>
                                </div>
                            )}
                        </div>

                        <p className="text-xs text-gray-500 mt-2 text-center">
                            <span className="font-medium">PDF</span> • <span className="font-medium">DOCX</span> • <span className="font-medium">TXT</span> • <span className="font-medium">10 MB</span>
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-slate-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 outline-none"
                    >
                        Upload now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CreateCourseGetInfo;
