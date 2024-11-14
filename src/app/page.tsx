import BestProduct from "@/components/main/BestProduct";
import NewProduct from "@/components/main/NewProduct";
import Category from "@/components/main/Category";

export default function Home() {
  return (
    <section className='flex flex-col gap-10'>
      <Category />
      <BestProduct />
      <NewProduct />
    </section>
  );
}
