import appConfig from "@/config";
import { GetListFAQParams } from "@/types/faq";

export const getListFAQ = async (params: GetListFAQParams = {}) => {
  try {
    const { page, limit, order_by, order_dir, keyword, category_id } = params;

    const queryParams = new URLSearchParams();

    if (page !== undefined) queryParams.append("page", page.toString());
    if (limit !== undefined) queryParams.append("limit", limit.toString());
    if (order_by) queryParams.append("order_by", order_by);
    if (order_dir) queryParams.append("order_dir", order_dir);
    if (keyword) queryParams.append("keyword", keyword);
    if (category_id !== undefined)
      queryParams.append("category_id", category_id.toString());

    const queryString = queryParams.toString();
    const url = `${appConfig.API_URL}/v1/admin/faq${queryString ? `?${queryString}` : ""}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: {
        revalidate: 300, // Cache for 5 minutes
        tags: ["faq"], // Allow manual revalidation
      },
      cache: "force-cache",
    });

    // Check if response is ok
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();

    // Check if response has expected structure
    if (!data) {
      throw new Error("No response data received from API");
    }

    return data.data;
  } catch (error) {
    console.error("Failed to fetch FAQ list:", error);

    // Enhanced error logging for different error types
    if (error instanceof TypeError) {
      console.error("Network error or CORS issue:", error.message);
    } else if (error instanceof Error) {
      console.error("API Error:", error.message);
    }

    // Return empty data structure instead of throwing
    return {
      total: 0,
      total_page: 0,
      current_page: 1,
      limit: 0,
      data: [],
    };
  }
};

export const getFAQById = async (id: number) => {
  try {
    const url = `${appConfig.API_URL}/v1/admin/faq/${id}`;

    // Use fetch API instead of axios
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: {
        revalidate: 600, // Cache for 10 minutes (single FAQ can be cached longer)
        tags: [`faq-${id}`], // Individual FAQ tag for specific revalidation
      },
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();

    if (!data) {
      throw new Error("No response data received from API");
    }

    // Check if API returned success code
    if (data.code !== 0) {
      throw new Error(`API Error: ${data.message || "Unknown error"}`);
    }

    return data.data || data;
  } catch (error) {
    console.error("Failed to fetch FAQ:", error);

    if (error instanceof TypeError) {
      console.error("Network error or CORS issue:", error.message);
    } else if (error instanceof Error) {
      console.error("API Error:", error.message);
    }

    throw new Error("Unable to fetch FAQ");
  }
};
