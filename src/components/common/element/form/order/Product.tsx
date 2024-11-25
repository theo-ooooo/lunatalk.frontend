import { MyOrderInformation } from "@/types/processed/my";
import Image from "next/image";

interface Props extends MyOrderInformation {}

export default function OrderProduct({
  uuid,
  state,
  orderName,
  imageUrl,
  orderPrice,
}: Props) {
  return (
    <div className='tracking-tight'>
      <div className='flex py-4 px-6 flex-col gap-2 border-b-[1px]  '>
        <div className='flex'>
          <div className='text-gray-600 text-sm font-semibold'>{state}</div>
        </div>
        <div className='flex flex-row gap-3'>
          <div>
            <Image src={imageUrl} width={72} height={72} alt={orderName} />
          </div>
          <div className='flex flex-col gap-1 text-sm'>
            <div className='font-normal'>{orderName}</div>
            <div className='font-semibold'>{orderPrice.toLocaleString()}원</div>
          </div>
        </div>
        {/* <div className='w-full flex items-center justify-center border py-2 text-xs'>
          <button>상세보기</button>
        </div> */}
      </div>
    </div>
  );
}
