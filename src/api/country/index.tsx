import appConfig from '@/config';

export const getListCountries = async (token: string) => {
  try {
    const response = await fetch(`${appConfig.API_URL}/v1/countries?limit=300`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "scope": "admin-dashboard",
        "x-api-key":  "your_api_key"
      }
    });

    if (!response.ok) {
      throw new Error(`Lỗi khi lấy danh sách quốc gia: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Lỗi khi gọi API getCountries:", error);
    throw error;
  }
};
