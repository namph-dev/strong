"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PhoneIcon, MenuIcon } from 'lucide-react';
import { useState } from 'react';

interface LandingHeaderProps {
    locale: string;
    variant?: 'fitness' | 'nutrition' | 'wellness' | 'minimal';
}

export default function LandingHeader({ locale, variant = 'minimal' }: LandingHeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const getHeaderStyle = () => {
        switch (variant) {
            case 'fitness':
                return 'bg-blue-600 text-white';
            case 'nutrition':
                return 'bg-green-600 text-white';
            case 'wellness':
                return 'bg-purple-600 text-white';
            default:
                return 'bg-white text-gray-900 shadow-sm';
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 ${getHeaderStyle()}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/img/logo-mix.png"
                            alt="StrongBody"
                            width={140}
                            height={40}
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="hover:opacity-75 transition-opacity">
                            Home
                        </Link>
                        <Link href="/about" className="hover:opacity-75 transition-opacity">
                            About
                        </Link>
                        <Link href="/services" className="hover:opacity-75 transition-opacity">
                            Services
                        </Link>
                        <Link href="/contact" className="hover:opacity-75 transition-opacity">
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="tel:+1234567890" className="flex items-center text-sm hover:opacity-75">
                            <PhoneIcon className="w-4 h-4 mr-2" />
                            Call Now
                        </a>
                        <Button
                            size="sm"
                            className={variant === 'minimal' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white text-gray-900 hover:bg-gray-100'}
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <MenuIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-opacity-20">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" className="hover:opacity-75 transition-opacity">
                                Home
                            </Link>
                            <Link href="/about" className="hover:opacity-75 transition-opacity">
                                About
                            </Link>
                            <Link href="/services" className="hover:opacity-75 transition-opacity">
                                Services
                            </Link>
                            <Link href="/contact" className="hover:opacity-75 transition-opacity">
                                Contact
                            </Link>
                            <div className="pt-4 border-t border-opacity-20">
                                <Button size="sm" className="w-full">
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
} 