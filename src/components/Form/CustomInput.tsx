import { Pencil } from "lucide-react";
import { ReactNode, useState } from "react";

interface CustomInputProps {
    label: string;
    value?: string;
    placeholder?: string;
    type?: string;
    showPencil?: boolean;
    className?: string;
    children?: ReactNode;
    rows?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export function CustomInput({
    label,
    value = "",
    placeholder,
    type = "text",
    showPencil = false,
    className = "",
    children,
    rows,
    onChange,
    onFocus,
    onBlur,
    leftIcon,
    rightIcon
}: CustomInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const showFloating = isFocused || (value && value.length > 0);

    const handleFocus = () => {
        setIsFocused(true);
        onFocus?.();
    };

    const handleBlur = () => {
        setIsFocused(false);
        onBlur?.();
    };

    return (
        <div className="relative w-full">
            {children ? null : rows ? (
                <label
                    className={`absolute left-3 z-10 bg-white px-1 text-base transition-all duration-200 pointer-events-none
                        -top-2
                        ${showFloating ? "text-gray-500" : "text-gray-400"}`}
                >
                    {label}
                </label>
            ) : (
                <label
                    className={`absolute left-3 z-10 bg-white px-1 text-sm text-gray-500 transition-all duration-200 pointer-events-none
                        ${showFloating ? "-top-2 scale-100" : "top-1/2 -translate-y-1/2 scale-100 text-base text-gray-400"}`}
                >
                    {label}
                </label>
            )}
            {children ? (
                <div className={`w-full rounded-xl border border-gray-400 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500 ${className}`}>
                    {children}
                </div>
            ) : rows ? (
                <textarea
                    value={value}
                    rows={rows}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`w-full ${showPencil ? 'pr-10' : ''} rounded-xl border border-gray-400 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500 resize-none ${className}`}
                />
            ) : (
                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                            {leftIcon}
                        </div>
                    )}
                    <input
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={`w-full ${leftIcon ? 'pl-10' : 'pl-4'} ${rightIcon || showPencil ? 'pr-10' : 'pr-4'} py-4 rounded-xl border border-gray-400 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500 ${className}`}
                    />
                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                            {rightIcon}
                        </div>
                    )}
                </div>
            )}
            {showPencil && (
                <Pencil className="absolute right-3 top-4 h-4 w-4 text-gray-400 pointer-events-none" />
            )}
        </div>
    );
}
