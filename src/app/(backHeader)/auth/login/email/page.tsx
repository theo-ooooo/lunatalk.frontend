import EmailLogin from "@/components/login/EmailLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookieStore = cookies();

  const accessToken = cookieStore.get("accessToken");

  if (accessToken) {
    redirect("/");
  }
  return (
    <div>
      <EmailLogin />
    </div>
  );
}
