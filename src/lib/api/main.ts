"use server";

import { BestProduct, MainProductCategory, Product } from "@/types";
import Fetch from "../fetch";

export async function GetMainProductCategory(): Promise<MainProductCategory[]> {
  return Fetch<MainProductCategory[]>(
    "/api/front/v1/pages/main/main-product-category",
    { next: { revalidate: 60 } }
  );
}

export async function GetMainBestProduct(): Promise<BestProduct[]> {
  return Fetch<BestProduct[]>(
    "/api/front/v1/pages/main/main-product-best-item",
    {
      next: { revalidate: 60 },
    }
  );
}

export async function GetMainNewProduct(): Promise<Product[]> {
  return Fetch<Product[]>("/api/front/v1/pages/main/main-product-new-item", {
    next: { revalidate: 60 },
  });
}
