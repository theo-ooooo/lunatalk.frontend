"use client";

import { FaAngleRight } from "react-icons/fa6";

export default function MyPageBoxButton({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <div
      className='flex justify-between items-center bg-white w-full py-3 px-2'
      onClick={() => onClick()}
    >
      <button className='font-semibold w-full text-left'>{title}</button>
      <FaAngleRight />
    </div>
  );
}
