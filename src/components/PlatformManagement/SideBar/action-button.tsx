"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ActionButton() {
    const t = useTranslations("management.action_buttons");

    return (
        <div className="p-3 md:p-4 bg-white mt-auto">
            <div className="space-y-2">
                <Button
                    variant="outline"
                    className="w-full text-[#1F2C43] border-[#1F2C43] text-base font-medium hover:bg-gray-200"
                    onClick={() => console.log("My Shop clicked")}
                >
                    {t("my_blog")}
                </Button>
                <Button
                    variant="outline"
                    className="w-full text-[#DA1F27] border-[#DA1F27] hover:bg-red-700 text-base font-medium hover:text-white"
                    onClick={() => console.log("Start engagement clicked")}
                >
                    {t("start_management")}
                </Button>
            </div>
        </div>
    );
}
