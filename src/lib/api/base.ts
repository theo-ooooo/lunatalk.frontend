"use server";

import { AppBase, Response } from "@/types";

export default async function GetBase(): Promise<AppBase> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/system/base-data`,
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

    const result: Response<AppBase> = await response.json();

    return result?.result;
  } catch (e) {
    throw e;
  }
}
