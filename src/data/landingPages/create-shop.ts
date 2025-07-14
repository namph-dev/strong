import { LandingPageData } from "./index";

const createShop: LandingPageData = {
  id: "create-shop",
  title: "Create Online Shop",
  category: "general",
  template: "create-shop",
  seo: {
    title: "Create Your Online Shop | E-commerce Platform | StrongBody",
    description:
      "Build and launch your online store in minutes. Complete e-commerce solution with payments, inventory, and marketing tools.",
    keywords: [
      "create online shop",
      "e-commerce platform",
      "online store",
      "sell online",
      "strongbody",
    ],
    ogImage: "/images/landing/create-shop-og.jpg",
  },
  hero: {
    title: "Launch Your Online Store in Minutes",
    subtitle:
      "Complete e-commerce platform with everything you need to sell products and services online",
    image: "/images/home/trending-service-2.png",
    cta: {
      text: "Create Shop",
      link: "/signup?service=create-shop",
    },
  },
  features: [
    {
      id: "1",
      title: "Store Builder",
      description:
        "Beautiful, mobile-responsive store templates that convert visitors to customers",
      icon: "heart",
    },
    {
      id: "2",
      title: "Payment Processing",
      description:
        "Secure payment gateway supporting credit cards, PayPal, and digital wallets",
      icon: "user",
    },
    {
      id: "3",
      title: "Inventory Management",
      description:
        "Track stock levels, manage variants, and get low-stock alerts automatically",
      icon: "users",
    },
    {
      id: "4",
      title: "Sales Analytics",
      description:
        "Comprehensive reports on sales, customers, and product performance",
      icon: "trending-down",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Maria Gonzalez",
      avatar: "/images/home/browsing-history-4.png",
      content:
        "Launched my handmade jewelry store and reached $5K in sales within the first month. The tools are incredibly powerful!",
      rating: 5,
    },
    {
      id: "2",
      name: "Alex Thompson",
      avatar: "/images/home/browsing-history-5.png",
      content:
        "The inventory management saved me hours every week. Customer support is also top-notch!",
      rating: 5,
    },
    {
      id: "3",
      name: "Sophie Anderson",
      avatar: "/images/home/browsing-history-6.png",
      content:
        "My conversion rates doubled after switching to this platform. The checkout process is so smooth!",
      rating: 5,
    },
  ],
  pricing: {
    plans: [
      {
        id: "1",
        name: "Basic Store",
        price: 19,
        features: [
          "Up to 100 products",
          "Basic themes",
          "SSL certificate",
          "Email support",
          "Mobile responsive",
        ],
      },
      {
        id: "2",
        name: "Professional Store",
        price: 49,
        features: [
          "Unlimited products",
          "Premium themes",
          "Advanced analytics",
          "SEO tools",
          "Abandoned cart recovery",
          "Priority support",
        ],
        highlighted: true,
      },
      {
        id: "3",
        name: "Enterprise Store",
        price: 149,
        features: [
          "Multi-store management",
          "Custom integrations",
          "Advanced reporting",
          "Dedicated account manager",
          "API access",
          "White-label solution",
        ],
      },
    ],
  },
  faq: [
    {
      question: "How quickly can I set up my store?",
      answer:
        "You can have a basic store running in under 30 minutes. Adding products and customizing design typically takes a few hours to a day.",
    },
    {
      question: "Are there any transaction fees?",
      answer:
        "We charge a small transaction fee of 2.9% + 30¢ per transaction. This covers payment processing and platform maintenance.",
    },
    {
      question: "Can I use my own domain name?",
      answer:
        "Yes! You can connect your custom domain or purchase a new one directly through our platform.",
    },
    {
      question: "What payment methods do you support?",
      answer:
        "We support all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers depending on your location.",
    },
  ],
};

export default createShop;
