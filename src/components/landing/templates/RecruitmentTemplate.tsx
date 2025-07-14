import { LandingPageData } from "@/data/landingPages";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@radix-ui/themes";
import {
  StarIcon,
  CheckIcon,
  UserCheckIcon,
  SearchIcon,
  TrendingUpIcon,
  UsersIcon,
  ArrowRightIcon,
} from "lucide-react";
import LandingHeader from "@/components/landing/headers/LandingHeader";
import LandingFooter from "@/components/landing/footers/LandingFooter";
import RecruitmentHero from "@/components/landing/hero/RecruitmentHero";
import RecruitmentFeatures from "@/components/landing/feature/RecruitmentFeature";
import RecruitmentAbout from "@/components/landing/about/RecruitmentAbout";
import RecruitmentContent from "@/components/landing/content/RecruitmentContent";
import RecruitmentGetInfo from "@/components/landing/getinfo/RecruitmentGetInfo";
import RecruitmentFAQ from "@/components/landing/faq/RecruitmentFAQ";
import RecruitmentHeader from "@/components/landing/headers/RecruitmentHeader";

interface RecruitmentTemplateProps {
  data: LandingPageData;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  heart: UserCheckIcon,
  user: SearchIcon,
  users: TrendingUpIcon,
  "trending-down": UsersIcon,
};

export default function RecruitmentTemplate({
  data,
}: RecruitmentTemplateProps) {
  return (
    <main className="main-content">
      <section>
        <RecruitmentHero />
      </section>

      <section>
        <RecruitmentFeatures />
      </section>

      <section>
        <RecruitmentAbout />
      </section>

      <section>
        <RecruitmentContent />
      </section>

      <section>
        <RecruitmentGetInfo />
      </section>

      <section>
        <RecruitmentFAQ />
      </section>
    </main>
  );
}
