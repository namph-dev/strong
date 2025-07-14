"use client";

import { signIn } from "next-auth/react";
import FacebookIcon from "./icon/FacebookIcon";
import GoogleIcon from "./icon/GoogleIcon";
import TwitterIcon from "./icon/TwitterIcon";

export default function SocialButtons() {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => signIn("google")}
        className="cursor-pointer hover:shadow-sm transition px-[50px] py-[16px] bg-[#FAFAFA] rounded-[10px]"
      >
        <GoogleIcon />
      </button>

      <button
        onClick={() => signIn("facebook")}
        className="cursor-pointer hover:shadow-sm transition px-[50px] py-[16px] bg-[#FAFAFA] rounded-[10px]"
      >
        <FacebookIcon />
      </button>

      <button
        onClick={() => alert("Twitter not supported")}
        className="cursor-pointer hover:shadow-sm transition py-[16px] px-[50px] bg-[#FAFAFA] rounded-[10px]"
      >
        <TwitterIcon />
      </button>
    </div>
  );
}
