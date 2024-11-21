import MyBottomArea from "@/components/mypage/MyBottomArea";
import MyInfomation from "@/components/mypage/MyInfomation";
export default function Page() {
  return (
    <div className='h-svh bg-[#f5f6f8] flex flex-col gap-3'>
      <MyInfomation />
      <MyBottomArea />
    </div>
  );
}
