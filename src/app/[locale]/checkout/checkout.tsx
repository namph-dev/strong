import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import LocationIcon from '@/assets/Product/Icon/Checkout/location.svg'
import AddressForm from '@/components/Checkout/Form/address';

export default function CheckoutComponent() {
    const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
    const [currentAddress, setCurrentAddress] = useState({
        fullName: '',
        phone: '',
        address: '',
        specificAddress: '',
        isDefault: false
    });



    return (
        <div className="space-y-6">
            {/* Delivery Address Section */}
            <div className="bg-white rounded-lg p-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-900 mb-8">Checkout</h1>
                <div className="flex items-center gap-2 mb-4">
                    <Image src={LocationIcon} alt="location" width={20} height={20} />
                    <h2 className="text-base font-medium text-red-500">Delivery Address</h2>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {currentAddress.fullName ? (
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <div>
                                <span className="font-semibold text-base text-gray-900">{currentAddress.fullName}</span>
                                <span className="text-gray-600 ml-2 text-base font-semibold">{currentAddress.phone}</span>
                            </div>
                            <div className="text-[#687588] text-base font-medium">{currentAddress.address}</div>
                            {currentAddress.isDefault && (
                                <span className="bg-[#E6F7FF] text-[#1890FF] px-2 py-1 rounded text-xs font-medium w-fit">
                                    Default
                                </span>
                            )}
                        </div>
                    ) : (
                        <div className="text-[#687588] text-base font-medium italic">
                            No delivery address selected
                        </div>
                    )}
                    <button
                        onClick={() => setIsAddressFormOpen(true)}
                        className="text-[#DA1F27] text-base font-medium hover:underline cursor-pointer"
                    >
                        {currentAddress.fullName ? 'Change' : 'Add Address'}
                    </button>
                </div>
            </div>

            {/* Seller Section */}
            <div className="bg-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-base font-semibold text-[#111827]">Lincoln Shop</h3>
                        <Button
                            variant="outline"
                            size="default"
                            className="text-[#DA1F27] border-[#DA1F27] hover:bg-[#DA1F27] hover:text-white text-base font-medium flex items-center space-x-2"
                        >
                            <span>Chat</span>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="ml-1"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </Button>
                    </div>
                    <div className="text-[#687588] text-base font-medium">Apr 19, 2024. 7:55 AM</div>
                </div>

                {/* Product Item */}
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src="/img/1.png"
                                alt="Gumball product"
                                width={64}
                                height={64}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <h4 className="font-medium text-base text-[#111827]">Gumball (jar, bottle, box)</h4>
                            <p className="text-[#111827] text-sm font-medium">x2</p>
                        </div>
                    </div>
                    <div className="text-base font-medium text-[#111827]">230$</div>
                </div>

                {/* Message for Sellers */}
                <div className="mt-6">
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                        Message for Sellers: <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                        placeholder="Leave your comment here"
                        className="min-h-[56px] resize-none border border-[#C8CACF] rounded-lg p-4 text-base font-normal text-[#687588]"
                    />
                </div>
            </div>

            {/* Address Form Dialog */}
            <AddressForm
                isOpen={isAddressFormOpen}
                onClose={() => setIsAddressFormOpen(false)}
                onSave={(addressData) => {
                    setCurrentAddress(addressData);
                    setIsAddressFormOpen(false);
                }}
                initialData={currentAddress}
                title={currentAddress.fullName ? "Edit Address" : "Add Address"}
            />
        </div>
    );
}
