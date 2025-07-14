interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: string;
  author_id: number;
  category_id: number;
  featured: boolean;
  image: string[];
  image_alt: string;
  tags: string | null;
  params: string | null;
  author_name: string,
  category_name: string,
  category_slug: string,
  author_profile_picture: string;
  author_email: string,
  created_at: Date | string;
  created_by: string | null,
  updated_at: string | null,
  updated_by: string | null
}

interface Category {
  id: number;
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
  created_at: Date;
  created_by: string;
}

interface EmailTemplate {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: NullableTime;
  created_by: number;
  updated_by: number;
  name: string;
  key: string;
  subject: string;
  body: string;
  description: string;
  is_active: boolean;
  app_id: number;
  app: string;
}

interface App {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: NullableTime;
  created_by: number;
  updated_by: number;
  name: string;
  key: string;
  config: string;
  EmailTemplates: EmailTemplate[];
}

interface Role {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: NullableTime;
  created_by: number;
  updated_by: number;
  name: string;
  key: string;
  description: string;
  app_id: number;
  app: App;
  UserRoles: string[];
}

interface UserRole {
  UserID: number;
  RoleID: number;
  Role: Role;
}

interface NullableTime {
  Time: string;
  Valid: boolean;
}

interface User {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: NullableTime;
  created_by: number;
  updated_by: number;
  email: string;
  mobile: string;
  status: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  language: string;
  currency: string;
  address: string;
  city: string;
  state: string;
  country: string;
  bio: string;
  profile_picture: string;
  background_picture: string;
  signup_method: string;
  signup_platform: string;
  is_email_verified: boolean;
  is_mobile_verified: boolean;
  roles: UserRole[];
}
