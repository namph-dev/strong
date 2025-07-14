import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DocUploadIcon from '@/assets/Product/Icon/MainFunctionIcon/docupload.svg';

interface FileUploadProps {
    documents: File[];
    setDocuments: React.Dispatch<React.SetStateAction<File[]>>;
    helperText?: string;
    highlight_text?: string;
    help_text?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ documents, setDocuments, helperText, highlight_text, help_text }) => {
    const [dragOverDoc, setDragOverDoc] = useState(false);

    // Document upload handlers
    const handleDocDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOverDoc(true);
    };

    const handleDocDragLeave = () => {
        setDragOverDoc(false);
    };

    const handleDocDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOverDoc(false);
        const files = Array.from(e.dataTransfer.files).filter(file =>
            file.type.includes('pdf') ||
            file.type.includes('doc') ||
            file.type.includes('docx') ||
            file.type.includes('txt') ||
            file.type.includes('image/')
        );
        setDocuments((prev: File[]) => [...prev, ...files]);
    };

    const handleDocSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).filter(file =>
                file.type.includes('pdf') ||
                file.type.includes('doc') ||
                file.type.includes('docx') ||
                file.type.includes('txt') ||
                file.type.includes('image/')
            );
            setDocuments((prev: File[]) => [...prev, ...files]);
        }
    };

    // Xóa document
    const removeDocument = (index: number) => {
        setDocuments((prev: File[]) => prev.filter((_: File, i: number) => i !== index));
    };

    // Lấy icon cho từng loại file
    const getFileIcon = (fileType: string) => {
        if (fileType.includes('pdf')) return '📄';
        if (fileType.includes('doc')) return '📝';
        if (fileType.includes('image')) return '🖼️';
        return '📋';
    };

    return (
        <div>
            <label
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors block ${dragOverDoc ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                style={{ backgroundColor: dragOverDoc ? '#EBF8FF' : '#FAFAFA' }}
                onDragOver={handleDocDragOver}
                onDragLeave={handleDocDragLeave}
                onDrop={handleDocDrop}
            >
                <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,image/*"
                    multiple
                    className="hidden"
                    onChange={handleDocSelect}
                />
                <Image src={DocUploadIcon} alt="upload" className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">
                    {highlight_text || help_text ? (
                        <>
                            <span style={{ color: '#DA1F27' }}>{highlight_text || ''}</span>
                            <span>{help_text || ''}</span>
                        </>
                    ) : helperText ? (
                        helperText
                    ) : (
                        <>
                            Upload or drag and drop documents<br />
                            Supports: License, Certificates, Product Specifications, Homepage
                        </>
                    )}
                </p>
            </label>

            {/* Hiển thị danh sách documents đã upload */}
            {documents.length > 0 && (
                <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium text-gray-700">Uploaded Documents:</p>
                    <div className="space-y-2">
                        {documents.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                                <div className="flex items-center gap-3">
                                    {/* Nếu là hình ảnh thì hiển thị preview, ngược lại hiển thị icon */}
                                    {file.type.includes('image') ? (
                                        <Image
                                            src={URL.createObjectURL(file)}
                                            alt={file.name}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 object-cover rounded border"
                                        />
                                    ) : (
                                        <span className="text-lg">{getFileIcon(file.type)}</span>
                                    )}
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                                        <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeDocument(index)}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
