'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

interface LayoutProviderProps {
    children: React.ReactNode;
    locale: string;
}

export default function LayoutProvider({ children, locale }: LayoutProviderProps) {
    const pathname = usePathname();

    // Check if current path is a landing page
    const isLandingPage = pathname.includes('/landing/');

    if (isLandingPage) {
        // Landing pages: no header/footer wrapper, no padding
        return (
            <main className="main min-h-screen">
                {children}
            </main>
        );
    }

    // Regular pages: with header/footer
    return (
        <>
            <Header locale={locale} />
            <main className="main pt-[55px] md:pt-[80px]">{children}</main>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="border-t border-gray-200">
                    <Footer />
                </div>
            </Suspense>
        </>
    );
} 