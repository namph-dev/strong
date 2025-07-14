import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface Option {
    label: string;
    value: string;
}

interface CustomDropdownProps {
    label: string;
    value?: string;
    placeholder?: string;
    options: Option[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
}

export function CustomDropdown({
    label,
    value,
    placeholder = "Select...",
    options,
    onChange,
    className = "",
    children,
    disabled = false
}: CustomDropdownProps) {
    return (
        <div className="relative w-full">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10">
                {label}
            </label>
            {children ? (
                <div className={`w-full rounded-xl border border-gray-400 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500 ${className}`}>
                    {children}
                </div>
            ) : (
                <div className="relative">
                    <select
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        className={`w-full appearance-none rounded-xl border border-gray-400 px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 ${className}`}
                    >
                        <option value="" disabled hidden>{placeholder}</option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
            )}
        </div>
    );
}
