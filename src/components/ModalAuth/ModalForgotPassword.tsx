import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ModalForgotPassword {
  setScreen: (screen: string) => void;
  setEmailVerify: (email: string) => void;
}

const ModalForgotPassword: React.FC<ModalForgotPassword> = ({ setScreen, setEmailVerify }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ email: string }>({
    mode: "onChange",
  });

  const onSubmit = (data: { email: string }) => {
    setEmailVerify(data.email);
    setScreen("verifyOtp");
  };

  return (
    <DialogContent className="max-w-[632px] max-h-[90%] rounded-[16px] overflow-y-scroll scrollbar-hide">
      <DialogHeader>
        <DialogTitle className="font-bold text-[24px] leading-[36px]">
          Forgot Password
        </DialogTitle>
        <p className="text-[16px] leading-[24px] text-[#111827] font-normal">
          Enter the email associated with your account and we'll send an email with instructions to reset your password.
        </p>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Button
          type="submit"
          disabled={!isValid}
          className={`
            w-full mt-[24px] py-[12px] rounded-[10px] text-[18px] font-semibold leading-[32px]
            ${!isValid
              ? "bg-[#E8E8E8] text-[#687588] cursor-not-allowed"
              : "bg-[#1F2C43] text-white cursor-pointer"}
          `}
        >
          Send Instructions
        </Button>
      </form>
    </DialogContent>
  )
}

export default ModalForgotPassword;