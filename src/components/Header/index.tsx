import * as React from "react";
import { SiteProps } from "@/types";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";
import { NextAuthProvider } from "../providers";
import NextIntlProvider from "../providers/NextIntlProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/util/authOptions";

export interface IHeaderProps {
  className?: string;
  site?: SiteProps;
  locale?: string;
}

const Header = async ({ className, site, locale }: IHeaderProps) => {
  const session = await getServerSession(authOptions);
  // console.log('locale header', locale);
  // const headersList = headers();
  // const userAgent = headersList.get('user-agent');
  // let isMobile =
  //   headersList.get('cloudfront-is-mobile-viewer') === 'true' ||
  //   (userAgent &&
  //     userAgent?.match(
  //       /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  //     ));
  // console.log("session 1", session);
  return (
    <>
      {/* <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      <NextAuthProvider session={session}>
        <OneTapSignin session={session} />
      </NextAuthProvider>  */}
      <div className="block h-full w-full lg:hidden">
        <NextIntlProvider>
          <HeaderMobile locale={locale} session={session} />
        </NextIntlProvider>
      </div>
      <div className="hidden h-full w-full lg:block">
        <HeaderDesktop locale={locale} session={session} />
      </div>
    </>
  );
};
Header.displayName = "Header";
export default Header;