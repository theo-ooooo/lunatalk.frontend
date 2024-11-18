"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { MdOutlineMail } from "react-icons/md";

export default function EmailLoginButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const beforeUrl = searchParams.get("redirect");

  const onClickEmailLogin = () => {
    let moveUrl = `/auth/login/email`;

    if (beforeUrl) {
      moveUrl += `?redirect=${beforeUrl}`;
    }
    router.push(moveUrl);
  };
  return (
    <button
      onClick={onClickEmailLogin}
      className='relative border-[1px] border-[#d2d5d6] rounded-full py-3 w-full tracking-tight font-semibold'
    >
      <MdOutlineMail size={22} className='absolute left-4' />
      <span>이메일로 로그인</span>
    </button>
  );
}
