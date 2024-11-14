import { ApiCategoryProduct } from "@/types/api/category";
import { CategoryProduct } from "@/types/processed/category";
import { ConvertProduct } from "./product";

export function ConvertCategoryProduct(
  data: ApiCategoryProduct
): CategoryProduct {
  return {
    uuid: data.uuid,
    products: data.products.map(ConvertProduct),
  };
}
