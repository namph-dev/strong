"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SellerSignUpForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{
    email: string;
    username: string;
    occupation: string;
    country: string;
    password: string;
  }>({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany",
    "France", "Japan", "South Korea", "Singapore", "Vietnam", "Thailand",
    "Malaysia", "Indonesia", "Philippines", "India", "China"
  ];

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

      {/* UserName */}
      <div>
        <Input
          type="text"
          placeholder="Public username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters"
            }
          })}
          className={`
            rounded-[10px] font-normal text-[16px] leading-[24px]
            ${errors.username ? "border-red-500" : "border-[#8F95A0]"}
          `}
        />

        {errors.username ? (
          <p className="mt-[8px] text-[12px] text-red-500">{errors.username.message}</p>
        ) : (<p className="mt-[8px] text-[12px] text-[#C6C6C6]">You can’t change your username, so choose wisely</p>)}
      </div>

      {/* Occupation & Country */}
      <div className="flex gap-[24px]">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Occupation"
            {...register("occupation", {
              required: "Occupation is required"
            })}
            className={`
                 rounded-[10px] font-normal text-[16px] leading-[24px]
                 ${errors.occupation ? "border-red-500" : "border-[#8F95A0]"}
              `}
          />
          {errors.occupation && (
            <p className="mt-[8px] text-[12px] text-red-500">{errors.occupation.message}</p>
          )}
        </div>

        <div className="flex-1">
          <div className="relative">
            <select
              {...register("country", {
                required: "Country is required",
              })}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className={`
                w-full px-[16px] pr-[40px] py-[10px]
                rounded-[10px] font-normal text-[16px] leading-[24px]
                ${selectedCountry ? "text-gray-900" : "text-gray-400"}
                bg-white border focus:outline-none focus:ring-2 focus:ring-[#2083C6]
                ${errors.country ? "border-red-500" : "border-[#8F95A0]"}
              `}>
              <option value="" disabled>
                Your country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          {errors.country && (
            <p className="mt-[8px] text-[12px] text-red-500">{errors.country.message}</p>
          )}
        </div>
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {errors.password && (
          <p className="mt-[8px] text-[12px] text-red-500">{errors.password.message}</p>
        )}
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
        SignUp
      </Button>
    </form>
  );
};

export default SellerSignUpForm;