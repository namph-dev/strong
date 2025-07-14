import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, GlobeIcon, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import LogoSvg from '@/assets/images/resources/logo.svg';

interface LandingFooterProps {
    variant?: 'fitness' | 'nutrition' | 'wellness' | 'minimal';
}

export default function LandingFooter({ variant = 'minimal' }: LandingFooterProps) {
    return (
        <footer className="bg-white py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
                    {/* Logo and Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-6">
                            <Image
                                src={LogoSvg}
                                alt="StrongBody"
                                width={132}
                                height={35}
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-start">
                                <MapPinIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">
                                    105 CECIL STREET #18 - 20 THE OCTAGON
                                    <br />
                                    SINGAPORE 069534
                                </span>
                            </div>
                            <div className="flex items-center">
                                <GlobeIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                                <span className="text-sm">www.strongbody.vn</span>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">About</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/careers" className="hover:text-gray-900">Careers</Link></li>
                            <li><Link href="/experts-blogs" className="hover:text-gray-900">Our Expert Blogs</Link></li>
                            <li><Link href="/partnerships" className="hover:text-gray-900">Partnerships</Link></li>
                            <li><Link href="/terms" className="hover:text-gray-900">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Buyer Information */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Buyer Information</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/messages" className="hover:text-gray-900">Messages</Link></li>
                            <li><Link href="/favourites" className="hover:text-gray-900">Favourites</Link></li>
                            <li><Link href="/listings" className="hover:text-gray-900">Listings</Link></li>
                            <li><Link href="/experts" className="hover:text-gray-900">Experts</Link></li>
                        </ul>
                    </div>

                    {/* Support & Education */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Support & Education</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/help" className="hover:text-gray-900">Help & Support</Link></li>
                            <li><Link href="/trust-safety" className="hover:text-gray-900">Trust & Safety</Link></li>
                            <li><Link href="/learn" className="hover:text-gray-900">Learn</Link></li>
                            <li><Link href="/request" className="hover:text-gray-900">Request</Link></li>
                            <li><Link href="/refer" className="hover:text-gray-900">Refer a friend</Link></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/contact" className="hover:text-gray-900">Contact Us</Link></li>
                            <li><Link href="/legal" className="hover:text-gray-900">Legal</Link></li>
                            <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
                            <li><Link href="/terms-service" className="hover:text-gray-900">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600 mb-4 md:mb-0">
                            © Strongbody SG International Ltd. 2024
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                                <span className="w-5 h-5 flex items-center justify-center bg-gray-400 text-white text-xs font-bold">P</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 