
import React from 'react';
import Image from 'next/image';
import { CheckCircle, Clock, MessageCircle, CreditCard } from 'lucide-react';
import PendingIcon from '@/assets/Product/Icon/Checkout/pending.svg'
import SuccessIcon from '@/assets/Product/Icon/Checkout/successful.svg'
import ChatIcon from '@/assets/Product/Icon/Checkout/messages.svg'

interface CheckoutResultProps {
    status: 'success' | 'pending';
    amount: number;
    orderDetails: {
        method: string;
        transactionDate: string;
        transactionId: string;
        orderStatus: string;
        shippingStatus: string;
        orderTime: string;
        orderCode: string;
    };
    customerInfo: {
        name: string;
        phone: string;
        address: string;
    };
    product: {
        name: string;
        quantity: number;
        price: number;
        image: string;
    };
    paymentInfo: {
        subtotal: number;
        discount: number;
        total: number;
        paymentMethod: string;
    };
    shopInfo: {
        name: string;
        isChatActive?: boolean;
    };
    onChangePaymentMethod?: () => void;
    onPay?: () => void;
    onContinueShopping?: () => void;
    onViewOrder?: () => void;
}

const CheckoutResult: React.FC<CheckoutResultProps> = ({
    status,
    amount,
    orderDetails,
    customerInfo,
    product,
    paymentInfo,
    shopInfo,
    onChangePaymentMethod,
    onPay,
    onContinueShopping,
    onViewOrder
}) => {
    const isSuccess = status === 'success';

    return (
        <div className="max-w-2xl mx-auto space-y-4">
            {/* Status Header */}
            <div className="bg-white rounded-lg p-6">
                <div className="text-center">
                    <div className="mb-4">
                        {isSuccess ? (
                            <div className="flex justify-center">
                                <Image src={SuccessIcon} alt="success" width={64} height={64} />
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                <Image src={PendingIcon} alt="pending" width={64} height={64} />
                            </div>
                        )}
                    </div>

                    <h1 className={`text-xl font-semibold mb-2 ${isSuccess ? 'text-[#0CAF60]' : 'text-[#FFCD16]'}`}>
                        {isSuccess ? 'Payment successful' : 'Pending payment'}
                    </h1>

                    <div className="text-3xl font-bold text-gray-900">
                        ${amount.toFixed(2)}
                    </div>


                </div>

                {isSuccess && (
                    <div className="mt-4 bg-[#E4F4FF] rounded-lg p-3">
                        <p className="text-[#2F8CF9] text-base font-medium">
                            You have successfully paid 320$ for the order
                        </p>
                    </div>
                )}

                {!isSuccess && (
                    <div className="mt-4 bg-[#F8F8F8] rounded-sm p-3">
                        <p className="text-[#FFCD16] text-base font-medium">
                            Wait a moment the system is verifying
                        </p>
                    </div>
                )}

                {/* Payment Details */}
                <div className="space-y-3 mt-6">
                    <div className="flex justify-between items-center">
                        <span className="text-[#687588] text-base font-medium">Method</span>
                        <div className="flex items-center space-x-2">
                            <CreditCard className="w-4 h-4" />
                            <span className="font-semibold text-base text-[#111827]">{orderDetails.method}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-[#687588] text-base font-medium">Transaction date</span>
                        <span className="font-semibold text-base text-[#111827]">{orderDetails.transactionDate}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-[#687588] text-base font-medium">Transaction ID</span>
                        <span className="font-semibold text-base text-[#2F8CF9]">{orderDetails.transactionId}</span>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-xl text-[#111827]">Order Status</span>
                    <span className={`font-medium ${isSuccess ? 'text-[#0CAF60]' : 'text-[#FFCD16]'}`}>
                        {orderDetails.orderStatus}
                    </span>
                </div>

                <div className="flex justify-between items-center mb-2">
                    <span className="text-[#687588] text-base font-medium">Shipping Status</span>
                    <span className="font-medium text-[#FFCD16]">{orderDetails.shippingStatus}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-[#687588] text-base font-medium">Order time</span>
                    <span className="font-medium text-base text-[#687588]">{orderDetails.orderTime}</span>
                </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-xl text-[#111827] mb-3">Address</h3>

                <div className="space-y-1">
                    <div className="flex gap-2">
                        <span className="font-semibold text-base text-[#111827]">{customerInfo.name}</span>
                        <span className="font-semibold text-base text-[#687588]">{customerInfo.phone}</span>
                    </div>
                    <div className="text-[#687588] font-medium text-base">{customerInfo.address}</div>
                </div>
            </div>

            {/* Shop Info & Product */}
            <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                        <span className="font-semibold text-base text-[#111827]">{shopInfo.name}</span>
                        {shopInfo.isChatActive && (
                            <button className="flex items-center justify-center gap-1 space-x-1 text-[#DA1F27] border border-[#DA1F27] px-5 py-2 rounded-lg text-base font-medium cursor-pointer">
                                <span>Chat</span>
                                <Image src={ChatIcon} alt="chat" width={16} height={16} />
                            </button>
                        )}
                    </div>
                    <span className="text-[#687588] text-base font-medium">Order code: {orderDetails.orderCode}</span>
                </div>

                {/* Product */}
                <div className="flex items-center space-x-3 p-3 rounded-lg border-t border-[#E5E7EB] pt-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                        <div className="font-medium text-base text-[#111827]">{product.name}</div>
                        <div className="text-[#111827] text-base font-medium">x{product.quantity}</div>
                    </div>
                    <div className="font-medium text-base text-[#111827]">{product.price}$</div>
                </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Payment information</h3>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-[#687588] text-base font-medium">Subtotal (2 packages)</span>
                        <span className="font-medium text-base text-[#111827]">${paymentInfo.subtotal}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-[#687588] text-base font-medium">Discount voucher</span>
                        <span className="font-medium text-base text-[#111827]">${paymentInfo.discount}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-[#687588] text-base font-medium">Order Total</span>
                        <span className="font-bold text-2xl text-[#DA1F27]">${paymentInfo.total}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-[#687588] text-base font-medium">Payment method</span>
                        <span className="font-medium text-base text-[#111827]">{paymentInfo.paymentMethod}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-6">
                    {isSuccess ? (
                        <>
                            <button
                                onClick={onContinueShopping}
                                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            >
                                Continue Shopping
                            </button>
                            <button
                                onClick={onViewOrder}
                                className="flex-1 py-3 px-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                            >
                                View Order
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={onChangePaymentMethod}
                                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            >
                                Change payment method
                            </button>
                            <button
                                onClick={onPay}
                                className="flex-1 py-3 px-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                            >
                                Pay
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutResult;
