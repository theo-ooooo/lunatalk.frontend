import OrderProduct from "../common/element/form/order/Product";
import { MyOrderInformation } from "@/types/processed/my";

export default function MyOrderProducts({
  date,
  products,
}: {
  date: string;
  products: MyOrderInformation[];
}) {
  return (
    <div className='flex flex-col tracking-tight'>
      <div className='flex py-4 px-6 pb-0'>
        <p className='text-lg font-medium'>{date}</p>
      </div>
      {products.map((item) => (
        <OrderProduct key={item.uuid} {...item} />
      ))}
    </div>
  );
}
