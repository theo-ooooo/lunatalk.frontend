"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import cn from "clsx";
import { Category as CategoryData } from "@/types/processed/base";

export default function Category({ uuid, name }: CategoryData) {
  const params = useParams();
  const active = params?.uuid === uuid;

  return (
    <li
      className={cn(
        "w-full h-full",
        { "font-bold text-black border-b-2 border-black": active },
        { "font-thin text-[#bbb]": !active }
      )}
    >
      <Link
        href={`/category/${uuid}?title=${name}`}
        className='flex items-center justify-center w-full h-full'
      >
        {name}
      </Link>
    </li>
  );
}
