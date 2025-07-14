"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import img from "@/assets/images/backgrounds/not-found-404.png";
import imgCloud from "@/assets/images/backgrounds/cloud.png";



const messages = [
    {
        name: "StrongBody",
        text: "Hey! Just wanted to check in and s...",
        time: "5 minutes ago",
        avatar: img,
        online: true,
    },
    {
        name: "User – Buyer’s name",
        text: "Haha that's terrifying 😂",
        time: "20 minutes ago",
        avatar: img,
        online: true,
    },
    {
        name: "User – Buyer’s name",
        text: "You: Haha that's terrifying 😂",
        time: "20 minutes ago",
        avatar: img,
        online: true,
    },
    {
        name: "User – Buyer’s name",
        text: "You: Haha that's terrifying 😂",
        time: "20 minutes ago",
        avatar: img,
        online: true,
    },
    {
        name: "User – Buyer’s name",
        text: "You: Haha that's terrifying 😂",
        time: "20 minutes ago",
        avatar: img,
        online: true,
    },
];

export default function MessageList() {
    return (
        <div className="p-4">
            <Input
                placeholder="Search messages"
                className="mb-4 rounded-full px-4 py-2"
            />

            {/* My cloud riêng biệt */}
            <div className="flex items-start space-x-3 mb-4">
                <div className="relative w-12 h-12">
                    <Image
                        src={imgCloud}
                        alt="My cloud"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-sm text-blue-600">My cloud</p>
                        <span className="w-4 h-4 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                            1
                        </span>
                    </div>
                    <p className="text-sm text-gray-700 truncate">
                        I’d love to hear what’s new…
                    </p>
                    <p className="text-xs text-gray-400">20 minutes ago</p>
                </div>
            </div>

            {/* Scrollable message list */}
            <ScrollArea className="max-h-[400px] pr-2">
                <div className="space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                            <div className="relative w-12 h-12">
                                <Image
                                    src={msg.avatar}
                                    alt={msg.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                                {msg.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                                )}
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-sm text-gray-900">
                                        {msg.name}
                                    </p>
                                </div>
                                <p className="text-sm text-gray-700 truncate">{msg.text}</p>
                                <p className="text-xs text-gray-400">{msg.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
