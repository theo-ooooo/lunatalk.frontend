import { ApiMainProductCategory } from "@/types/api/main";
import { MainCategory } from "@/types/processed/main";

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
