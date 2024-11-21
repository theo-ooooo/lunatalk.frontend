import Empty from "@/components/common/element/Empty";
import OrderProduct from "@/components/common/element/form/order/Product";
import MyOrderSearchBar from "@/components/mypage/MyOrderSearchBar";
import { MyOrderData } from "@/lib/api/my";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { keyword?: string };
}) {
  let data = await MyOrderData();

  if (searchParams?.keyword) {
    data = data.filter((item) => {
      const decode = Buffer.from(
        searchParams.keyword as string,
        "base64"
      ).toString();

      return item.orderName.includes(decode);
    });
  }

  return (
    <div className='flex gap-3 flex-col'>
      <Suspense fallback={<div>...</div>}>
        <MyOrderSearchBar />
      </Suspense>
      {data.length ? (
        data.map((item) => <OrderProduct key={item.uuid} {...item} />)
      ) : (
        <Empty title='주문정보가 없습니다.' subTitle='상품을 주문해보세요.' />
      )}
    </div>
  );
}
