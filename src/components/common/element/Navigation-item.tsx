"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavigationItem({
  name,
  component,
  href,
  activeComponent,
}: {
  name: string;
  component: ReactNode;
  href: string;
  activeComponent: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className='flex flex-col justify-center items-center w-full h-full hover:bg-[rgba(0,0,0,0.05)] transition ease-in-out duration-300'
      key={name}
    >
      {pathname === href ? activeComponent : component}
      <span className='text-[11px] tracking-tight'>{name}</span>
    </Link>
  );
}
