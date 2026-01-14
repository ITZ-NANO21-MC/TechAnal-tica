import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Guide = {
  title: string;
  description: string;
  price: string;
  Icon: LucideIcon;
  slug: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: 'AI PC' | 'Tablets' | 'Setups' | 'Accesorios';
  description: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  features: string[];
  price: number;
  image: {
    id: string,
    src: string,
    alt: string,
    aiHint: string,
  };
  affiliateUrl: string;
  compatibleWith: 'iPad' | 'Android' | 'Windows' | 'Universal';
};
