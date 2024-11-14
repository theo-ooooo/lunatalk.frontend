import { Product as ProductData } from "@/types/processed/common";
import Product from "./Product";

export default function ProductList({ products }: { products: ProductData[] }) {
  return (
    <div className='grid grid-cols-2 gap-y-4 gap-x-[2px]'>
      {products.map((product) => (
        <Product key={product.uuid} {...product} />
      ))}
    </div>
  );
}
