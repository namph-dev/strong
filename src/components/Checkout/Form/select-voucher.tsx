"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Voucher {
    id: string;
    title: string;
    description: string;
    discount: string;
    minOrder: string;
}

interface SelectVoucherProps {
    vouchers?: Voucher[];
    onApplyVoucherCode?: (code: string) => void;
    onSelectVoucher?: (voucherId: string) => void;
    onCancel?: () => void;
    onConfirm?: (selectedVoucherId?: string) => void;
}

const defaultVouchers: Voucher[] = [
    {
        id: "voucher-1",
        title: "Giảm 12% tối đa $500",
        description: "Tối thiểu $200",
        discount: "12%",
        minOrder: "$200"
    },
    {
        id: "voucher-2",
        title: "Giảm 12% tối đa $500",
        description: "Tối thiểu $200",
        discount: "12%",
        minOrder: "$200"
    },
    {
        id: "voucher-3",
        title: "Giảm 12% tối đa $500",
        description: "Tối thiểu $200",
        discount: "12%",
        minOrder: "$200"
    }
];

export default function SelectVoucher({
    vouchers = defaultVouchers,
    onApplyVoucherCode,
    onSelectVoucher,
    onCancel,
    onConfirm
}: SelectVoucherProps) {
    const [voucherCode, setVoucherCode] = useState("");
    const [selectedVoucher, setSelectedVoucher] = useState<string>("");

    const handleApplyCode = () => {
        if (voucherCode.trim() && onApplyVoucherCode) {
            onApplyVoucherCode(voucherCode.trim());
        }
    };

    const handleVoucherSelect = (voucherId: string) => {
        setSelectedVoucher(voucherId);
        if (onSelectVoucher) {
            onSelectVoucher(voucherId);
        }
    };

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm(selectedVoucher);
        }
    };

    const handleCancel = () => {
        setSelectedVoucher("");
        setVoucherCode("");
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-1 bg-white">
            {/* Voucher Code Input */}
            <div className="flex gap-3 mb-6">
                <Input
                    placeholder="Enter voucher code"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    className="flex-1 text-base font-normal border border-[#C8CACF] rounded-lg"
                />
                <button
                    onClick={handleApplyCode}
                    disabled={!voucherCode.trim()}
                    className="text-[#1F2C43CC] border border-[#1F2C43] rounded-lg px-6 py-2"
                >
                    Apply
                </button>
            </div>

            {/* Voucher List */}
            <div className="space-y-4 mb-8">
                <RadioGroup
                    value={selectedVoucher}
                    onValueChange={handleVoucherSelect}
                    className="space-y-4"
                >
                    {vouchers.map((voucher) => (
                        <div
                            key={voucher.id}
                            className={`flex items-center space-x-4 p-4 border rounded-lg cursor-pointer transition-colors ${selectedVoucher === voucher.id
                                ? 'border-red-500 bg-[#DB212705]'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                            onClick={() => handleVoucherSelect(voucher.id)}
                        >
                            {/* Voucher Icon */}
                            <div className="w-12 h-12 bg-red-500 rounded flex-shrink-0"></div>

                            {/* Voucher Details */}
                            <div className="flex-1">
                                <div className="font-medium text-sm text-[#000000]">{voucher.title}</div>
                                <div className="font-medium text-sm text-[#000000]">{voucher.description}</div>
                            </div>

                            {/* Radio Button */}
                            <div className="flex items-center">
                                <RadioGroupItem
                                    value={voucher.id}
                                    id={voucher.id}
                                    className="h-5 w-5"
                                />
                                <Label htmlFor={voucher.id} className="sr-only">
                                    Select {voucher.title}
                                </Label>
                            </div>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                <Button
                    variant="outline"
                    onClick={handleCancel}
                    className="flex-1 text-sm font-semibold text-[#111827] border border-[#111827] rounded-lg px-6 py-2"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleConfirm}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg"
                >
                    OK
                </Button>
            </div>
        </div>
    );
}
