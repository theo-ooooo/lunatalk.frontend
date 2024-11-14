import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { IoCart, IoCartOutline } from "react-icons/io5";
import NavigationItem from "../element/Navigation-item";
import { MdOutlineHome } from "react-icons/md";
const navi = [
  {
    name: "홈",
    component: <MdOutlineHome size={24} />,
    activeComponent: <IoMdHome size={24} />,
    href: "/",
  },
  {
    name: "검색",
    component: <BiSearch size={24} />,
    activeComponent: <BiSearchAlt size={24} />,
    href: "/search",
  },
  {
    name: "장바구니",
    component: <IoCartOutline size={24} />,
    activeComponent: <IoCart size={24} />,
    href: "/cart",
  },
  {
    name: "마이페이지",
    component: <BsPerson size={24} />,
    activeComponent: <BsPersonFill size={24} />,
    href: "/mypage",
  },
];

export default function Navigation() {
  return (
    <div className='fixed bottom-0 h-14 bg-white w-full max-w-[600px]'>
      <nav className='flex flex-row gap-4 justify-between h-full'>
        {navi.map((nav) => (
          <NavigationItem key={nav.name} {...nav} />
        ))}
      </nav>
    </div>
  );
}
