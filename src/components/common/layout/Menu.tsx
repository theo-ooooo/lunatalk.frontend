import GetBase from "@/lib/api/base";
import Category from "../element/Category";

export default async function Menu() {
  const data = await GetBase();

  return (
    <div>
      <ul className='grid grid-cols-4 text-center h-10 items-center font-semibold'>
        {data.productCategory.map((category) => (
          <Category key={category.uuid} {...category} />
        ))}
      </ul>
    </div>
  );
}
