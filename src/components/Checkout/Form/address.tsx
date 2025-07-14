"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { CustomInput } from '@/components/Form/CustomInput';
import LocationSearch from '@/components/Map/location-search';
import { PlacePrediction, GooglePlacesDetailsResponse, createLocationDataFromCoordinates } from '@/components/Map/map';
import { getGooglePlacesDetails } from '@/api/places';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';

// Import Map component dynamically to prevent SSR issues
const Map = dynamic(() => import('@/components/Map/index'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                <p className="text-gray-600">Loading map...</p>
            </div>
        </div>
    ),
});

interface AddressFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSave?: (addressData: AddressFormData) => void;
    initialData?: Partial<AddressFormData>;
    title?: string;
}

interface AddressFormData {
    fullName: string;
    phone: string;
    address: string;
    specificAddress: string;
    isDefault: boolean;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

export default function AddressForm({ isOpen, onClose, onSave, initialData, title = "Edit Address" }: AddressFormProps) {
    const [formData, setFormData] = useState<AddressFormData>({
        fullName: initialData?.fullName || '',
        phone: initialData?.phone || '',
        address: initialData?.address || '',
        specificAddress: initialData?.specificAddress || '',
        isDefault: initialData?.isDefault || false,
        coordinates: initialData?.coordinates // Don't set default coordinates to show placeholder initially
    });

    const [selectedLocation, setSelectedLocation] = useState<PlacePrediction | null>(null);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);

    const handleInputChange = (field: keyof AddressFormData, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleLocationSelect = async (place: PlacePrediction) => {
        setSelectedLocation(place);
        setFormData(prev => ({
            ...prev,
            specificAddress: place.description
        }));

        // Fetch detailed coordinates from Google Places Details API
        setIsLoadingLocation(true);
        try {
            const response: GooglePlacesDetailsResponse = await getGooglePlacesDetails(place.place_id);

            if (response.code === 0 && response.data.data.status === "OK") {
                const { result } = response.data.data;
                const { geometry, formatted_address } = result;

                setFormData(prev => ({
                    ...prev,
                    coordinates: {
                        lat: geometry.location.lat,
                        lng: geometry.location.lng
                    },
                    // Update address with detailed formatted address from API
                    address: formatted_address,
                    specificAddress: formatted_address
                }));

                console.log('Location updated:', {
                    coordinates: geometry.location,
                    address: formatted_address,
                    place_name: result.name
                });
            } else {
                console.error('Failed to get place details:', response);
                // Clear coordinates if API fails to show placeholder
                setFormData(prev => ({
                    ...prev,
                    coordinates: undefined
                }));
            }
        } catch (error) {
            console.error('Error fetching place details:', error);
            // Clear coordinates if API fails to show placeholder
            setFormData(prev => ({
                ...prev,
                coordinates: undefined
            }));
        } finally {
            setIsLoadingLocation(false);
        }
    };

    const handleSave = () => {
        onSave?.(formData);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl min-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold text-[#111827] mb-3">
                        {title}
                    </DialogTitle>
                </DialogHeader>

                {/* Form Content */}
                <div className="space-y-4">
                    {/* Full Name and Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <CustomInput
                                label="Full name"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label="Phone"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <CustomInput
                            label="Address"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                    </div>

                    {/* Specific Address with Location Search */}
                    <div>
                        <LocationSearch
                            label="Specific address"
                            onSelection={handleLocationSelect}
                            className="w-full"
                        />
                    </div>

                    {/* Map Display or Placeholder */}
                    <div className="rounded-xl overflow-hidden border border-gray-200 relative">
                        {formData.specificAddress && formData.coordinates ? (
                            <>
                                {isLoadingLocation && (
                                    <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
                                        <div className="flex items-center gap-2">
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                                            <span className="text-sm text-gray-600">Loading location...</span>
                                        </div>
                                    </div>
                                )}
                                <Map
                                    locationData={createLocationDataFromCoordinates(
                                        formData.coordinates.lat,
                                        formData.coordinates.lng,
                                        formData.specificAddress || formData.address || 'Selected Location'
                                    )}
                                    height="300px"
                                    zoom={15}
                                    className="w-full"
                                />
                            </>
                        ) : (
                            <div className="w-full h-[300px] bg-gray-100 flex flex-col items-center justify-center text-gray-500">
                                <div className="w-12 h-12 rounded-full border-2 border-gray-400 border-dashed flex items-center justify-center mb-3">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium">Add location</p>
                                <p className="text-xs text-gray-400 mt-1">Search for a specific address to see it on the map</p>
                            </div>
                        )}
                    </div>

                    {/* Set as Default Checkbox */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="default-address"
                            checked={formData.isDefault}
                            onChange={(e) => handleInputChange('isDefault', e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                            htmlFor="default-address"
                            className="text-sm font-medium text-[#687588]"
                        >
                            Set as default address
                        </label>
                    </div>
                </div>

                <DialogFooter>
                    <button
                        onClick={handleSave}
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white text-base font-medium py-3 px-4 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    >
                        Save Change
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
