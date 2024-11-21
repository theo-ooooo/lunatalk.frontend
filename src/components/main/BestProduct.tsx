import { GetMainBestProduct } from "@/lib/api/main";
import ProductList from "../common/element/form/card/ProductList";

export default async function BestProduct() {
  const data = await GetMainBestProduct();

  const products = data.map((item) => item.product);

  return (
    <article className='flex flex-col gap-4'>
      <h2 className='text-xl font-semibold px-2 tracking-tighter'>
        이런 상품 좋아하실 것 같아요
      </h2>
      <ProductList products={products} />
    </article>
  );
}
