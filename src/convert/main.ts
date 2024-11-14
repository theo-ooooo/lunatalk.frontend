import { ApiMainProductCategory, ApiProduct } from "@/types/api/main";
import { MainCategory, Product } from "@/types/processed/main";

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

function ConvertMainCategory(data: ApiMainProductCategory): MainCategory {
  return {
    uuid: data.uuid,
    image: {
      url: data.image.url,
      width: data.image.width,
      height: data.image.height,
    },
    name: data.name,
  };
}

export function ConvertMainCategoryList(
  data: ApiMainProductCategory[]
): MainCategory[] {
  return data.map(ConvertMainCategory);
}
