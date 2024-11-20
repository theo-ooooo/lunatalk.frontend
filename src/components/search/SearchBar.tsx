"use client";

import { MdKeyboardArrowLeft } from "react-icons/md";
import SearchInput from "./SearchInput";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  return (
    <div className='flex px-4 py-2'>
      <div className='cursor-pointer' onClick={() => router.back()}>
        <MdKeyboardArrowLeft size={30} />
      </div>
      <SearchInput />
    </div>
  );
}
