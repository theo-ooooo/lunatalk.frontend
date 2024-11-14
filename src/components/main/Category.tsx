import { GetMainProductCategory } from "@/lib/api/main";
import Link from "next/link";
import Image from "next/image";

export default async function Category() {
  const categories = await GetMainProductCategory();

  return (
    <article className='flex flex-row gap-8 p-4 py-10 justify-center'>
      {categories.map((c) => (
        <Link
          href={`/category/${c.uuid}?title=${c.name}`}
          key={c.uuid}
          className='flex flex-col items-center'
        >
          {c.image?.url ? (
            <Image
              src={c.image.url}
              alt={c.name}
              width={c.image.width}
              height={c.image.height}
              className='w-16 h-16 rounded-full bg-slate-100'
            />
          ) : (
            <div className='w-16 h-16 rounded-full'></div>
          )}

          <span className='text-[13px] mt-1 text-nowrap font-medium tracking-tighter'>
            {c.name}
          </span>
        </Link>
      ))}
    </article>
  );
}
