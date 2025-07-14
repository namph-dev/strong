import { LandingPageData } from "@/data/landingPages";
import LionRoseHeader from "@/components/landing/headers/LionRoseHeader";
import LionRoseHero from "@/components/landing/hero/LionRoseHero";
import LionRoseFeature from "@/components/landing/feature/LionRoseFeature";
import LionRoseAbout from "@/components/landing/about/LionRoseAbout";
import LionRoseContent from "@/components/landing/content/LionRoseContent";
import LionRoseGetInfo from "@/components/landing/getinfo/LionRoseGetInfo";
import LandingFooter from "@/components/landing/footers/LandingFooter";

interface LionRoseTemplateProps {
  data: LandingPageData;
}

export default function LionRoseTemplate({ data }: LionRoseTemplateProps) {
  return (
    <main className="main-content">
      <section>
        <LionRoseHero />
      </section>

      <section>
        <LionRoseFeature />
      </section>

      <section>
        <LionRoseAbout />
      </section>

      <section>
        <LionRoseContent />
      </section>

      <section>
        <LionRoseGetInfo />
      </section>
    </main>
  );
}
