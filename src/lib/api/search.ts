import { ApiSearchProduct } from "@/types/api/search";
import Fetch from "../fetch";
import { ConvertProduct } from "@/convert/product";
import { Product } from "@/types/processed/common";

export async function SearchProductsByName(name: string): Promise<Product[]> {
  if (!name) {
    return [];
  }

  try {
    const data = await Fetch<ApiSearchProduct[]>(
      `/api/front/v1/product/${name}/search-list`,
      {}
    );

    if (!data) {
      return [];
    }
    return data.map((product) => ConvertProduct(product));
  } catch (e) {
    throw e;
  }
}
