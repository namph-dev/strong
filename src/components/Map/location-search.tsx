"use client";
import * as React from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useSWR from "swr";
import useDebounce from "@/hooks/useDebounce";
import useLocalStorage from "@/hooks/useLocalStorage";
import { getGooglePlacesAutocomplete } from "@/api/places";
import { CustomInput } from "@/components/Form/CustomInput";
import LoadingSpinner from "@/components/loading/loadingSpiner";
import { MapPin, Clock, X } from "lucide-react";
import {
    PlacePrediction,
    GooglePlacesApiResponse,
    GooglePlacesResponse,
    LocationSearchProps
} from "./map";



export default function LocationSearch({
    onSelection,
    className = "",
    label = "Address"
}: LocationSearchProps) {
    const [searchValue, setSearchValue] = React.useState("");
    const [selected, setSelected] = React.useState<PlacePrediction | null>(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const debouncedQuery = useDebounce(searchValue, 500);
    const [recentSearches, setRecentSearches] = useLocalStorage<PlacePrediction[]>("recent-locations", []);

    const {
        data: searchResults,
        error,
        isLoading,
    } = useSWR<GooglePlacesResponse>(
        debouncedQuery && debouncedQuery.length > 2 ? `places-${debouncedQuery}` : null,
        async () => {
            const response: GooglePlacesApiResponse = await getGooglePlacesAutocomplete(debouncedQuery);

            // Check API response
            if (response.code !== 0) {
                throw new Error(response.message || "API request failed");
            }

            if (response.data.data.status !== "OK") {
                throw new Error(`Google Places API error: ${response.data.data.status}`);
            }

            // Transform API response to expected format
            return {
                predictions: response.data.data.predictions,
                status: response.data.data.status
            };
        },
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            errorRetryCount: 2
        }
    );

    const handleSelection = (place: PlacePrediction) => {
        if (place && place.description) {
            setSelected(place);
            setSearchValue(place.description);
            setIsOpen(false);

            // Add to recent searches
            addToRecentSearches(place);

            // Call callback
            onSelection?.(place);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        setSelected(null);
        setIsOpen(value.length > 0);
    };

    const handleInputFocus = () => {
        setIsFocused(true);
        setIsOpen(searchValue.length > 0 || recentSearches.length > 0);
    };

    const handleInputBlur = () => {
        // Delay blur to allow clicks on dropdown
        setTimeout(() => {
            setIsFocused(false);
            setIsOpen(false);
        }, 200);
    };

    const addToRecentSearches = (place: PlacePrediction) => {
        setRecentSearches(prev => {
            const filtered = prev.filter(item => item.place_id !== place.place_id);
            return [place, ...filtered].slice(0, 5); // Keep only 5 recent searches
        });
    };

    const removeFromRecentSearches = (placeId: string) => {
        setRecentSearches(prev => prev.filter(item => item.place_id !== placeId));
    };

    const handleRecentSearchClick = (place: PlacePrediction) => {
        handleSelection(place);
    };

    const clearInput = () => {
        setSearchValue("");
        setSelected(null);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            <Combobox value={selected || ""} onChange={handleSelection}>
                <div className="relative">
                    {/* Custom Input with Location Icon */}
                    <CustomInput
                        label={label}
                        value={searchValue}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        rightIcon={
                            searchValue ? (
                                <button
                                    onClick={clearInput}
                                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                    type="button"
                                >
                                    <X className="h-4 w-4 text-gray-400" />
                                </button>
                            ) : null
                        }
                    />

                    {/* Dropdown */}
                    <Transition
                        show={isOpen && (isFocused || searchValue.length > 0)}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Combobox.Options
                            static
                            className="absolute mt-2 max-h-80 w-full overflow-auto rounded-xl bg-white py-2 text-base shadow-lg border border-gray-200 focus:outline-none z-[9999]"
                        >
                            {/* Recent Searches */}
                            {!debouncedQuery && recentSearches.length > 0 && (
                                <>
                                    <div className="px-3 py-2 border-b border-gray-100">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                            Recent Searches
                                        </p>
                                    </div>
                                    {recentSearches.map((place) => (
                                        <div key={place.place_id} className="relative cursor-pointer select-none hover:bg-gray-50">
                                            <div
                                                className="flex items-center justify-between gap-4 px-4 py-3 mx-2 rounded-lg"
                                                onClick={() => handleRecentSearchClick(place)}
                                            >
                                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                                        <Clock className="w-4 h-4 text-gray-500" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium text-gray-900 truncate">
                                                            {place.structured_formatting.main_text}
                                                        </div>
                                                        <div className="text-xs text-gray-500 truncate">
                                                            {place.structured_formatting.secondary_text}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeFromRecentSearches(place.place_id);
                                                    }}
                                                    className="flex-shrink-0 w-6 h-6 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
                                                >
                                                    <X className="w-3 h-3 text-gray-400" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                            {/* Loading State */}
                            {isLoading && debouncedQuery && (
                                <div className="py-8 text-center">
                                    <LoadingSpinner />
                                    <p className="text-sm text-gray-500 mt-2">Đang tìm kiếm địa điểm...</p>
                                </div>
                            )}

                            {/* Search Results */}
                            {searchResults && searchResults.predictions && searchResults.predictions.length > 0 && (
                                <>
                                    {recentSearches.length > 0 && (
                                        <div className="mx-4 border-t border-gray-100 my-2" />
                                    )}
                                    <div className="px-3 py-2 border-b border-gray-100">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                            Search Results ({searchResults.predictions.length})
                                        </p>
                                    </div>
                                    {searchResults.predictions.map((place) => (
                                        <Combobox.Option
                                            key={place.place_id}
                                            className={({ active }) =>
                                                `relative cursor-pointer select-none transition-all duration-150 ${active
                                                    ? "bg-gradient-to-r from-blue-50 to-blue-100/50"
                                                    : "hover:bg-gray-50"
                                                }`
                                            }
                                            value={place}
                                        >
                                            {({ selected, active }) => (
                                                <div className="flex items-center gap-3 px-4 py-3 mx-2 rounded-lg">
                                                    {/* Location Icon */}
                                                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${active
                                                        ? "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600"
                                                        : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600"
                                                        }`}>
                                                        <MapPin className="w-5 h-5" />
                                                    </div>

                                                    {/* Place Info */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className={`text-sm font-medium mb-1 truncate ${selected ? "text-blue-700" : "text-gray-900"
                                                            }`}>
                                                            {place.structured_formatting.main_text}
                                                        </div>
                                                        <div className="text-xs text-gray-500 truncate">
                                                            {place.structured_formatting.secondary_text}
                                                        </div>
                                                    </div>

                                                    {/* Selected Indicator */}
                                                    {selected && (
                                                        <div className="flex-shrink-0">
                                                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                                                <div className="w-2 h-2 bg-white rounded-full" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </Combobox.Option>
                                    ))}
                                </>
                            )}

                            {/* No Results */}
                            {debouncedQuery && searchResults && searchResults.predictions && searchResults.predictions.length === 0 && !isLoading && (
                                <div className="py-8 text-center">
                                    <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">
                                        Không tìm thấy địa điểm nào cho &ldquo;{debouncedQuery}&rdquo;
                                    </p>
                                </div>
                            )}

                            {/* Error State */}
                            {error && (
                                <div className="py-8 text-center">
                                    <div className="text-red-500 text-sm">
                                        Có lỗi xảy ra khi tìm kiếm địa điểm
                                        {process.env.NODE_ENV === 'development' && (
                                            <div className="text-xs text-gray-500 mt-1">
                                                {error.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
