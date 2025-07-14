import React from 'react';

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 pb-3 lg:pb-4 ">
                {children}
            </div>
        </div>
    );
}
