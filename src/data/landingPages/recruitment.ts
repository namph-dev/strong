import { LandingPageData } from "./index";

const recruitment: LandingPageData = {
  id: "recruitment",
  title: "Recruitment Services",
  category: "general",
  template: "recruitment",
  seo: {
    title:
      "Professional Recruitment Services | Talent Acquisition | StrongBody",
    description:
      "Find top talent for your company with our professional recruitment services. Expert headhunters, AI-powered matching, and guaranteed results.",
    keywords: [
      "recruitment services",
      "talent acquisition",
      "headhunting",
      "hiring",
      "strongbody",
    ],
    ogImage: "/images/landing/recruitment-og.jpg",
  },
  hero: {
    title: "Find Exceptional Talent for Your Growing Business",
    subtitle:
      "Professional recruitment services that connect you with top candidates in your industry",
    image: "/images/home/trending-service-3.png",
    cta: {
      text: "Start Hiring",
      link: "/signup?service=recruitment",
    },
  },
  features: [
    {
      id: "1",
      title: "Expert Headhunters",
      description:
        "Specialized recruiters with deep industry knowledge and extensive networks",
      icon: "heart",
    },
    {
      id: "2",
      title: "AI-Powered Matching",
      description:
        "Advanced algorithms to match candidates with your specific requirements",
      icon: "user",
    },
    {
      id: "3",
      title: "End-to-End Process",
      description:
        "Full recruitment cycle from job posting to onboarding support",
      icon: "users",
    },
    {
      id: "4",
      title: "Quality Guarantee",
      description:
        "Money-back guarantee if hired candidate doesn't meet expectations",
      icon: "trending-down",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Michael Foster",
      avatar: "/images/home/browsing-history-7.png",
      content:
        "They found us 3 perfect candidates within 2 weeks. The quality of talent was exceptional and saved us months of searching.",
      rating: 5,
    },
    {
      id: "2",
      name: "Jennifer Walsh",
      avatar: "/images/home/browsing-history-8.png",
      content:
        "Professional service from start to finish. They really understood our company culture and found candidates who fit perfectly.",
      rating: 5,
    },
    {
      id: "3",
      name: "David Park",
      avatar: "/images/home/most-popular-1.png",
      content:
        "Best recruitment agency we've worked with. The AI matching technology is incredibly accurate.",
      rating: 5,
    },
  ],
  pricing: {
    plans: [
      {
        id: "1",
        name: "Essential",
        price: 999,
        features: [
          "1 job posting",
          "Basic candidate screening",
          "30-day guarantee",
          "Email support",
          "Standard timeline",
        ],
      },
      {
        id: "2",
        name: "Professional",
        price: 2499,
        features: [
          "3 job postings",
          "Advanced screening",
          "90-day guarantee",
          "Dedicated recruiter",
          "Priority support",
          "Executive search",
        ],
        highlighted: true,
      },
      {
        id: "3",
        name: "Enterprise",
        price: 4999,
        features: [
          "Unlimited postings",
          "C-level recruitment",
          "180-day guarantee",
          "Team of recruiters",
          "24/7 support",
          "Custom onboarding",
        ],
      },
    ],
  },
  faq: [
    {
      question: "How long does the recruitment process take?",
      answer:
        "Typically 2-4 weeks for most positions. Executive and specialized roles may take 6-8 weeks depending on requirements.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have expertise across all major industries including technology, healthcare, finance, manufacturing, and professional services.",
    },
    {
      question: "What is your success rate?",
      answer:
        "We have a 95% placement success rate and 85% of our placed candidates are still with their companies after 12 months.",
    },
    {
      question: "Do you offer international recruitment?",
      answer:
        "Yes! We have a global network of recruiters and can help you find talent anywhere in the world, including visa sponsorship assistance.",
    },
  ],
};

export default recruitment;
