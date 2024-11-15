"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

// const fixTitle = {
//   "/": "메인",
//   "/search": "검색",
//   "/cart": "장바구니",
//   "/mypage": "마이페이지",
// };
const fixTitle = [
  { pathname: "/search", title: "검색" },
  { pathname: "/cart", title: "장바구니" },
  { pathname: "/mypage", title: "마이페이지" },
  { pathname: "/auth/login", title: "로그인" },
];

export default function BackHeader() {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const fixTitleItem = fixTitle.find((item) => item.pathname === pathname);
  const title = fixTitleItem?.title || params.get("title") || "";

  return (
    <div className='flex items-center justify-center h-11'>
      <div
        className='mr-auto flex-shrink-0 z-10 cursor-pointer'
        onClick={() => router.back()}
      >
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
