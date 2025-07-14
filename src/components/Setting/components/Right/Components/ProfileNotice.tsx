'use client';

import { useEffect, useState } from "react";

export function ProfileNotice() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("profile_notice_dismissed");
    if (dismissed === "true") {
      setIsOpen(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("profile_notice_dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="flex items-start justify-between rounded-xl bg-gray-100 border border-gray-300 px-4 py-3 text-sm text-gray-800">
      {/* Bên trái: icon + nội dung */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-semibold">
          !
        </div>
        <div>
          <p className="font-semibold text-gray-900">
            This is your profile when ordering services and products.
          </p>
          <p>
            For your store profile,{" "}
            <a href="#" className="underline font-medium">
              click here
            </a>.
          </p>
        </div>
      </div>

      {/* Bên phải: Dismiss */}
      <button
        className="text-sm hover:underline text-gray-900 hover:text-gray-700 cursor-pointer"
        onClick={handleDismiss}
      >
        Dismiss
      </button>
    </div>
  );
}