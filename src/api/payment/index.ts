import appConfig from '@/config';

export const getPaymentMethods = async (token: string) => {
  const url = `${appConfig.API_URL}/v1/buyer/payment-methods?limit=100`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "accept": "application/json",
      "Scope": "strongbody-ai",
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch payment methods");
  }

  return data.data;
}