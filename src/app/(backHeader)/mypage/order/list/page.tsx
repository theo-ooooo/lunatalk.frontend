import OrderProduct from "@/components/common/element/form/order/Product";
import MyOrderSearchBar from "@/components/mypage/MyOrderSearchBar";
import { MyOrderData } from "@/lib/api/my";

export default async function Page() {
  const data = await MyOrderData();

  return (
    <div className='flex gap-3 flex-col'>
      <MyOrderSearchBar />
      {data.map((item) => (
        <OrderProduct key={item.uuid} {...item} />
      ))}
    </div>
  );
}
