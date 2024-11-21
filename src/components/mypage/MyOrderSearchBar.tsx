"use client";

import useOrderSearch from "@/hooks/useOrderSearch";
import { BiSearch } from "react-icons/bi";

export default function MyOrderSearchBar() {
  const { searchText, handleOnChange, handleOnEnter, handleClick } =
    useOrderSearch();
  return (
    <div className='flex bg-[#f5f6f8] w-full flex-row items-center p-3'>
      <input
        type='text'
        className='bg-transparent w-full ml-1 text-sm rounded-md placeholder:text-sm placeholder:tracking-tight outline-none'
        placeholder='상품을 검색해주세요.'
        name='searchText'
        value={searchText}
        onChange={handleOnChange}
        onKeyDown={handleOnEnter}
      />
      <BiSearch size={18} color='#A1A9AD' onClick={handleClick} />
    </div>
  );
}
