import MyBottomArea from "@/components/mypage/MyBottomArea";
import MyInfomation from "@/components/mypage/MyInfomation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookieStore = cookies();

  const token = cookieStore.get("accessToken");

  if (!token) {
    redirect("/auth/login");
  }
  return (
    <div className='h-svh bg-[#f5f6f8] flex flex-col gap-3'>
      <MyInfomation />
      <MyBottomArea />
    </div>
  );
}
