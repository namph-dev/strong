import { DestinationsProps, MenuItemProps } from '.';

export interface Category {
  id: number;
  status: boolean;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  cover_image: string;
  images: string;
  code: string;
  thumb: string;
  url: string;
  slug: string;
}

export default interface PostProps {
  id: number;
  status: boolean;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  short: string;
  fulltext: string;
  featured: boolean;
  hit: string | null;
  image_alt: string | null;
  image: string;
  img_small: string;
  img_medium: string;
  categories: Category[];
  created_by: string;
  user_slug: string;
  params: string;
  menu: MenuItemProps;
  tableContent: string;
  destination: DestinationsProps;
}

export interface User {
  id: number;
  created_at: string;
  updated_at: string;
  firstname: string;
  lastname: string;
  password: string;
  phone_code: string;
  first_login: true;
  email: string;
  mobile: string;
  language: string;
  timezone: string;
  image: string;
  description: string;
  socials: string;
  country_id: string;
  verification_token: string;
  is_verified: false;
  is_mobile_verified: false;
  resetpassword_token: null;
  roles: string;
  status: true;
  fullname: string;
}
