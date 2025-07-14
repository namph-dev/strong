import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function NotificationSettings() {
    const [notifications, setNotifications] = useState({
        general: true,
        orderUpdates: true,
        promotions: true,
    });

    const toggle = (key: keyof typeof notifications) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-6 p-6 ">
            <div className="flex items-center justify-between">
                <span className="text-base font-medium">Notification</span>
                <Switch
                    checked={notifications.general}
                    onCheckedChange={() => toggle("general")}
                />
            </div>

            <div className="flex items-center justify-between">
                <span className="text-base">Order update notification</span>
                <Switch
                    checked={notifications.orderUpdates}
                    onCheckedChange={() => toggle("orderUpdates")}
                />
            </div>

            <div className="flex items-center justify-between">
                <span className="text-base">Promotion announcement</span>
                <Switch
                    checked={notifications.promotions}
                    onCheckedChange={() => toggle("promotions")}
                />
            </div>
        </div>
    );
}
