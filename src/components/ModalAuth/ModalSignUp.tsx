"use client";

import { useState } from "react";
import SwitchRoleButtons from "./components/SwitchRoleButtons";
import BuyerSignUpForm from "./components/BuyerSignUpForm";
import SocialButtons from "./components/SocialButtons";
import SellerSignUpForm from "./components/SellerSignUpForm";

interface ModalSignUpProp {
  setScreen: (screen: string) => void;
}

const ModalSignUp: React.FC<ModalSignUpProp> = ({ setScreen }) => {
  const [role, setRole] = useState("buyer");

  return (
    <>
      <SwitchRoleButtons setRole={setRole} role={role} />

      {role === "buyer" && <BuyerSignUpForm />}

      {role === "seller" && <SellerSignUpForm />}

      <p className="font-normal text-[18px] leading-[32px] text-[#111827] text-center">Or login with</p>

      <SocialButtons />

      <p className="flex items-center justify-center gap-1 text-center text-[#687588] font-normal text-[16px]">
        Already have an account?
        <span 
          className="hover:underline text-[14px] font-medium text-black cursor-pointer"
          onClick={() => {setScreen("login")}}
        >
            Login
        </span>
      </p>
    </>
  );
}

export default ModalSignUp;