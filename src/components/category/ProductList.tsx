import { GetCategoryProduct } from "@/lib/api/category";
import ProductList from "../common/element/form/card/ProductList";

export default async function CategoryProductList({ uuid }: { uuid: string }) {
  const data = await GetCategoryProduct(uuid);

  return (
    <div className='my-5'>
      <ProductList products={data.products} />
    </div>
  );
}
