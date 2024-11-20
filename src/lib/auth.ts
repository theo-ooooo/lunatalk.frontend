import { cookies } from "next/headers";

export function isLogin() {
  const cookieStore = cookies();

  return !!cookieStore.get("accessToken")?.value;
}

export function getToken() {
  const cookieStore = cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  return {
    accessToken,
    refreshToken,
  };
}
