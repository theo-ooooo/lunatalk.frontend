"use server";

import { cookies } from "next/headers";
import Fetch from "../fetch";
import { redirect } from "next/navigation";
import { ConvertMyInformation } from "@/convert/my";
import { ApiMyInformation } from "@/types/api/my";

export async function MyInformation() {
  try {
    const cookieStore = cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      redirect("/auth/login?redirect=/mypage");
    }

    const data = await Fetch<ApiMyInformation>(
      "/api/front/v1/pages/my-page/my-info",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return ConvertMyInformation(data);
  } catch (e) {
    throw e;
  }
}
