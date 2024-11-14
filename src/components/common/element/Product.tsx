import { Product as ProductData } from "@/types/api/main";
import Image from "next/image";
import Link from "next/link";

export default function Product(product: ProductData) {
  return (
    <Link href={`/product/${product.uuid}`}>
      <Image
        src={product.rep_image.url}
        alt={product.name}
        width={600}
        height={600}
      />
      <div className='flex flex-col p-2 text-sm tracking-tighter'>
        <span className='text-[#474e5c]'>{product.name}</span>
        <div className='flex gap-1 text-sm mb-1'>
          <span className='text-[#ff5280] font-medium'>
            {((product.original_price.number - product.price.number) /
              product.original_price.number) *
              100}
            %
          </span>
          <span className='font-medium text-[#1b202a]'>
            {product.price.string}
          </span>
        </div>
        <span className='text-xs text-[#1b202a]'>{product?.color[0].name}</span>
      </div>
    </Link>
  );
}
