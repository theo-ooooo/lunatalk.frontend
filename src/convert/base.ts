import { ApiAppBase } from "@/types/api/base";
import { AppBase } from "@/types/processed/base";

export function ConvertBase(data: ApiAppBase): AppBase {
  return {
    codes: {
      codeName: data.codes.code_name,
      codeGroup: Object.entries(data.codes.code_group).reduce(
        (
          acc: Record<string, { codeId: string; codeName: string }[]>,
          [key, value]
        ) => {
          acc[key] = value.map((item) => ({
            codeId: item.code_id,
            codeName: item.code_name,
          }));
          return acc;
        },
        {}
      ),
    },
    productCategory: data.product_category,
  };
}
