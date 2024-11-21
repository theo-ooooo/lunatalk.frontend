import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();

  const token = cookieStore.get("accessToken");

  if (!token) {
    redirect("/auth/login?redirect=/mypage");
  }
  return <>{children}</>;
}
