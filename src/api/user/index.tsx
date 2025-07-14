import appConfig from '@/config';

export const updateBuyerProfile = async (firstName: string, token: string, country_id: number) => {
  const payload = {
    first_name: firstName,
    country_id: country_id
  };

  try {
    const response = await fetch(`${appConfig.API_URL}/v1/buyer/auth/profile`, {
      method: "PUT",
      headers: {
        "Scope": "strongbody-ai",
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json", 
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log(response);

    if (!response.ok) throw new Error("Cập nhật thất bại");

    const result = await response.json();
    console.log("Thành công:", result);
  } catch (error) {
    console.error("Lỗi:", error);
  }
};
