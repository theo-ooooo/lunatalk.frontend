"use client";

import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
export default function Header() {
  return (
    <header className='py-1 px-3 flex flex-row items-center justify-between'>
      <div>
        <Link href={"/"}>
          <Image src='/logo.webp' alt='logo' width={90} height={24} />
        </Link>
      </div>
      <div className='flex gap-3'>
        <Link href={"/search"}>
          <BiSearch size={20} />
        </Link>
      </div>
    </header>
  );
}
