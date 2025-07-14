import { LandingPageData } from "@/data/landingPages";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@radix-ui/themes";
import {
  StarIcon,
  CheckIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  BarChartIcon,
  UsersIcon,
  ArrowRightIcon,
} from "lucide-react";
import CreateShopHeader from "@/components/landing/headers/CreateShopHeader";
import CreateShopHero from "@/components/landing/hero/CreateShopHero";
import CreateShopFeature from "@/components/landing/feature/CreateShopFeature";
import CreateShopContent from "@/components/landing/content/CreateShopContent";
import CreateShopAbout from "@/components/landing/about/CreateShopAbout";
import CreateShopGetInfo from "@/components/landing/getinfo/CreateShopGetInfo";
import CreateShopFAQ from "@/components/landing/faq/CreateShopFAQ";
import LandingFooter from "@/components/landing/footers/LandingFooter";

interface CreateShopTemplateProps {
  data: LandingPageData;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  heart: ShoppingBagIcon,
  user: UsersIcon,
  users: BarChartIcon,
  "trending-down": CreditCardIcon,
};

export default function CreateShopTemplate({ data }: CreateShopTemplateProps) {
  return (
    <main className="main-content">
      <section>
        <CreateShopHero />
      </section>

      <section>
        <CreateShopFeature />
      </section>

      <section>
        <CreateShopContent />
      </section>

      <section>
        <CreateShopAbout />
      </section>

      <section>
        <CreateShopGetInfo />
      </section>

      <section>
        <CreateShopFAQ />
      </section>
    </main>
  );
}
