import { ApiProduct } from "./common";

export interface ApiCategoryProduct {
  uuid: string;
  products: ApiProduct[];
}
