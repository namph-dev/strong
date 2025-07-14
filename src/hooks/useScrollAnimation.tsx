"use client";

import { useEffect, useRef } from "react";

export const scrollAnimationStyles = `
  .scroll-section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .scroll-section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  /* Stagger animation delays */
  .scroll-section:nth-child(1) {
    transition-delay: 0ms;
  }
  .scroll-section:nth-child(2) {
    transition-delay: 150ms;
  }
  .scroll-section:nth-child(3) {
    transition-delay: 300ms;
  }
  .scroll-section:nth-child(4) {
    transition-delay: 450ms;
  }
  .scroll-section:nth-child(5) {
    transition-delay: 600ms;
  }
  .scroll-section:nth-child(6) {
    transition-delay: 750ms;
  }
  .scroll-section:nth-child(7) {
    transition-delay: 900ms;
  }
  .scroll-section:nth-child(8) {
    transition-delay: 1050ms;
  }

  /* Compensation for fixed header */
  .main-content {
    padding-top: 5px;
  }

  @media (max-width: 768px) {
    .main-content {
      padding-top: 5px;
    }
    
    .scroll-section {
      transform: translateY(30px);
    }
  }
`;

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px" } = options;

  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = "smooth";

    const observerOptions = {
      threshold,
      rootMargin,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [threshold, rootMargin]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  return { addToRefs };
};

// Wrapper component for animated sections
interface AnimatedSectionProps {
  children: React.ReactNode;
  index: number;
  addToRefs: (el: HTMLDivElement | null, index: number) => void;
  className?: string;
}

export const AnimatedSection = ({ children, index, addToRefs, className = "" }: AnimatedSectionProps) => {
  return (
    <div
      ref={(el) => addToRefs(el, index)}
      className={`scroll-section ${className}`}
    >
      {children}
    </div>
  );
}; 