"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import img from '@/assets/images/backgrounds/not-found-404.png';

export default function Avatar() {

    return (
        <div className="flex items-center space-x-6">
            {/* Avatar */}
            <div className="w-20 h-20 relative">
                <Image
                    src={img}
                    alt="Avatar"
                    fill
                    className="rounded-full object-cover border border-gray-200"
                />
            </div>

            {/* Tên và nút */}
            <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">DuyAnh</h2>
                <Button variant="secondary" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 w-fit flex justify-items-center items-center gap-2 ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="white" />
                        <path d="M16.8314 9.41047C16.7614 9.24047 16.6214 9.10047 16.4514 9.03047C16.3714 9.00047 16.2814 8.98047 16.1914 8.98047H14.3314C13.9414 8.98047 13.6314 9.29047 13.6314 9.68047C13.6314 10.0705 13.9414 10.3805 14.3314 10.3805H14.5114L12.4014 12.4905L11.3814 10.9705C11.2614 10.8005 11.0814 10.6805 10.8714 10.6605C10.6514 10.6405 10.4614 10.7105 10.3114 10.8605L7.33141 13.8405C7.06141 14.1105 7.06141 14.5505 7.33141 14.8305C7.47141 14.9705 7.64141 15.0305 7.82141 15.0305C8.00141 15.0305 8.18141 14.9605 8.31141 14.8305L10.6914 12.4505L11.7114 13.9705C11.8314 14.1405 12.0114 14.2605 12.2214 14.2805C12.4414 14.3005 12.6314 14.2305 12.7814 14.0805L15.5014 11.3605V11.5405C15.5014 11.9305 15.8114 12.2405 16.2014 12.2405C16.5914 12.2405 16.9014 11.9305 16.9014 11.5405V9.67047C16.8814 9.58047 16.8714 9.49047 16.8314 9.41047Z" fill="#0CAF60" />
                    </svg>
                    Upgrade Pro
                </Button>
            </div>
        </div>
    );
}
