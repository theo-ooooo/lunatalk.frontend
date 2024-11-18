"use client";

import { Logout } from "@/lib/api/auth";

export default function EmailLogoutButton() {
  return <button onClick={() => Logout()}>로그아웃</button>;
}
