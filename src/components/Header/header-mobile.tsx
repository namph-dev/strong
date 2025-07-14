"use client";
import { locales } from "@/navigation";
import { SiteProps, UserSession } from "@/types";
import { usePathname } from "next/navigation";
import * as React from "react";
import { IconBars3, IconChevronDown, IconCircleUser, IconMark } from "../icons";
import logo from "../../assets/images/resources/logo.svg";
import avatar from "../../assets/images/resources/avatar.svg";

import Image from "next/image";
import MenuMobile from "./MenuMobile";
import useScroll from "@/hooks/useScroll";
import { menuData } from "@/data/menuData";

import { SearchCombobox } from "@/components/Search/MainSearch";
import { SearchResult } from "@/types/search";
import { getIcon } from "@/lib/iconMap";

export interface IHeaderProps {
  className?: string;
  site?: SiteProps;
  locale?: string;
  session?: any;
}

export default function HeaderMobile({
  className,
  site,
  locale,
  session,
}: IHeaderProps) {
  // const { data: session } = useSession();
  // console.log("session 123", session);
  let user = session && (session.user.user as UserSession | null);
  const pathname = usePathname();
  const [open, setOpen] = React.useState<Boolean>(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleOpenMenu = () => {
    setOpen(true);
  };

  const handleSelection = (value: SearchResult) => {
    // TODO: Navigate to selected result
    console.log("Selected:", value);
  };

  const handleSearch = (query: string) => {
    // TODO: Handle search with query
    console.log("Search for:", query);
  };

  const scroll = useScroll(410);
  const localesRegex = new RegExp(`^\/(${locales.join("|")})(\/)?$`);
  const isHome = localesRegex.test(pathname) || pathname === "/";

  // Check if current path is a landing page
  const isLandingPage = pathname.includes('/landing/');

  return (
    <>
      <header
        className={`top-0 left-0 z-40 w-full transition delay-100 ease-in-out fixed bg-white lg:py-4${className && className
          }`}
      >
        <div className="container">
          <div className="flex h-full w-full items-center justify-between">
            {/* logo */}
            <div className="w-24 mr-1">
              <a href={"/"} aria-label="strongbody">
                <Image
                  width={50}
                  height={50}
                  src={logo}
                  className="h-full w-full object-cover"
                  alt={site?.name || ""}
                />
              </a>
            </div>
            {/* nav menu and account */}
            <div className="flex items-center gap-x-4">
              {/* Search functionality - desktop only */}
              <div className="hidden md:flex items-center">
                <SearchCombobox
                  onSelection={handleSelection}
                  onSearch={handleSearch}
                  placeholder="Post request today"
                />
              </div>

              <div
                className="relative z-30 flex items-center gap-x-1 rounded-full fill-slate-200 p-2 text-base outline-hidden lg:px-2 lg:py-1"
                onClick={handleOpenMenu}
              >
                {session ? (
                  <div className="bg-secondary flex h-6 w-6 items-center justify-center rounded-full text-white uppercase lg:h-8 lg:w-8">
                    {session && session?.user && session.user
                      ? `${user && user.first_name.charAt(0)}${user && user.last_name.charAt(0)
                      }`
                      : ""}
                  </div>
                ) : (
                  <Image
                    src={avatar}
                    alt="avatar icon"
                    width={40}
                    height={40}
                    className="h-10 w-10 "
                  />
                )}
              </div>
            </div>
          </div>

          {/* Mobile search bar - separate row */}
          <div className="md:hidden mt-3 pb-3">
            <SearchCombobox
              onSelection={handleSelection}
              onSearch={handleSearch}
              placeholder="Post request today"
              className="w-full [&_input]:py-2 [&_input]:px-4 [&_.relative]:py-2 [&_.relative]:px-4"
            />
          </div>


        </div>
        {/* menu mobile */}
      </header>
      <MenuMobile
        open={!!open}
        menuItem={menuData || []}
        onClose={handleCloseMenu}
        session={session}
      />
    </>
  );
}
