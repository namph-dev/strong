import appConfig from '@/config';

export const getCategoriesByType = async (type: string) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/admin/category/list?type=${type}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data.list;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Unable to fetch categories");
  }
};

export const getCategoryById = async (id: number) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/admin/category/${id}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Unable to fetch categories");
  }
};

export const getCategoryBySlug = async (slug: string) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/admin/category/${slug}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Unable to fetch categories");
  }
};