"use client";

import useSearch from "@/hooks/useSearch";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function SearchInput() {
  const { searchText, onChange, onReset, setSearchText, onEnter } = useSearch();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref?.current !== null) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    if (q && q !== searchText) {
      const decodeKeyword = Buffer.from(q, "base64").toString();
      setSearchText(decodeKeyword);
    } else {
      setSearchText("");
    }
  }, [q]);

  return (
    <div className='flex bg-[#f5f6f8] w-full flex-row items-center px-2'>
      <BiSearch size={18} color='#A1A9AD' />
      <input
        type='text'
        className='bg-transparent w-full ml-1 text-sm rounded-md placeholder:text-sm placeholder:tracking-tight outline-none'
        placeholder='상품을 검색해주세요.'
        name='searchText'
        value={searchText}
        onChange={onChange}
        onKeyDown={onEnter}
        ref={ref}
      />
      {searchText.length > 0 ? (
        <div onClick={() => onReset()}>
          <IoCloseCircleSharp size={20} color='#A1A9AD' />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
