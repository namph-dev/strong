"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { login } from "@/api/auth";
import { signIn } from "next-auth/react";

interface LoginFormProp {
  setScreen: (screen: string) => void;
}

const LoginForm: React.FC<LoginFormProp> = ({ setScreen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{
    email: string;
    password: string;
  }>({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: "/"
      });
      
    } catch (error) {
      console.error("Login error:", error);
      // TODO: Show error UI
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[24px]">
      {/* Email */}
      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email format",
            },
          })}
          className={`
            rounded-[10px] font-normal text-[16px] leading-[24px]
            ${errors.email ? "border-red-500" : "border-[#8F95A0]"}
          `}
        />
        {errors.email && (
          <p className="mt-[8px] text-[12px] text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
            className={`
            rounded-[10px] font-normal text-[16px] leading-[24px]
            ${errors.password ? "border-red-500" : "border-[#8F95A0]"}
          `}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 curdor-pointer"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {errors.password && (
          <p className="mt-[8px] text-[12px] text-red-500">{errors.password.message}</p>
        )}

        <div className="flex items-center justify-between mt-[8px]">
          <label className="flex items-center gap-[8px] text-[#6B7280] text-[14px]">
            <input type="checkbox" />
            Remember me
          </label>

          <p
            className="font-light text-[14px] leading-[20px] text-[#3C93FA] italic hover:underline cursor-pointer"
            onClick={() => setScreen("forgotPassword")}
          >
            Forgot Password?
          </p>
        </div>
      </div>

      <Button
        type="submit"
        disabled={!isValid || loading}
        className={`
          w-full py-[12px] rounded-[10px] text-[18px] font-semibold leading-[32px]
          ${!isValid || loading
            ? "bg-[#E8E8E8] text-[#687588] cursor-not-allowed"
            : "bg-[#1F2C43] text-white cursor-pointer"}
        `}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;