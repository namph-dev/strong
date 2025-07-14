"use client";

import { useManagement } from "./context/ManagementContext";
import ProductsTab from "./ProductsTab";


export default function ContentRenderer() {
    const { activeTab } = useManagement();

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="min-h-screen p-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Overview</h1>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-600">Overview content will be displayed here.</p>
                        </div>
                    </div>
                );

            case 'member':
                return (
                    <div className="min-h-screen p-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Member Management</h1>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-600">Member management content will be displayed here.</p>
                        </div>
                    </div>
                );

            case 'balance':
                return (
                    <div className="min-h-screen p-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Balance</h1>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-600">Balance content will be displayed here.</p>
                        </div>
                    </div>
                );

            case 'product':
                return <ProductsTab />;

            case 'service':
                return (
                    <div className="min-h-screen p-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">My Services</h1>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-600">Service management content will be displayed here.</p>
                        </div>
                    </div>
                );

            case 'sbproduct':
                return (
                    <div className="min-h-screen p-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">My SB Products</h1>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-600">SB Product management content will be displayed here.</p>
                        </div>
                    </div>
                );

            case 'order':
                return (
                    <div className="min-h-screen p-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Orders</h1>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-600">Order management content will be displayed here.</p>
                        </div>
                    </div>
                )

            case 'review':
                return (
                    <div className="min-h-screen p-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Reviews</h1>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-600">Review management content will be displayed here.</p>
                        </div>
                    </div>
                );

            case 'setting':
                return (
                    <div className="min-h-screen p-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Settings</h1>
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-600">Settings content will be displayed here.</p>
                        </div>
                    </div>
                );

            default:
                return <ProductsTab />;
        }
    };

    return renderContent();
} 