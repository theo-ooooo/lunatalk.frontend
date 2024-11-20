import { isLogin } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function Page() {
  const login = isLogin();

  if (!login) {
    redirect("/auth/login?redirect=/cart");
  }

  return <div>cartPage</div>;
}
