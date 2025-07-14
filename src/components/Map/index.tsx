'use client';

import React, { useMemo, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import type { MapProps, MapContainerStyle } from './map';

// Re-export types for backward compatibility
export type { LocationData } from './map';

const Map: React.FC<MapProps> = ({
    locationData,
    height = '400px',
    width = '100%',
    zoom = 15,
    className = '',
    showInfoWindow = true,
    onMarkerClick
}) => {
    const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    // Style for map container
    const containerStyle: MapContainerStyle = useMemo(() => ({
        width,
        height
    }), [width, height]);

    // Center position and marker from locationData
    const center = useMemo(() => {
        if (locationData?.data?.data?.result?.geometry?.location) {
            return {
                lat: locationData.data.data.result.geometry.location.lat,
                lng: locationData.data.data.result.geometry.location.lng
            };
        }
        // Default position (London, UK)
        return {
            lat: 51.5074,
            lng: -0.1278
        };
    }, [locationData]);

    const [showInfo, setShowInfo] = React.useState(showInfoWindow);

    // Handle marker click
    const handleMarkerClick = useCallback(() => {
        setShowInfo(true);
        if (onMarkerClick && locationData?.data?.data?.result) {
            onMarkerClick(locationData.data.data.result);
        }
    }, [onMarkerClick, locationData]);




    if (!googleApiKey) {
        return (
            <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ height, width }}>
                <div className="text-center text-gray-600">
                    <p className="text-lg font-medium">Unable to load map</p>
                </div>
            </div>
        );
    }

    return (
        <div className={className}>
            <LoadScript
                googleMapsApiKey={googleApiKey}
                language="en"
                region="US"
                loadingElement={
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg" style={{ height, width }}>
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="text-gray-600 mt-2">Loading map...</p>
                        </div>
                    </div>
                }
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoom}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: true,
                        fullscreenControl: false,
                        rotateControl: false,
                        scaleControl: false,
                        panControl: false,
                        gestureHandling: 'cooperative',
                    }}
                >
                    {locationData?.data?.data?.result && (
                        <>
                            <Marker
                                position={center}
                                onClick={handleMarkerClick}
                                title={locationData.data.data.result.name || locationData.data.data.result.formatted_address}
                            />
                        </>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
