import { Product } from "./common";

export interface MainCategory {
  uuid: string;
  image: { url: string; width: number; height: number };
  name: string;
}

export interface SpecificProduct {
  uuid: string;
  product: Product;
}
