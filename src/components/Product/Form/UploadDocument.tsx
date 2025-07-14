import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { CustomInput } from '@/components/Form/CustomInput';
import { CustomTextArea } from '@/components/Form/CustomTextArea';
import { CustomDropdown } from '@/components/Form/CustomDropdown';
import ImageUpload from './image-upload';
import FileUpload from './file-upload';

interface UploadDocumentProps {
    productImages: File[];
    setProductImages: React.Dispatch<React.SetStateAction<File[]>>;
    productName: string;
    setProductName: React.Dispatch<React.SetStateAction<string>>;
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    productDescription: string;
    setProductDescription: React.Dispatch<React.SetStateAction<string>>;
    documents: File[];
    setDocuments: React.Dispatch<React.SetStateAction<File[]>>;
    retailPrice: string;
    setRetailPrice: React.Dispatch<React.SetStateAction<string>>;
    platformFeeAmount: string;
    setPlatformFeeAmount: React.Dispatch<React.SetStateAction<string>>;
    deliveryTime: string;
    setDeliveryTime: React.Dispatch<React.SetStateAction<string>>;
    deliveryFee: string;
    setDeliveryFee: React.Dispatch<React.SetStateAction<string>>;
    whyBuyFromMe: string;
    setWhyBuyFromMe: React.Dispatch<React.SetStateAction<string>>;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({
    productImages,
    setProductImages,
    productName,
    setProductName,
    category,
    setCategory,
    productDescription,
    setProductDescription,
    documents,
    setDocuments,
    retailPrice,
    setRetailPrice,
    platformFeeAmount,
    setPlatformFeeAmount,
    deliveryTime,
    setDeliveryTime,
    deliveryFee,
    setDeliveryFee,
    whyBuyFromMe,
    setWhyBuyFromMe
}) => {
    // Category options
    const categoryOptions = [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Fashion & Clothing', value: 'fashion' },
        { label: 'Home & Garden', value: 'home_garden' },
        { label: 'Health & Beauty', value: 'health_beauty' },
        { label: 'Sports & Outdoors', value: 'sports_outdoors' },
        { label: 'Books & Media', value: 'books_media' },
        { label: 'Toys & Games', value: 'toys_games' },
        { label: 'Automotive', value: 'automotive' },
        { label: 'Food & Beverages', value: 'food_beverages' },
        { label: 'Others', value: 'others' }
    ];

    return (
        <div>
            {/* Information Section */}
            <Card className='p-[none]'>
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-bold leading-[36px]">
                        Information
                    </CardTitle>
                    <p className="text-base font-normal text-[#687588] leading-[24px]">
                        Product Image
                    </p>
                </CardHeader>

                <CardContent className="space-y-4">

                    {/* File Upload Area */}
                    <ImageUpload
                        productImages={productImages}
                        setProductImages={setProductImages}
                    />

                    {/* Product Form Fields */}
                    <div className="space-y-6">
                        <div>
                            <CustomInput
                                label="Product Name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div>
                            <CustomDropdown
                                label="Category"
                                value={category}
                                placeholder="Select a category"
                                options={categoryOptions}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        <div>
                            <CustomTextArea
                                label="Product Description"
                                rows={5}
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                resize="vertical"
                                minRows={3}
                                maxRows={10}
                                placeholder="Enter product description"
                            />
                        </div>
                    </div>

                </CardContent>
            </Card>

            {/* Product Info Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold leading-[36px]">Product Info</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <Label htmlFor="advanced-docs" className="text-[#687588] font-bold text-base leading-[24px]">
                            Advanced Documents
                            <span className="text-red-500"> *</span>
                        </Label>
                        <p className="text-sm  font-normal text-[#687588] leading-[24px] mb-2">
                            Upload documents like licenses, certificates, specifications, etc.
                        </p>

                        {/* Document Upload Area */}
                        <FileUpload
                            documents={documents}
                            setDocuments={setDocuments}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Your Setting for Sale */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold leading-[36px]">Your setting for sale</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <CustomInput
                            label="Retail Price"
                            value={retailPrice}
                            onChange={(e) => setRetailPrice(e.target.value)}
                        />
                    </div>

                    <div>
                        <CustomInput
                            label="The amount you get back after deducting the 7% platform fee"
                            value={platformFeeAmount}
                            onChange={(e) => setPlatformFeeAmount(e.target.value)}
                        />
                    </div>

                    <div>
                        <CustomInput
                            label="Estimated Delivery Time"
                            value={deliveryTime}
                            onChange={(e) => setDeliveryTime(e.target.value)}
                        />
                    </div>

                    <div>
                        <CustomInput
                            label="Delivery fee"
                            value={deliveryFee}
                            onChange={(e) => setDeliveryFee(e.target.value)}
                        />
                    </div>

                    <div>
                        <CustomTextArea
                            label="Why should you buy this product from me?"
                            rows={6}
                            value={whyBuyFromMe}
                            onChange={(e) => setWhyBuyFromMe(e.target.value)}
                            resize="vertical"
                            minRows={3}
                            maxRows={8}
                            placeholder="Enter why should you buy this product from me?"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default UploadDocument;
