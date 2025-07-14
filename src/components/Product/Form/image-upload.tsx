import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GalleryExportIcon from '@/assets/Product/Icon/MainFunctionIcon/gallery-export.svg';
import TrashIcon from '@/assets/Product/Icon/MainFunctionIcon/trash.svg';

interface ImageUploadProps {
    productImages: File[];
    setProductImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ productImages, setProductImages }) => {
    const [dragOverImage, setDragOverImage] = useState(false);

    // Image upload handlers
    const handleImageDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOverImage(true);
    };

    const handleImageDragLeave = () => {
        setDragOverImage(false);
    };

    const handleImageDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOverImage(false);
        const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
        setProductImages((prev: File[]) => [...prev, ...files]);
    };

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
            setProductImages((prev: File[]) => [...prev, ...files]);
        }
    };

    // Xóa image
    const removeImage = (index: number) => {
        setProductImages((prev: File[]) => prev.filter((_: File, i: number) => i !== index));
    };

    return (
        <div className="flex gap-4 items-center mb-8">

            {/* Image previews */}
            {productImages.slice(0, 3).map((file, idx) => {
                // Overlay for the 3rd image if there are more images
                const isLast = idx === 2 && productImages.length > 3;
                return (
                    <div
                        key={idx}
                        className={`relative w-40 h-40 rounded-lg border ${isLast ? 'bg-[#E9EAEC]' : 'bg-white'} flex items-center justify-center overflow-hidden`}
                    >
                        <Image
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            fill
                            className="object-contain rounded-lg"
                        />
                        {/* Overlay for extra images */}
                        {isLast && (
                            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold backdrop-blur-sm">
                                <div className="bg-gray bg-opacity-10 px-3 py-1 rounded-full">
                                    {`+${productImages.length - 2}`}
                                </div>
                            </div>
                        )}
                        {/* Action buttons: delete & reorder, bottom right */}
                        <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={e => { e.preventDefault(); removeImage(idx); }}
                                className="w-8 h-8 p-0 bg-white shadow text-red-500 border border-gray-200 rounded-full cursor-pointer"
                                title="Delete"
                            >
                                <Image src={TrashIcon} alt="trash" width={18} height={18} />
                            </Button>
                        </div>
                    </div>
                );
            })}

            {/* Upload box (always last) */}
            <label
                className={`border-2 border-dashed rounded-lg w-40 h-40 flex flex-col items-center justify-center cursor-pointer transition-colors ${dragOverImage ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-[#F4F5F7]'}`}
                onDragOver={handleImageDragOver}
                onDragLeave={handleImageDragLeave}
                onDrop={handleImageDrop}
            >
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageSelect}
                />
                <Image src={GalleryExportIcon} alt="upload" className="w-10 h-10 text-gray-400 mb-2" />
            </label>
            {/* Guide text - căn giữa theo chiều dọc */}
            {productImages.length === 0 && (
                <div className="flex-1 text-base text-gray-600 flex flex-col justify-center">
                    <ul className="space-y-1">
                        <li className="before:content-['•'] before:text-gray-600 before:mr-2">Upload images for more impressions and sales opportunities.</li>
                        <li className="before:content-['•'] before:text-gray-600 before:mr-2">Square product photo size.</li>
                        <li className="before:content-['•'] before:text-gray-600 before:mr-2">You should include at least 2 images to fully represent your product</li>
                    </ul>

                </div>
            )}
        </div>
    );
};

export default ImageUpload;
