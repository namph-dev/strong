import React from 'react'
import { FileText } from 'lucide-react'
import Image from 'next/image'
import { MainDetailContentProps } from './type'

// Helper function to check if file is an image
const isImageFile = (type: string): boolean => {
    return type.startsWith('image/')
}

const MainDetailContent: React.FC<MainDetailContentProps> = ({ formData, displayData }) => {
    return (
        <>
            <div>
                <div className='bg-white rounded-lg'>
                    <div className="px-6 py-3">
                        <h3 className="text-[#687588] text-base font-normal">Description</h3>
                    </div>
                    <div className="px-6 py-3">
                        <p className="text-[#111827] text-base font-semibold leading-relaxed">
                            {displayData.detailedDescription}
                        </p>
                    </div>
                </div>

                {formData?.documents && formData.documents.length > 0 && (
                    <div className="bg-white rounded-lg mt-1">
                        <div className="px-6 py-3">
                            <h3 className="text-[#687588] text-base font-normal flex items-center">
                                Product Documentation ({formData.documents.length.toString().padStart(2, '0')})
                            </h3>
                        </div>
                        <div className="px-6 py-3">
                            <div className="flex flex-wrap gap-4">
                                {formData.documents.map((doc, index) => (
                                    <div key={index} className="flex flex-col items-center space-y-2 p-4 rounded-lg w-24 overflow-hidden">
                                        {isImageFile(doc.type) ? (
                                            <div className="w-20 h-20  rounded flex items-center justify-center overflow-hidden">
                                                <Image src={doc.url} alt={doc.name} width={64} height={64} className="w-full h-full object-cover rounded" />
                                            </div>
                                        ) : (
                                            <div className="w-20 h-20  rounded flex items-center justify-center">
                                                <FileText className="h-8 w-8 text-gray-600" />
                                            </div>
                                        )}
                                        <div className="text-center w-full">
                                            <p className="font-medium text-sm truncate w-full" title={doc.name}>{doc.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Ingredients - only show if exists */}
                {displayData.ingredients.length > 0 && (
                    <div className="bg-white rounded-lg mt-1">
                        <div className="px-6 py-3">
                            <h3 className="text-[#687588] text-base font-normal">Ingredient</h3>
                        </div>
                        <div className="px-6 py-3">
                            <ul className="space-y-2">
                                {displayData.ingredients.map((ingredient, index) => (
                                    <li key={index} className="flex items-center text-base font-semibold text-[#111827]">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Indications - only show if exists */}
                {displayData.indications.length > 0 && (
                    <div className="bg-white rounded-lg mt-1">
                        <div className="px-6 py-3">
                            <h3 className="text-[#687588] text-base font-normal">Indications</h3>
                        </div>
                        <div className="px-6 py-3">
                            <ul className="space-y-2">
                                {displayData.indications.map((indication, index) => (
                                    <li key={index} className="flex items-center text-base font-semibold text-[#111827]">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                        {indication}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* User Guide - only show if exists */}
                {displayData.userGuide.length > 0 && (
                    <div className="bg-white rounded-lg mt-1">
                        <div className="px-6 py-3">
                            <h3 className="text-[#687588] text-base font-normal">User guide</h3>
                        </div>
                        <div className="px-6 py-3">
                            <ul className="space-y-2">
                                {displayData.userGuide.map((guide, index) => (
                                    <li key={index} className="flex items-center text-base font-medium text-[#111827]">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                        {guide}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Side Effects - only show if exists */}
                {displayData.sideEffects.length > 0 && (
                    <div className="bg-white rounded-lg mt-1">
                        <div className="px-6 py-3">
                            <h3 className="text-[#687588] text-base font-normal">Side effects</h3>
                        </div>
                        <div className="px-6 py-3">
                            <ul className="space-y-2">
                                {displayData.sideEffects.map((effect, index) => (
                                    <li key={index} className="flex items-center text-base font-medium text-[#111827]">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                        {effect}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {formData?.productCertifications && formData.productCertifications.length > 0 && (
                    <div className="bg-white rounded-lg mt-1">
                        <div className="px-6 py-3">
                            <h3 className="text-[#687588] text-base font-normal flex items-center">
                                Product Certifications ({formData.productCertifications.length.toString().padStart(2, '0')})
                            </h3>
                        </div>
                        <div className="px-6 py-3">
                            <div className="flex flex-wrap gap-4">
                                {formData.productCertifications.map((cert, index) => (
                                    <div key={index} className="flex flex-col items-center space-y-2 p-4  rounded-lg w-24 overflow-hidden">
                                        {isImageFile(cert.type) ? (
                                            <div className="w-20 h-20  rounded flex items-center justify-center overflow-hidden">
                                                <Image src={cert.url} alt={cert.name} width={64} height={64} className="w-full h-full object-cover rounded" />
                                            </div>
                                        ) : (
                                            <div className="w-20 h-20 rounded flex items-center justify-center">
                                                <FileText className="h-8 w-8 text-gray-600" />
                                            </div>
                                        )}
                                        <div className="text-center w-full">
                                            <p className="font-medium text-sm truncate w-full" title={cert.name}>{cert.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Presenter/Preserve - only show if exists */}
                {displayData.presenter.length > 0 && (
                    <div className="bg-white rounded-lg mt-1">
                        <div className="px-6 py-3">
                            <h3 className="text-[#687588] text-base font-normal">Preserve</h3>
                        </div>
                        <div className="px-6 py-3">
                            <ul className="space-y-2">
                                {displayData.presenter.map((item, index) => (
                                    <li key={index} className="flex items-center text-base font-medium text-[#111827]">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Note - only show if exists */}
                {displayData.note.length > 0 && (
                    <div className="bg-white rounded-lg mt-1">
                        <div className="px-6 py-3">
                            <h3 className="text-[#687588] text-base font-normal">Note</h3>
                        </div>
                        <div className="px-6 py-3">
                            <ul className="space-y-2">
                                {displayData.note.map((item, index) => (
                                    <li key={index} className="flex items-center text-base font-medium text-[#111827]">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            {/* Quality Points - Why choose us */}
            {displayData.qualityPoints.length > 0 && (
                <div className="bg-white rounded-lg mt-1">
                    <div className="px-6 py-3">
                        <h3 className="text-[#687588] text-base font-normal flex items-center">
                            Why should you buy this product from me?
                        </h3>
                    </div>
                    <div className="px-6 py-3">
                        <ul className="space-y-3">
                            {displayData.qualityPoints.map((point, index) => (
                                <li key={index} className="flex items-start text-base font-medium text-[#111827]">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default MainDetailContent
