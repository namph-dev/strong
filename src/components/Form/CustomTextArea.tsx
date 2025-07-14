import { Pencil } from "lucide-react";
import { ReactNode, useState, useRef, useEffect } from "react";

interface CustomTextAreaProps {
    label: string;
    value?: string;
    placeholder?: string;
    showPencil?: boolean;
    className?: string;
    children?: ReactNode;
    rows?: number;
    minRows?: number;
    maxRows?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    readOnly?: boolean;
}

export function CustomTextArea({
    label,
    value = "",
    placeholder,
    showPencil = false,
    className = "",
    children,
    rows = 4,
    minRows = 3,
    maxRows = 10,
    resize = 'none',
    onChange,
    onFocus,
    onBlur,
    disabled = false,
    readOnly = false
}: CustomTextAreaProps) {
    const [isFocused, setIsFocused] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const showFloating = isFocused || (value && value.length > 0);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        // Reset height to auto to get the correct scrollHeight
        textarea.style.height = 'auto';

        // Calculate new height based on content
        const scrollHeight = textarea.scrollHeight;
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 24;

        // Calculate min and max heights
        const minHeight = (minRows || 3) * lineHeight;
        const maxHeight = (maxRows || 10) * lineHeight;

        // Set height within constraints
        const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
        textarea.style.height = `${newHeight}px`;

        // Enable scroll only if content exceeds maxHeight
        textarea.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
    };

    useEffect(() => {
        adjustHeight();
    }, [value, minRows, maxRows]);

    const handleFocus = () => {
        setIsFocused(true);
        onFocus?.();
    };

    const handleBlur = () => {
        setIsFocused(false);
        onBlur?.();
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e);
        // Adjust height after content changes
        setTimeout(() => adjustHeight(), 0);
    };

    const textareaStyle = {
        minHeight: minRows ? `${minRows * 1.5}rem` : undefined,
        maxHeight: maxRows ? `${maxRows * 1.5}rem` : undefined,
        resize: resize,
        overflow: 'hidden' as const,
        transition: 'height 0.1s ease'
    };

    return (
        <div className="relative w-full">
            <label
                className={`absolute left-3 z-10 bg-white px-1 text-sm transition-all duration-200 pointer-events-none -top-2
                    ${showFloating ? "text-gray-500" : "text-gray-400"}
                    ${disabled ? "text-gray-300" : ""}`}
            >
                {label}
            </label>

            {children ? (
                <div className={`w-full rounded-xl border border-gray-400 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500 ${className}`}>
                    {children}
                </div>
            ) : (
                <textarea
                    ref={textareaRef}
                    value={value}
                    placeholder={placeholder}
                    rows={rows}
                    style={textareaStyle}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    readOnly={readOnly}
                    className={`w-full ${showPencil ? 'pr-10' : ''} rounded-xl border border-gray-400 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors duration-200
                        ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}
                        ${readOnly ? 'bg-gray-50' : ''}
                        ${className}`}
                />
            )}

            {showPencil && (
                <Pencil className={`absolute right-3 top-4 h-4 w-4 pointer-events-none
                    ${disabled ? 'text-gray-300' : 'text-gray-400'}`} />
            )}
        </div>
    );
}
