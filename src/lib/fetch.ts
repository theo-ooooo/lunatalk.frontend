"use server";
import { Response } from "@/types/api/common";

export default async function Fetch<T>(url: string, options: RequestInit) {
  if (!url) {
    throw new Error("url is required");
  }

  const headers = {
    "request-client-type": "0100010",
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API_URL}${url}`,
      {
        ...options,
        headers,
      }
    );

    if (!response.ok) {
      const result: { error_message?: string; message?: string } =
        await response.json();
      throw result.error_message ?? result?.message;
    }

    const result: Response<T> = await response.json();

    return result?.result;
  } catch (e) {
    console.error(`Fetch error ${url}`, e);
    throw e;
  }
}
