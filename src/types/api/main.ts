import { ApiProduct } from "./common";

export interface ApiMainProductCategory {
  name: string;
  image: {
    file_name: string;
    height: number;
    width: number;
    url: string;
  };
  uuid: string;
}

export interface ApiSpecificProduct {
  uuid: string;
  product: ApiProduct;
}
