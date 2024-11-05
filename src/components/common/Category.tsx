"use client";
import { Categories } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import cn from "clsx";

export default function Category({ uuid, name }: Categories) {
  const params = useParams();

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (params?.uuid === uuid) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [params]);

  return (
    <li
      className={cn(
        { "font-bold text-black": active },
        { "font-thin text-[#bbb]": !active }
      )}
    >
      <Link href={`/category/${uuid}`}>{name}</Link>
    </li>
  );
}
