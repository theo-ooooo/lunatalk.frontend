"use server";

import { Response, MainProductCategory } from "@/types";

export default async function GetMainProductCategory(): Promise<
  MainProductCategory[]
> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/front/v1/pages/main/main-product-category`,
      {
        headers: {
          "request-client-type": "0100010",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`base-data fail ${response.statusText}`);
    }

    const result: Response<MainProductCategory[]> = await response.json();

    return result?.result;
  } catch (e) {
    throw e;
  }
}
