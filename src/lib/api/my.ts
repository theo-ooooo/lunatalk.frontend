"use server";

import { cookies } from "next/headers";
import Fetch from "../fetch";
import { redirect } from "next/navigation";
import { ConvertMyInformation, ConvertMyOrderInformation } from "@/convert/my";
import { ApiMyInformation, ApiOrderInformation } from "@/types/api/my";
import _ from "lodash";

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

export async function MyOrderData() {
  const cookieStore = cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    redirect("/auth/login?redirect=/mypage/order/list");
  }

  try {
    const data = await Fetch<{
      list: {
        order: ApiOrderInformation[];
        cancel: ApiOrderInformation[];
      };
    }>("/api/front/v1/pages/my-page/my-order", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // order data.list만 사용. 나머지는 불필요.

    return _.orderBy(
      [...data.list?.order, ...data.list?.cancel].map((item) =>
        ConvertMyOrderInformation(item)
      ),
      ["createdAt"],
      ["desc"]
    );
  } catch (e) {
    throw e;
  }
}
