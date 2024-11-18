"use server";

import Login from "@/lib/api/auth";
import { cookies } from "next/headers";

export async function LoginAction(_: any, formData: FormData) {
  try {
    const loginId = formData.get("loginId")?.toString();
    const password = formData.get("password")?.toString();

    console.log(loginId, password);

    if (!loginId || !password) {
      return {
        status: false,
        error: "아이디와 패스워드를 입력해주세요.",
      };
    }
    const data = await Login({ loginId, password });

    const cookieStore = cookies();

    cookieStore.set("accessToken", data.accessToken, {
      httpOnly: true,
      secure: true,
    });
    cookieStore.set("refreshToken", data.refreshToken, {
      httpOnly: true,
      secure: true,
    });

    return {
      status: true,
      error: "",
    };
  } catch (e) {
    return {
      status: false,
      error: `로그인에 실패하였습니다., ${e}`,
    };
  }
}
