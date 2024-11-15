import EmailLogin from "@/components/login/EmailLogin";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className='w-full  flex h-svh items-center justify-center flex-col gap-10'>
      <Image src={"/logo.webp"} alt='logo' width={120} height={100} />
      <div className='flex justify-center flex-col w-full max-w-[360px]'>
        <Suspense fallback={<div>Loading...</div>}>
          <EmailLogin />
        </Suspense>
      </div>
      <div className='flex flex-row items-center justify-center w-full max-w-[360px] text-sm tracking-tight text-[#4F5558]'>
        <Link href={"/auth/login/email"}>회원가입</Link>
        <hr className='w-[1px] h-3 my-0 mx-3 bg-[#d2d5d6] border-none' />
        <Link href={"/auth/find/login_id"}>계정 찾기</Link>
        <hr className='w-[1px] h-3 my-0 mx-3 bg-[#d2d5d6] border-none' />
        <Link href={"/auth/find/password"}>비밀번호 찾기</Link>
      </div>
    </div>
  );
}
