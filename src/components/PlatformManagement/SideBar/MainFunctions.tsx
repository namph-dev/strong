"use client";

import { mainFunctionIconMap } from "./iconMap";
import { useTranslations } from "next-intl";
import { useManagement, ManagementTab } from "../context/ManagementContext";
import MainFuncIcon from '@/assets/Product/Icon/MainFunctionIcon/element-3.svg';
import Image from "next/image";

interface FunctionItemProps {
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

const FunctionItem = ({ icon, label, isActive, onClick }: FunctionItemProps) => (
    <div
        className={`flex flex-col items-center justify-center p-3 md:p-4 lg:p-5 rounded-lg cursor-pointer transition-all ${isActive
            ? 'bg-[#FFEDEC] text-[#DA1F27]'
            : 'bg-white shadow-sm'
            }`}
        onClick={onClick}
    >
        <div className="mb-2 md:mb-3">
            {icon}
        </div>
        <span className="text-xs font-bold  text-center leading-tight">{label}</span>
    </div>
);

export default function MainFunctions() {
    const t = useTranslations("management.main_functions");
    const { activeTab, setActiveTab } = useManagement();

    const functions = [
        // Row 1
        {
            icon: mainFunctionIconMap.overview,
            label: t("overview"),
            tab: 'overview' as ManagementTab,
        },
        {
            icon: mainFunctionIconMap.member,
            label: t("member"),
            tab: 'member' as ManagementTab,
        },
        {
            icon: mainFunctionIconMap.balance,
            label: t("balance"),
            tab: 'balance' as ManagementTab,
        },
        // Row 2
        {
            icon: mainFunctionIconMap.product,
            label: t("my_product"),
            tab: 'product' as ManagementTab,
        },
        {
            icon: mainFunctionIconMap.service,
            label: t("my_service"),
            tab: 'service' as ManagementTab,
        },
        {
            icon: mainFunctionIconMap.sbproduct,
            label: t("my_sb_product"),
            tab: 'sbproduct' as ManagementTab,
        },
        // Row 3
        {
            icon: mainFunctionIconMap.order,
            label: t("orders"),
            tab: 'order' as ManagementTab,
        },
        {
            icon: mainFunctionIconMap.review,
            label: t("review"),
            tab: 'review' as ManagementTab,
        },
        {
            icon: mainFunctionIconMap.setting,
            label: t("setting"),
            tab: 'setting' as ManagementTab,
        },
    ];

    return (
        <div className="p-4 md:p-5 lg:p-6 bg-white">
            <h3 className="text-base font-bold mb-4 md:mb-5 flex gap-2 items-center justify-center">
                <Image src={MainFuncIcon} width={20} height={20} alt="Main Function Icon" />
                {t("title")}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {functions.map((func, index) => (
                    <FunctionItem
                        key={index}
                        icon={func.icon}
                        label={func.label}
                        isActive={activeTab === func.tab}
                        onClick={() => setActiveTab(func.tab)}
                    />
                ))}
            </div>
        </div>
    );
}
