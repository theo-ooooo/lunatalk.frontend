import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
const navi = [
  {
    name: "홈",
    component: <IoMdHome size={24} />,
    href: "/",
  },
  {
    name: "검색",
    component: <BiSearch size={24} />,
    href: "/search",
  },
  {
    name: "장바구니",
    component: <IoCartOutline size={24} />,
    href: "/cart",
  },
  {
    name: "마이페이지",
    component: <BsPerson size={24} />,
    href: "/mypage",
  },
];

export default function Navigation() {
  return (
    <div className='fixed bottom-0 h-14 bg-white w-full max-w-[600px]'>
      <nav className='flex flex-row gap-4 justify-between h-full'>
        {navi.map((nav) => (
          <Link
            href={nav.href}
            className='flex flex-col justify-center items-center w-full h-full hover:bg-[rgba(0,0,0,0.05)] transition ease-in-out duration-300'
            key={nav.name}
          >
            {nav.component}
            <span className='text-[11px] tracking-tight'>{nav.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
