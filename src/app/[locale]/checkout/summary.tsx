'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import SelectVoucher from '@/components/Checkout/Form/select-voucher';

export default function OrderSummary() {
    const [isVoucherDialogOpen, setIsVoucherDialogOpen] = useState(false);

    const handleSelectVoucher = () => {
        setIsVoucherDialogOpen(true);
    };

    const handleVoucherDialogClose = () => {
        setIsVoucherDialogOpen(false);
    };

    const handleApplyVoucherCode = (code: string) => {
        console.log('Applied voucher code:', code);
        // TODO: Implement voucher code application logic
    };

    const handleSelectVoucherOption = (voucherId: string) => {
        console.log('Selected voucher:', voucherId);
        // TODO: Implement voucher selection logic
    };

    const handleConfirmVoucher = (selectedVoucherId?: string) => {
        console.log('Confirmed voucher:', selectedVoucherId);
        // TODO: Implement voucher confirmation logic
        setIsVoucherDialogOpen(false);
    };

    return (
        <div className="bg-white rounded-lg p-6">
            {/* Header */}
            <h2 className="text-lg font-bold text-[#111827] mb-6">Order Summary</h2>

            {/* Payment Methods */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-medium text-[#111827]">Payment methods</h3>
                    <button className="text-[#1890FF] text-sm font-medium hover:underline">View all</button>
                </div>

                <div className="space-y-3">
                    {/* PayPal Option */}
                    <div className="flex items-center space-x-3 p-3 rounded-lg  bg-[#FAFAFA]">
                        <div className="w-5 h-5 rounded-full bg-[#1890FF] flex items-center justify-center">
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" className="text-white">
                                <path d="M1 4.5L4.5 8L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center">
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                <g clipPath="url(#clip0_2004_37813)">
                                    <path d="M21.9573 5.20229C21.3498 4.62383 20.4687 4.43571 19.6779 4.71556C19.4542 4.7903 19.2914 4.98418 19.2564 5.21734L19.0807 6.42419C18.8144 8.24701 17.2547 9.60076 15.4125 9.60811H12.9035C12.6156 9.60817 12.3648 9.80422 12.2951 10.0835L10.4133 17.6105C10.3295 17.9467 10.534 18.2871 10.8701 18.3709C10.9197 18.3833 10.9706 18.3896 11.0217 18.3896H14.158C14.4459 18.3895 14.6967 18.1935 14.7664 17.9141L15.9017 13.3716H18.348C20.2259 13.3778 21.8641 12.0979 22.3122 10.2742L22.7751 8.41884C23.101 7.27756 22.7886 6.04931 21.9573 5.20229Z" fill="#03A9F4" />
                                    <path d="M19.8818 1.9152C19.2791 1.22489 18.4072 0.829198 17.4907 0.83008H10.3903C10.0869 0.83008 9.82704 1.04719 9.77305 1.34568L7.26404 15.1451C7.20235 15.486 7.42875 15.8123 7.76964 15.874C7.80645 15.8806 7.84385 15.884 7.88125 15.884H11.6447C11.9327 15.8839 12.1835 15.6879 12.2532 15.4086L13.3898 10.866H15.4082C17.8756 10.8563 19.9643 9.04238 20.3196 6.60075L20.6332 4.45679C20.7625 3.5408 20.4884 2.61368 19.8818 1.9152Z" fill="#283593" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2004_37813">
                                        <rect width="27.6" height="27.6" fill="white" transform="translate(0.984375 0.201172)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="text-base font-semibold text-[#0C1221]">Paypal - James Madison</div>
                            <div className="text-sm font-medium text-[#687588]">Expiry date 12/30</div>
                        </div>
                    </div>

                    {/* Visa Option */}
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#FAFAFA]">
                        <div className="w-5 h-5 rounded-full border-2 border-[#D1D5DB]"></div>
                        <div className="w-8 h-8 flex items-center justify-center">
                            <svg width="36" height="11" viewBox="0 0 36 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                <path d="M23.5537 0C24.6837 5.14515e-05 25.5889 0.232339 26.166 0.448242L25.7705 2.75684L25.5088 2.63477C24.9712 2.41848 24.2812 2.21077 23.3271 2.22559C22.1866 2.22568 21.6592 2.7006 21.6592 3.14258C21.6524 3.64146 22.2764 3.97148 23.2959 4.46484C24.9765 5.22457 25.7528 6.1471 25.7422 7.35938C25.72 9.57108 23.7307 10.9998 20.667 11C19.3599 10.9869 18.1015 10.7285 17.4199 10.4316L17.8291 8.0459L18.2051 8.21582C19.1621 8.61356 19.7817 8.7744 20.9482 8.77441C21.7859 8.77436 22.6842 8.44773 22.6914 7.7334C22.6973 7.26727 22.3154 6.93339 21.1816 6.41211C20.0758 5.90137 18.6123 5.04866 18.6279 3.5166C18.645 1.44599 20.674 0 23.5537 0ZM35.999 10.8447H33.2939C33.2939 10.8447 33.0277 9.62099 32.9404 9.24805C32.5153 9.24805 29.5422 9.24414 29.207 9.24414C29.0941 9.53137 28.5979 10.8339 28.5938 10.8447H25.5332L29.8613 1.08008C30.1686 0.385798 30.6898 0.196346 31.3877 0.196289H33.6406L35.999 10.8447ZM15.5947 10.8418H12.6816L14.5039 0.185547H17.418L15.5947 10.8418ZM13.3232 0.193359L8.73535 10.8291L5.65137 10.833L3.04297 1.5127C4.893 2.4358 6.54827 4.28058 7.0791 5.9834L7.38379 7.45996L10.2363 0.193359H13.3232ZM31.5928 3.06836C31.4455 3.46799 31.1896 4.11338 31.207 4.08496C31.207 4.08496 30.2874 6.45032 30.0459 7.06445H32.4658C32.3495 6.53353 31.7966 4.01711 31.79 3.9873L31.5928 3.06836Z" fill="#1A1F71" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.73745 0.1875H0.0370346L0 0.408942C3.65663 1.29174 6.07623 3.42302 7.08042 5.98445L6.05835 1.08684C5.88211 0.411912 5.37002 0.210832 4.73745 0.1875Z" fill="#F9A51A" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="text-base font-semibold text-[#0C1221]">Visa Debit ****** 1234</div>
                            <div className="text-sm font-medium text-[#687588]">Expiry date 12/30</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Voucher Code */}
            <div className="mb-6">
                <Button
                    variant="outline"
                    onClick={handleSelectVoucher}
                    className="w-full h-12 text-center border-[#1F2C43] rounded-lg text-sm text-[#1F2C43CC] font-bold bg-white hover:bg-gray-50 cursor-pointer"
                >
                    Select or enter a code.
                </Button>
            </div>

            {/* Voucher Selection Dialog */}
            <Dialog open={isVoucherDialogOpen} onOpenChange={setIsVoucherDialogOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Select Voucher</DialogTitle>
                    </DialogHeader>
                    <SelectVoucher
                        onApplyVoucherCode={handleApplyVoucherCode}
                        onSelectVoucher={handleSelectVoucherOption}
                        onCancel={handleVoucherDialogClose}
                        onConfirm={handleConfirmVoucher}
                    />
                </DialogContent>
            </Dialog>

            {/* Price Breakdown */}
            <div className="space-y-4 mb-6">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                    <span className="text-[#00000042] text-sm font-medium">Subtotal (2 Packages)</span>
                    <span className="text-gray-900 font-medium text-sm">$460</span>
                </div>

                {/* Discount */}
                <div className="flex items-center justify-between">
                    <span className="text-[#00000042] text-sm font-medium">Discount Voucher</span>
                    <span className="text-gray-900 font-medium text-sm">$0</span>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 mb-6" />

            {/* Total Payment */}
            <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-[#000000]">Total Payment</span>
                <span className="text-base font-bold text-[#DA1F27]">460$</span>
            </div>

            {/* Confirm Button */}
            <Button
                className="w-full h-12 bg-[#DA1F27] hover:bg-red-600 text-white text-base font-medium rounded-lg"
                size="lg"
            >
                Confirm & Pay
            </Button>
        </div>
    );
}
