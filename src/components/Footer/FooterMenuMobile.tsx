import { useTranslations } from "next-intl";
import { FooterAboutUs, FooterForSaler, FooterForSupplier, FooterUserBuyer } from "./FooterItemsMobile";


const FooterMenuMobile = () => {
  const t = useTranslations("footer");
  const labels = {
    about_us: t("about_us"),
    contact_us: t("contact_us"),
    pricing: t("pricing"),
    blogs: t("blogs"),
    help_center: t("help_center"),
    our_founder: t("our_founder"),
    brand_stories: t("brand_stories"),
    referral_program: t("referral_program"),
    for_user_buyer: t("for_user_buyer"),
    my_dashboard_message: t("my_dashboard_message"),
    post_a_request: t("post_a_request"),
    find_your_expert: t("find_your_expert"),
    for_seller: t("for_seller"),
    become_an_online_expert: t("become_an_online_expert"),
    create_your_service: t("create_your_service"),
    create_your_shop: t("create_your_shop"),
    create_your_blog: t("create_your_blog"),
    for_publisher: t("for_publisher"),
    refer_a_friend: t("refer_a_friend"),
    become_a_publisher_and_earn: t("become_a_publisher_and_earn"),
    learn_and_earn: t("learn_and_earn"),
    referral_management: t("referral_management"),
    convert_followers_into_revenue: t("convert_followers_into_revenue"),
    for_supplier_organization: t("for_supplier_organization"),
    strongbody_collection: t("strongbody_collection"),
    become_a_supplier: t("become_a_supplier"),
    create_organization_for_hospital: t("create_organization_for_hospital"),
  };

  return (
    <footer className="md:hidden bg-[#FAFAFA] flex flex-col gap-[32px] pt-[40px]">
      <FooterAboutUs labels={labels} />
      <FooterUserBuyer labels={labels} />
      <FooterForSaler labels={labels} />
      <FooterForSupplier labels={labels} />
    </footer>
  )
}

export default FooterMenuMobile;       