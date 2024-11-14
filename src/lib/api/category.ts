"use server";

import { CategoryProduct } from "@/types/processed/category";
import Fetch from "../fetch";
import { ApiCategoryProduct } from "@/types/api/category";
import { ConvertCategoryProduct } from "@/convert/category";

export async function GetCategoryProduct(
  uuid: string
): Promise<CategoryProduct> {
  try {
    const data = await Fetch<ApiCategoryProduct>(
      `/api/front/v1/pages/product-category/${uuid}/list`,
      {}
    );

    return ConvertCategoryProduct(data);
  } catch (e) {
    throw e;
  }
}
