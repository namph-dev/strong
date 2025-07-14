import { LandingPageData } from "@/data/landingPages";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@radix-ui/themes";
import {
  StarIcon,
  CheckIcon,
  PlayIcon,
  BookOpenIcon,
  UsersIcon,
  BarChartIcon,
  ArrowRightIcon,
} from "lucide-react";
import CreateCourseHeader from "@/components/landing/headers/CreateCourseHeader";
import CreateCourseHero from "@/components/landing/hero/CreateCourseHero";
import CreateCourseFeature from "@/components/landing/feature/CreateCourseFeature";
import CreateCourseAbout from "@/components/landing/about/CreateCourseAbout";
import CreateCourseContent from "@/components/landing/content/CreateCourseContent";
import CreateCourseGetInfo from "@/components/landing/getinfo/CreateCourseGetInfo";
import CreateCourseFAQ from "@/components/landing/faq/CreateCourseFAQ";
import LandingFooter from "@/components/landing/footers/LandingFooter";

interface CreateCourseTemplateProps {
  data: LandingPageData;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  heart: BookOpenIcon,
  user: UsersIcon,
  users: BarChartIcon,
  "trending-down": PlayIcon,
};

export default function CreateCourseTemplate({
  data,
}: CreateCourseTemplateProps) {
  return (
    <main className="main-content">
      <section>
        <CreateCourseHero />
      </section>

      <section>
        <CreateCourseFeature />
      </section>

      <section>
        <CreateCourseAbout />
      </section>

      <section>
        <CreateCourseContent />
      </section>

      <section>
        <CreateCourseGetInfo />
      </section>

      <section>
        <CreateCourseFAQ />
      </section>
    </main>
  );
}
