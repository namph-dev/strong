"use client";

import { useState } from "react";
import LocationSearch from "@/components/Map/location-search";
import { PlacePrediction } from "@/components/Map/map";

export default function TestingPage() {
    const [selectedPlace, setSelectedPlace] = useState<PlacePrediction | null>(null);

    const handlePlaceSelection = (place: PlacePrediction) => {
        setSelectedPlace(place);
        console.log("Selected place:", place);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Location Search Component Test
                    </h1>
                    <p className="text-gray-600">
                        Test tính năng tìm kiếm địa điểm với Google Places API
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        🗺️ Location Search Component
                    </h2>

                    <div className="mb-6">
                        <LocationSearch
                            label="Address"
                            onSelection={handlePlaceSelection}
                            className="max-w-md"
                        />
                    </div>

                    {/* Display selected result */}
                    {selectedPlace && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h3 className="text-lg font-medium text-blue-900 mb-3">
                                📍 Địa điểm đã chọn:
                            </h3>

                            <div className="space-y-2 text-sm">
                                <div>
                                    <span className="font-medium text-gray-700">Tên chính:</span>
                                    <span className="ml-2 text-gray-900">
                                        {selectedPlace.structured_formatting.main_text}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-medium text-gray-700">Mô tả phụ:</span>
                                    <span className="ml-2 text-gray-600">
                                        {selectedPlace.structured_formatting.secondary_text}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-medium text-gray-700">Mô tả đầy đủ:</span>
                                    <span className="ml-2 text-gray-900">
                                        {selectedPlace.description}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-medium text-gray-700">Place ID:</span>
                                    <span className="ml-2 text-gray-600 font-mono text-xs">
                                        {selectedPlace.place_id}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-medium text-gray-700">Loại:</span>
                                    <span className="ml-2">
                                        {selectedPlace.types.map((type, index) => (
                                            <span
                                                key={type}
                                                className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mr-1 mb-1"
                                            >
                                                {type}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Instructions */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        📋 Hướng dẫn test
                    </h2>

                    <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">1</span>
                            <span>Nhập ít nhất 3 ký tự để bắt đầu tìm kiếm</span>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">2</span>
                            <span>Dropdown sẽ hiển thị kết quả từ Google Places API</span>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">3</span>
                            <span>Click vào một địa điểm để chọn và xem thông tin chi tiết</span>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">4</span>
                            <span>Các tìm kiếm gần đây sẽ được lưu trong localStorage</span>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">5</span>
                            <span>Sử dụng nút X để xóa input hoặc xóa tìm kiếm gần đây</span>
                        </div>
                    </div>
                </div>

                {/* Features to test */}
                <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        ✅ Tính năng cần test
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-700">🔍 Search Features:</h3>
                            <ul className="space-y-1 text-gray-600 ml-4">
                                <li>• Debounce search (500ms)</li>
                                <li>• Loading state</li>
                                <li>• Error handling</li>
                                <li>• No results state</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-700">💾 Storage Features:</h3>
                            <ul className="space-y-1 text-gray-600 ml-4">
                                <li>• Recent searches (localStorage)</li>
                                <li>• Remove recent searches</li>
                                <li>• Max 5 recent items</li>
                                <li>• Duplicate prevention</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-700">🎨 UI Features:</h3>
                            <ul className="space-y-1 text-gray-600 ml-4">
                                <li>• Floating label</li>
                                <li>• Focus/blur states</li>
                                <li>• Clear input button</li>
                                <li>• Smooth animations</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-700">⌨️ Interaction:</h3>
                            <ul className="space-y-1 text-gray-600 ml-4">
                                <li>• Click to select</li>
                                <li>• Keyboard navigation</li>
                                <li>• Outside click to close</li>
                                <li>• Responsive design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
