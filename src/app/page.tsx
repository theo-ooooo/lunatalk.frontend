import GetMainProductCategory from "@/lib/api/main";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const category = await GetMainProductCategory();
  return (
    <section className='flex flex-row gap-8 p-4 py-10 justify-center'>
      {category.map((c) => (
        <Link
          href={`/category/${c.uuid}`}
          key={c.uuid}
          className='flex flex-col items-center'
        >
          <Image
            src={c.image.url}
            alt={c.name}
            width={c.image.width}
            height={c.image.height}
            className='w-16 h-16 rounded-full'
          />
          <span className='text-[13px] mt-1 text-nowrap font-medium tracking-tighter'>
            {c.name}
          </span>
        </Link>
      ))}
    </section>
  );
}
