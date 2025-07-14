"use client";

import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TabItem {
    id: string;
    label: string;
    count?: number;
    content: ReactNode;
}

interface CustomTabsProps {
    tabs: TabItem[];
    activeTab: string;
    onTabChange: (value: string) => void;
    className?: string;
    tabListClassName?: string;
    tabTriggerClassName?: string;
    tabContentClassName?: string;
    showCounts?: boolean;
    variant?: "default" | "red-accent";
    showBorder?: boolean;
}

export default function CustomTabs({
    tabs,
    activeTab,
    onTabChange,
    className = "w-full flex-1 flex flex-col",
    tabListClassName = "w-full justify-start bg-transparent border-none rounded-none p-0 flex-wrap gap-0 h-auto",
    tabTriggerClassName,
    tabContentClassName = "mt-0 p-0 flex-1 overflow-y-auto",
    showCounts = true,
    variant = "default",
    showBorder = true
}: CustomTabsProps) {

    const getTabTriggerClass = () => {
        const baseClass = "relative px-2 md:px-4 py-2 text-base font-normal transition-colors border-b-2 rounded-none flex-shrink-0 border-transparent hover:text-gray-700 hover:border-gray-300 bg-transparent";

        if (variant === "red-accent") {
            return `${baseClass} data-[state=active]:text-red-600 data-[state=active]:font-bold data-[state=active]:text-lg data-[state=active]:border-red-600`;
        }

        return `${baseClass} data-[state=active]:text-blue-600 data-[state=active]:font-bold data-[state=active]:border-blue-600`;
    };

    return (
        <Tabs value={activeTab} onValueChange={onTabChange} className={className}>
            <div className={`overflow-hidden flex-shrink-0 px-4 md:px-6 ${showBorder ? 'border-b border-gray-200' : ''}`}>
                <TabsList className={tabListClassName}>
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.id}
                            value={tab.id}
                            className={tabTriggerClassName || getTabTriggerClass()}
                        >
                            <span className="truncate">{tab.label}</span>
                            {showCounts && typeof tab.count !== 'undefined' && (
                                <span className="ml-1 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                                    {tab.count}
                                </span>
                            )}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>

            {tabs.map((tab) => (
                <TabsContent
                    key={tab.id}
                    value={tab.id}
                    className={tabContentClassName}
                >
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    );
}
