import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuItemProps } from "@/types";
import { Link } from "@/navigation";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  IconArrowRightFromBracket,
  IconBookBookmark,
  IconUser,
} from "../icons";
import { signOut, useSession } from "next-auth/react";
import { MenuItemType } from "@/types/enum";
import { useTranslations } from "next-intl";
import { Route } from "next";

export interface IMenuMobileProps {
  open: boolean;
  menuItem: MenuItemProps[];
  onClose: () => void;
  session?: any;
}

export default function MenuMobile({
  open,
  menuItem,
  onClose,
  session,
}: IMenuMobileProps) {
  // const { data: session } = useSession();
  const t = useTranslations("account");

  let login = "login";
  return (
    <>
      <div
        className={`fixed z-50 duration-300 ease-in  ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-30"
        }  left-0 top-0 z-40 h-screen w-2/3 rounded-r-lg bg-white px-3 py-4 pt-14 text-text1`}
      >
        {!session && (
          <>
            <Link
              href={`/${login}`}
              className="mb-5 flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-primary p-2 text-white"
              aria-label="login"
              onClick={onClose}
            >
              <IconUser className="h-4 w-4 fill-white text-white"></IconUser>{" "}
              <span> {t("login_signup")}</span>
            </Link>

            <Link
              href={"/booking"}
              className="flex items-center gap-x-2 rounded-lg py-2 hover:bg-slate-100"
              aria-label="my booking"
              onClick={onClose}
            >
              <IconBookBookmark className="h-4 w-4 fill-text1 text-white"></IconBookBookmark>{" "}
              <span> {t("my_booking")}</span>
            </Link>

            <DropdownMenuSeparator />
          </>
        )}
        {session && (
          <>
            <Link
              href={"/account/bookings"}
              aria-label="bookings"
              className="flex items-center gap-x-2 rounded-lg py-2 hover:bg-slate-100"
              onClick={onClose}
            >
              <IconBookBookmark className="h-4 w-4 fill-text1 text-white"></IconBookBookmark>{" "}
              <span> {t("my_bookings")}</span>
            </Link>

            <Link
              href={"/account/profile"}
              aria-label="profile"
              className="flex items-center gap-x-2 rounded-lg py-2 hover:bg-slate-100"
              onClick={onClose}
            >
              <IconUser className="h-4 w-4 fill-text1 text-white"></IconUser>{" "}
              <span>{t("profile")}</span>
            </Link>

            <DropdownMenuSeparator />
          </>
        )}

        <Accordion type="single" collapsible className="z-40 w-full">
          {menuItem &&
            menuItem?.length > 0 &&
            menuItem?.map((item: MenuItemProps) => (
              <AccordionItem
                value={item.title}
                key={item.id}
                className={`menu-mobile relative ${
                  item.children && item.children.length > 0 ? "has-icon" : ""
                }`}
              >
                {item.children && item.children.length > 0 ? (
                  <AccordionTrigger className="z-50 bg-transparent text-base ">
                    <Link
                      href={`${item.url}` as Route}
                      passHref
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  </AccordionTrigger>
                ) : (
                  <Link
                    href={`${item.url}` as Route}
                    passHref
                    onClick={onClose}
                  >
                    <AccordionTrigger className={" py-2"}>
                      {item.title}
                    </AccordionTrigger>
                  </Link>
                )}

                {item.children &&
                  item.children.length > 0 &&
                  item.children.map((child) => (
                    <AccordionContent
                      key={child.title}
                      className="cursor-pointer"
                    >
                      <div onClick={onClose}>
                        <Link
                          href={`${child.url}`}
                          aria-label={child.title}
                          passHref
                          onClick={onClose}
                          className="block h-full w-full"
                        >
                          {child.title}
                        </Link>
                      </div>
                    </AccordionContent>
                  ))}
              </AccordionItem>
            ))}
        </Accordion>

        {/* <div>
          <LanguageSwitcher ismobile={true} />
        </div> */}

        {session && (
          <>
            <Button
              className="mt-5 flex w-full cursor-pointer items-center gap-x-2 rounded-lg px-2 py-4 text-white"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <IconArrowRightFromBracket className="mr-1 h-4 w-4 fill-white text-white"></IconArrowRightFromBracket>{" "}
              <span> {t("logout")}</span>
            </Button>
          </>
        )}
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-25"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
