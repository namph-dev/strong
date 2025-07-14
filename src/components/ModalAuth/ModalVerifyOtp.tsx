import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useEffect, useRef, useState } from "react"

interface ModalVerifyOtpProp {
  setScreen: (scrren: string) => void
  emailVerify: string
}

const ModalVerifyOtp: React.FC<ModalVerifyOtpProp> = ({
  setScreen,
  emailVerify,
}) => {
  const inputRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement>(null)
  )
  const [resendTimer, setResendTimer] = useState(300)
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""))

  // Countdown resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [resendTimer])

  // Update OTP state
  const updateOtpValue = () => {
    const newOtp = inputRefs.map((ref) => ref.current?.value ?? "")
    setOtpValues(newOtp)
  }

  // Chỉ cho phép số và tự focus
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "")
    e.target.value = value

    if (value && index < 5) {
      inputRefs[index + 1].current?.focus()
    }

    updateOtpValue()
  }

  // Di chuyển ngược lại khi xoá
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handleSubmit = () => {
    const code = otpValues.join("")
    console.log("Submitted Code:", code)
  }

  const handleResend = () => {
    setResendTimer(300)
  }

  return (
    <DialogContent className="max-w-[632px] max-h-[90%] rounded-[16px] overflow-y-scroll scrollbar-hide">
      <DialogHeader>
        <DialogTitle className="font-bold text-[24px] leading-[36px]">
          Enter Verification Code
        </DialogTitle>

        <p className="text-[16px] leading-[24px] text-[#111827] font-normal">
          We sent a confirmation email to:
        </p>

        <b className="text-[16px] leading-[24px] text-[#111827] font-bold">
          {emailVerify}
        </b>

        <p className="text-[16px] leading-[24px] text-[#111827] font-normal">
          Check your email and enter the confirmation code to continue
        </p>
      </DialogHeader>

      {/* OTP Input */}
      <div className="flex justify-center gap-3 mt-2">
        {inputRefs.map((ref, index) => (
          <Input
            key={index}
            ref={ref}
            type="text"
            inputMode="numeric"
            maxLength={1}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onBlur={updateOtpValue}
            className={`
              w-[50px] h-[64px] text-center text-[20px] font-semibold
              border border-gray-300 rounded-[10px]
              focus:ring-2 focus:ring-[#3B82F6] focus:outline-none
            `}
          />
        ))}
      </div>

      {/* Resend */}
      <p className="flex justify-between text-[16px] mt-2">
        If you didn't receive a code...
        <button
          className="text-blue-500 hover:underline"
          disabled={resendTimer > 0}
          onClick={handleResend}
        >
          Resend{" "}
          {resendTimer > 0 &&
            `(${Math.floor(resendTimer / 60)}:${String(
              resendTimer % 60
            ).padStart(2, "0")})`}
        </button>
      </p>

      {/* Send Button */}
      <Button
        onClick={handleSubmit}
        disabled={otpValues.some((v) => v === "")}
        className={`
          w-full py-[12px] text-lg rounded-[8px]
          ${
            otpValues.some((v) => v === "")
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#1F2C43] text-white cursor-pointer"
          }
        `}
      >
        Send
      </Button>

      <p className="font-normal text-[14px] leading-[20px] text-[#687588] text-center">
        By joining, you agree to the StrongBody Terms of Service and our use of
        your data as described in the Privacy Policy. You may receive occasional
        emails from us.
      </p>
    </DialogContent>
  )
}

export default ModalVerifyOtp