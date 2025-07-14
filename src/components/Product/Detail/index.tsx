'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Minus, Plus, ShoppingCart, Truck, Mail, Download, FileText, Award, Users, Shield } from 'lucide-react'
import Image from 'next/image'
import MessageIcon from '@/assets/Product/Icon/MainFunctionIcon/message-text.svg';
import ImageUser from '@/assets/Product/Icon/MainFunctionIcon/image.svg';
import ImageSlider from './ImageSlider'
import MainDetailContent from './main-detail-content'
import MainInfo from './main-info'
import { FormData, ProductInfo, DisplayData } from './type'

const CompleteProductPage: React.FC = () => {
    const [quantity, setQuantity] = useState(1)
    const [formData, setFormData] = useState<FormData | null>(null)

    useEffect(() => {
        // Get form data from localStorage
        const savedData = localStorage.getItem('productFormData')
        if (savedData) {
            const parsedData = JSON.parse(savedData)
            setFormData(parsedData)
        }
    }, [])

    const handleQuantityChange = (value: number) => {
        if (value >= 1) {
            setQuantity(value)
        }
    }



    // Default fallback data
    const defaultProduct = {
        brand: 'Acb',
        name: 'Product name',
        price: 15.00,
        category: 'Food - Functional',
        weight: '350g',
        manufacturer: 'ABC Pharmaceuticals Co., Ltd.',
        countryOfOrigin: 'Vietnam',
        licenseNumber: 'VN-1 (02/12/2000 - 02/11/2015)',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        images: ['/api/placeholder/400/400'],
        shippingCost: '$10-$35',
        deliveryTime: '5-7 days'
    }

    // Use form data if available, otherwise use default
    const product = formData ? {
        brand: formData.brand || 'N/A',
        name: formData.productName || defaultProduct.name,
        price: parseFloat(formData.retailPrice) || defaultProduct.price,
        category: formData.category || defaultProduct.category,
        weight: formData.weight || defaultProduct.weight,
        manufacturer: formData.manufacturer || defaultProduct.manufacturer,
        countryOfOrigin: formData.countryOfOrigin || defaultProduct.countryOfOrigin,
        licenseNumber: formData.licenseNumber || defaultProduct.licenseNumber,
        description: formData.productDescription || defaultProduct.description,
        images: formData.productImages.length > 0 ? formData.productImages : defaultProduct.images,
        shippingCost: formData.deliveryFee ? `$${formData.deliveryFee}` : defaultProduct.shippingCost,
        deliveryTime: formData.deliveryTime || defaultProduct.deliveryTime
    } : defaultProduct

    const doctorInfo = {
        name: 'Dr. Laura Nguyen',
        title: 'Chief point 10'
    }

    // Process list fields for display
    const processListField = (field: string | undefined) => {
        if (!field) return []
        return field.split('\n').filter(item => item.trim() !== '')
    }

    const getDisplayData = () => {
        if (!formData) {
            // Return default data if no form data
            return {
                detailedDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                ingredients: ['Lorem Ipsum', 'Imply dummy text', 'dummy text of the printing'],
                indications: ['Lorem Ipsum', 'Imply dummy text', 'dummy text of the printing'],
                userGuide: ['Lorem Ipsum', 'Imply dummy text'],
                sideEffects: ['Lorem Ipsum', 'Imply dummy text'],
                note: ['Lorem Ipsum', 'Imply dummy text'],
                presenter: ['Lorem Ipsum', 'Imply dummy text'],
                qualityPoints: [
                    'Quality Assurance: I guarantee high-quality products that meet your expectations',
                    'Competitive Pricing: I offer competitive prices that provide great value for your money'
                ]
            }
        }

        return {
            detailedDescription: formData.productDescription || 'No description available',
            ingredients: processListField(formData.ingredient),
            indications: processListField(formData.indications),
            userGuide: processListField(formData.userGuide),
            sideEffects: processListField(formData.sideEffects),
            note: processListField(formData.note),
            presenter: processListField(formData.preserve),
            qualityPoints: processListField(formData.whyBuy || formData.whyBuyFromMe)
        }
    }

    const displayData = getDisplayData()

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto p-6">


                {/* Main Product Info */}
                <MainInfo
                    product={product}
                    formData={formData}
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                />

                {/* User Info */}
                <Card className="mb-6 bg-[#F1F2F4]">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between px-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                    <Image src={ImageUser} alt="Message" width={40} height={40} />
                                </div>
                                <div>
                                    <h3 className="font-bold">{doctorInfo.name}</h3>
                                    <p className="text-sm font-normal">{doctorInfo.title}</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="flex items-center gap-2 text-base font-medium bg-transparent border border-[#1F2C43]">
                                Contact
                                <Image src={MessageIcon} alt="Message" width={20} height={20} />

                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Main Details Content */}
                <MainDetailContent formData={formData} displayData={displayData} />
            </div>
        </div>
    )
}

export default CompleteProductPage
