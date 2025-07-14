"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";

export default function UserProfile() {
    const t = useTranslations("management.user_profile");

    return (
        <div className="p-4 bg-white">
            {/* Header với avatar và tên */}
            <div className="flex items-start space-x-4 mb-6">
                <Avatar className="h-16 w-16 bg-gray-200">
                    <AvatarImage src="/img/demo/author_profile.png" alt="User" />
                    <AvatarFallback className="text-gray-600 text-lg">
                        👤
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h1 className="text-xl font-bold mb-2 leading-[30px]">
                        Mr. Name
                    </h1>
                    <div className="flex items-center gap-9">
                        <span className="text-xs font-normal px-2 py-1 rounded-md" style={{ backgroundColor: '#F1F2F4' }}>
                            {t("profile_expert")}
                        </span>
                        <button className="bg-[#354156] text-white text-xs px-4 py-2 rounded-lg flex items-center space-x-2 font-medium hover:bg-gray-700 transition-colors">
                            <span>📈</span>
                            <span>{t("upgrade_pro")}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Thống kê */}
            <div className="mb-1">
                <div className="flex items-center justify-between py-1">
                    <span className="text-[#111827] text-sm font-normal">{t("post")}</span>
                    <span className="text-gray-400">-</span>
                </div>
                <div className="flex items-center justify-between py-1">
                    <span className="text-[#111827] text-sm font-normal">{t("views")}</span>
                    <span className="text-gray-400">-</span>
                </div>
                <div className="flex items-center justify-between py-1">
                    <span className="text-[#111827] text-sm font-normal">{t("contact")}</span>
                    <span className="text-gray-400">-</span>
                </div>
            </div>

            {/* Nút Switch Platform */}
            <button className="w-full py-2 border rounded-lg text-[#1F2C43] text-base font-medium hover:bg-gray-50 transition-colors">
                {t("switch_platform")}
            </button>
        </div>
    );
}
