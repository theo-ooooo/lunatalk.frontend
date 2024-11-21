import { Product as ProductData } from "@/types/processed/common";
import Image from "next/image";
import Link from "next/link";

export default function Product(product: ProductData) {
  return (
    <Link href={`/product/${product.uuid}`}>
      {product.repImage ? (
        <Image
          src={product.repImage}
          alt={product.name}
          width={600}
          height={600}
        />
      ) : (
        <div className='max-w-[600px] h-[200px] bg-slate-200 flex items-center justify-center'>
          <p>판매 중단 상품입니다.</p>
        </div>
      )}
      <div className='flex flex-col p-2 text-sm tracking-tighter'>
        <span className='text-[#474e5c]'>{product.name}</span>
        <div className='flex gap-1 text-sm mb-1'>
          {product?.discountPercent > 0 && (
            <span className='text-[#ff5280] font-medium'>
              {product.discountPercent}%
            </span>
          )}
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
