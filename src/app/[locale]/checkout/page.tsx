'use client'
import CheckoutComponent from './checkout';
import OrderSummary from './summary';

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 py-6">


                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Checkout Details */}
                    <div className="lg:col-span-2">
                        <CheckoutComponent />
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-1">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}