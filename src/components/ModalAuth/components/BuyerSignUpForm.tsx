"use client";

import { signup } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const BuyerSignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ email: string, password: string, username: string }>({
    mode: "onChange",
  });

  const onSubmit = async (data: { email: string; password: string; username: string }) => {
    try {
      const response = await signup(data.email, data.password, data.username);
      console.log(response)
      if (response?.code === 0) {
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          callbackUrl: "/",
        });
      } else {
        console.error("Signup failed with message:", response?.message || "Unknown error");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[24px]">
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
        <p className="text-[12px] text-red-500 mt-[8px]">{errors.email.message}</p>
      )}

      <Input
        type="username"
        placeholder="Public Username"
        {...register("username", {
          required: "Public Usernamer is required",
          pattern: {
            value: /^.{3,}$/,
            message: "Username must be at least 3 characters",
          }
        })}
        className={`
            rounded-[10px] font-normal text-[16px] leading-[24px]
            ${errors.username ? "border-red-500" : "border-[#8F95A0]"}
          `}
      />

      {errors.username && (
        <p className="text-[12px] text-red-500 mt-[8px]">{errors.username.message}</p>
      )}

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
      <Button
        type="submit"
        disabled={!isValid}
        className={`
            w-full py-[12px] rounded-[10px] text-[18px] font-semibold leading-[32px]
            ${!isValid
            ? "bg-[#E8E8E8] text-[#687588] cursor-not-allowed"
            : "bg-[#1F2C43] text-white cursor-pointer"}
          `}
      >
        Next
      </Button>
    </form>
  );
}

export default BuyerSignUpForm;