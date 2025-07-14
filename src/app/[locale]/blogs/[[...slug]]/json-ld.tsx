import { removeHTMLTags } from "@/lib/utils";
import React from "react";

interface JsonLdProps {
  blog: Blog;
}

const JsonLd = ({ blog }: JsonLdProps) => {
  const description = blog.excerpt
    ? removeHTMLTags(blog.excerpt)
    : removeHTMLTags(blog.content).slice(0, 160);

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Article",
    datePublished: blog.created_at,
    dateModified: blog.updated_at,
    publisher: {
      "@type": "Organization",
      name: "Strongbody",
      logo: {
        "@type": "ImageObject",
        url: "/_next/static/media/logo.172bc5d4.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blogs/${blog.slug}`,
    },
    headline: blog.title,
    description,
    author: {
      "@type": "Person",
      name: blog.created_by || blog.author_id,
    },
    image: blog.image?.[0],
    name: blog.title,
    articleSection: blog.category_id,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
};

export default JsonLd;
