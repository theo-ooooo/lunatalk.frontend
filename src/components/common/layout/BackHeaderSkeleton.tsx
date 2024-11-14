import { MdKeyboardArrowLeft } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

export default function BackHeaderSkeleton() {
  return (
    <div className='flex items-center justify-center h-11'>
      <div className='mr-auto flex-shrink-0 z-10  items-center'>
        <MdKeyboardArrowLeft size={30} />
      </div>
      <div className='absolute left-0 right-0 text-center max-w-[600px] mx-auto'>
        <Skeleton width={"100px"} height={"30px"} />
      </div>
    </div>
  );
}
