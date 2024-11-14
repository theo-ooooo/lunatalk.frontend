import { Product as ProductData } from "@/types/processed/main";
import Image from "next/image";
import Link from "next/link";

export default function Product(product: ProductData) {
  return (
    <Link href={`/product/${product.uuid}`}>
      <Image
        src={product.repImage}
        alt={product.name}
        width={600}
        height={600}
      />
      <div className='flex flex-col p-2 text-sm tracking-tighter'>
        <span className='text-[#474e5c]'>{product.name}</span>
        <div className='flex gap-1 text-sm mb-1'>
          <span className='text-[#ff5280] font-medium'>
            {product.discountPercent}%
          </span>
          <span className='font-medium text-[#1b202a]'>
            {product.price.toLocaleString()}원
          </span>
        </div>
        <span className='text-xs text-[#1b202a]'>{product?.color[0]}</span>
        <span className='text-xs text-[#1b202a]'>
          리뷰 ({product.reviewCount})
        </span>
      </div>
    </Link>
  );
}
