import CategoryProductList from "@/components/category/ProductList";

export default function Page({ params }: { params: { uuid: string } }) {
  const { uuid } = params;
  return (
    <div>
      <CategoryProductList uuid={uuid} />
    </div>
  );
}
