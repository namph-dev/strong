"use client";
import * as React from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useSWR from "swr";
import useDebounce from "@/hooks/useDebounce";
import useLocalStorage from "@/hooks/useLocalStorage";
import { searchByKeyword } from "@/api/search";
import { IconSearch, IconCheck } from "@/components/icons";
import LoadingSpinner from "@/components/loading/loadingSpiner";
import { SearchResult, SearchComboboxProps, SearchApiResponse } from "@/types/search";
import Image from "next/image";
import { getTypeIcon } from "../type-icons";
import { useRouter } from "next/navigation";
import { buildNavigationUrl } from "./searchRoute";

export default function SearchCombobox({
    onSelection,
    onSearch,
    placeholder = "Post request today",
    className = "",
}: SearchComboboxProps) {
    const [searchValue, setSearchValue] = React.useState("");
    const [selected, setSelected] = React.useState<SearchResult | null>(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const debouncedQuery = useDebounce(searchValue, 500);
    const [recentSearches, setRecentSearches] = useLocalStorage<string[]>("recent-searches", []);
    const router = useRouter();

    const {
        data: searchResults,
        error,
        isLoading,
    } = useSWR<SearchApiResponse>(
        debouncedQuery ? `search-${debouncedQuery}` : null,
        () => searchByKeyword(debouncedQuery),
        { revalidateOnFocus: false, revalidateOnReconnect: false }
    );



    const handleSelection = (value: SearchResult) => {
        if (value && value.name) {
            setSelected(value);
            setSearchValue(value.name);

            // Navigate to the appropriate page
            const url = buildNavigationUrl(value);
            if (url !== "/") {
                router.push(url);
            }

            // Still call the original callback if provided
            onSelection?.(value);
        }
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        // Reset selected state when user types
        setSelected(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchValue.trim()) {
            handleSearch(searchValue);
        }
    };

    const addToRecentSearches = (term: string) => {
        if (!term.trim()) return;

        setRecentSearches(prev => {
            const filtered = prev.filter(item => item.toLowerCase() !== term.toLowerCase());
            return [term, ...filtered].slice(0, 5); // Keep only 5 recent searches
        });
    };

    const removeFromRecentSearches = (term: string) => {
        setRecentSearches(prev => prev.filter(item => item !== term));
    };

    const handleSearch = (term: string) => {
        if (term.trim()) {
            addToRecentSearches(term.trim());
            onSearch?.(term);
        }
    };

    const handleRecentSearchClick = (term: string) => {
        setSearchValue(term);
        handleSearch(term);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        // Delay blur to allow clicks on recent searches
        setTimeout(() => {
            setIsFocused(false);
            // Reset selected state when clicking outside
            setSelected(null);
        }, 200);
    };



    return (
        <div className={`relative ${className}`}>
            <Combobox value={selected || ""} onChange={handleSelection}>
                <div>
                    <Combobox.Button className="w-full cursor-pointer">
                        <div className="relative flex w-full cursor-default items-center gap-x-2 sm:gap-x-3 overflow-hidden rounded-xl border-2 border-gray-400 bg-white px-3 sm:px-4 py-3 sm:py-4 text-left">
                            <div className="text-gray-400">
                                <IconSearch className="h-4 w-4 sm:h-5 sm:w-5 fill-gray-400" />
                            </div>
                            <Combobox.Input
                                ref={inputRef}
                                className="w-full border-none text-sm sm:text-base leading-6 text-gray-900 outline-none placeholder-gray-500 focus:ring-0 min-w-[150px] md:min-w-[300px] lg:min-w-[600px]"
                                placeholder={placeholder}
                                autoComplete="off"
                                displayValue={() => searchValue}
                                onChange={handleChangeInput}
                                onKeyDown={handleKeyDown}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                    </Combobox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                    >
                        <Combobox.Options className="absolute mt-2 max-h-[500px] w-full overflow-auto rounded-xl bg-white py-2 text-base shadow-lg focus:outline-none sm:text-sm z-50 border border-gray-100">
                            {/* Recent Searches */}
                            {!debouncedQuery && isFocused && recentSearches.length > 0 && (
                                <>
                                    <div className="px-2 sm:px-3 py-2 border-b border-gray-100">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                            Tìm kiếm gần đây
                                        </p>
                                    </div>
                                    {recentSearches.map((term, index) => (
                                        <div key={term} className="relative cursor-pointer select-none hover:bg-gray-50">
                                            <div className="flex items-center justify-between gap-4 px-3 sm:px-4 py-3 mx-1 sm:mx-2 rounded-lg"
                                                onClick={() => handleRecentSearchClick(term)}>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm text-gray-700">{term}</span>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeFromRecentSearches(term);
                                                    }}
                                                    className="flex-shrink-0 w-6 h-6 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
                                                >
                                                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {index < recentSearches.length - 1 && (
                                                <div className="mx-2 sm:mx-4 border-t border-gray-100" />
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}

                            {isLoading && (
                                <div className="py-8 text-center">
                                    <LoadingSpinner />
                                </div>
                            )}

                            {searchResults &&
                                searchResults.data &&
                                searchResults.data.data &&
                                searchResults.data.data.length > 0 && (
                                    <>
                                        <div className="px-2 sm:px-3 py-2 border-b border-gray-100">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                                Kết quả tìm kiếm ({searchResults.data.data.length})
                                            </p>
                                        </div>
                                        {searchResults.data.data.map((result: SearchResult, index: number) => (
                                            <Combobox.Option
                                                key={`${result.id}-${result.name}`}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none transition-all duration-150 ${active
                                                        ? "bg-gradient-to-r from-blue-50 to-blue-100/50 text-gray-900"
                                                        : "text-gray-900 hover:bg-gray-50"
                                                    }`
                                                }
                                                value={result}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <div className="flex items-center gap-6 sm:gap-6 px-3 sm:px-4 py-3 sm:py-3 mx-1 sm:mx-2 rounded-lg">
                                                            {/* Enhanced Icon or Image */}
                                                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 relative">
                                                                {result.type === "service" && result.images ? (
                                                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden ring-1 ring-gray-200">
                                                                        <Image
                                                                            src={result.images}
                                                                            alt={result.name || ""}
                                                                            fill
                                                                            sizes="(max-width: 640px) 40px, 48px"
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-colors ${result.type === "seller"
                                                                        ? "bg-gradient-to-br from-green-100 to-green-200 text-green-600"
                                                                        : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600"
                                                                        }`}>
                                                                        {getTypeIcon(result.type || "")}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="flex-1 min-w-0 overflow-hidden">
                                                                <span className={`block text-xs sm:text-sm font-medium mb-0.5 sm:mb-1 truncate ${selected ? "text-blue-700" : "text-gray-900"
                                                                    }`}>
                                                                    {result.name}
                                                                </span>
                                                                {result.description && (
                                                                    <p className="text-xs text-gray-500 truncate hidden sm:block">
                                                                        {result.description}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {selected && (
                                                                <div className="flex-shrink-0">
                                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                                                        <IconCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" aria-hidden="true" />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        {index < searchResults.data.data.length - 1 && (
                                                            <div className="mx-2 sm:mx-4 border-t border-gray-100" />
                                                        )}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </>
                                )}

                            {/* Search Action */}
                            {debouncedQuery && (
                                <div className="sticky bottom-0 mt-2 border-t border-gray-100 bg-white">
                                    <div className="flex cursor-pointer select-none items-center gap-2 py-2 pl-2 sm:pl-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                                        onClick={() => handleSearch(searchValue)}>
                                        <IconSearch className="h-4 w-4 fill-orange-500" />
                                        <span className="text-xs sm:text-sm">
                                            Search for <span className="font-semibold">&ldquo;{searchValue}&rdquo;</span>
                                        </span>
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