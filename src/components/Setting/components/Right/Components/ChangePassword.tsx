'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { changePassword } from "@/api/auth";

export default function PasswordStepForm({ user }: { user: any }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = async () => {
    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await changePassword(user.accessToken, password, newPassword);
      alert("Password changed successfully!");
      setPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Password hiện tại */}
      <div className="relative w-full">
        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10">
          Current Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pr-10 rounded-xl border border-gray-400 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Mật khẩu mới */}
      <div className="relative w-full">
        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10">
          New Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full pr-10 rounded-xl border border-gray-400 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Xác nhận mật khẩu mới */}
      <div className="relative w-full">
        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10">
          Confirm New Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="w-full pr-10 rounded-xl border border-gray-400 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Nút Submit */}
      <div className="flex justify-end">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
