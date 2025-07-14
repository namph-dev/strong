import appConfig from "@/config";

export const searchByKeyword = async (keyword: string) => {
  try {
    // Build query parameters
    const queryParams = new URLSearchParams();
    queryParams.append("keyword", keyword);

    const queryString = queryParams.toString();
    const url = `${appConfig.API_URL}/v1/search?${queryString}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": "your_api_key",
      },
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

    return data;
  } catch (error) {
    console.error("Failed to search by keyword:", error);

    // Enhanced error logging for different error types
    if (error instanceof TypeError) {
      console.error("Network error or CORS issue:", error.message);
    } else if (error instanceof Error) {
      console.error("API Error:", error.message);
    }

    // Return empty data structure instead of throwing
    return {
      code: 1,
      message: "Search failed",
      data: {
        total: 0,
        data: [],
      },
    };
  }
};
