import { Filter } from "@/types/filter";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function CurrencyFormatter(locale_string: string, total_price: number) {
  let total_price_final = new Intl.NumberFormat(locale_string, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    currencyDisplay: "code",
  }).format(total_price);
  return total_price_final;
}
export const buildQuery = (filter: Filter) => {
  const params = new URLSearchParams();

  for (const key in filter) {
    if (filter.hasOwnProperty(key)) {
      const value = filter[key];

      if (Array.isArray(value)) {
        value.forEach((item) => {
          params.append(`${key}[]`, item);
        });
      } else if (value !== null && value !== undefined) {
        params.set(key, value.toString());
      }
    }
  }

  const queryString = params.toString();
  return queryString;
};
export function roundToHalf(number: number) {
  return Math.round(number * 2) / 2;
}

export function removeHTMLTags(str: string) {
  return str.replace(/<[^>]+>/g, "");
}

export function removeBBCode(content: string): string {
  return content.replace(/\[\/?\w+(=[^\]]+)?\]/g, '');
}

export function isJSON(value: any) {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}

export const dateFormatter = (date: string | Date): string => {
  try {
    const parsedDate = typeof date === "string" ? new Date(date.replace(" ", "T")) : date;
    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (err) {
    console.log("Invalid date:", date);
    return "";
  }
};

export const wrapTablesWithResponsiveDiv = (html: string) => {
  return html.replace(/<table([\s\S]*?)>([\s\S]*?)<\/table>/g, (match) => {
    return `<div class="table-responsive">${match}</div>`;
  });
};

export const convertSlugTitle = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .split(/\s+/)
    .join("-");
