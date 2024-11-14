import { GetMainNewProduct } from "@/lib/api/main";
import Product from "../common/element/Product";
import ProductList from "../common/element/ProductList";

export default async function NewProduct() {
  const data = await GetMainNewProduct();
  const products = data.map((item) => item.product);
  return (
    <article className='flex flex-col gap-4'>
      <h2 className='text-xl font-semibold px-2 tracking-tighter'>
        지금 보는 상품은 신규상품이에요
      </h2>
      <ProductList products={products} />
    </article>
  );
}
