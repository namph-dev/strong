/* eslint-disable react/no-unescaped-entities */
"use client";

import SocialButtons from "./components/SocialButtons";
import LoginForm from "./components/LoginForm";

interface ModalLoginProp {
  setScreen: (screen: string) => void;
}

const ModalLogin: React.FC<ModalLoginProp> = ({ setScreen }) => {
  return (
    <>
      <LoginForm setScreen={setScreen} />

      <p className="font-normal text-[18px] leading-[32px] text-[#111827] text-center">Or login with</p>

      <SocialButtons />

      <p className="flex items-center justify-center gap-1 text-center text-[#687588] font-normal text-[16px]">
        Don't have an account?
        <span
          className="hover:underline text-[14px] font-medium text-black cursor-pointer"
          onClick={() => setScreen("signup")}
        >
          Sign Up
        </span>
      </p>
    </>
  );
}

export default ModalLogin;