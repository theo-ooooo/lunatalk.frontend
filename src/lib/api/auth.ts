"use server";

import { ApiAuthLogin } from "@/types/api/auth";
import Fetch from "../fetch";
import { AuthLogin } from "@/types/processed/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login({
  loginId,
  password,
}: {
  loginId: string;
  password: string;
}): Promise<AuthLogin> {
  const data = await Fetch<ApiAuthLogin>("/api/front/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({
      login_id: loginId,
      login_password: password,
    }),
  });

  return {
    accessToken: data?.access_token || "",
    refreshToken: data?.refresh_token || "",
  };
}

export async function Logout() {
  const cookieStore = cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    redirect("/mypage");
  }

  await Fetch("/api/front/v1/auth/logout", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  redirect("/mypage");
}
