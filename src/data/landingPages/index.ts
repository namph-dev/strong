export interface LandingPageData {
  id: string;
  title: string;
  category: "fitness" | "nutrition" | "wellness" | "general";
  template: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    cta: {
      text: string;
      link: string;
    };
  };
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    avatar: string;
    content: string;
    rating: number;
  }>;
  pricing: {
    plans: Array<{
      id: string;
      name: string;
      price: number;
      features: string[];
      highlighted?: boolean;
    }>;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// Import new landing pages
import createCourse from "./create-course";
import createShop from "./create-shop";
import recruitment from "./recruitment";
import lionRose from "./lion-rose";

export const landingPagesData: Record<string, LandingPageData> = {
  "create-course": createCourse,
  "create-shop": createShop,
  recruitment: recruitment,
  "lion-rose": lionRose,
};
