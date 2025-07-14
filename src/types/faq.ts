// FAQ Category interface
export interface FAQCategory {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  created_by: number | null;
  updated_by: number | null;
  name: string;
  description: string;
  slug: string;
  is_active: boolean;
  type: string;
  cover_image: string[];
  icon: string | null;
  path: string;
  depth: number;
  parent_id: number;
  ExternalID: string;
  products: any;
  requests: any;
}

// FAQ User interface
export interface FAQUser {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  created_by: number | null;
  updated_by: number | null;
  email: string;
  mobile: string;
  password_hashed: string;
  status: string;
  first_name: string;
  last_name: string;
  birth_date: string | null;
  language: string;
  currency: string;
  address: string;
  city: string;
  state: string;
  country_id: number | null;
  bio: string;
  profile_picture: string;
  background_picture: string;
  is_email_verified: boolean;
  is_mobile_verified: boolean;
  signup_method: string;
  signup_platform: string;
  Country: {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    created_by: number | null;
    updated_by: number | null;
    title: string;
    code: string;
    description: string;
    cover_image: string;
    flag: string;
    phone_code: string;
    status: number;
  };
  user_roles: any;
  posts: any;
  owned_campaigns: any;
  products: any;
  requests: any;
  assigned_requests: any;
}

// Main FAQ interface
export interface FAQ {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  created_by: number;
  updated_by: number | null;
  question: string;
  answer: string;
  slug: string;
  is_active: boolean;
  order: number;
  notes: string;
  image: string;
  image_alt: string;
  category_id: number;
  category: FAQCategory;
  user_id: number;
  user: FAQUser;
}

// API Response data object interface (nested inside full response)
export interface FAQResponse {
  total: number;
  total_page: number;
  current_page: number;
  limit: number;
  data: FAQ[];
}

// Full API Response wrapper interface
export interface FAQApiResponse {
  code: number;
  message: string;
  data: FAQResponse;
}

// API Request params interface
export interface GetListFAQParams {
  page?: number;
  limit?: number;
  order_by?: string;
  order_dir?: "asc" | "desc";
  keyword?: string;
  category_id?: number;
}

// Component props interfaces
export interface FAQItemProps {
  id: number;
  question: string;
  answer: string;
  value: string;
  index: number;
}

export interface FAQProps {
  title?: string;
  description?: string;
  categoryId?: number;
  limit?: number;
  className?: string;
  keyword?: string;
}
