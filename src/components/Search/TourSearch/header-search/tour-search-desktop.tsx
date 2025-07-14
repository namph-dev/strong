"use client";
import * as React from "react";

import { usePathname, useRouter } from "next/navigation";
import { ValueProps } from "../LocationInput";

import { useTranslations } from "next-intl";
import HeaderLocationInput from "./header-location-input";
import { locales } from "@/navigation";
export interface ITourSearchMobileProps {
  className?: string;
}

export default function TourSearchDesktop({
  className,
}: ITourSearchMobileProps) {
  const t = useTranslations("index");
  const pathname = usePathname();
  const router = useRouter();
  const [error, setError] = React.useState<boolean>(false);


  const handleSelectLocation = (values: ValueProps) => {

  };

  const localesRegex = new RegExp(`^\/(${locales.join("|")})(\/)?$`);
  const isHome = localesRegex.test(pathname) || pathname === "/";

  // Check if current path is a landing page
  const isLandingPage = pathname.includes('/landing/');


  return (
    <>
      {!isHome && !isLandingPage && (
        <div className={`flex flex-col gap-5 ${className && className}`}>
          <HeaderLocationInput
            handleSelect={handleSelectLocation}

            error={error}

          />
        </div>
      )}
    </>
  );
}
