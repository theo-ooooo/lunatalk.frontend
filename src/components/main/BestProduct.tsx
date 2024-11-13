import { GetMainBestProduct } from "@/lib/api/main";
import Product from "../common/element/Product";

export default async function BestProduct() {
  const data = await GetMainBestProduct();

  return (
    <article className='flex flex-col gap-4'>
      <h2 className='text-xl font-semibold px-2 tracking-tighter'>
        이런 상품 좋아하실 것 같아요
      </h2>
      <div className='grid grid-cols-2 gap-y-4 gap-x-[2px]'>
        {data.map((bestItem) => (
          <Product key={bestItem.uuid} {...bestItem.product} />
        ))}
      </div>
    </article>
  );
}
