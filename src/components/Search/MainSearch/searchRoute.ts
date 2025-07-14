import { SearchResult } from "@/types/search";

export const buildNavigationUrl = (result: SearchResult): string => {
  const { type, slug, id, name } = result;

  if (!slug && !id && !name) return "/";

  switch (type) {
    case "service":
      return `/service/${slug || id}`;
    case "seller":
      return `/${type}/${name || slug || id}`;
    case "product":
      return `/product/${slug || id}`;
    default:
      return `/listing/${slug || id}`;
  }
};
