import CategoryProductList from "@/components/category/ProductList";
import GetBase from "@/lib/api/base";

export async function generateStaticParams() {
  const baseData = await GetBase();

  return baseData.productCategory.map((category) => {
    return {
      uuid: category.uuid,
    };
  });
}

export default function Page({ params }: { params: { uuid: string } }) {
  const { uuid } = params;
  return (
    <div>
      <CategoryProductList uuid={uuid} />
    </div>
  );
}
