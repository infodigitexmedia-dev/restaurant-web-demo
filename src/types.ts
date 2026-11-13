export type PageId =
  | 'home'
  | 'menu'
  | 'offers'
  | 'guest-experience'
  | 'vip-club'
  | 'reviews'
  | 'book-table'
  | 'contact';

export type MenuCategory =
  | 'All'
  | 'Starters'
  | 'Burgers'
  | 'Pizza'
  | 'Pasta'
  | 'Main Course'
  | 'Beverages'
  | 'Coffee'
  | 'Desserts';

export type HomePreviewCategory =
  | 'All'
  | 'Burgers'
  | 'Pizza'
  | 'Pasta'
  | 'Coffee'
  | 'Desserts'
  | 'More';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  demoPrice: string;
  dietaryType: 'Vegetarian' | 'Non-Vegetarian';
  allergens: string[];
  dietaryNote: string;
  image: string;
  featuredOnHome?: boolean;
}

export interface DemoOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  availabilityNote: string;
  ctaLabel: string;
  targetPage: PageId;
}

export interface DemoReview {
  id: string;
  author: string;
  visitContext: string;
  rating: number;
  dateLabel: string;
  comment: string;
  isUserSubmitted?: boolean;
}
