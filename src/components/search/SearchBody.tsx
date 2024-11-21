import { SearchProductsByName } from "@/lib/api/search";
import ProductList from "../common/element/form/card/ProductList";
import Empty from "../common/element/Empty";

export default async function SearchBody({ keyword }: { keyword: string }) {
  const data = await SearchProductsByName(keyword);

  if (!keyword)
    return (
      <Empty
        title='검색어를 입력해보세요.'
        subTitle='키워드를 입력하여 상품을 검색해보세요.'
      />
    );

  if (!data.length)
    return (
      <Empty
        title='검색결과가 없어요.'
        subTitle='다른 키워드로 검색해보세요.'
      />
    );

  return (
    <div className='flex flex-col gap-3'>
      <ProductList products={data} />
    </div>
  );
}
