"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import ModalSignUp from "./ModalSignUp";
import ModalLogin from "./ModalLogin";
import ModalForgotPassword from "./ModalForgotPassword";
import ModalVerifyOtp from "./ModalVerifyOtp";

interface AuthDialogProp {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

const AuthDialog: React.FC<AuthDialogProp> = ({ open, onOpenChange }) => {
  const [emailVerify, setEmailVerify] = useState('');
  const [screen, setScreen] = useState('login');

  useEffect(() => {
    setScreen("login");
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {screen === "forgotPassword" && <ModalForgotPassword setScreen={setScreen} setEmailVerify={setEmailVerify} />}
      {screen === "verifyOtp" && <ModalVerifyOtp setScreen={setScreen} emailVerify={emailVerify} />}
      {screen !== "forgotPassword" && screen !== "verifyOtp" &&
        <DialogContent className="max-w-[632px] max-h-[90%] rounded-[16px] overflow-y-scroll scrollbar-hide">
          <DialogHeader>
            <DialogTitle className="font-bold text-[40px] leading-[60px] text-[#DA1F27]">
              StrongBody.AI
            </DialogTitle>
            <p className="text-[16px] leading-[24px] text-[#111827] font-normal">
              StrongBody.AI connects you instantly to global health experts,
              anytime anywhere with diverse options across countries
            </p>
          </DialogHeader>

          {screen === "signup" && <ModalSignUp setScreen={setScreen} />}

          {screen === "login" && <ModalLogin setScreen={setScreen} />}

          <p className="font-normal text-[14px] leading-[20px] text-[#687588] text-center">
            By joining, you agree to the StrongBody Terms of Service and our use of your data as described in the Privacy Policy.
            You may receive occasional emails from us.
          </p>
        </DialogContent>
      }
    </Dialog>
  );
}

export default AuthDialog;