"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

const fixTitle = {
  "/": "메인",
  "/search": "검색",
  "/cart": "장바구니",
  "/mypage": "마이페이지",
};

export default function BackHeader() {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const title =
    fixTitle[pathname as keyof typeof fixTitle] || params.get("title") || "";
  return (
    <div className='flex items-center justify-center h-11'>
      <div className='mr-auto flex-shrink-0 z-10' onClick={() => router.back()}>
        <MdKeyboardArrowLeft size={30} />
      </div>
      <div className='absolute left-0 right-0 text-center max-w-[600px] mx-auto'>
        <strong className='text-lg font-semibold tracking-tighter'>
          {title}
        </strong>
      </div>
    </div>
  );
}
