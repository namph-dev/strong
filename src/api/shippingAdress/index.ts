import appConfig from '@/config';

export const getShippingAddresses = async (token: string) => {
  const response = await fetch(`${appConfig.API_URL}/v1/buyer/shipping-addresses?limit=100`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Scope: "strongbody-ai",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Lỗi khi fetch shipping addresses: ${errorText}`);
  }

  const data = await response.json();

  return data.data;
};

export async function createShippingAddress(
  payload: any,
  accessToken: string
) {
  try {
    const response = await fetch(
      `${appConfig.API_URL}/v1/buyer/shipping-address`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Scope": "strongbody-ai",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Tạo địa chỉ giao hàng thất bại");
    }

    return await response.json();
  } catch (error) {
    console.error("Lỗi khi tạo địa chỉ giao hàng:", error);
    throw error;
  }
}

export const updateShippingAddress = async (
  id: number,
  payload: any,
  accessToken: string
) => {
  try {
    const response = await fetch(`${appConfig.API_URL}/v1/buyer/shipping-address/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Scope': 'strongbody-ai',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Update shipping address failed');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Lỗi khi cập nhật địa chỉ:', err);
    throw err;
  }
}

export const setDefaultShippingAddress = async (
  addressId: number,
  token: string
) => {
  try {
    const response = await fetch(
      `${appConfig.API_URL}/v1/buyer/shipping-address/${addressId}/default`,
      {
        method: "PATCH",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({}), 
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to set default address");
    }

    const result = await response.json();

    console.log(result)
    return result;
  } catch (err) {
    console.error("Error setting default address:", err);
    throw err;
  }
};

export const deleteShippingAddress = async (
  id: number,
  accessToken: string
) => {
  try {
    const response = await fetch(`${appConfig.API_URL}/v1/buyer/shipping-address/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Scope': 'strongbody-ai',
        'Authorization': `Bearer ${accessToken}`,
      }
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Delete shipping address failed');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Lỗi khi xóa địa chỉ:', err);
    throw err;
  }
}