"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavigationItem({
  name,
  component,
  href,
  activeComponent,
  activeHref,
}: {
  name: string;
  component: ReactNode;
  href: string;
  activeComponent: ReactNode;
  activeHref?: string[];
}) {
  const pathname = usePathname();
  const active = activeHref?.includes(pathname) ?? pathname === href;
  return (
    <Link
      href={href}
      className='flex flex-col justify-center items-center w-full h-full hover:bg-[rgba(0,0,0,0.05)] transition ease-in-out duration-300'
      key={name}
    >
      {active ? activeComponent : component}
      <span className='text-[11px] tracking-tight'>{name}</span>
    </Link>
  );
}
