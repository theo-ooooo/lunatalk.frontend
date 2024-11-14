"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import cn from "clsx";
import { Category as CategoryData } from "@/types/processed/base";

export default function Category({ uuid, name }: CategoryData) {
  const params = useParams();

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (params?.uuid === uuid) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [params, uuid]);

  return (
    <li
      className={cn(
        { "font-bold text-black": active },
        { "font-thin text-[#bbb]": !active }
      )}
    >
      <Link href={`/category/${uuid}?title=${name}`}>{name}</Link>
    </li>
  );
}
