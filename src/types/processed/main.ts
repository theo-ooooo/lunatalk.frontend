export interface Product {
  uuid: string;
  badge: string[];
  name: string;
  price: number;
  originalPrice: number;
  reviewCount: number;
  color: string[];
  repImage: string;
  discountPercent: number;
}

export interface MainCategory {
  uuid: string;
  image: { url: string; width: number; height: number };
  name: string;
}

export interface SpecificProduct {
  uuid: string;
  product: Product;
}
