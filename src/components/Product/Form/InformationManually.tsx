import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomInput } from '@/components/Form/CustomInput';
import { CustomTextArea } from '@/components/Form/CustomTextArea';
import ImageUpload from './image-upload';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { CustomDropdown } from '@/components/Form/CustomDropdown';
import FileUpload from './file-upload';
import { Button } from '@/components/ui/button';

const categoryOptions = [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Home & Garden', value: 'home' },
    { label: 'Sports', value: 'sports' },
];

interface InformationManuallyProps {
    productImages: File[];
    setProductImages: React.Dispatch<React.SetStateAction<File[]>>;
    productName: string;
    setProductName: React.Dispatch<React.SetStateAction<string>>;
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    productType: string;
    setProductType: React.Dispatch<React.SetStateAction<string>>;
    licenseNumber: string;
    setLicenseNumber: React.Dispatch<React.SetStateAction<string>>;
    issueDate: Date | undefined;
    setIssueDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    expiryDate: Date | undefined;
    setExpiryDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    productDescription: string;
    setProductDescription: React.Dispatch<React.SetStateAction<string>>;
    documents: File[];
    setDocuments: React.Dispatch<React.SetStateAction<File[]>>;
    productCertifications: File[];
    setProductCertifications: React.Dispatch<React.SetStateAction<File[]>>;
    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;
    manufacturer: string;
    setManufacturer: React.Dispatch<React.SetStateAction<string>>;
    countryOfOrigin: string;
    setCountryOfOrigin: React.Dispatch<React.SetStateAction<string>>;
    ingredient: string;
    setIngredient: React.Dispatch<React.SetStateAction<string>>;
    indications: string;
    setIndications: React.Dispatch<React.SetStateAction<string>>;
    userGuide: string;
    setUserGuide: React.Dispatch<React.SetStateAction<string>>;
    sideEffects: string;
    setSideEffects: React.Dispatch<React.SetStateAction<string>>;
    preserve: string;
    setPreserve: React.Dispatch<React.SetStateAction<string>>;
    weight: string;
    setWeight: React.Dispatch<React.SetStateAction<string>>;
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
    retailPrice: string;
    setRetailPrice: React.Dispatch<React.SetStateAction<string>>;
    retailPriceAfterFee: string;
    setRetailPriceAfterFee: React.Dispatch<React.SetStateAction<string>>;
    deliveryTime: string;
    setDeliveryTime: React.Dispatch<React.SetStateAction<string>>;
    deliveryFee: string;
    setDeliveryFee: React.Dispatch<React.SetStateAction<string>>;
    whyBuy: string;
    setWhyBuy: React.Dispatch<React.SetStateAction<string>>;
}

