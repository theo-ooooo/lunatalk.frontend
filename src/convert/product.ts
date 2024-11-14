import { ApiProduct } from "@/types/api/common";
import { Product } from "@/types/processed/common";

export function ConvertProduct(data: ApiProduct): Product {
  return {
    uuid: data.uuid,
    badge: data.badge,
    name: data.name,
    price: data.price.number,
    originalPrice: data.original_price.number,
    reviewCount: data.review_count.number,
    color: data.color.map((item) => item.name),
    repImage: data.rep_image.url,
    discountPercent:
      ((data.original_price.number - data.price.number) /
        data.original_price.number) *
      100,
  };
}
