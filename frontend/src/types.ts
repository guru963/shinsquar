export interface Profile {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Shop {
  id: string;
  owner_id: string;
  shop_name: string;
  shop_category: 'food' | 'clothes' | 'furniture' | 'general' | 'construction';
  shop_address: string;
  pincode: string;
  latitude: number;
  longitude: number;
  shop_type: 'retailer' | 'manufacturing' | 'service';
  shop_timings: string;
  logo_url: string | null;
  verified: boolean;
  today_sales?: number;
  store_visits?: number;
  profiles?: Profile;
}

export const SHOP_CATEGORIES: Record<Shop['shop_category'], string> = {
  food: 'Food & Restaurants',
  clothes: 'Clothing & Apparel',
  furniture: 'Furniture & Decor',
  general: 'General Stores',
  construction: 'Construction & Hardware',
};

export const CATEGORY_ICONS: Record<Shop['shop_category'], string> = {
  food: 'restaurant',
  clothes: 'checkroom',
  furniture: 'chair',
  general: 'storefront',
  construction: 'construction',
};

export interface Offer {
  id: string;
  shop_id: string;
  title: string;
  description: string;
  discount: string;
  old_price: string;
  new_price: string;
  expiration_date: string;
  image_url: string | null;
  status: 'active' | 'inactive';
  views_count?: number;
  saves_count?: number;
  clicks_count?: number;
  created_at?: string;
}

