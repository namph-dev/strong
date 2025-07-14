import Image from "next/image";
import Link from "next/link";
import { IconFacebook, IconInstagram, IconTiktok, IconTwitter } from "../icons";
import { useTranslations } from "next-intl";
import logo from "../../assets/images/resources/logo.svg";
import VietNamFlag from "../icon/VietNamFlag";
import DownArrow from "../icon/DownArrow";
import FooterMenuMobile from "./FooterMenuMobile";

const data = {
  socials: [
    {
      icon: <IconFacebook className="fill-primary h-8 w-8" />,
      link: "https://www.facebook.com/",
      title: "Facebook",
    },
    {
      icon: <IconTiktok className="fill-primary h-8 w-8" />,
      link: "https://www.tiktok.com/",
      title: "Tiktok",
    },
    {
      icon: <IconTwitter className="fill-primary h-8 w-8" />,
      link: "https://twitter.com/",
      title: "Twitter",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA]">
      <div className="container px-4">
        <div className="hidden md:grid grid-cols-2 gap-6 py-10 md:grid-cols-3 lg:grid-cols-4 border-b border-[#E9EAEC] md:relative">
          <FooterAboutUs />
          <FooterUserBuyer />
          <FooterForSaler />
          {/* <FooterForPublisher /> */}
          <FooterForSupplier />

          <div className="block absolute bottom-4 right-4">
            <Link href="/" aria-label="kapanda">
              <Image
                width={124}
                height={32}
                src={logo}
                className="h-full w-full object-contain hover:opacity-80 transition-opacity"
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        <FooterMenuMobile />

        <div className="md:hidden mt-8 flex justify-center">
          <Link href="/" aria-label="kapanda">
            <Image
              width={116}
              height={30}
              src={logo}
              className="object-contain hover:opacity-80 transition-opacity"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex justify-center gap-[16px] md:justify-between py-[20px] items-center">
          <p className="font-normal text-[16px] leading-[24px] text-[#111827]">
            © StrongBody SG PTE., LTD., 2022
          </p>
          <div className="flex gap-[10px] items-center">
            <VietNamFlag />
            <DownArrow />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterAboutUs = () => {
  const t = useTranslations("footer");
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{t("about_us")}</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/about">{t("contact_us")}</Link>
        </li>
        <li>
          <Link href="/pricing">{t("pricing")}</Link>
        </li>
        {/* <li>
          <Link href="/privacy_policy">{t("privacy_policy")}</Link>
        </li> */}
        <li>
          <Link href="/blogs">{t("blogs")}</Link>
        </li>
        <li>
          <Link href="/help_center">{t("help_center")}</Link>
        </li>
        <li>
          <Link href="/our_founder">{t("our_founder")}</Link>
        </li>
        {/* <li>
          <Link href="/strongbody_worldwide">{t("strongbody_worldwide")}</Link>
        </li> */}
        <li>
          <Link href="/brand_stories">{t("brand_stories")}</Link>
        </li>
        <li>
          <Link href="/referral_program">{t("referral_program")}</Link>
        </li>
      </ul>
    </div>
  );
};

const FooterUserBuyer = () => {
  const t = useTranslations("footer");
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{t("for_user_buyer")}</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/my_dashboard_message">{t("my_dashboard_message")}</Link>
        </li>
        {/* <li>
          <Link href="/my_favorites">{t("my_favorites")}</Link>
        </li>
        <li>
          <Link href="/download_app">{t("download_app")}</Link>
        </li> */}
        <li>
          <Link href="/post_a_request">{t("post_a_request")}</Link>
        </li>
        {/* <li>
          <Link href="/blogs">{t("post_any_review")}</Link>
        </li> */}
        <li>
          <Link href="/help_center">{t("find_your_expert")}</Link>
        </li>
        {/* <li>
          <Link href="/refer_a_friend">{t("refer_a_friend")}</Link>
        </li>
        <li>
          <Link href="/how_strong_body_works">
            {t("how_strong_body_works")}
          </Link>
        </li>
        <li>
          <Link href="/buy_voice_translation">
            {t("buy_voice_translation")}
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

const FooterForSaler = () => {
  const t = useTranslations("footer");
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{t("for_seller")}</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/become_an_online_expert">
            {t("become_an_online_expert")}
          </Link>
        </li>
        {/* <li>
          <Link href="/become_an_online_doctor">
            {t("become_an_online_doctor")}
          </Link>
        </li> */}
        <li>
          <Link href="/create_your_service">{t("create_your_service")}</Link>
        </li>
        <li>
          <Link href="/landing/create-shop">{t("create_your_shop")}</Link>
        </li>
        <li>
          <Link href="/create_your_blog">{t("create_your_blog")}</Link>
        </li>
        {/* <li>
          <Link href="/landing/create-course">{t("create_your_course")}</Link>
        </li>
        <li>
          <Link href="/activate_products_shop">
            {t("activate_products_shop")}
          </Link>
        </li>
        <li>
          <Link href="/shop_profile_creation">
            {t("shop_profile_creation")}
          </Link>
        </li>
        <li>
          <Link href="/refer_other_seller">{t("refer_other_seller")}</Link>
        </li> */}
      </ul>
    </div>
  );
};

const FooterForPublisher = () => {
  const t = useTranslations("footer");
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{t("for_publisher")}</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/refer_a_friend">{t("refer_a_friend")}</Link>
        </li>
        <li>
          <Link href="/become_a_publisher_and_earn">
            {t("become_a_publisher_and_earn")}
          </Link>
        </li>
        <li>
          <Link href="/learn_and_earn">{t("learn_and_earn")}</Link>
        </li>
        <li>
          <Link href="/referral_management">{t("referral_management")}</Link>
        </li>
        <li>
          <Link href="/convert_followers_into_revenue">
            {t("convert_followers_into_revenue")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const FooterForSupplier = () => {
  const t = useTranslations("footer");
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">
        {t("for_supplier_organization")}
      </h3>
      <ul className="space-y-2">
        <li>
          <Link href="/strongbody_collection">
            {t("strongbody_collection")}
          </Link>
        </li>
        <li>
          <Link href="/become_a_supplier">{t("become_a_supplier")}</Link>
        </li>
        {/* <li>
          <Link href="/create_organization_for_hospital">
            {t("create_organization_for_hospital")}
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

const FooterInstagram = () => {
  const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Instagram</h3>
      <div className="grid grid-cols-3 gap-5">
        {images.map((img, index) => (
          <Link key={index} href="#">
            <Image
              src={`/img/${img}`}
              alt="Instagram Image"
              width={100}
              height={100}
              className="rounded"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
