"use server";

import {
  ApiBestProduct,
  ApiMainProductCategory,
  ApiNewProduct,
  ApiSpecificProduct,
} from "@/types/api/main";
import Fetch from "../fetch";
import {
  BestProduct,
  MainCategory,
  NewProduct,
  Product,
  SpecificProduct,
} from "@/types/processed/main";
import {
  ConvertMainCategoryList,
  ConvertProduct,
  ConvertProductList,
} from "@/convert/main";

export async function GetMainProductCategory(): Promise<MainCategory[]> {
  try {
    const data = await Fetch<ApiMainProductCategory[]>(
      "/api/front/v1/pages/main/main-product-category",
      { next: { revalidate: 60 } }
    );

    return ConvertMainCategoryList(data);
  } catch (e) {
    throw e;
  }
}

export async function GetMainBestProduct(): Promise<SpecificProduct[]> {
  try {
    const data = await Fetch<ApiSpecificProduct[]>(
      "/api/front/v1/pages/main/main-product-best-item",
      {
        next: { revalidate: 60 },
      }
    );

    return data.map((item: ApiSpecificProduct) => {
      return {
        uuid: item.uuid,
        product: ConvertProduct(item.product),
      };
    });
  } catch (e) {
    throw e;
  }
}

export async function GetMainNewProduct(): Promise<SpecificProduct[]> {
  try {
    const data = await Fetch<ApiSpecificProduct[]>(
      "/api/front/v1/pages/main/main-product-new-item",
      {
        next: { revalidate: 60 },
      }
    );

    return data.map((item: ApiSpecificProduct) => {
      return {
        uuid: item.uuid,
        product: ConvertProduct(item.product),
      };
    });
  } catch (e) {
    throw e;
  }
}
