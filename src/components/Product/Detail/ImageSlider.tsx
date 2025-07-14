'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface ImageSliderProps {
    images: string[]
    productName: string
    className?: string
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    images,
    productName,
    className = ""
}) => {
    const [selectedImage, setSelectedImage] = useState(0)

    const handleImageSelect = (index: number) => {
        setSelectedImage(index)
    }

    const handlePreviousImage = () => {
        setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)
    }

    const handleNextImage = () => {
        setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)
    }

    // Don't render if no images
    if (!images || images.length === 0) {
        return null
    }

    return (
        <div className={`space-y-4 ${className}`}>
            {/* Main Image */}
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                    <div className="relative aspect-square">
                        <Image
                            src={images[selectedImage]}
                            alt={productName}
                            fill
                            className="object-cover"
                        />

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleImageSelect(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${selectedImage === index ? 'bg-white' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Thumbnail Images */}
            <div className="flex items-center space-x-2">
                {/* Left Arrow */}
                <button
                    onClick={handlePreviousImage}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    disabled={images.length <= 1}
                >
                    <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>

                {/* Thumbnail Images Container */}
                <div className="flex space-x-2 overflow-x-auto flex-1 scrollbar-hide">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageSelect(index)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`${productName} ${index + 1}`}
                                width={80}
                                height={80}
                                className="object-cover w-full h-full"
                            />
                        </button>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNextImage}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    disabled={images.length <= 1}
                >
                    <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>
            </div>
        </div>
    )
}

export default ImageSlider
