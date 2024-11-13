import { IoIosWarning } from "react-icons/io";

export default function NotFound() {
  return (
    <div className='flex flex-1 justify-center items-center flex-col h-[100vh]'>
      <IoIosWarning size={80} />
      <h2 className='text-lg font-thin tracking-tighter '>
        페이지를 찾을 수 없습니다.
      </h2>
    </div>
  );
}
