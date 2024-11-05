"use client";

import Link from "next/link";
import Image from "next/image";
import { BiSearch, BiSolidUser } from "react-icons/bi";
import { PiBagSimpleBold } from "react-icons/pi";
export default function Header() {
  return (
    <header className='py-1 px-3 flex flex-row items-center justify-between'>
      <div>
        <Link href={"/"}>
          <Image src='/logo.webp' alt='logo' width={100} height={24} />
        </Link>
      </div>
      <div className='flex gap-3'>
        <Link href={"/search"}>
          <BiSearch size={24} />
        </Link>
        <Link href={"/cart"}>
          <PiBagSimpleBold size={24} />
        </Link>
        <Link href={"/mypage"}>
          <BiSolidUser size={24} />
        </Link>
      </div>
    </header>
  );
}
