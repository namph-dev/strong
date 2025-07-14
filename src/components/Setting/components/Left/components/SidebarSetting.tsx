"use client";

import { useState } from "react";
import {
    Home,
    Package,
    Heart,
    HelpCircle,
    Wallet,
    Grid,
    Flag,
    Users,
    LineChart,
    Bell,
    DollarSign,
    Settings,
} from "lucide-react";
import clsx from "clsx";

const menuItems = [
    { label: "My profile", icon: Home },
    { label: "My order Product", icon: Package },
    { label: "My order Service", icon: Heart },
    { label: "Manage requests", icon: HelpCircle },
    { label: "My Balance", icon: Wallet },
    { label: "Personal space", icon: Grid },
    { label: "Affiliate", icon: Flag },
    { label: "Manage your Referrals", icon: Users },
    { label: "multi.Me modes", icon: LineChart },
    { label: "Notifications", icon: Bell, badge: 5 },
    { label: "Lion point", icon: DollarSign },
    { label: "Setting", icon: Settings },
];

export default function SidebarSetting() {
    const [active, setActive] = useState("Setting");

    return (
        <div className="space-y-3 p-4 text-sm">
            {menuItems.map(({ label, icon: Icon, badge }) => (
                <button
                    key={label}
                    onClick={() => setActive(label)}
                    className={clsx(
                        "flex items-center justify-between w-full text-left px-2 py-2 rounded-md hover:bg-gray-100 group cursor-pointer",
                        active === label ? "text-red-500 font-semibold" : "text-gray-800"
                    )}
                >
                    <span className="flex items-center space-x-3">
                        <Icon
                            className={clsx("w-5 h-5", active === label ? "stroke-red-500" : "stroke-current")}
                        />
                        <span>{label}</span>
                    </span>

                    {badge && (
                        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                            {badge}
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
}
