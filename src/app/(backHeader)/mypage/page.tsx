import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookieStore = cookies();

  const token = cookieStore.get("accessToken");

  if (!token) {
    redirect("/auth/login");
  }
  return <div>mypage</div>;
}
