"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ManagementTab =
    | 'overview'
    | 'member'
    | 'balance'
    | 'product'
    | 'service'
    | 'sbproduct'
    | 'order'
    | 'review'
    | 'setting';

interface ManagementContextType {
    activeTab: ManagementTab;
    setActiveTab: (tab: ManagementTab) => void;
}

const ManagementContext = createContext<ManagementContextType | undefined>(undefined);

export const useManagement = () => {
    const context = useContext(ManagementContext);
    if (!context) {
        throw new Error('useManagement must be used within ManagementProvider');
    }
    return context;
};

interface ManagementProviderProps {
    children: ReactNode;
}

export const ManagementProvider: React.FC<ManagementProviderProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<ManagementTab>('product');

    return (
        <ManagementContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </ManagementContext.Provider>
    );
}; 