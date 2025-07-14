import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import UploadDocument from './UploadDocument';
import InformationManually from './InformationManually';
import ProgressBar from './progress-bar';
import {
    TabType,
    CompletionResult,
    ManualFormProps,
    UploadFormProps,
    FieldValidator,
    ManualFormData,
    UploadFormData
} from './type';

const ProductForm: React.FC = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TabType>('upload');

    // Shared states
    const [productImages, setProductImages] = useState<File[]>([]);
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [documents, setDocuments] = useState<File[]>([]);

    // Manual form specific states
    const [issueDate, setIssueDate] = useState<Date>();
    const [expiryDate, setExpiryDate] = useState<Date>();
    const [productCertifications, setProductCertifications] = useState<File[]>([]);
    const [productType, setProductType] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [countryOfOrigin, setCountryOfOrigin] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [indications, setIndications] = useState('');
    const [userGuide, setUserGuide] = useState('');
    const [sideEffects, setSideEffects] = useState('');
    const [preserve, setPreserve] = useState('');
    const [weight, setWeight] = useState('');
    const [note, setNote] = useState('');

    // Sales information states (shared)
    const [retailPrice, setRetailPrice] = useState('');
    const [retailPriceAfterFee, setRetailPriceAfterFee] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [deliveryFee, setDeliveryFee] = useState('');
    const [whyBuy, setWhyBuy] = useState('');

    // Upload form specific states
    const [platformFeeAmount, setPlatformFeeAmount] = useState('');
    const [whyBuyFromMe, setWhyBuyFromMe] = useState('');

    // Field validation helpers
    const hasValue = (value: string | undefined) => Boolean(value?.trim());
    const hasFiles = (files: File[]) => files.length > 0;
    const hasDate = (date: Date | undefined) => Boolean(date);

    // Form field configurations
    const getFormFields = (): FieldValidator[] => {
        const commonFields = [
            () => hasFiles(productImages),
            () => hasValue(productName),
            () => hasValue(category),
            () => hasValue(productDescription),
            () => hasFiles(documents),
            () => hasValue(retailPrice),
            () => hasValue(deliveryTime),
            () => hasValue(deliveryFee),
        ];

        if (activeTab === 'manual') {
            return [
                ...commonFields,
                () => hasValue(productType),
                () => hasValue(licenseNumber),
                () => hasDate(issueDate),
                () => hasDate(expiryDate),
                () => hasFiles(productCertifications),
                () => hasValue(brand),
                () => hasValue(manufacturer),
                () => hasValue(countryOfOrigin),
                () => hasValue(ingredient),
                () => hasValue(indications),
                () => hasValue(userGuide),
                () => hasValue(sideEffects),
                () => hasValue(preserve),
                () => hasValue(weight),
                () => hasValue(note),
                () => hasValue(retailPriceAfterFee),
                () => hasValue(whyBuy),
            ];
        } else {
            return [
                ...commonFields,
                () => hasValue(platformFeeAmount),
                () => hasValue(whyBuyFromMe),
            ];
        }
    };

    // Calculate completion based on active tab
    const calculateCompletion = (): CompletionResult => {
        const fields = getFormFields();
        const completedFields = fields.filter(field => field()).length;
        const totalFields = fields.length;
        const percentage = Math.round((completedFields / totalFields) * 100);

        return { completedFields, totalFields, percentage };
    };

    const { completedFields, totalFields, percentage } = calculateCompletion();

    // Function to save form data to localStorage
    const saveFormData = (): void => {
        if (activeTab === 'manual') {
            const formData: ManualFormData = {
                formType: 'manual' as const,
                productImages: productImages.map(file => URL.createObjectURL(file)),
                productName,
                category,
                productType,
                licenseNumber,
                issueDate: issueDate ? format(issueDate, "dd/MM/yyyy") : undefined,
                expiryDate: expiryDate ? format(expiryDate, "dd/MM/yyyy") : undefined,
                productDescription,
                documents: documents.map(file => ({
                    name: file.name,
                    url: URL.createObjectURL(file),
                    type: file.type
                })),
                productCertifications: productCertifications.map(file => ({
                    name: file.name,
                    url: URL.createObjectURL(file),
                    type: file.type
                })),
                brand,
                manufacturer,
                countryOfOrigin,
                ingredient,
                indications,
                userGuide,
                sideEffects,
                preserve,
                weight,
                note,
                retailPrice,
                retailPriceAfterFee,
                deliveryTime,
                deliveryFee,
                whyBuy
            };
            localStorage.setItem('productFormData', JSON.stringify(formData));
        } else {
            const formData: UploadFormData = {
                formType: 'upload' as const,
                productImages: productImages.map(file => URL.createObjectURL(file)),
                productName,
                category,
                productDescription,
                documents: documents.map(file => ({
                    name: file.name,
                    url: URL.createObjectURL(file),
                    type: file.type
                })),
                retailPrice,
                platformFeeAmount,
                deliveryTime,
                deliveryFee,
                whyBuyFromMe
            };
            localStorage.setItem('productFormData', JSON.stringify(formData));
        }
    };

    const handlePreview = () => {
        saveFormData();
        router.push('/my-product/preview');
    };

    // Props for manual form
    const manualFormProps = {
        productImages, setProductImages,
        productName, setProductName,
        category, setCategory,
        productType, setProductType,
        licenseNumber, setLicenseNumber,
        issueDate, setIssueDate,
        expiryDate, setExpiryDate,
        productDescription, setProductDescription,
        documents, setDocuments,
        productCertifications, setProductCertifications,
        brand, setBrand,
        manufacturer, setManufacturer,
        countryOfOrigin, setCountryOfOrigin,
        ingredient, setIngredient,
        indications, setIndications,
        userGuide, setUserGuide,
        sideEffects, setSideEffects,
        preserve, setPreserve,
        weight, setWeight,
        note, setNote,
        retailPrice, setRetailPrice,
        retailPriceAfterFee, setRetailPriceAfterFee,
        deliveryTime, setDeliveryTime,
        deliveryFee, setDeliveryFee,
        whyBuy, setWhyBuy
    };

    // Props for upload form
    const uploadFormProps: UploadFormProps = {
        productImages, setProductImages,
        productName, setProductName,
        category, setCategory,
        productDescription, setProductDescription,
        documents, setDocuments,
        retailPrice, setRetailPrice,
        platformFeeAmount, setPlatformFeeAmount,
        deliveryTime, setDeliveryTime,
        deliveryFee, setDeliveryFee,
        whyBuyFromMe, setWhyBuyFromMe
    };

    const handleTabChange = (value: string) => {
        setActiveTab(value as TabType);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                {/* Custom Tab Headers - Căn giữa */}
                <div className="flex justify-center gap-1 mb-6">
                    <button
                        onClick={() => setActiveTab('upload')}
                        className={`px-10 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer ${activeTab === 'upload'
                            ? 'bg-red-50 text-red-600 border-2 border-red-200'
                            : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200'
                            }`}
                    >
                        Upload documents
                    </button>
                    <button
                        onClick={() => setActiveTab('manual')}
                        className={`px-10 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer ${activeTab === 'manual'
                            ? 'bg-red-50 text-red-600 border-2 border-red-200'
                            : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200'
                            }`}
                    >
                        Enter information manually
                    </button>
                </div>

                {/* Description Text - Căn giữa */}
                <div className="mb-8 text-center">
                    <p className="text-gray-600 text-sm">
                        {activeTab === 'upload'
                            ? 'Add detailed product information to your store through documents.'
                            : 'Enter product information for each section below'
                        }
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-300 mb-8" />

                <TabsContent value="upload" className="space-y-6">
                    <UploadDocument {...uploadFormProps} />
                </TabsContent>

                <TabsContent value="manual" className="space-y-6">
                    <InformationManually {...manualFormProps} />
                </TabsContent>

                {/* Completion Point */}
                <ProgressBar
                    completedFields={completedFields}
                    totalFields={totalFields}
                    percentage={percentage}
                />

                {/* Action Buttons */}
                <div
                    className="flex justify-between items-center p-6 rounded-tl-[14px] rounded-tr-[14px]"
                    style={{ backgroundColor: '#E9EAEC' }}
                >
                    <span className="font-semibold text-lg text-[#181C32]">Preview Product</span>
                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            className="px-12 font-medium bg-transparent text-base border-[#181C32] text-[#181C32]"
                            onClick={handlePreview}
                        >
                            Preview
                        </Button>
                        <Button className="px-12 font-medium text-base bg-[#E53935] hover:bg-[#D32F2F] text-white">
                            Post A Product
                        </Button>
                    </div>
                </div>
            </Tabs>
        </div>
    );
};

export default ProductForm;
