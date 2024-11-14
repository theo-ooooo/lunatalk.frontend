import { GetMainNewProduct } from "@/lib/api/main";
import Product from "../common/element/Product";

export default async function NewProduct() {
  const data = await GetMainNewProduct();

  return (
    <article className='flex flex-col gap-4'>
      <h2 className='text-xl font-semibold px-2 tracking-tighter'>
        지금 보는 상품은 신규상품이에요
      </h2>
      <div className='grid grid-cols-2 gap-y-4 gap-x-[2px]'>
        {data.map((newItem) => (
          <Product key={newItem.uuid} {...newItem.product} />
        ))}
      </div>
    </article>
  );
}