const InformationManually: React.FC<InformationManuallyProps> = ({
    productImages,
    setProductImages,
    productName,
    setProductName,
    category,
    setCategory,
    productType,
    setProductType,
    licenseNumber,
    setLicenseNumber,
    issueDate,
    setIssueDate,
    expiryDate,
    setExpiryDate,
    productDescription,
    setProductDescription,
    documents,
    setDocuments,
    productCertifications,
    setProductCertifications,
    brand,
    setBrand,
    manufacturer,
    setManufacturer,
    countryOfOrigin,
    setCountryOfOrigin,
    ingredient,
    setIngredient,
    indications,
    setIndications,
    userGuide,
    setUserGuide,
    sideEffects,
    setSideEffects,
    preserve,
    setPreserve,
    weight,
    setWeight,
    note,
    setNote,
    retailPrice,
    setRetailPrice,
    retailPriceAfterFee,
    setRetailPriceAfterFee,
    deliveryTime,
    setDeliveryTime,
    deliveryFee,
    setDeliveryFee,
    whyBuy,
    setWhyBuy
}) => {
    return (
        <div>
            {/* Information Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl font-bold leading-[36px]">
                        Information
                    </CardTitle>
                    <p className="text-base font-normal text-[#687588] leading-[24px]">
                        Product Image
                    </p>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Image Upload */}
                    <ImageUpload
                        productImages={productImages}
                        setProductImages={setProductImages}
                    />

                    {/* Product Name */}
                    <div>
                        <CustomInput
                            label="Product Name"
                            value={productName}
                            onChange={e => setProductName(e.target.value)}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <CustomDropdown
                            label="Category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            options={categoryOptions}
                            placeholder="Select category"
                        />
                    </div>

                    {/* Product Type and License Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <CustomInput
                                label="Product Type"
                                value={productType}
                                onChange={e => setProductType(e.target.value)}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label="License Number"
                                value={licenseNumber}
                                onChange={e => setLicenseNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Issue Date and Expiry Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal"
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {issueDate ? format(issueDate, "dd/MM/yyyy") : "Issue Date (dd/mm/yyyy)"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={issueDate}
                                        onSelect={setIssueDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal"
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {expiryDate ? format(expiryDate, "dd/MM/yyyy") : "Expiry Date (dd/mm/yyyy)"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={expiryDate}
                                        onSelect={setExpiryDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    {/* Document Upload Area */}
                    <div>
                        <p className="text-base font-bold text-[#B9B7B7] leading-[24px] mb-2">
                            Certifications
                        </p>
                        <FileUpload
                            documents={documents}
                            setDocuments={setDocuments}
                            highlight_text={"Click here "}
                            help_text={"to upload or drop files here for certifications"}
                        />
                    </div>

                    <div>
                        <CustomTextArea
                            label="Product Description"
                            rows={5}
                            value={productDescription}
                            onChange={e => setProductDescription(e.target.value)}
                            resize="vertical"
                            minRows={3}
                            maxRows={10}
                            placeholder="Enter detailed product description"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Product Info Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold leading-[36px]">Product Attributes</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    <CustomInput label="Brand" value={brand} onChange={e => setBrand(e.target.value)} />
                    <CustomInput label="Manufacturer" value={manufacturer} onChange={e => setManufacturer(e.target.value)} />
                    <CustomInput label="Country of origin" value={countryOfOrigin} onChange={e => setCountryOfOrigin(e.target.value)} />
                    <CustomTextArea
                        label="Ingredient"
                        rows={3}
                        value={ingredient}
                        onChange={e => setIngredient(e.target.value)}
                        resize="vertical"
                        minRows={2}
                        maxRows={10}
                        placeholder="Enter product ingredients"
                    />
                    <CustomTextArea
                        label="Indications"
                        rows={3}
                        value={indications}
                        onChange={e => setIndications(e.target.value)}
                        resize="vertical"
                        minRows={2}
                        maxRows={10}
                        placeholder="Enter product indications"
                    />
                    <CustomTextArea
                        label="User guide"
                        rows={3}
                        value={userGuide}
                        onChange={e => setUserGuide(e.target.value)}
                        resize="vertical"
                        minRows={2}
                        maxRows={10}
                        placeholder="Enter user guide and instructions"
                    />
                    <CustomTextArea
                        label="Side effects"
                        rows={3}
                        value={sideEffects}
                        onChange={e => setSideEffects(e.target.value)}
                        resize="vertical"
                        minRows={2}
                        maxRows={10}
                        placeholder="Enter potential side effects"
                    />
                    <CustomTextArea
                        label="Preserve"
                        rows={3}
                        value={preserve}
                        onChange={e => setPreserve(e.target.value)}
                        resize="vertical"
                        minRows={2}
                        maxRows={10}
                        placeholder="Enter preservation instructions"
                    />
                    <CustomInput label="Weight" value={weight} onChange={e => setWeight(e.target.value)} />
                    <CustomInput label="Note" value={note} onChange={e => setNote(e.target.value)} />
                    {/* Document Upload Area */}

                    <p className="text-base font-bold text-[#B9B7B7] leading-[24px]">
                        Product certifications
                    </p>
                    <div>
                        <FileUpload
                            documents={productCertifications}
                            setDocuments={setProductCertifications}
                            helperText={"Click here to upload or drop files here for product certifications"}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Your Setting for Sale */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold leading-[36px]">Sales Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <CustomInput
                            label="Retail Price"
                            value={retailPrice}
                            onChange={e => setRetailPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Retail price after deducting 7% platform fee  (After entering the retail price, the system will automatically update the new price with the platform fee)"
                            value={retailPriceAfterFee}
                            onChange={e => setRetailPriceAfterFee(e.target.value)}
                        />
                    </div>

                    <div>
                        <CustomInput
                            label="Delivery time"
                            value={deliveryTime}
                            onChange={e => setDeliveryTime(e.target.value)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Delivery fee"
                            value={deliveryFee}
                            onChange={e => setDeliveryFee(e.target.value)}
                        />
                    </div>
                    <div>
                        <CustomTextArea
                            label="Why should you buy this product from me?"
                            rows={5}
                            value={whyBuy}
                            onChange={e => setWhyBuy(e.target.value)}
                            resize="vertical"
                            minRows={3}
                            maxRows={8}
                            placeholder="Enter reasons why customers should buy from you"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default InformationManually;
