import { LandingPageData } from "./index";

const createCourse: LandingPageData = {
  id: "create-course",
  title: "Create Online Course",
  category: "general",
  template: "create-course",
  seo: {
    title:
      "Create & Sell Online Courses | Course Creation Platform | StrongBody",
    description:
      "Turn your expertise into profitable online courses. Easy-to-use course creation tools, marketing support, and student management.",
    keywords: [
      "create online course",
      "course creation",
      "online teaching",
      "sell courses",
      "strongbody",
    ],
    ogImage: "/images/landing/create-course-og.jpg",
  },
  hero: {
    title: "Turn Your Knowledge Into Profitable Online Courses",
    subtitle:
      "Create, market, and sell your expertise with our comprehensive course creation platform",
    image: "/images/home/trending-service-1.png",
    cta: {
      text: "Start Creating",
      link: "/signup?service=create-course",
    },
  },
  features: [
    {
      id: "1",
      title: "Easy Course Builder",
      description:
        "Drag-and-drop course creation with video, text, quizzes, and assignments",
      icon: "heart",
    },
    {
      id: "2",
      title: "Student Management",
      description:
        "Track student progress, engagement, and provide personalized feedback",
      icon: "user",
    },
    {
      id: "3",
      title: "Marketing Tools",
      description:
        "Built-in promotional tools, affiliate programs, and landing page builder",
      icon: "users",
    },
    {
      id: "4",
      title: "Analytics & Insights",
      description:
        "Detailed analytics on course performance, student behavior, and revenue",
      icon: "trending-down",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Dr. Sarah Mitchell",
      avatar: "/images/home/browsing-history-1.png",
      content:
        "Created my first course in just 2 weeks and made $10,000 in the first month. The platform is incredibly user-friendly!",
      rating: 5,
    },
    {
      id: "2",
      name: "James Rodriguez",
      avatar: "/images/home/browsing-history-2.png",
      content:
        "The marketing tools helped me reach 500+ students in 3 months. Best decision for my online business!",
      rating: 5,
    },
    {
      id: "3",
      name: "Emily Chen",
      avatar: "/images/home/browsing-history-3.png",
      content:
        "Student engagement features are amazing. My completion rates increased by 80% compared to other platforms.",
      rating: 5,
    },
  ],
  pricing: {
    plans: [
      {
        id: "1",
        name: "Starter",
        price: 29,
        features: [
          "Create 3 courses",
          "Up to 100 students",
          "Basic analytics",
          "Email support",
          "Course builder tools",
        ],
      },
      {
        id: "2",
        name: "Professional",
        price: 79,
        features: [
          "Unlimited courses",
          "Up to 1000 students",
          "Advanced analytics",
          "Priority support",
          "Marketing tools",
          "Custom branding",
        ],
        highlighted: true,
      },
      {
        id: "3",
        name: "Enterprise",
        price: 199,
        features: [
          "Unlimited everything",
          "White-label solution",
          "Custom integrations",
          "Dedicated support",
          "Advanced certificates",
          "API access",
        ],
      },
    ],
  },
  faq: [
    {
      question: "How long does it take to create a course?",
      answer:
        "With our intuitive course builder, most instructors create their first course within 1-2 weeks. It depends on your content preparation and course length.",
    },
    {
      question: "Do I need technical skills to create courses?",
      answer:
        "Not at all! Our drag-and-drop interface is designed for non-technical users. You can focus on your content while we handle the technology.",
    },
    {
      question: "How do I get paid for my courses?",
      answer:
        "We process payments automatically and transfer your earnings weekly. You keep 85% of the revenue after payment processing fees.",
    },
    {
      question: "Can I migrate my existing courses?",
      answer:
        "Yes! Our team provides free migration assistance to help you transfer your existing courses from other platforms seamlessly.",
    },
  ],
};

export default createCourse;
