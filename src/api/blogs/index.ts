import appConfig from '@/config';

export const getLimitPost = async (limit: number) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/admin/post/list?page=1&limit=${limit}&keyword=&order_by=id&order_dir=DESC`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data.list;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Unable to fetch categories");
  }
};

export const getPostByCategoryId = async (limit: number, page: number, categoryId: number) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/admin/post/list?page=${page}&limit=${limit}&category_id=${categoryId}&keyword=&order_by=id&order_dir=DESC`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Unable to fetch categories");
  }
};

export const getPostById = async (id: number) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/admin/post/${id}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Unable to fetch categories");
  }
};

export const getPostByCategorySlug = async (limit: number, page: number, categorySlug: string) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/admin/post/${categorySlug}?page=${page}&limit=${limit}&keyword=&order_by=id&order_dir=DESC`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Unable to fetch categories");
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/admin/post/slug/${slug}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Unable to fetch categories");
  }
};