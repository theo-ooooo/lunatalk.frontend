import { SearchProductsByName } from "@/lib/api/search";
import ProductList from "../common/element/form/card/ProductList";

function Empty() {
  return (
    <div className='flex h-svh flex-col items-center justify-center tracking-tight'>
      <p className='font-bold text-lg'>검색어를 입력해보세요.</p>
      <p className='text-[#a1a9ad]'>키워드를 입력하여 상품을 검색해보세요.</p>
    </div>
  );
}

function SearchEmpty() {
  return (
    <div className='flex h-svh flex-col items-center justify-center tracking-tight'>
      <p className='font-bold text-lg'>검색결과가 없어요.</p>
      <p className='text-[#a1a9ad]'>다른 키워드로 검색해보세요.</p>
    </div>
  );
}

export default async function SearchBody({ keyword }: { keyword: string }) {
  const data = await SearchProductsByName(keyword);

  if (!keyword) return <Empty />;

  if (!data.length) return <SearchEmpty />;

  return (
    <div className='flex flex-col gap-3'>
      <ProductList products={data} />
    </div>
  );
}
