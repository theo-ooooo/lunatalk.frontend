import { Product as ProductData } from "@/types";

export default function Product(product: ProductData) {
  return <div>{product.name}</div>;
}
