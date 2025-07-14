import React from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

const InputText: React.FC<InputTextProps> = ({
    placeholder = "What service are you looking for today?",
    className = "",
    ...props
}) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm ${className}`}
            {...props}
        />
    );
};

export default InputText; 