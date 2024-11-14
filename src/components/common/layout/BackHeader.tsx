"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function BackHeader() {
  const params = useSearchParams();
  const router = useRouter();
  const title = params.get("title") || "";
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
