import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  if (accessToken) {
    request.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return NextResponse.next();
}
