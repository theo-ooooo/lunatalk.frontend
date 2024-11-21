import { BiSearch } from "react-icons/bi";

export default function MyOrderSearchBar() {
  return (
    <div className='flex bg-[#f5f6f8] w-full flex-row items-center p-3'>
      <input
        type='text'
        className='bg-transparent w-full ml-1 text-sm rounded-md placeholder:text-sm placeholder:tracking-tight outline-none'
        placeholder='상품을 검색해주세요.'
        name='searchText'
      />
      <BiSearch size={18} color='#A1A9AD' />
    </div>
  );
}
