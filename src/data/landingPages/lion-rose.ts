import { LandingPageData } from "./index";

const lionRose: LandingPageData = {
  id: "lion-rose",
  title: "LionRose - Premium Beauty & Wellness",
  category: "wellness",
  template: "lion-rose",
  seo: {
    title: "LionRose - Premium Beauty & Wellness Services",
    description:
      "Discover premium beauty and wellness services with LionRose. Transform your look and feel your best with our expert team.",
    keywords: ["beauty", "wellness", "spa", "skincare", "massage", "premium"],
    ogImage: "/img/lion-rose-og.jpg",
  },
  hero: {
    title: "Discover Your Inner Beauty",
    subtitle:
      "Experience premium beauty and wellness services that transform not just how you look, but how you feel. At LionRose, we believe everyone deserves to shine.",
    image: "/img/hero/lion-rose-hero.jpg",
    cta: {
      text: "Book Your Appointment",
      link: "/booking",
    },
  },
  features: [
    {
      id: "skincare",
      title: "Advanced Skincare",
      description:
        "Professional skincare treatments using the latest technology and premium products for radiant, healthy skin.",
      icon: "✨",
    },
    {
      id: "massage",
      title: "Therapeutic Massage",
      description:
        "Relax and rejuvenate with our therapeutic massage services designed to relieve stress and restore balance.",
      icon: "💆‍♀️",
    },
    {
      id: "beauty",
      title: "Beauty Services",
      description:
        "Complete beauty makeover services including makeup, hair styling, and nail care by expert professionals.",
      icon: "💄",
    },
    {
      id: "wellness",
      title: "Wellness Programs",
      description:
        "Holistic wellness programs that focus on your overall health and well-being from inside out.",
      icon: "🌸",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Sarah Johnson",
      avatar: "/img/testimonials/sarah.jpg",
      content:
        "LionRose transformed my skin completely! The staff is professional and the results are amazing.",
      rating: 5,
    },
    {
      id: "2",
      name: "Emily Chen",
      avatar: "/img/testimonials/emily.jpg",
      content:
        "Best spa experience I've ever had. The atmosphere is so relaxing and the treatments are top-notch.",
      rating: 5,
    },
    {
      id: "3",
      name: "Maria Garcia",
      avatar: "/img/testimonials/maria.jpg",
      content:
        "I've been coming here for months and every visit exceeds my expectations. Highly recommend!",
      rating: 5,
    },
  ],
  pricing: {
    plans: [
      {
        id: "basic",
        name: "Essential Care",
        price: 89,
        features: [
          "Basic facial treatment",
          "Skin consultation",
          "Moisturizing therapy",
          "Relaxation session",
        ],
      },
      {
        id: "premium",
        name: "Premium Experience",
        price: 149,
        features: [
          "Advanced facial treatment",
          "Full body massage",
          "Beauty makeover",
          "Wellness consultation",
          "Take-home skincare kit",
        ],
        highlighted: true,
      },
      {
        id: "luxury",
        name: "Luxury Package",
        price: 249,
        features: [
          "Complete beauty transformation",
          "Full spa day experience",
          "Personal beauty consultant",
          "Premium product package",
          "Follow-up consultation",
          "VIP treatment room",
        ],
      },
    ],
  },
  faq: [
    {
      question: "What services does LionRose offer?",
      answer:
        "We offer a comprehensive range of beauty and wellness services including advanced skincare treatments, therapeutic massages, beauty makeovers, and holistic wellness programs.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website, call us directly, or visit our location. We recommend booking in advance to secure your preferred time slot.",
    },
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes, we use only premium, dermatologically tested products that are suitable for all skin types, including sensitive skin. Our experts will assess your skin before any treatment.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit includes a comprehensive consultation where we assess your needs and customize a treatment plan just for you. We'll explain each step of the process to ensure your comfort.",
    },
    {
      question: "Do you offer packages or memberships?",
      answer:
        "Yes, we offer various packages and membership options that provide great value for regular clients. Contact us to learn more about our current offers and find the best option for you.",
    },
  ],
};

export default lionRose;
