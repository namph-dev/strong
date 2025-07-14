import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Minus, Plus, ShoppingCart, Truck } from 'lucide-react'
import ImageSlider from './ImageSlider'
import { FormData, ProductInfo } from './type'

interface MainInfoProps {
    product: ProductInfo
    formData: FormData | null
    quantity: number
    onQuantityChange: (value: number) => void
}

const MainInfo: React.FC<MainInfoProps> = ({
    product,
    formData,
    quantity,
    onQuantityChange
}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Image Section */}
            <ImageSlider
                images={product.images}
                productName={product.name}
            />

            {/* Product Info Section */}
            <div className="space-y-1">
                {/* Brand & Title */}
                <div>
                    <div className="text-base font-normal text-[#687588]">Brand: <span className="text-base font-semibold text-[#111827]">{product.brand}</span></div>
                    <h1 className="text-2xl font-bold leading-[36px]">{product.name}</h1>
                </div>

                {/* Price */}
                <div className="text-3xl font-bold text-gray-900 leading-[48px]">
                    ${product.price.toFixed(2)}
                </div>

                {/* Product Details */}
                <div className="space-y-3 text-sm">
                    <div className="flex">
                        <span className="text-[#687588] text-base w-32">Category</span>
                        <span className="font-semibold text-base">{product.category}</span>
                    </div>
                    {formData?.productType && (
                        <div className="flex">
                            <span className="text-[#687588] text-base w-32">Product Type</span>
                            <span className="font-semibold text-base">{formData.productType}</span>
                        </div>
                    )}
                    {product.weight !== 'N/A' && (
                        <div className="flex">
                            <span className="text-[#687588] text-base w-32">Weight</span>
                            <span className="font-semibold text-base">{product.weight}</span>
                        </div>
                    )}
                    {product.manufacturer !== 'N/A' && (
                        <div className="flex">
                            <span className="text-[#687588] text-base w-32">Manufacturer</span>
                            <span className="font-semibold text-base">{product.manufacturer}</span>
                        </div>
                    )}
                    {product.countryOfOrigin !== 'N/A' && (
                        <div className="flex">
                            <span className="text-[#687588] text-base w-32">Country</span>
                            <span className="font-semibold text-base">{product.countryOfOrigin}</span>
                        </div>
                    )}
                    {product.licenseNumber !== 'N/A' && (
                        <div className="flex">
                            <span className="text-[#687588] text-base w-32">License number</span>
                            <span className="font-semibold text-base">{product.licenseNumber}</span>
                        </div>
                    )}
                    {formData?.issueDate && (
                        <div className="flex">
                            <span className="text-[#687588] text-base w-32">Issue Date</span>
                            <span className="font-semibold text-base">{formData.issueDate}</span>
                        </div>
                    )}
                    {formData?.expiryDate && (
                        <div className="flex">
                            <span className="text-[#687588] text-base w-32">Expiry Date</span>
                            <span className="font-semibold text-base">{formData.expiryDate}</span>
                        </div>
                    )}
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-[#687588] text-base w-32">Short description</h3>
                    <p className=" text-sm font-semibold leading-relaxed">
                        {product.description}
                    </p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                    <p className="text-base font-medium text-[#687588]">Select quantity</p>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onQuantityChange(quantity - 1)}
                            disabled={quantity <= 1}
                            className="h-8 w-8 p-0"
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                            type="number"
                            value={quantity}
                            onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
                            className="w-16 h-8 text-center text-sm"
                            min="1"
                        />
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onQuantityChange(quantity + 1)}
                            className="h-8 w-8 p-0"
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                    <Button
                        className="w-full bg-[#F49798] text-white font-medium text-base"
                        size="lg"
                    >
                        Buy now
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full border-gray-300 font-medium text-base"
                        size="lg"
                    >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to cart
                    </Button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 "></div>

                {/* Shipping Info */}
                <Card>
                    <CardContent className="p-1">
                        <div className="flex items-center space-x-2 mb-2">
                            <Truck className="h-5 w-5 text-gray-600" />
                            <span className="font-bold text-base">Shipping</span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-base text-[#687588] font-normal">Shipping total:</span>
                                <span className="font-semibold text-base text-[#111827]">{product.shippingCost}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-base text-[#687588] font-normal">Delivery time:</span>
                                <span className="font-semibold text-base text-[#111827]">{product.deliveryTime}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default MainInfo
