"use client";

import { Logout } from "@/lib/api/auth";
import MyPageBoxButton from "./MyPageBoxButton";
import { useRouter } from "next/navigation";

export default function MyBottomArea() {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <MyPageBoxButton
          title='주문정보'
          onClick={() => router.push("/mypage/order")}
        />
        <MyPageBoxButton
          title='장바구니'
          onClick={() => router.push("/cart")}
        />
      </div>
      <div>
        <MyPageBoxButton
          title='개인정보 수정'
          onClick={() => router.push("/mypage/edit")}
        />
        <MyPageBoxButton title='로그아웃' onClick={Logout} />
      </div>
    </div>
  );
}
